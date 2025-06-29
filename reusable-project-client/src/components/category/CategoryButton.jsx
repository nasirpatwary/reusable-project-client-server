import { CiCirclePlus } from "react-icons/ci";
const CategoryButton = ({ label, name, isActive, onClick, image }) => {
  return (
    <>
      <div
        className={`cursor-pointer h-30 overflow-hidden group relative py-4 space-y-2 border border-gray-200 rounded-xl`}
        onClick={() => onClick(label)}
      >
        <img className="w-16 h-16 mx-auto rounded-full absolute transition-all duration-700 group-hover:opacity-80  right-0 left-0" src={image} alt={name} />
        <CiCirclePlus className="w-16 group-hover:bg-black/30 text-white h-16 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full absolute right-0 group-hover:bottom-7.5 bottom-0 left-0"  />
        <h2 className={`text-center absolute left-0 right-0 bottom-2 ${isActive && "text-indigo-500"}`}>
          {name}
        </h2>
      </div>
    </>
  );
};

export default CategoryButton;
