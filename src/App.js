import "./App.css";
import KnowMore from "./components/KnowMore";
import Predict from "./components/Predict";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/know-more" element={<KnowMore />}></Route>
        <Route path="/predict" element={<Predict />}></Route>
      </Routes>
    </>
  );
}

export default App;
