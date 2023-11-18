import React, { useEffect } from 'react'
import { useState } from 'react'
import Mail from '../buttons/mail'
import Icon from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

export default function navBar() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        console.log(width)
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);



    return (
        <>
            <div name="menu" className="flex justify-between bg-gradient-to-t from-primary to-secondary w-screen" >
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
                <div className="flex w-1/2 items-center text-fourth lg:text-3xl md:text-2xl text-3xl lg:space-x-10 sm:space-x-5 justify-end pr-5 md:pr-10">
                    {width < 768 ?
                        (<></>)
                        : (
                            <>
                                <Link to="/projects" className="hover:text-third">
                                    Projects
                                </Link>
                                <Mail />
                                <Link to="/" className="hover:text-third">
                                    About Me
                                </Link>
                            </>)
                    }
                    <Sidebar/>
                </div>
            </div>
        </>


    )
}
