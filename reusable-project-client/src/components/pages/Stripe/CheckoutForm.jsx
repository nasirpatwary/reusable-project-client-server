import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { warningToast } from "../../shard/Toastify";
import useGetCart from "../../hooks/useGetCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCheckPost from "../../hooks/useCheckPost";
import { useNavigate } from "react-router-dom";
const CheckoutForm = () => {
  const { user } = useAuth();
  const [mutateAsync] = useCheckPost();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [carts] = useGetCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    addPayment();
  }, [totalPrice, axiosSecure]);
  const addPayment = async () => {
    if (totalPrice > 0) {
      const { data } = await axiosSecure.post("/create-payment-intent", {
        price: totalPrice,
      });
      setClientSecret(data.clientSecret);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymus",
            email: user?.email || "anonymus",
          },
        },
      }
    );

    if (err) {
      warningToast(err.message);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const payment = {
          email: user?.email,
          price: parseFloat(totalPrice),
          transactionId: paymentIntent.id,
          category: carts[0]?.category,
          date: new Date(),
          cartIds: carts.map((item) => item._id),
          productIds: carts.map((item) => item.productId),
          status: "pending",
        };
        mutateAsync(payment);
        navigate("/dashboard/history");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="space-y-4 mt-4 px-2">
        <div className="border px-2 rounded border-indigo-300">
          All Carts: <span className="text-indigo-500">{carts.length}</span>
        </div>
        <div className="border px-2 rounded border-indigo-300">
          Total Price : <span className="text-indigo-500">{totalPrice}</span>
        </div>
        <button
          className={
            !stripe || !clientSecret
              ? "border text-indigo-500 duration-500 border-indigo-500 py-1 cursor-not-allowed px-4 rounded font-semibold"
              : "border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold w-full"
          }
          type="submit"
        >
          Payment
        </button>
      </div>
    </form>
  );
};
export default CheckoutForm;
