import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import TrandingLeft from "../../shard/TrandingLeft";
const Checkout = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full max-w-md">
          <CheckoutForm />
        </div>
        <TrandingLeft />
      </div>
    </Elements>
  );
};

export default Checkout;
