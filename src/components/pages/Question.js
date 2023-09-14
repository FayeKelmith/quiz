import axios from "axios";
import { useState, useEffect } from "react";
import { Truebtn, Falsebtn, Closebtn } from "../atoms/Responsebtn";

const Question = () => {
  //TODO: to use choice here in receiving users' in put.

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=27&type=boolean"
      );
      const intel = response.data.results;
      const info = intel.filter((item) => {
        return { question: item.questions, answer: item.correct_answer };
      });
      setData(info);
    }
    getData();
  }, []);
  return (
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
        <QuestionBox data={data} />
      </div>
    </div>
  );
};

export const QuestionBox = ({ data }) => {
  const [num, setNum] = useState(0);
  const [choice, setChoice] = useState(Array(10).fill(null));

  const handleClick = (val) => {
    const nextChoice = choice.slice();
    if (num < 10) {
      nextChoice[num] = val;
      setChoice(nextChoice);
      setNum(num + 1);
    }
  };

  const display = () => {
    if (num < 10) {
      console.log(num, choice);
      return data.length ? data[num].question.replace(".", "?") : null;
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
        <span value={true} className="mx-16" onClick={() => handleClick(true)}>
          <Truebtn />
        </span>
        <span
          className=" mx-16"
          attr="False"
          onClick={() => handleClick(false)}
        >
          <Falsebtn />
        </span>
      </div>
    </div>
  );
};
export default Question;

//TODO: 1. Structure my code and start using context API
//solve problem of not getting the last results
//build the results page
//build guidelines page with it's agreement button making use of <Outlet />
//learn dom routing and use it to link these pages
