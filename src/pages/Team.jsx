import React from 'react'
import SpotlightCard from '../components/SpotlightCard'
import ChromaGrid from '../components/ChromaGrid'

const Team = () => {
    const items = [
        {
            
            title: "Vishal Kumar",
            subtitle: "Software Analyst Engineer",
            handle: "@vishalkumar",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(180deg, red, #000)",
            url: "https://github.com/itvishalkumar8067"
        },
        {
            title: "Asif Ekhlaque",
            subtitle: "MERN Stack Developer",
            handle: "@asifekhlaque",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(180deg, #0d00ff, #000)",
            url: "https://github.com/asifekhlaque"
        },
        {
            title: "Ajay Gupta",
            subtitle: "PHP Developer",
            handle: "@ajaygupta",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, green, #000)",
            url: "https://github.com/ajaygupta8434"
        },
        {
            title: "Ritik Kumar",
            subtitle: "Frontend Developer",
            handle: "@ritik",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #ffb700, #000)",
            // url: "https://linkedin.com/in/mikechen"
        },
        {
            title: "Shubham Kumar",
            subtitle: "Social Media Manager",
            handle: "@shubhamkumar",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg,#9000ff , #000)",
            // url: "https://linkedin.com/in/mikechen"
        },
        {
            title: "Manshi Kumari",
            subtitle: "DevOps Engineer",
            handle: "@manshi",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #ff00d0, #000)",
            // url: "https://linkedin.com/in/mikechen"
        },
    ];

    return (
        <div className="p-2 flex flex-col items-center justify-center "> {/* removed bg-black */}
            <SpotlightCard
                className="custom-spotlight-card w-full flex flex-wrap justify-center p-1.5"
                spotlightColor="rgba(0, 229, 255, 0.2)"
            >
                <div>
                <h1 className="text-4xl font-bold text-white">Meet Our Team</h1>
                <p className="text-gray-300 max-w-md">
                    Our team of experts brings a wealth of knowledge and experience to the table,
                    ensuring you receive the best possible service and results.
                </p>
                </div>

                <div className="md:w-2/3 mt-4 flex flex-wrap justify-center"> {/* clean layout */}
                    <ChromaGrid
                        items={items}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </SpotlightCard>
        </div>
    )
}

export default Team
