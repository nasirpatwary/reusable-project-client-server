import Motion1 from "./motions/motion1";
import Motion2 from "./motions/Motion2";
import Motion3 from "./motions/motion3";

// import { useEffect, useState } from "react";
// const [current, setCurrent] = useState(new Date());

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrent((prev) => new Date(prev.getTime() + 1000)); // ⏱ add 1 second
//   }, 1000);

//   return () => clearInterval(interval); // ✅ clean up on unmount
// }, []);
const Services = () => {
 
  return (
    <>
      {/* <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-400">
          ⏱ Live Time Increment
        </h2>

        <div className="grid grid-cols-2 gap-4 text-center text-lg">
          <div className="bg-gray-800 p-4 rounded shadow">
            <p className="font-semibold text-yellow-400">Day</p>
            <p>{current.getDate()}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow">
            <p className="font-semibold text-yellow-400">Hour</p>
            <p>{current.getHours()}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow">
            <p className="font-semibold text-yellow-400">Minute</p>
            <p>{current.getMinutes()}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow">
            <p className="font-semibold text-yellow-400">Second</p>
            <p>{current.getSeconds()}</p>
          </div>
        </div>
      </div> */}
      Services Page
      <Motion1 />
      <Motion2 />
      <Motion3 />
    </>
  );
};

export default Services;
