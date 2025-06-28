import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

// const parent = {
// //   initial: { x: 0, y: 0, opacity: 0 },
// //   animate: {
// //     x: [0, 300, -300, 0],
// //     y: [0, 300, -300, 0],
// //     rotate: [0, 300, -300, 0],
// //     opacity: 1,
// //     transition: {
// //       duration: 5,
// //       ease: "linear",
// //       repeat: Infinity,
// //       opacity:{
// //           duration: 0.5
// //       },
// //       rotate: {
// //           daly: 1,
// //           repeat: Infinity
// //       }
// //     },
// //   },
// };
// onMouseEnter={() => controls.stop()}
// onMouseLeave={() => controls.start({y: 0, transition: {duration: 2, delay: 2}})}
const Motion3 = () => {
  const controls = useAnimationControls()
  useEffect(() =>{
    controls.start((i) => ({y: -100, opacity: [0, 0.2, 0.5, 0.75, 1], transition: {duration: 2, delay: i * 2}}))
  }, [])
  return (
    <div 
    className="w-5/12 h-5/12 grid grid-cols-4 gap-4 text-center border border-pink-700 mx-auto">
      <motion.div 
      className="size-28 bg-indigo-500 rounded  mx-auto"
      animate={controls}
      custom={1}
      >
      </motion.div>
      <motion.div 
      className="size-28 bg-indigo-500 rounded  mx-auto"
      animate={controls}
      custom={2}
      >
      </motion.div>
      <motion.div 
      className="size-28 bg-indigo-500 rounded  mx-auto"
      animate={controls}
      custom={3}
      >
      </motion.div>
      <motion.div 
      className="size-28 bg-indigo-500 rounded  mx-auto"
      animate={controls}
      custom={4}
      >
      </motion.div>
      <motion.div 
      className="size-28 bg-indigo-500 rounded  mx-auto"
      animate={controls}
      custom={5}
      >
      </motion.div>
      <motion.div 
      className="size-28 bg-indigo-500 rounded  mx-auto"
      animate={controls}
      custom={6}
      >
      </motion.div>
      <motion.div 
      className="size-28 bg-indigo-500 rounded  mx-auto"
      animate={controls}
      custom={7}
      >
      </motion.div>
      {/* <motion.div
        className="size-54 mt-8 flex flex-col justify-center items-center bg-indigo-500 rounded-lg mx-auto"
        variants={parent}
        initial="initial"
        animate="animate" */}
        {/* transition={{duration: 5, type: "tween", ease: "linear"}} */}
      {/* ></motion.div> */}
    </div>
  );
};

export default Motion3;
