import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./components/pages/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Guide from "./components/pages/Guide";
import Landing from "./components/pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
    // children: {
    //   path: "./Guide",
    //   element: <Guide />,
    // },
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
