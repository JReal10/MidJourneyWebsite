import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo,menu} from '../assets'

function Navbar() {

  const [active, setActive] = useState('')
  const [toggle,setToggle] = useState(false)

  return (
  <nav
    className = {`${styles.paddingX} w-full flex items-center fixed top-0 z-20 backdrop-blur backdrop-filter bg-gradient-to-b from-white/30 to-transparent`}>
      <div className = "w-full flex justify-between items-center max-w-7xl mx-auto">
       <div className='flex items-center gap-3'>
       <Link
        to = "/"
         onClick={()=> {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt='logo' className='w-32 h-32 object-contain' />
        </Link>
        </div>

        <ul className = "list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) =>( 
          <li
            key = {Link.id}
            className={`${
              active === Link.title ? "text-white glow-effect" : "text-white"
            }`} 
            onClick = {()=> setActive(Link.title)}>
              
            <a href = {`#${Link.id}`}> {Link.title}</a>
          </li>))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === Link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
       </div>
  </nav>
  )
}

export default Navbar