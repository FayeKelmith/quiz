//TODO: import Question Context and create a context provider on click of button.
import { QuestionID } from "../../context/QuestionContext";
import { useState } from "react";
import { FaShieldDog } from "react-icons/fa6";
import { PiCarSimpleBold } from "react-icons/pi";
import { MdSportsMartialArts } from "react-icons/md";
import { Card } from "../atoms/Cards";
import { useNavigate } from "react-router-dom";

const CardDisplay = () => {
  const [val, setVal] = useState(0);
  const navigate = useNavigate();
  const space = " text-7xl mx-auto my-0 flex";
  const handleClick = (value) => {
    setVal(value);
    navigate("/Question");
  };
  return (
    <>
      <QuestionID.Provider value={val}>
        <div className="grid grid-cols-3 gap-x-10 w-fit my-0 mx-auto mt-10">
          <button onClick={() => handleClick(27)}>
            <Card category="Animals" icon={<FaShieldDog className={space} />} />
          </button>
          <button
            onClick={() => {
              setVal(28);
            }}
          >
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
      </QuestionID.Provider>
    </>
  );
};

export default CardDisplay;

//link:
