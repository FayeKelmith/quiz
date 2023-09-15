import { createContext } from "react";

//context
const QuestionInfo = createContext();

//function that carries
export const QuestionContext = () => {
  return <QuestionInfo.Provider></QuestionInfo.Provider>;
};
//working on the dev branch
export default QuestionInfo;
