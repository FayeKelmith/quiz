import Axios from "axios";
import { useState, useEffect } from "react";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        "https://opentdb.com/api.php?amount=10&category=27&type=boolean"
      );
      const data = response.data.results;
      setQuestions(data.map((obj) => obj.question));
      setAnswers(data.map((obj) => obj.correct_answer));
    }
    getData();
  }, []);

  const data = questions.map((item, index) => {
    return { question: item, ans: answers[index] };
  });
  console.log(data);
  return <div></div>;
}

export default Question;
