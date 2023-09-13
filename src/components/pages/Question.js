import Axios from "axios";
import { useState, useEffect } from "react";

function Question() {
  const [questions, setQuestions] = useState(Array(10).fill(null));
  const [answers, setAnswers] = useState(Array(10).fill(null));

  useEffect(() => {
    Axios.get(
      "https://opentdb.com/api.php?amount=10&category=27&type=boolean"
    ).then((res) => {
      const quest = res.data.results;

      setQuestions(
        quest.map((obj) => {
          return obj.question;
        })
      );
      setAnswers(quest.map((obj) => obj.correct_answer));
    });
  }, []);

  console.log(questions, answers);
  return <div></div>;
}

export default Question;
