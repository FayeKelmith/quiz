//TODO: import Question Context and create a context provider on click of button.
import { useQuestionId } from "../../context/QuestionContext";
import { FaShieldDog } from "react-icons/fa6";
import { PiCarSimpleBold } from "react-icons/pi";
import { MdSportsMartialArts } from "react-icons/md";
import { Card } from "../atoms/Cards";
import { useNavigate } from "react-router-dom";

const CardDisplay = () => {
  const { updateId } = useQuestionId();
  const navigate = useNavigate();
  const space = " text-7xl mx-auto my-0 flex";
  const handleClick = (value) => {
    updateId(value);
    navigate("/Question");
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-10 w-fit my-0 mx-auto mt-10">
        <button onClick={() => handleClick(27)}>
          <Card category="Animals" icon={<FaShieldDog className={space} />} />
        </button>
        <button onClick={() => handleClick(28)}>
          <Card
            category="Vehicles"
            icon={<PiCarSimpleBold className={space} />}
          />
        </button>
        <button onClick={() => handleClick(21)}>
          <Card
            category="Athletics"
            icon={<MdSportsMartialArts className={space} />}
          />
        </button>
      </div>
    </>
  );
};

export default CardDisplay;

//link:
