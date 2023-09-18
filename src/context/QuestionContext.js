import { useState, createContext, useContext } from "react";

const QuestionID = createContext(27);

export const QuestionProvider = ({ children }) => {
  const [id, setId] = useState(null);

  const updateId = (value) => {
    setId(value);
  };
  return (
    <QuestionID.Provider value={{ id, updateId }}>
      {children}
    </QuestionID.Provider>
  );
};

export const useQuestionId = () => {
  return useContext(QuestionID);
};
