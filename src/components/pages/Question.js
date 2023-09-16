import { QuestionBox } from "../molecules/QuestionBox";
import { Truebtn, Falsebtn, Closebtn } from "../atoms/Responsebtn";
import { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

const Question = () => {
  const [num, setNum] = useState(0);
  const [choice, setChoice] = useState(Array(10).fill(null));

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=27&type=boolean"
      );
      const intel = response.data.results;
      const info = intel.map((item) => {
        return {
          question: item.question.replace(".", "?"),
          answer: item.correct_answer,
        };
      });
      setData(info);
    }
    getData();
  }, []);

  const handleClick = (val) => {
    const nextChoice = choice.slice();
    if (num < 10) {
      nextChoice[num] = val;
      setChoice(nextChoice);
      setNum(num + 1);
    }
  };

  //get questions
  //BUG: the questions don't load immediately
  let questions = data.map((item) => item.question);

  let answers = data.map((item) => item.answer);

  const display = () => {
    if (num <= 10) {
      return questions[num];
    }
  };

  return (
    <>
      {num < 10 ? (
        <div className="container">
          <div className="bg-slate-100 text-center shadow-lg my-[20vh] mx-auto w-3/5 min-h-[60vh]">
            <div className="flex">
              {/*TODO: Timer as atom  */}
              <div className="flex-auto">Timer</div>
              <div className="flex-auto">
                {/*TODO:   Score card as atom*/}
                Score Card
              </div>
              <Closebtn className="flex-none " />
            </div>
            <div className="min-w-3/5  text-center mx-auto min-h-5/6 ">
              <QuestionBox querry={display()} />
              <h3 className="text-3xl bg-night text-day my-5 mx-auto rounded-md w-fit px-10 py-3">
                What do you think?
              </h3>
              <div className="my-0 mx-auto flex place-content-center mb-0">
                <span className="mx-16" onClick={() => handleClick("True")}>
                  <Truebtn size={7} />
                </span>
                <span className=" mx-16" onClick={() => handleClick("False")}>
                  <Falsebtn size={7} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Results questions={questions} answers={answers} selections={choice} />
      )}
    </>
  );
};

export default Question;
