import { Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Guide from "./components/pages/Guide";
import Question from "./components/pages/Question";
import Error from "./components/pages/Error";
function App() {
  return (
    <div className="App">
      <Guide />

      {/* <Routes>
        <Route path="/" exact element={<Guide />} />
        <Route path="/Question" element={<Question />} />
        <Route element={<Error />} />
      </Routes> */}
    </div>
  );
}

export default App;
