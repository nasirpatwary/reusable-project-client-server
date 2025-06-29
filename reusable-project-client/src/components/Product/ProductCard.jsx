import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TiArrowSyncOutline } from "react-icons/ti";
import Icons from "./Icons";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
const ProductCard = ({
  name,
  image,
  img,
  category,
  price,
  _id,
  rating,
  tag,
  view,
}) => {
  return (
    <>
    <Link to={`/details-page/${_id}`}>
      <div className="rounded-lg group overflow-hidden border border-gray-100 p-4 relative hover:shadow-md transition">
        {/* Tag */}
        {tag && (
          <span
            className={`absolute z-20 top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
              tag === "SALE"
                ? "bg-red-200 text-red-700"
                : "bg-green-200 text-green-700"
            }`}
          >
            {tag}
          </span>
        )}

        {/* Image */}
        <div
          className={`${
            view === "list"
              ? "flex items-center justify-around"
              : "flex md:flex-col items-center md:items-start"
          }`}
        >
          <div
            className={`${
              view === "list" ? "" : "md:mx-auto"
            } relative w-36 h-36 overflow-hidden group`}
          >
            {/* Default Image */}
            <img
              src={image}
              alt={name}
              className={
                img &&
                "absolute top-0 left-0 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
              }
            />

            {/* Hover Image */}
            {img && (
              <img
                src={img}
                alt={name}
                className="absolute top-0 left-0 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
            )}
          </div>
          <div
            className={`${
              view == "list" ? "top-[58%]" : "top-2/5"
            } absolute z-10  -translate-y-1/2 right-[-60px] flex flex-col gap-2 group-hover:right-4 transition-all duration-500`}
          >
            <Icons icon={<MdOutlineRemoveRedEye size={15} />} />
            <Icons
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              }
            />
            <Icons
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              }
            />
            <Icons icon={<TiArrowSyncOutline size={15} />} />
          </div>
          {/* Category */}
          <div>
            <p className="text-xs text-gray-400">{category}</p>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
            {/* Rating */}
            <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">${price}</span>
              {/* <span className="text-sm line-through text-gray-400">
              ${oldPrice}
            </span> */}
            </div>
          </div>
          <div className={`${view === "list" ? "" : "hidden"}`}>
            <button className="border transform duration-700 delay-300 text-indigo-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold">Add Cart</button>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default ProductCard;
