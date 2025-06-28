import { useState } from "react";
import Calendar from "react-calendar";
import useAuth from "../../hooks/useAuth";
import b from "../../../assets/images/b.png";
const DashboardUser = () => {
  const [value, setValue] = useState(new Date());
  const { user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div
        className="hero bg-no-repeat bg-cover bg-center rounded"
        style={{
          backgroundImage: `url(${b})`,
        }}
      >
        <div className="hero-overlay bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
        <div className="max-w-md space-y-4 text-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              WellCome {user && user?.displayName}
            </h1>
            <p>{user?.email}</p>
          </div>
          <p className="">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="bg-white">
          <Calendar
            onChange={setValue}
            value={value}
            calendarType="gregory"
            prevLabel="◀"
            nextLabel="▶"
            showNeighboringMonth={false}
            tileClassName="text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
