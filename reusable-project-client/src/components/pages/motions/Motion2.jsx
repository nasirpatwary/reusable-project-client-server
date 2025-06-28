import { motion } from "framer-motion";
import { useRef } from "react";

const Motion2 = () => {
  const parent = {
    hidden: { opacity: 0, sclae: 0.9 },
    show: {
      opacity: 1,
      sclae: 1
    },
    hover: { scale: 1.1, transition: { duration: 2 } },
    // top: { transition: { duration: 1 }, rotate: 45 },
    top: {scale: 1.1, boxShadow: "0px 10px 10px #000"}
  };
  const parentRef = useRef(null)
  return (
   <div ref={parentRef} className="flex flex-col justify-center items-center size-[400px] border mx-auto">
     <motion.div
      variants={parent}
      initial="hidden"
      transition={{ duration: 2, ease: "easeInOut"}}
      animate="show"
      whileHover="hover"
      drag
      dragElastic={0.7}
      whileDrag="top"
      dragConstraints={parentRef}
    //   dragConstraints={{left: -20, right: 20, top: -20, bottom: 50}}
      dragSnapToOrigin
    //   whileTap="top"
    //   onHoverStart={() => console.log("On Hover Start")}
    //   onHoverEnd={() => console.log("On Hover End")}
      // transition={{duration: 5, type: "tween", ease: "linear"}}
      className="size-44 bg-indigo-500 rounded-lg mx-auto flex-wrap flex p-4 gap-4 items-center justify-center"
    >
    </motion.div>
   </div>
  );
};

export default Motion2;
