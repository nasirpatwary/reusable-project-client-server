// import { motion, useInView} from "framer-motion"
// import { useRef } from "react";
// const Motion5 = () => {
//     const ref = useRef(null)
//     // const inView = useInView(ref, {once:true}) one time rander
//     const inView = useInView(ref) 
//     console.log("in view", inView);
//     return (
//         <div className='border border-sky-500 w-full flex flex-col justify-center items-center mx-auto'>
//             <motion.div
//             ref={ref}
//             animate={inView ? {x: 0, opacity: 1, transition: {duration: 2, delay: 0.5}} : {x: -500, opacity: 0}}
//             className="bg-indigo-500 size-44 rounded flex flex-wrap gap-4 p-4 justify-center items-center"
//             >
//             </motion.div>
//         </div>
//     );
// };

// export default Motion5;

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Motion5 = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [hide, setHide] = useState(false);

  // Hide after animation completes (delay = animation duration + delay)
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setHide(true);
      }, 2500); // 2s duration + 0.5s delay
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
      <AnimatePresence>
    <motion.div 
    layout
    className="border border-sky-500 w-full flex flex-col justify-center items-center mx-auto py-24">
      <motion.div
        ref={ref}
        animate={
          inView
            ? {
                x: 0,
                opacity: hide ? 0 : 1,
                transition: { duration: 2, delay: 0.5 },
              }
            : { x: -500, opacity: 0 }
        }
        className="bg-indigo-500 size-10 rounded-full flex flex-wrap gap-4 p-4 justify-center items-center transition-opacity duration-1000"
      >
        <span className="text-white font-bold">I’ll disappear</span>
      </motion.div>
    </motion.div>
      </AnimatePresence>
  );
};

export default Motion5;
