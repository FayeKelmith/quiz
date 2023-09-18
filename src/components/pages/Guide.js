import CardDisplay from "../organisms/CardDisplay";
const Guide = () => {
  return (
    <div>
      <div className="container border drop-shadow-md min-w-[60vw] min-h-[60vh] my-[20vh] mx-auto text-center">
        <h1 className="text-5xl my-4 ">Pick a challenge!</h1>
        <CardDisplay />
      </div>
    </div>
  );
};

export default Guide;
