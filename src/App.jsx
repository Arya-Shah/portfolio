import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technologies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Countdown from "./components/countdown";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection: bg-cyan selection: text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>{" "}
      </div>
      <div className="container mx-auto px-8 text-black">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Countdown />
        <Contact />
      </div>
    </div>
  );
};

export default App;
