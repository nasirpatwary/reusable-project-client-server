import { Rating } from "@smastrom/react-rating";
const DetailCard = ({
  name,
  image,
  img,
  category,
  price,
  oldPrice,
  _id,
  rating,
  tag,
  view,
}) => {
  return (
    <div className="relative">
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
      <div className="mx-auto relative w-44 h-44 overflow-hidden group">
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
      <div className="px-4">
        <div className="flex justify-between">
          <p>{name}</p>
          <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-800">${price}</span>
          <span className="text-sm line-through text-gray-400">300</span>
        </div>
        <p className="text-gray-500">Fresh and quality foods all in one place for your everyday needs.</p>
      </div>
    </div>
  );
};

export default DetailCard;
