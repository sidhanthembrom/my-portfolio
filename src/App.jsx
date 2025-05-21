import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
