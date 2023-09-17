import { Truebtn, Falsebtn } from "./Responsebtn";
const ResultLine = ({ question, answer, selection }) => {
  return (
    <div className="text-xl flex justify-center border py-3 bg-slate-50 drop-shadow-sm rounded-sm my-2 hover:drop-shadow-xl">
      <p className="flex-auto">
        {question}{" "}
        <span className="decoration-lining underline">[{selection}]</span>
      </p>
      <div className="px-10">
        <span className="inline">
          {answer === selection ? <Truebtn size={4} /> : <Falsebtn size={4} />}
        </span>
      </div>
    </div>
  );
};

export default ResultLine;
