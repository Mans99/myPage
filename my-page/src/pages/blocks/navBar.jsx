import React, { useEffect } from 'react'
import { useState } from 'react'
import Icon from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Download from '../buttons/download'

export default function navBar() {



    return (
        <>
            <div name="menu" className="flex justify-between h-fit bg-gradient-to-t from-primary to-secondary w-screen" >
                <div className="flex h-50 py-10 pl-14 text-fourth">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className='h-28'>
                                    <img className="h-16 md:h-28" src={Icon} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
                <div className="flex flex-col w-1/2 text-fourth justify-center">
                    <Sidebar/>
                </div>
            </div>
        </>


    )
}


/**
 * {width < 900 ?
                        (<></>)
                        : (
                            <>
                            <div className="flex flex-row text-fourth/40 lg:text-3xl md:text-2xl text-3xl lg:space-x-10 sm:space-x-5 pt-8 pr-5 md:pr-10 w-full justify-end h-1/3">
                            <a className="hover:text-third" href="https://www.linkedin.com/in/mans-englund/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                            <a className="hover:text-third" href="https://github.com/Mans99" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                            <a className="hover:text-third" href="https://gitlab.com/Mans99" target="_blank"><FontAwesomeIcon icon={faGitlab}/></a>
                            <a className="hover:text-third" href={`mailto:${"mans.englund@live.se"}?subject=${encodeURIComponent("I'd like to connect") || ''}&body=${encodeURIComponent('') || ''}`}><FontAwesomeIcon icon={faEnvelope}/></a>
                                 
                            </div>
                            <div className='flex flex-row lg:text-4xl md:text-3xl text-3xl lg:space-x-10 sm:space-x-5 pt-5 pr-5 md:pr-10 w-full justify-end h-2/3'>
                                <Link to='/' className='h-fit hover:text-third'>Home</Link>
                                <Link to="/projects" className="h-fit hover:text-third">
                                    Projects
                                </Link>
                                <Link to="/about" className="h-fit hover:text-third">
                                    About Me
                                </Link>
                                <Download className="h-fit"/>
                            </div>
                            </>)
                    }
 */