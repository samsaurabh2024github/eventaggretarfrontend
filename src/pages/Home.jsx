

import React from 'react'

const Home = () => {
  return (
    <div>
         <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h2 className="text-6xl font-extrabold text-white max-w-4xl leading-tight">
        Transform Your Events <br />
        With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Real-Time Engagement</span>
      </h2>
      <p className="mt-6 text-gray-400 max-w-2xl text-lg">
        Eventria revolutionizes event management with instant RSVPs, live feedback, and actionable insights.
      </p>
      <div className="mt-10 flex gap-4">
        <button className="bg-gray-800 text-white px-8 py-3 rounded-xl font-medium border border-gray-700">Browse Events</button>
        <button className="bg-gray-700 text-white px-8 py-3 rounded-xl font-medium">Get Started Free</button>
      </div>
    </div>
        
    </div>
  )
}

export default Home