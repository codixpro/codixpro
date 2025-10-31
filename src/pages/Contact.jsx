import React from 'react'
import SpotlightCard from '../components/SpotlightCard'
import { Mail, Instagram } from 'lucide-react'

const Contact = () => {
  return (
    <div className='bg-black pt-5 h-screen w-screen flex justify-center'>
        <SpotlightCard
                        className="custom-spotlight-card w-screen h-screen flex flex-wrap"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <div>
                        <h1 className="text-4xl font-bold text-white">Stay in Touch</h1>
                        <p className="text-gray-300 max-w-md">
                            We're here to help! Reach out to us for any inquiries, feedback, or collaboration opportunities.
                        </p>
                        <div className="mt-4">
                            <p className="text-white flex gap-2 max-w-md">
                                <Mail /> <a href="mailto:codixpro4@gmail.com" className="text-white hover:underline">codixpro4@gmail.com</a>
                            </p>
                            <p className="text-white max-w-md flex gap-2 mt-2">
                                <Instagram /> <a href="tel:123-456-7890" className="text-white hover:underline">@codixpro</a>
                            </p>
                        </div>
                        </div>
                        <div>
                        <input type="text" className='border border-gray-300 w-full h-10 p-2 rounded-3xl ' placeholder='Enter Your Name'/>
                        <input type="text" className='border border-gray-300 w-full h-10 p-2 rounded-3xl ' placeholder='Enter Your Email' />
                        <button type="submit" className='border border-gray-300 w-full h-10 p-2 rounded-3xl bg-white hover:bg-gray-200'>Submit</button>
                        </div>
                    </SpotlightCard>
    </div>
  )
}

export default Contact