import React from 'react'
import SpotlightCard from '../components/SpotlightCard'

const AiTools = () => {
    return (
        <div className="p-2 flex flex-col items-center justify-center bg-black text-white "> {/* removed bg-black */}
            <SpotlightCard
                className="custom-spotlight-card w-full flex justify-center p-1.5"
                spotlightColor="rgba(0, 229, 255, 0.2)"
            >
                <div className="flex flex-col md:justify-start md:w-1/2 md:items-start items-center">
                    <h1 className="text-4xl font-bold mb-2 ">AI Tools</h1>
                    <p className="text-gray-300 max-w-md mb-2">AI Powerd Tools for your Business</p>
                    <button className="border-white border bg-indigo-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 md:w-1/2 w-full">Coming Soon</button>
                </div>
                <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aistudio.png" className="h-[200px] w-[200px]" alt="aistudio" />
            </SpotlightCard>
        </div>
    )
}

export default AiTools