import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./components/pages/Error";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Guide from "./components/pages/Guide";
import Landing from "./components/pages/Landing";

/* The code is creating a router using the `createBrowserRouter` function from the `react-router-dom`
library. The router is configured with routes defined using the `createRoutesFromElements` function. */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Landing />}>
      <Route path="/Guide" element={<Guide />} />
      <Route path="/Error" errorElement={<Error />} />
    </Route>
  )
);
export const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
