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

const Truebtn = () => {
  return <TiTick className="text-7xl text-teal-500 shadow-2xl rounded-full" />;
};

const Falsebtn = () => {
  return (
    <RxCross2 className="text-7xl text-secondary shadow-2xl font-extrabold rounded-full" />
  );
};

const Closebtn = () => {
  return <RxCross1 className="text-3xl text-night" />;
};

export default Responsebtn;
