import React from 'react'
import SpotlightCard from '../components/SpotlightCard'
import { Mail, Instagram } from 'lucide-react'
import { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    // Main Form Handler
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "d41b55ea-3de2-48a0-8cdb-e56e2fceb77c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
        event.target.reset();
    };
    return (
        <div className='bg-black pt-5 text-white'>
            <SpotlightCard
                className="custom-spotlight-card w-screen flex flex-wrap justify-center"
                spotlightColor="rgba(0, 229, 255, 0.2) "
            >
                <div className="md:w-1/3 space-y-3 mb-3">
                    <h1 className="text-4xl font-bold ">Stay in Touch</h1>
                    <p className="text-gray-300 max-w-md">
                        We're here to help! Reach out to us for any inquiries, feedback, or collaboration opportunities.
                    </p>
                    <div className="mt-4">
                        <p className=" flex gap-2 max-w-md">
                            <Mail /> <a href="mailto:codixpro4@gmail.com" className="text-white hover:underline">codixpro4@gmail.com</a>
                        </p>
                        <p className="max-w-md flex gap-2 mt-2">
                            <Instagram /> <a href="https://www.instagram.com/codixpro/" className="text-white hover:underline">@codixpro</a>
                        </p>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="md:w-1/3 space-y-3 ">
                    <input

                        type="text"
                        name='Name'
                        placeholder="Enter Your Name"
                        className="placeholder:text-gray-400 border border-gray-300 w-full h-10 px-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-amber-50"
                    />
                    <input
                        type="email"
                        name='Email'
                        placeholder="Enter Your Email"
                        className="placeholder:text-gray-400 border border-gray-300 w-full h-10 px-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-amber-50"
                    />
                    <textarea
                        name='Message'
                        placeholder="Enter Your Message"
                        className="placeholder:text-gray-400 border border-gray-300 w-full h-40 px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-amber-50"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full h-10 rounded-3xl bg-white font-semibold hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition border-2 border-indigo-600 text-black"
                    >
                        Submit
                    </button>
                    <p className="text-white text-center">{result}</p>
                </form>

            </SpotlightCard>
        </div>
    )
}

export default Contact