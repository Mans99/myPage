import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function individual() {
    const location = useLocation();
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function line() {
        if (width > 768) {
            return "____________________________________________"
        } else if (width > 640) {
            return "__________________________________"
        } else {
            return "__________________________"
        }
    }






    return (
        <div className='flex flex-col items-center h-1/1'>
            <h1 className='text-fourth text-center md:w-3/4 w-full lg:text-8xl md:text-7xl sm:text-6xl text-5xl leading-normal mt-10'>{location.state.name}</h1>
            <div className='text-xl text-fourth/40 m-5'>{line()}</div>
            <div className='flex md:flex-row flex-col items-center py-10 w-5/6 h-fit'>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-5 items-center w-full h-fit'>
                    <div className='text-center'>
                        <p className='lg:text-5xl md:text-3xl text-2xl text-third'>Technologies</p>
                        <p className='text-fourth md:text-2xl text-lg sm:mt-2'>{location.state.technologies.join(", ")}</p>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-5xl md:text-3xl text-2xl text-third'>Language</p>
                        <p className='text-fourth md:text-2xl text-lg sm:mt-2'>{ } hello</p>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-5xl md:text-3xl text-2xl text-third'>Placeholder</p>
                        <p className='text-fourth md:text-2xl text-lg sm:mt-2'>{ }hello </p>
                    </div>

                </div>
            </div>
            <div className="w-2/3 h-fit sm:p-10 p-5">
                <p className='text-fourth text-center text-xl'>{location.state.description}</p>
            </div>
            <div className='px-8 py-3 lg:text-2xl sm:text-xl text-lg cursor-pointer  text-fourth font-semibold border rounded bg-focus hover:bg-secondary'>
                <a href={location.state.git} target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</a>
            </div>
            <div className='flex flex-col h-fit pt-5 md:w-full w-fit items-center justify-center'>
                <div className='grid md:w-fit w-fit h-fit items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1'>
                    {location.state.pictures.map((i) =>
                        <div key={i}>
                            <img src={`${location.state.src}${i}`} alt="" className='h-[350px] w-[250px] m-1 object-cover border border-black/10 shadow-sm rounded-lg'/>
                        </div>)}
                </div>
            </div>
        </div>
    )
}
