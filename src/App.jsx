import { motion, AnimatePresence } from "framer-motion";
import { SiGooglemeet } from "react-icons/si";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import AiTools from "./pages/AiTools";
import Loader from "./pages/Loader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div class="overflow-hidden">
      {isLoading ?
        <Loader onFinish={() => setIsLoading(false)} /> :
        <section id="home">
          <Hero />
        </section>
      }


      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 2,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
          type: "spring",
          stiffness: 120,
        }}
        className="fixed bottom-11 right-6 z-50"
      >
        <motion.a
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_C6gFuNB5P4Csx_n9YLPpTNvS7ffMrgqg6zVmeIKBkoV4ycDle4L4gwCZfhjjP96fLpUYIFwE?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.15,
            rotate: 5,
            boxShadow: "0px 0px 25px rgba(16, 185, 129, 0.5)", // green glow
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="bg-black flex justify-center items-center h-[60px] w-[60px] rounded-full border-2 border-white shadow-lg"
        >
          <SiGooglemeet className="w-8 h-8 text-white" />
        </motion.a>
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
      {/* <section id="AiTools">
        <AiTools />
      </section> */}

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2025 CodixPro. All rights reserved.</p>
      </footer>
      )
    </div>
  );
}

export default App;
