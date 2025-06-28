import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://i.ibb.co/fzJPSk8T/hero2.png",
  "https://i.ibb.co/JRB0DcXR/hero3.png",
  "https://i.ibb.co/jZGvnhdG/hero1.png",
];
const buttons = ["Shop Now", "Shop Now", "Shop Now"];
const offers = ["Flat 30% Off", "Flat 20% Off", "Flat 25% Off"];
const mainHeadings = [
  <>
    Explore <span className="text-indigo-500">Healthy </span>& Fresh Fruits
  </>,
  <>
    Explore <span className="text-indigo-500">Organic </span>& Fresh Vegetables
  </>,
  <>
    Explore <span className="text-indigo-500">Warm </span>
    Fast Food & Snacks
  </>
];
const Banner = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % buttons.length);
    }, 3000); // 3 sec

    return () => clearInterval(loop);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="lg:w-1/4 md:w-1/2 w-full mx-auto space-y-4 pt-10 overflow-hidden">
        {/* Animated Top Offer */}
        <div className="relative h-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-full"
            >
              {offers[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Animated Heading */}
        <div className="relative h-20">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="text-3xl absolute w-full"
            >
              {mainHeadings[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Button */}
        <div>
          <AnimatePresence mode="wait">
          <motion.button
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="border transform duration-700 delay-300 text-indigo-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
        >
          {buttons[index]}
        </motion.button>
        </AnimatePresence>
        </div>
      </div>
      {/* Right side image */}
      <div className="relative lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] overflow-hidden mx-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Image ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Banner;
