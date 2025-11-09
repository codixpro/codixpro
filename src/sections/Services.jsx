import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import { ShoppingCart , BriefcaseBusiness, BadgeCheck} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <ShoppingCart className="w-9 h-9 text-white" />,
            title: "E-Commerce",
            desc: "Build your online store and boost sales growth with a seamless, secure, and scalable shopping experience tailored for your business.",
            buttons: ["Online Store", "Sales Growth"],
        },
        {
            icon: <BriefcaseBusiness  className="w-9 h-9 text-white" />,
            title: "Business Website",
            desc: "Establish a strong online presence and drive client trust with a professional, high-performing website that represents your brand perfectly.",
            buttons: ["Online Presence", "Client Trust"],
        },
        {
            icon: <BadgeCheck  className="w-9 h-9 text-white" />,
            title: "Social Media Management",
            desc: "Boost your brand’s engagement and expand your audience reach with strategic content, consistent posting, and real-time insights.",
            buttons: ["Engagement", "Audience Reach"],
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-10 bg-black">
            <h1 className="text-4xl font-bold text-white mb-2">What We Offer</h1>
            <p className="text-gray-300 text-center max-w-md">
                Explore our range of digital solutions designed to elevate your business presence online.
            </p>

            <div className="flex flex-wrap justify-evenly gap-4 mt-6 px-2">
                {services.map((item, index) => (
                    <SpotlightCard
                        key={index}
                        className="custom-spotlight-card w-[360px] md:w-[380px]"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <div className="flex items-center space-x-4 mb-3">
                            {item.icon}
                            <h1 className="text-2xl font-bold text-white">{item.title}</h1>
                        </div>

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
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
