export const Card = ({ category, icon }) => {
  return (
    <div className="bg-white text-primary text-center drop-shadow-2xl min-w-fit rounded-md py-20 px-5 hover:scale-95 transition-all duration-500 ease-in-out">
      <h1 className="text-5xl">{category}</h1>
      {icon}
    </div>
  );
};
