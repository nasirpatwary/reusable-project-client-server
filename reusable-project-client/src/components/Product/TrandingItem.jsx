import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import TrandingLeft from "../shard/TrandingLeft";

const TrandingItem = ({ micsProducts }) => {
  const controls = useAnimationControls();
  // Start animation after products are available
  useEffect(() => {
    controls.start((i) => ({
      y: -100,
      opacity: [0, 0.5, 1],
      transition: { duration: 1, delay: i * 0.3 },
    }));
  }, []);
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
      {/* Left Banner */}
      <TrandingLeft />
      {/* Right Product Grid */}
      <div className="flex-3">
        <div className="flex justify-between">
          <h1 className="md:text-3xl">Tranding Items</h1>
          <h1 className="md:text-3xl">Top Rated</h1>
          <h1 className="md:text-3xl">Top Selling</h1>
        </div>
        <div className="w-full cursor-pointer h-[1060px] md:h-[355px] pt-30 grid md:grid-cols-3 gap-4">
          {micsProducts.map((product, i) => (
            <motion.div
              key={product._id}
              className="h-[100px] w-full border relative border-gray-100 hover:shadow flex rounded mx-auto"
              initial={{ opacity: 0, y: 0 }}
              animate={controls}
              custom={i}
            >
              {/* Product Image */}
              <img src={product.image} alt={product.name} />
              {/* Product Details */}
              <div className="flex flex-col justify-center">
                <h2 className="text-sm font-semibold text-gray-800">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">
                    ${product.price}
                  </span>
                </div>
                <Rating
                  style={{ maxWidth: 70 }}
                  value={product.rating}
                  readOnly
                />
              </div>

              {product.tag && (
                <span
                  className={`absolute z-20 top-2 md:top-0 lg:top-2 right-2 text-xs font-bold px-2 py-0.5 rounded ${
                    product.tag === "SALE"
                      ? "bg-red-200 text-red-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {product.tag}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrandingItem;
