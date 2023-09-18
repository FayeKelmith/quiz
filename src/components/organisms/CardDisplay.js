import { FaShieldDog } from "react-icons/fa6";
import { PiCarSimpleBold } from "react-icons/pi";
import { MdSportsMartialArts } from "react-icons/md";
import { Card } from "../atoms/Cards";
const CardDisplay = () => {
  const space = " text-7xl mx-auto my-0 flex";
  const handleClick = () => {
    console.log("Clicked!");
  };
  return (
    <div className="grid grid-cols-3 gap-x-10 w-fit my-0 mx-auto mt-10">
      <button onClick={() => handleClick()}>
        <Card category="Animals" icon={<FaShieldDog className={space} />} />
      </button>
      <button onClick={() => handleClick()}>
        <Card
          category="Vehicles"
          icon={<PiCarSimpleBold className={space} />}
        />
      </button>
      <button onClick={() => handleClick()}>
        <Card
          category="Athletics"
          icon={<MdSportsMartialArts className={space} />}
        />
      </button>
    </div>
  );
};

export default CardDisplay;

//link:
