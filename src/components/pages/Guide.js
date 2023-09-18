import CardDisplay from "../organisms/CardDisplay";
const Guide = () => {
  return (
    <div className="w-screen h-screen top-0 absolute">
      <div className="container drop-shadow-xl bg-gradient-to-bl from-cyan-600 to-slate-800 w-[60vw] min-h-[60vh] my-[20vh] mx-auto text-center backdrop-blur-2xl">
        <h1 className="text-5xl my-4 pt-10">Pick a challenge!</h1>
        <CardDisplay />
      </div>
    </div>
  );
};

export default Guide;
