import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import { useState } from "react";
import DetailCard from "../pages/Details/DetailCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { bn } from "date-fns/locale"; // 🌍 Localization
import usePostCart from "../hooks/usePostCart";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { warningToast } from "./Toastify";
import { useNavigate } from "react-router-dom";
const RightSiteDetail = ({
  name,
  image,
  img,
  category,
  price,
  _id,
  rating,
  tag,
  oldPrice,
  // grid check view
  view,
}) => {
  const navigate = useNavigate();
  const [, , mutateAsync] = usePostCart();
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(null);
  let totalPrice
   if (quantity) {
    totalPrice = parseFloat(price) * parseFloat(quantity);
  }
  const carts = {
    image,
    img,
    name,
    price: totalPrice,
    category,
    productId: _id,
    date: startDate,
    quantity,
    email: user?.email,
    userName: user?.displayName,
    userImg: user?.photoURL,
  };
  const handleAddCart = async () => {
    if (!startDate) return toast.error(`Please select a date`);
    try {
      await mutateAsync(carts);
      Swal.fire({
        position: "top-center",
        title: `${name} has been saved`,
        imageUrl: image, // 🖼️ dynamic image URL
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: name,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/orders");
    } catch (error) {
      warningToast(error.message || "Something went wrong");
    }
  };
  return (
    <div className="w-full flex flex-col md:flex-row  border border-indigo-500 rounded p-4">
      <div className="w-full border border-indigo-500 rounded-l">
        <DetailCard
          name={name}
          image={image}
          img={img}
          price={price}
          oldPrice={oldPrice}
          _id={_id}
          rating={rating}
          category={category}
          tag={tag}
          view={view}
        />
      </div>
      <div className="md:w-2/3 space-y-6 border-r border-l md:border-l-0 md:border-t border-b border-indigo-500 rounded md:rounded-l-none">
        <p className="text-center text-xl border-b border-indigo-500 mt-2">
          Total Price:{" "}
          <span className="text-lg">{price * quantity}</span>
        </p>
        <div className="flex justify-around border border-indigo-500 rounded items-center">
          <img
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
            className={`size-8 ${
              quantity === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            src={minus}
            alt=""
          />
          <p className="text-lg text-indigo-500">Quantity: {quantity}</p>
          <img
            onClick={() => setQuantity(quantity + 1)}
            className="size-8 cursor-pointer"
            src={plus}
            alt=""
          />
        </div>
        {/* Start Date */}
        <div className="space-y-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            placeholderText="Start Date"
            locale={bn} // 🌍 Bengali Localization (optional)
            minDate={new Date()} // ⛔ Disable past dates
            isClearable // 🔄 Clear Button
          />
          <button
            onClick={() => handleAddCart(_id)}
            className="border text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold mb-4 w-full lg:mb-0"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSiteDetail;
