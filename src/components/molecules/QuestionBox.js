import { useState, useContext } from "react";
import { Truebtn, Falsebtn } from "../atoms/Responsebtn";
import QuestionContext from "../../context/QuestionContext";

export const QuestionBox = () => {
  const { data } = useContext(QuestionContext);
  const [num, setNum] = useState(0);
  const [choice, setChoice] = useState(Array(10).fill(null));

  //click on answer choice
  const handleClick = (val) => {
    const nextChoice = choice.slice();
    if (num < 10) {
      nextChoice[num] = val;
      setChoice(nextChoice);
      setNum(num + 1);
    }
  };

  const display = () => {
    if (num <= 10) {
      // to handle the last option, I had to include 10, so print nothing.
      return data.length && num < 10
        ? data[num].question.replace(".", "?")
        : null;
    }
  };
  return (
    <div className="min-w-3/5  text-center mx-auto min-h-5/6 ">
      <div className="w-80 h-40 bg-slate-200 pt-5 px-10 mx-auto my-0 ">
        {display()}
      </div>
      <h3 className="text-3xl bg-night text-day my-5 mx-auto rounded-md w-fit px-10 py-3">
        What do you think?
      </h3>
      <div className="my-0 mx-auto flex place-content-center mb-0">
        <span className="mx-16" onClick={() => handleClick(true)}>
          <Truebtn />
        </span>
        <span className=" mx-16" onClick={() => handleClick(false)}>
          <Falsebtn />
        </span>
      </div>
    </div>
  );
};
