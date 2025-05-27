import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // total 4s for loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

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
