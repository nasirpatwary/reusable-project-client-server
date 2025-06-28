import { motion, useMotionValue, useTransform } from "framer-motion";
const Motion8 = () => {
  const x = useMotionValue(0);
  //   const opacity = useTransform(x, [0, 100], [1, 0])
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const rotate = useTransform(x, [-200, 200], [0, 180]);
  return (
    <div className="border size-[300px] mx-auto border-orange-500 flex flex-col items-center justify-center">
      <motion.div
        style={{ x, scale, rotate }}
        drag="x"
        dragSnapToOrigin
        dragConstraints={{left: 0, right: 0}}
        className="bg-indigo-500 size-44 rounded flex flex-wrap gap-4 p-4 justify-center items-center"
      ></motion.div>
    </div>
  );
};

export default Motion8;
