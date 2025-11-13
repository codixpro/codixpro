import React from 'react'
import SpotlightCard from '../components/SpotlightCard'
import ChromaGrid from '../components/ChromaGrid'

const Team = () => {
    const items = [
        {

            title: "Vishal Kumar",
            subtitle: "Vibe Coder",
            handle: "@30.3320n.77.9809e",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(180deg, red, #000)",
            url: "https://github.com/ltvishalkumar8067-tech"
        },
        {
            title: "Asif Ekhlaque",
            subtitle: "MERN Stack Developer",
            handle: "@asifekhlaque4",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(180deg, #0d00ff, #000)",
            url: "https://github.com/asifekhlaque"
        },
        {
            title: "Ajay Gupta",
            subtitle: "PHP Developer",
            handle: "@its_unconquered_044",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, green, #000)",
            url: "https://github.com/ajaygupta8434"
        },
        {
            title: "Ritik Kumar",
            subtitle: "Frontend Developer",
            handle: "@ritikkk_ydv4921",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #ffb700, #000)",
            url: "https://www.instagram.com/ritikkk__ydv4921/"
        },
        {
            title: "Shubham Kumar",
            subtitle: "Social Media Manager",
            handle: "@the_shivam_y",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg,#9000ff , #000)",
            url: "https://www.instagram.com/the_shivam_y/"
        },
        {
            title: "Manshi Kumari",
            subtitle: "DevOps Engineer",
            handle: "@manshi",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #ff00d0, #000)",
            url: "https://linkedin.com/in/manshi-kumari-971799284"
        },
        {
            title: "Ritika Jha",
            subtitle: "Full Stack Developer",
            handle: "@ritika_kumari",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #ff7300, #000)",
            url: "https://www.linkedin.com/in/ritika-kumari-2b6871338/"
        },
    ];

    return (
        <div className="p-2 flex flex-col items-center justify-center bg-black ">
            <SpotlightCard
                className="custom-spotlight-card w-full flex flex-wrap justify-center p-1.5"
                spotlightColor="rgba(0, 229, 255, 0.2)"
            >
                <div>
                    <div>
                        <h1 className="text-4xl font-bold text-white">Meet Our Team</h1>
                        <p className="text-gray-300 max-w-md">
                            Our team of experts brings a wealth of knowledge and experience to the table,
                            ensuring you receive the best possible service and results.
                        </p>
                    </div >

                    {/* <img src="https://i.postimg.cc/bNWRcVdz/Whats-App-Image-2025-11-13-at-19-03-43-b81de0f6.jpg" alt="team" className="h-[220px] w-[400px] object-cover rounded-2xl border-2 border-gray-50 mt-2 mb-2" /> */}


                </div>

                <div className="md:w-2/3 flex flex-wrap justify-center items-center"> {/* clean layout */}
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
