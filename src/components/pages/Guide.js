import CardDisplay from "../organisms/CardDisplay";
const Guide = () => {
  return (
    <div className="w-screen h-screen top-0 absolute">
      <div className="container drop-shadow-xl bg-gradient-to-bl from-cyan-600 to-slate-800 sm:w-[60vw] min-h-[60vh] my-[20vh] py-10 mx-auto text-center rounded-sm">
        <h1 className="sm:text-5xl hidden sm:block my-4 pt-10">
          Pick a challenge!
        </h1>
        <CardDisplay />
      </div>
    </div>
  );
};

export default Guide;
