import ResultLine from "../atoms/ResultLine";
import { Confettis } from "../atoms/Confetti";
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
        <div className="flex justify-center">
          <Confettis active={active} className="flex-1" />
          <Confettis active={active} className="flex-1" />
          <Confettis active={active} className="flex-1" />
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

export default Results;
