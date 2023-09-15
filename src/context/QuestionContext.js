import { createContext, useEffect, useState } from "react";
import axios from "axios";

//context
const QuestionContext = createContext();

//function that carries
export const QuestionInfo = () => {
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

  return <QuestionInfo.Provider value={{ data }}></QuestionInfo.Provider>;
};
//working on the dev branch
export default QuestionContext;
