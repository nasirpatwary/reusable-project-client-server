import useGetCart from "../../../hooks/useGetCart";
import LoadingSpinner from "../../../shard/LoadingSpinner";
import { Link } from "react-router-dom";

const PaymentButton = () => {
  const [carts, isLoading] = useGetCart();
  const totalPrice = carts.reduce((total, item) => total + parseFloat(item.price), 0);
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      {carts.length > 0 && (  
        <div className="space-y-4 mt-4 px-2">
          <div className="border px-2 rounded border-indigo-300">
            All Products:{" "}
            <span className="text-indigo-500">{carts.length}</span>
          </div>
          <div className="border px-2 rounded border-indigo-300">
            Total Price : <span className="text-indigo-500">{totalPrice}</span>
          </div>
          <Link to="/dashboard/checkout">
            <button
              className={
                !carts.length
                  ? "border text-indigo-500 duration-500  border-indigo-500 py-1 cursor-not-allowed   px-4 rounded font-semibold w-full"
                  : "border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold w-full"
              }
            >
              Payment
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default PaymentButton;
