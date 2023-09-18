import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./components/pages/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Guide from "./components/pages/Guide";
import Landing from "./components/pages/Landing";
import Question from "./components/pages/Question";

/* The code is creating a router using the `createBrowserRouter` function from the `react-router-dom`
library. The router is configured with routes defined using the `createRoutesFromElements` function. */
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landing />,
      children: [{ path: "Guide", element: <Guide /> }],
    },
    {
      path: "/Question",
      element: <Question />,
    },
    { path: "/Error", errorElement: <Error /> },
  ]
  // <Route path="/" element={<Landing />}>
  //   <Route path="/Guide" element={<Guide />} />
  //   <Route path="/Error" errorElement={<Error />} />
  //   <Route path="/Question" element={<Question />} />
  // </Route>
);
export const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
