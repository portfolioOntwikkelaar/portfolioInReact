import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
const Home = () => {
  return (
    <div name='home' className='pt-24 w-full h-screen bg-[#070606]'>
      <div className="max-w-[1000px] mx-auto px-8 flex-col justify-center h-full">
        <p className='text-gray-600'>Je kan vind deze portfolio in mijn github account: ...</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Project 39</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#838383]'>Ik ben de webontwikkelaar</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Meestal ik shrijf in React. Dit is mijn 4e portfolio project.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 pr-2 my-2 flex items-center hover:bg-gray-600 hover:border-gray-600'>Overzicht <span className="group-hover:rotate-90 duration-300">
            <FaHandPointRight className="ml-3 "/>
            </span>
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home
