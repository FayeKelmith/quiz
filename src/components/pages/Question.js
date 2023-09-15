import axios from "axios";
import { useState, useEffect } from "react";
import { QuestionBox } from "../molecules/QuestionBox";
import { Closebtn } from "../atoms/Responsebtn";

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

export default Question;

//TODO: 1. Structure my code and start using context API: postponed to the end.
//solve problem of not getting the last results
//build the results page
//build guidelines page with it's agreement button making use of <Outlet />
//learn dom routing and use it to link these pages
