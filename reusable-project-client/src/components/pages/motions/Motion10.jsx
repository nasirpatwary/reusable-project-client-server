import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Motion10 = () => {
  const [visible, setVisible] = useState(true);
  const parent = {
    initial: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2, delay: 0.5 } },
    exit: { opacity: 0, scale: 0.5 },
  };
  return (
    <AnimatePresence>
      <motion.div
      layout
        className={`border size-[300px] mx-auto border-orange-500 flex flex-col items-center justify-center ${!visible && "bg-indigo-500 delay-1000 duration-1000"}`}
      >
        <motion.button
          layout
          onHoverStart={() => setVisible(!visible)}
          className="border cursor-pointer px-4 py-1"
        >
          Toggle
        </motion.button>
        {visible && (
          <motion.div
            key={"animated-box"}
            className="bg-indigo-500 size-44 rounded flex flex-wrap gap-4 p-4 justify-center items-center"
            variants={parent}
            initial="initial"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Motion10;
