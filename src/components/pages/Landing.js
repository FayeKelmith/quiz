import { FaShieldDog } from "react-icons/fa6";
function Landing() {
  return (
    <div className="bg-gradient-to-bl from-cyan-700 h-screen w-screen to-slate-950 text-white font-['Raleway']">
      <div className="flex pt-10">
        <h1 className="flex-1 text-left tracking-wider pl-10 text-5xl text-secondary font-bold w64">
          Titan
        </h1>
        <h2 className="flex-1 font-semibold  text-lg w-32 text-right pr-10">
          My Quiz App
        </h2>
      </div>
      {/* TODO: Make use of the useEffect hook to make this phrase change continually. */}

      <div className="center">Pick a topic!</div>

      <Card category="Animals" />
    </div>
  );
}

export const Card = ({ category, icon }) => {
  return (
    <div>
      <h1 className="text-5xl">{category}</h1>
      {/* {icon} */}
    </div>
  );
};

export default Landing;
