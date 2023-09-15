import { useState, createContext } from "react";

//context
const QuestionInfo = createContext(undefined);

//function that carries
export const QuestionContext = () => {
  return <QuestionInfo.Provider></QuestionInfo.Provider>;
};

export default QuestionInfo;
