import { motion } from "framer-motion";
import CardNav from "../components/CardNav";
import logo from "../assets/logo3.svg";
import BlurText from "../components/BlurText";
import LetterGlitch from "../components/LetterGlitch";
import CountUp from "../components/CountUp";

const Hero = () => {
    const items = [
        { label: "Home", bgColor: "#0D0716", textColor: "#fff" },
        { label: "Project We have Made", bgColor: "#170D27", textColor: "#fff" },
        { label: "Core Services", bgColor: "#271E37", textColor: "#fff" },
        { label: "Projects", bgColor: "#3D2A55", textColor: "#fff" },
        { label: "Let's build something amazing together", bgColor: "#3D2A55", textColor: "#fff" },
        { label: "Job", bgColor: "#3D2A55", textColor: "#fff" },
        {
            label: "Contact us",
            bgColor: "#3D2A55",
            textColor: "#fff",
            links: [
                { label: "Email", ariaLabel: "Email us" },
                { label: "Twitter", ariaLabel: "Twitter" },
                { label: "LinkedIn", ariaLabel: "LinkedIn" },
            ],
        },
    ];

    return (
        <div className="relative h-screen w-screen overflow-hidden text-white">

            {/* 🟣 DotGrid Background */}
            <motion.div
                className="absolute inset-0 -z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <LetterGlitch
                    glitchSpeed={500}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                />
            </motion.div>

            {/* ⚫ Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/75 -z-10" />

            {/* 🧭 Navbar (fades in after DotGrid) */}
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
                />
            </motion.div>

            {/* ✨ Hero Content (appears after Navbar) */}
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
                    Crafting beautiful, functional, and high-performance digital experiences
                    that empower brands and engage audiences across the web.
                </p>
                <div className="mt-5 flex gap-4">
                    <button className="bg-white border-2 border-indigo-500 px-2.5 py-1.5 rounded-2xl w-[130px] text-black hover:bg-indigo-500 hover:text-white">Get Started</button>
                    <button className="px-2.5 py-1.5 border-2 rounded-2xl w-[130px] text-white hover:bg-white hover:text-indigo-500">Learn More</button>
                </div>

            </motion.div>


        </div>
    );
};

export default Hero;
