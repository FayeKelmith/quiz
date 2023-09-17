import { FaShieldDog } from "react-icons/fa6";
import { PiCarSimpleBold } from "react-icons/pi";
import { MdSportsMartialArts } from "react-icons/md";
import { Card } from "../atoms/Cards";
const CardDisplay = () => {
  return (
    <div className=" grid grid-cols-3 gap-x-10 w-fit my-0 mx-auto mt-20">
      <Card
        category="Animals"
        icon={<FaShieldDog className=" text-7xl mx-auto my-0 mt-5 flex" />}
      />
      <Card
        category="Vehicles"
        icon={<PiCarSimpleBold className=" text-7xl mx-auto my-0 mt-5 flex" />}
      />
      <Card
        category="Athletics"
        icon={
          <MdSportsMartialArts className=" text-7xl mx-auto my-0 mt-5 flex" />
        }
      />
    </div>
  );
};

export default CardDisplay;
