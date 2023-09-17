import { FaShieldDog } from "react-icons/fa6";
import { PiCarSimpleBold } from "react-icons/pi";
import { MdSportsMartialArts } from "react-icons/md";
import { Card } from "../atoms/Cards";
const CardDisplay = () => {
  const styles = "text-7xl mx-auto my-0 flex ";
  return (
    <div className=" grid grid-cols-3 gap-x-10 w-fit my-12 mx-auto">
      <Card category="Animals" icon={<FaShieldDog className={styles} />} />
      <Card category="Vehicles" icon={<PiCarSimpleBold className={styles} />} />
      <Card
        category="Athletics"
        icon={<MdSportsMartialArts className={styles} />}
      />
    </div>
  );
};

export default CardDisplay;
