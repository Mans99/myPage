import React from 'react'
import Mail from '../buttons/mail'
import Icon from '../../assets/logo.png'
import { Link, Outlet } from 'react-router-dom'

export default function navBar() {
    return (
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
                <div className="flex w-1/2 items-center justify-end space-x-4 pr-5 md:pr-10">
                    <Link to="/projects" className="text-fourth text-xl hover:text-third">
                        Projects
                    </Link>
                    <Mail />
                    <Link to="/" className="text-fourth text-xl hover:text-third">
                        About Me
                    </Link>

                    <div />
                </div>
            </div>
    )
}
