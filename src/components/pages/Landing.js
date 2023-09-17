import GoButton from "../atoms/GoButton";

function Landing() {
  return (
    <div className="bg-gradient-to-bl from-cyan-700 h-screen w-screen text-center mx-auto my-0 to-slate-950 text-white font-['Raleway']">
      <div className="flex pt-10">
        <h1 className="flex-1 text-left tracking-wider pl-20 text-5xl text-secondary font-bold w64">
          Titan
        </h1>
        <h2 className="flex-1 font-semibold  text-2xl w-32 text-right pr-20">
          My Quiz App
        </h2>
      </div>

      <div className="text-7xl font-semibold my-20">Pick A topic!</div>
      <GoButton />
    </div>
  );
}

export default Landing;
