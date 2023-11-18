import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Mail from '../buttons/mail'
import Download from '../buttons/download';


export default function sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (width > 760) {
      setShowMenu(false)
    }},[width])

  return (
    <>
      <div className={`top-0 right-0 z-10 w-[250px] bg-primary/95  text-white fixed h-full  ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-300`}>
        <div className='flex flex-col space-y-5 h-full w-full mx-5 mt-28'>
          <Link to="/" className="hover:text-third" onClick={()=>setShowMenu(false)}>
          Home
        </Link>
          <Link to="/projects" className="hover:text-third" onClick={()=>setShowMenu(false)}>
            Projects
          </Link>
          <Mail />
          <Link to="/" className="hover:text-third" onClick={()=>setShowMenu(false)} >
            About Me
          </Link>
          <div className="hover:text-third">
            <Download />
          </div>
        </div>
      </div>

      {width < 760 ? <>
        <div className='flex top-12 right-10 z-10 hover:text-fourth/80 cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <div className='fixed  z-30 flex items-center cursor-pointer right-10 top-12'>X</div> : <svg
      className="fixed  z-30 flex items-center cursor-pointer right-10 top-12"
      fill="#DDE6ED"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10" rx="5" ></rect>
      <rect y="30" width="100" height="10" rx="5" ></rect>
      <rect y="60" width="100" height="10" rx="5" ></rect>
    </svg>}
        </div> 
        </>  
        : <></>}
    </>
  )
}
