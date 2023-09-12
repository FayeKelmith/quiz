import { FaShieldDog } from "react-icons/fa6";
import { PiCarSimpleBold } from "react-icons/pi";
import { MdSportsMartialArts } from "react-icons/md";
import { useState } from "react";

function Landing() {
  const [hover, setHover] = useState(false);

  // TODO: to use these states in outlining individual cards once hovered by modifying classes.

  return (
    <div className="bg-gradient-to-bl from-cyan-700 h-screen w-screen to-slate-950 text-white font-['Raleway']">
      <div className="flex pt-10">
        <h1 className="flex-1 text-left tracking-wider pl-20 text-5xl text-secondary font-bold w64">
          Titan
        </h1>
        <h2 className="flex-1 font-semibold  text-2xl w-32 text-right pr-20">
          My Quiz App
        </h2>
      </div>
      {/* TODO: Make use of the useEffect hook to make this phrase change continually. */}

      <div className="text-7xl font-semibold">Pick A topic!</div>

      <div className=" grid grid-cols-3 gap-x-10 w-fit my-0 mx-auto mt-20">
        <Card
          category="Animals"
          icon={<FaShieldDog className=" text-7xl mx-auto my-0 mt-5 flex" />}
        />
        <Card
          category="Vehicles"
          icon={
            <PiCarSimpleBold className=" text-7xl mx-auto my-0 mt-5 flex" />
          }
        />
        <Card
          category="Athletics"
          icon={
            <MdSportsMartialArts className=" text-7xl mx-auto my-0 mt-5 flex" />
          }
        />
      </div>
    </div>
  );
}

export const Card = ({ category, icon }) => {
  return (
    <div className="bg-white text-primary text-center drop-shadow-2xl min-w-fit rounded-md py-20 px-5">
      <h1 className="text-5xl">{category}</h1>
      {icon}
    </div>
  );
};

export default Landing;
