import "./App.css";
import Navbar from "./components/KnowMore";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
