export const Card = ({ category, icon }) => {
  return (
    <div className="bg-white text-primary text-center drop-shadow-2xl min-w-fit rounded-md py-20 px-5">
      <h1 className="text-5xl">{category}</h1>
      {icon}
    </div>
  );
};
