import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">{/* <About /> */}</section>
        <section id="projects">{/* <Projects /> */}</section>
        <section id="contact">{/* <Contact /> */}</section>
      </main>
    </>
  );
}
