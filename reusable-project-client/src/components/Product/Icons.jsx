const Icons = ({ icon }) => {
  return (
    <div className="w-6 h-6 bg-white duration-700 delay-75 hover:bg-green-200 rounded-full flex items-center justify-center text-gray-400 text-xl cursor-pointer shadow-md">
      {icon}
    </div>
  );
};

export default Icons;
