import axios from "axios";
import { useState, useEffect } from "react";
//import { ProgressVariant } from "../atoms/Progress";
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
    <div className="outline-5 outline-slate-600 bg-slate-100 text-center shadow-lg my-[20vh] mx-auto w-3/5 h-[60vh]">
      <div className="grid grid-cols-2 gap-10">
        {/*TODO: Timer as atom  */}
        <div>Timer</div>
        <div>
          {/*TODO:   Score card as atom*/}
          Score Card
        </div>
      </div>
      <QuestionBox data={data} />

      {/*TODO: Answer question tabs and buttons - atoms */}
      <div>True or False</div>
    </div>
  );
};

export const QuestionBox = ({ data }) => {
  return (
    <div className="w-80 py-10 px-10 mx-auto my-0 ">
      {data.length ? data[0].question.replace(".", "?") : null}
    </div>
  );
};
export default Question;
