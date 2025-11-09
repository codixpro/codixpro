import React, { useState } from "react";
import SpotlightCard from '../components/SpotlightCard'
import { Mail, Instagram } from 'lucide-react'
import { toast } from 'react-toastify'
const GoogleSheetForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scriptURL = "https://script.google.com/macros/s/AKfycbxu1JKGuNGBeBkxtF67b7UePB34oQJdhb1mj7qv37TxQqBF2aBXwY0JaYgtHPCQjiUa/exec";

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors", // add this line for Google Script CORS
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            setFormData({ name: "", email: "", message: "" });
            toast.success("Your message has been sent!");
            console.log("Form Submitted!");
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again.");
        }
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

                <form onSubmit={handleSubmit} className="md:w-1/3 space-y-3 ">
                    <input
                        name="name"
                        placeholder="Enter your name*"
                        onChange={handleChange}
                        value={formData.name}
                        required
                        className="placeholder:text-gray-400 border border-gray-300 w-full h-10 px-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-amber-50"
                    />
                    <input
                        name="email"
                        placeholder="Enter your email*"
                        onChange={handleChange}
                        value={formData.email}
                        required
                        className="placeholder:text-gray-400 border border-gray-300 w-full h-10 px-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-amber-50"
                    />
                    <textarea
                        name="message"
                        placeholder="Enter your message*"
                        onChange={handleChange}
                        value={formData.message}
                        required
                        className="placeholder:text-gray-400 border border-gray-300 w-full h-40 px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-amber-50"
                    ></textarea>
                    <button type="submit" className="w-full h-10 rounded-3xl bg-white font-semibold hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition border-2 border-indigo-600 text-black">
                        Submit
                    </button>
                </form>

            </SpotlightCard>
        </div>
    );
};

export default GoogleSheetForm;
