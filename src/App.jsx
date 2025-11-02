import { motion } from "framer-motion";
import { SiGooglemeet } from "react-icons/si";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Team from "./pages/Team";

function App() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Floating Google Meet Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <a
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_C6gFuNB5P4Csx_n9YLPpTNvS7ffMrgqg6zVmeIKBkoV4ycDle4L4gwCZfhjjP96fLpUYIFwE?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black flex justify-center items-center h-[60px] w-[60px] rounded-full fixed bottom-11 right-6 z-50 border-2 border-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-green-400/50"
        >
          <SiGooglemeet className="w-8 h-8 text-white" />
        </a>
      </motion.div>

      {/* Other Sections */}
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

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2025 codixpro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
