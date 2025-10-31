import React from 'react'
import SpotlightCard from '../components/SpotlightCard'

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <h1 className="text-4xl font-bold text-white">What we offer</h1>
            <p className="text-white">Lorem ipsum dolor sit amet</p>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <h1 className="text-4xl font-bold text-white">Services</h1>
                <p className="text-white">Lorem ipsum dolor sit amet</p>
            </SpotlightCard>
        </div>
    )
}

export default Services
