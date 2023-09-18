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
