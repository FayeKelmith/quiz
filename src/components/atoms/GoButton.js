import { Link } from "react-router-dom";
const GoButton = () => {
  return (
    <>
      <Link
        to={"/Guide"}
        className="text-5xl font-semibold text-secondary border rounded-md px-8 py-4 hover:text-day hover:border-secondary transition-all"
      >
        Let's Go!
      </Link>
    </>
  );
};

export default GoButton;
