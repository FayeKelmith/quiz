import GoButton from "../atoms/GoButton";
import { Outlet } from "react-router-dom";
function Landing() {
  return (
    <div className="bg-primary/20 min-h-screen w-screen text-center mx-auto my-0 text-white font-['Raleway']">
      <div className="sm:flex pt-10 text-center">
        <h1 className="sm:flex-1 sm:text-left tracking-wider sm:pl-20 text-5xl text-secondary font-bold w64 pb-20">
          Titan
        </h1>
        <h2 className="sm:flex-1 font-semibold  text-2xl sm:w-32 sm:text-right sm:pr-20 sm:block hidden text-night">
          My Quiz App
        </h2>
      </div>
      <div className="sm:text-7xl text-night font-semibold my-20">
        Pick A topic!
      </div>

      <GoButton />
      <Outlet />
    </div>
  );
}

export default Landing;
