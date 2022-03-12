import React,{useState} from 'react'
import { FaBars, FaTimes, FaGithubAlt } from "react-icons/fa";
import { GiAquarius } from "react-icons/gi";
import { SiTelegram } from "react-icons/si";
import { ImVimeo2, ImYoutube2 } from "react-icons/im";
import Logo from '../assets/VI.png'
const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#070606] text-gray-300'>
      <div>
        <img src={Logo} alt="img" style={{width: '90px'}} />
      </div>
      
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Exp.</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <GiAquarius /> : <FaTimes />}
      </div>
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#070606] flex flex-col justify-center items-center'} >
      <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Exp.</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
      </ul>
      <div className='hidden lg:flex fixed flrex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
            <a href="/" className="flex justify-between items-center w-full text-gray-300">
              Vimeo <ImVimeo2 size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
            <a href="/" className="flex justify-between items-center w-full text-gray-300">
              Telegram <SiTelegram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-red-600'>
            <a href="/" className="flex justify-between items-center w-full text-gray-300">
              YouTube <ImYoutube2 size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-orange-600'>
            <a href="/" className="flex justify-between items-center w-full text-gray-300">
              GitHub <FaGithubAlt size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
