import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Team from "./pages/Team";


function App() {
  return (
    <div className="overflow-hidden">
      <section id="home" value="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="team" className="bg-black">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2025 codixpro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
