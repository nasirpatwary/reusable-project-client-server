import { useState } from "react";
import Calendar from "react-calendar";
const DashboardCalendar = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className=" bg-gray-100">
      <div className="rounded-lg shadow-lg text-nowrap bg-white">
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
  );
};

export default DashboardCalendar;
