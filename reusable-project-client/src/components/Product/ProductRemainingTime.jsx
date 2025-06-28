import left from "../../assets/images/e.png";
import right from "../../assets/images/f.png";
import { useEffect, useState } from "react";

const ProductRemainingTime = () => {
  const [current, setCurrent] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => new Date(prev.getTime() - 1000)); // ⏱ add 1 second
    }, 1000);

    return () => clearInterval(interval); // ✅ clean up on unmount
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className="bg-no-repeat object-cover object-center rounded-lg w-full animate__animated animate__fadeInLeft animate__delay-3s"
          style={{
            backgroundImage: `url(${right})`,
          }}
        >
          <div className="space-y-2 px-5 py-5 md:ml-65 md:py-15">
            <h2 className="md:text-2xl font-medium">X-Connect Smart Television</h2>
            <p>Time remaining until the end of the offer.</p>
            <div className="flex gap-4">
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getDate()} D
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getHours()} H
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getMinutes()} M
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getSeconds()} S
              </p>
            </div>
            <button className="border mt-4 text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="bg-no-repeat object-cover object-center rounded-lg w-full animate__animated animate__fadeInRight animate__delay-3s"
          style={{
            backgroundImage: `url(${left})`,
          }}
        >
          <div className="space-y-2 px-5 py-5 md:px-10 md:py-15">
            <h2 className="md:text-2xl font-medium">Vegetables Combo Box</h2>
            <p>Time remaining until the end of the offer.</p>
            <div className="flex gap-4">
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getDate()} D
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getHours()} H
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getMinutes()} M
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden shadow-lg rounded">
                {current.getSeconds()} S
              </p>
            </div>
            <button className="border mt-4 text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRemainingTime;
