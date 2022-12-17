import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/nav" element={<Navbar />}></Route>
      </Routes>
    </>
  );
}

export default App;
