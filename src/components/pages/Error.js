import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mx-auto my-40">
      <h1 className="text-5xl my-8">Yemale!!!</h1>
      <div>
        <p className="text-3xl ">Sorry oh!, Na me!</p>
        <p className="text-2xl my-8">
          <i>{error.statusText || error.messages}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
