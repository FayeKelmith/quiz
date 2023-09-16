import ResultLine from "../atoms/ResultLine";
import Confetti from "react-dom-confetti";
import { useState } from "react";
const Results = ({ questions, answers, selections }) => {
  const score = answers.reduce((acc, elt, ind) => {
    return acc + (elt === selections[ind] ? 1 : 0);
  }, 0);

  //for the confetti
  const [active, setActive] = useState(false);

  setTimeout(() => {
    setActive(true);
  }, 1000);

  return (
    <div className="bg-white">
      {score >= 6 ? (
        <div className="flex">
          <Confetti active={active} config={config} className="flex-auto" />
          <Confetti active={active} config={config} className="flex-auto" />
          <Confetti active={active} config={config} className="flex-auto" />
        </div>
      ) : null}
      <h1 className="text-5xl underline py-5 mb-4 decoration-lining text-night">
        Results
      </h1>
      <div className="text-2xl">
        You scored{" "}
        <span className={`${score >= 6 ? "text-primary " : "text-secondary"}`}>
          {score}
        </span>{" "}
        out of {questions.length}
      </div>
      <div className=" mx-auto mt-5 w-4/6 bg-slate-100 px-10 py-5">
        {questions.map((elt, ind) => (
          <ResultLine
            question={questions[ind]}
            answer={answers[ind]}
            selection={selections[ind]}
          />
        ))}
      </div>
    </div>
  );
};

const config = {
  angle: 150,
  spread: 360,
  startVelocity: 40,
  elementCount: 150,
  dragFriction: 0.1,
  duration: 4000,
  stagger: 3,
  width: "20px",
  height: "20px",
  perspective: "500px",
  colors: [
    "#a864fd",
    "#29cdff",
    "#78ff44",
    "#ff718d",
    "#fdff6a",
    "#008080",
    "#ff4747",
  ],
};
export default Results;
