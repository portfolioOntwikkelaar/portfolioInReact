import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
// import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Next from '../assets/next1.png';
import Bootstrap from '../assets/boots.png';
import Wordpress from '../assets/word.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#070606] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flxe flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Ervaring</p>
          <p className='py-4'>Hier je kan vinden... wat ik leerde</p>
        </div>
        <div className='w-full grid dridd-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt="FireBase icon" />
            <p className="my-4">FireBase</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto bg-white' src={Next} alt="Next icon" />
            <p className="my-4">Next</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto bg-white' src={Bootstrap} alt="Bootstrap icon" />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className='shadow-lg shadow-[#d343cf] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto bg-white' src={Wordpress} alt="Wordpress icon" />
            <p className="my-4">Wordpress</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
