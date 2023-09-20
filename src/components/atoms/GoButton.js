import { Link } from "react-router-dom";
const GoButton = () => {
  return (
    <>
      <Link
        to={"/Guide"}
        className="text-5xl font-semibold text-secondary border border-night rounded-md px-8 py-4 hover:text-primary hover:border-secondary transition-all"
      >
        Let's Go!
      </Link>
    </>
  );
};

export default GoButton;
