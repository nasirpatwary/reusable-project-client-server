import  { useEffect, useState } from 'react';
import food from "../../assets/mics/food1.png";
const TrandingLeft = () => {
    const [current, setCurrent] = useState(new Date());
      // Timer countdown
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => new Date(prev.getTime() - 1000));
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
    return (
         <div
        className="hero md:h-96 flex-1"
        style={{
          backgroundImage: `url(${food})`,
        }}
      >
        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
        <div className="hero-content">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl text-gray-300">
              Our Top Most Products Check It Now
            </h1>
            <div className="flex gap-4 justify-center">
              <p className="bg-white text-lg px-2 overflow-hidden rounded">
                {current.getDate()} D
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden rounded">
                {current.getHours()} H
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden rounded">
                {current.getMinutes()} M
              </p>
              <p className="bg-white text-lg px-2 overflow-hidden rounded">
                {current.getSeconds()} S
              </p>
            </div>
            <button className="border mt-4 text-gray-200 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default TrandingLeft;