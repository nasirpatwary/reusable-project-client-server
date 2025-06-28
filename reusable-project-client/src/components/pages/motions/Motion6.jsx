import { useAnimate } from "framer-motion";
import { useEffect } from "react";
const Motion6 = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { opacity: 0 }],
    ]);
  }, []);
  //   const handleHere = async () =>{
  //     await animate([
  //         [scope.current, { rotate: 45 }],
  //       [scope.current, { opacity: 0 }],
  //       [scope.current, { rotate: 45 }],
  //       [scope.current, { opacity: 1 }],
  //       [scope.current, { rotate: 90 }],
  //       [scope.current, { x: 200 }],
  //       [scope.current, { x: -200 }],
  //       [scope.current, { opacity: 0 }],
  //     ])
  //   }
  return (
    <div className="border size-[300px] mx-auto border-orange-500 flex flex-col items-center justify-center">
      <div
        ref={scope}
        // onClick={handleHere}
        className="bg-indigo-500 size-44 rounded flex flex-wrap gap-4 p-4 justify-center items-center"
      ></div>
    </div>
  );
};

export default Motion6;
