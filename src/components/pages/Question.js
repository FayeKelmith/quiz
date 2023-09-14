import axios from "axios";
import { useState, useEffect } from "react";

const Question = () => {
  const [choice, setChoice] = useState(Array(10).fill(null));
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

  //INFO: this object will hold information to be displyaed, including user's answers
  return (
    <div>
      <div className="container">{data[0].question}</div>
    </div>
  );
};

export default Question;
