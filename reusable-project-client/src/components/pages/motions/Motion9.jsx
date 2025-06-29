// const {scrollX, scrollXProgress} = useScroll()
// useMotionValueEvent(scrollX, "change", (e) =>{
//     console.log("scrollY",e);
// })
// useMotionValueEvent(scrollXProgress, "change", (e) =>{
//     console.log("scrollProgre",e);
// })
// import {
//   motion,
//   useScroll,
//   useSpring,
// } from "framer-motion";

// const Motion9 = () => {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });
//   return (
//     <motion.div
//      className="bg-indigo-500"
//       style={{
//         scaleX,
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0, // Full width
//         height: "2px", // thin progress bar
//         transformOrigin: "0%", // originX alternative for CSS
//         zIndex: 50,
//       }}
//     ></motion.div>
//   );
// };

// export default Motion9;
import { motion, useScroll, useSpring } from "framer-motion";
const Motion9 = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-0 bottom-20 z-50">
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="text-white"
          strokeWidth="4"
          fill="transparent"
          stroke="currentColor"
        />

        {/* Animated Progress Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          strokeWidth="4"
          fill="transparent"
          stroke="hotpink"
          className="indicator"
          style={{
            pathLength,
            rotate: -90,
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
    </div>
  );
};

export default Motion9;
