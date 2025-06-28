const CategoryButton = ({ label, name, isActive, onClick, image }) => {
  return (
    <>
      <div
        className={`cursor-pointer py-4 space-y-2 border border-gray-200 rounded-xl`}
        onClick={() => onClick(label)}
      >
        <img className="w-16 h-16 mx-auto rounded-full" src={image} alt="" />
        <h2 className={`text-center ${isActive && "text-indigo-500"}`}>
          {name}
        </h2>
      </div>
    </>
  );
};

export default CategoryButton;
