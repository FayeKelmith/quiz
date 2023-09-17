import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Error from "./components/pages/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Guide from "./components/pages/Guide";
import Landing from "./components/pages/Landing";
import Guide from "./components/pages/Guide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    //errorElement: <Error />,
  },
  {
    path: "/guide",
    element: <Guide />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
