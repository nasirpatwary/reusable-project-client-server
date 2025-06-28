import { motion, useDragControls } from "framer-motion";

const Motion7 = () => {
  const controls = useDragControls()
  return (
    <div className="border size-[300px] mx-auto border-orange-500 flex flex-col items-center justify-center">
      <div 
      onPointerDown={(e) => controls.start(e)}
      className="bg-green-500 w-44 h-5 rounded flex flex-wrap gap-4 p-4 justify-center items-center"></div>
      <motion.div 
      drag="x"
      dragControls={controls}
    //   dragSnapToOrigin
      className="bg-indigo-500 size-44 rounded flex flex-wrap gap-4 p-4 justify-center items-center"></motion.div>
    </div>
  );
};

export default Motion7;
