import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import { ShoppingCart , BriefcaseBusiness, BadgeCheck} from 'lucide-react';
import { image } from 'framer-motion/client';

const Projects = () => {
    const projects = [
        {
            
            image: 'https://i.postimg.cc/mkcr5Dy9/Whats-App-Image-2025-11-02-at-13-52-11-d6dd04a8.jpg',
            title: "E-Commerce",
            desc: "Build your online store and boost sales growth with a seamless, secure, and scalable shopping experience tailored for your business.",
            buttons: ["Online Store", "Sales Growth"],
        },
        {
            link: 'https://github.com/Asifekhlaque/ThreeJsPlanetProject',
            image: 'https://i.postimg.cc/cCFh1Fp9/496550688-2c274f68-7157-4ce2-aa33-df640d80e2ee.png',
            title: "3D Website",
            desc: "Establish a strong online presence and drive client trust with a professional, high-performing website that represents your brand perfectly.",
            buttons: ["Online Presence", "Client Trust"],
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/InstaHashtag_vFinal.jpg?v=1571172233',
            title: "Social Media Management",
            desc: "Boost your brand’s engagement and expand your audience reach with strategic content, consistent posting, and real-time insights.",
            buttons: ["Engagement", "Audience Reach"],
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-10 bg-black">
            <h1 className="text-4xl font-bold text-white mb-2">Our Recent Projects</h1>
            <p className="text-gray-300 text-center max-w-md">
                A glimpse into what we’ve built for our clients.
            </p>

            <div className="flex flex-wrap justify-evenly gap-4 mt-6 px-2">
                {projects.map((item, index) => (
                    <SpotlightCard
                        key={index}
                        className="custom-spotlight-card w-[360px] md:w-[380px] mb-4"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.image && <img src={item.image} alt={item.title} className="w-full h-[200px] object-cover rounded-2xl mb-2" />}
                            <h1 className="text-2xl font-bold text-white">{item.title}</h1>

                        <p className="text-gray-200 text-[15px] leading-relaxed">{item.desc}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.buttons.map((btn, i) => (
                                <button
                                    key={i}
                                    className="px-3 py-1 text-white rounded-2xl border border-white text-[14px] transition-all hover:bg-white hover:text-black"
                                >
                                    {btn}
                                </button>
                            ))}
                            
                        </div>
                    </a>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
