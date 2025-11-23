import { motion } from "framer-motion";
import CardNav from "../components/CardNav";
import logo from "../assets/logo3.svg";
import BlurText from "../components/BlurText";
import LetterGlitch from "../components/LetterGlitch";
import CountUp from "../components/CountUp";

const Hero = () => {

  // 🧭 Define navigation items
  const items = [
    
    {
      label: "Get In Touch",
      bgColor: "#3113aa",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:codixpro4@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20CodixPro%20Team," },
        { label: "Instagram", ariaLabel: "Twitter", href: "https://www.instagram.com/codixpro/" },
      ],
    },
  ];
  

  // 🧭 Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden text-white" id="home">
      {/* 🟣 DotGrid Background */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <LetterGlitch glitchSpeed={200} centerVignette={true} outerVignette={false} smooth={true} />
      </motion.div>

      {/* ⚫ Overlay */}
      <div className="absolute inset-0 bg-black/45 -z-10" />

      {/* 🧭 Navbar */}
      <motion.div
        className="absolute top-0 left-0 w-full z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
      >
        <CardNav
          logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
          className="fixed top-0 left-0 z-50"
        />
      </motion.div>

      {/* ✨ Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
        className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <BlurText
          text="Building Next-Gen Web Experiences"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
        />

        <p className="text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
          Creates high-performance, visually stunning, and user-focused digital experiences that elevate brands and drive meaningful engagement across the web.
        </p>

        {/* CTA Buttons */}
        <div className="mt-5 flex gap-4">
          <button
            onClick={() => scrollToSection("about")}
            className="bg-white border-2 border-indigo-500 px-2.5 py-1.5 rounded-2xl w-[130px] text-black hover:bg-indigo-500 hover:text-white"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-2.5 py-1.5 border-2 rounded-2xl w-[130px] text-white hover:bg-white hover:text-indigo-500"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
