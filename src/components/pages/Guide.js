import CardDisplay from "../organisms/CardDisplay";
const Guide = () => {
  return (
    <div className="container border drop-shadow-sm w-[60vw] h-[60vh] my-[20vh] mx-auto">
      <h1 className="text-5xl my-8 ">Pick a challenge!</h1>
      <CardDisplay />
    </div>
  );
};

export default Guide;
