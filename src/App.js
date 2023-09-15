import "./App.css";
import { QuestionBox } from "./components/molecules/QuestionBox";
import Question from "./components/pages/Question";
import { QuestionInfo } from "./context/QuestionContext";
function App() {
  return (
    <div className="App">
      <QuestionInfo>
        <QuestionBox />
        <Question />
      </QuestionInfo>
    </div>
  );
}

export default App;
