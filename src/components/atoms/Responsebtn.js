import { RxCross2, RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
const Responsebtn = ({ value }) => {
  return (
    <div>
      <Truebtn />
      <br />
      <Falsebtn />
      <br />
      <Closebtn />
    </div>
  );
};

export const Truebtn = ({ size }) => {
  const originalClass = `text-teal-500 shadow-2xl rounded-full hover:scale-105`;

  const newClass = `${originalClass} text-${size}xl`;

  return <TiTick className={newClass} />;
};

export const Falsebtn = ({ size }) => {
  const originalClass = `text-7xl text-secondary shadow-2xl font-extrabold rounded-full hover:scale-105`;

  const newClass = `${originalClass} text-${size}xl`;
  return <RxCross2 className={newClass} />;
};

export const Closebtn = () => {
  return (
    <RxCross1 className="text-3xl rounded-full text-night hover:scale-105 hover:rotate-45 shadow-lg transition-transform duration-500" />
  );
};

export default Responsebtn;
