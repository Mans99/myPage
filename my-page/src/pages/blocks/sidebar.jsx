import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Download from '../buttons/download';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars, faX } from '@fortawesome/free-solid-svg-icons'


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

  return (
    <>
      <div className={`top-0 right-0 fixed z-7 w-full h-full opacity-100 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`} onClick={() => setShowMenu(!showMenu)}></div>
      <div className={`top-0 right-0 z-10 w-[250px] bg-primary/95 fixed h-full  ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-300`}>
        <div className='flex flex-col space-y-5 h-full w-fit'>
          <div className='flex flex-col space-y-5 h-full w-fit mx-5 mt-28 text-4xl text-white'>
            <Link to="/" className="hover:text-third cursor-pointer" onClick={() => setShowMenu(false)}>
              Home
            </Link>
            <Link to="/projects" className="hover:text-third cursor-pointer" onClick={() => setShowMenu(false)}>
              Projects
            </Link>
            <Link to="/about" className="hover:text-third cursor-pointer" onClick={() => setShowMenu(false)} >
              About Me
            </Link>
            <div className="hover:text-third cursor-pointer">
              <Download />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-fourth/40 text-2xl pb-10 mx-5 space-y-4 w-full h-fit">
            <a className="w-fit h-fit hover:text-third" href={`mailto:${"mans.englund@live.se"}?subject=${encodeURIComponent("I'd like to connect") || ''}&body=${encodeURIComponent('') || ''}`}><FontAwesomeIcon icon={faEnvelope} /> Mail</a>
            <a className="w-fit h-fit hover:text-third" href="https://www.linkedin.com/in/mans-englund/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a className="w-fit h-fit hover:text-third" href="https://github.com/Mans99" target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</a>
            <a className="w-fit h-fit hover:text-third" href="https://gitlab.com/Mans99" target="_blank"><FontAwesomeIcon icon={faGitlab} /> GitLab</a>
          </div>
        </div>

      </div>
      <div className='flex top-12 right-10 z-10 hover:text-fourth/80 cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <div className='fixed z-30 flex items-center text-fourth/40 hover:text-third cursor-pointer right-10 top-16 text-3xl'><FontAwesomeIcon icon={faX} /></div> : <FontAwesomeIcon className="fixed z-30 w-14 h-14 flex items-center cursor-pointer right-10 top-12 md:mt-5" icon={faBars} />}
      </div>
    </>
  )
}

//
