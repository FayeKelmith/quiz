import { QuestionBox } from "../molecules/QuestionBox";
import { Closebtn } from "../atoms/Responsebtn";

const Question = () => {
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
        <QuestionBox />
      </div>
    </div>
  );
};

export default Question;
