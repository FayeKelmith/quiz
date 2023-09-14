import axios from "axios";
import { useState, useEffect } from "react";
import { Truebtn, Falsebtn, Closebtn } from "../atoms/Responsebtn";

const Question = () => {
  //TODO: to use choice here in receiving users' in put.
  // const [choice, setChoice] = useState(Array(10).fill(null));
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
  return (
    <div className="min-w-3/5 border border-primary text-center mx-auto min-h-5/6 ">
      <div className="w-80 pt-5 px-10 mx-auto my-0 ">
        {data.length ? data[0].question.replace(".", "?") : null}
      </div>
      <h3 className="text-3xl bg-night text-day my-5 mx-auto rounded-md w-fit px-10 py-3">
        What do you think?
      </h3>
      <div className="my-0 mx-auto flex border border-secondary fixed mb-0">
        <Truebtn className="mx-auto" />

        <Falsebtn className="mx-auto" />
      </div>
    </div>
  );
};
export default Question;
