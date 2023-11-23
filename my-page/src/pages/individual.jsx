import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

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
            <h1 className='text-fourth text-center md:w-3/4 w-full md:text-7xl sm:text-6xl text-5xl leading-normal mt-10'>{location.state.name}</h1>
            <div className='text-xl text-fourth/40 m-5'>{line()}</div>
            <div className='flex md:flex-row flex-col items-center py-10 sm:w-2/3 w-5/6 h-fit'>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-5 items-center w-full h-fit'>
                    <div className='text-center'>
                        <p className='lg:text-4xl md:text-3xl text-2xl text-third'>Technologies</p>
                        <p className='text-fourth text-xl sm:mt-2 text-md'>{location.state.technologies.join(", ")}</p>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-4xl md:text-3xl text-2xl text-third'>Language</p>
                        <p className='text-fourth text-xl sm:mt-2 text-md'>{ } hello</p>
                    </div>
                    <div className='text-center'>
                        <p className='lg:text-4xl md:text-3xl text-2xl text-third'>Placeholder</p>
                        <p className='text-fourth sm:text-xl text-lg sm:mt-2 text-md'>{ }hello </p>
                    </div>

                </div>
            </div>
            <div className="w-2/3 h-fit sm:p-10 p-5">
                <p className='text-fourth text-center text-xl'>{location.state.description}</p>
            </div>
            <div className='flex flex-col h-fit md:w-full w-fit items-center justify-center'>
            <div className='grid md:w-4/5 w-full h-fit lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1'>
                {location.state.pictures.map((i) =>
                    <div key={i}>
                        <img src={`${location.state.src}${i}`} alt="" className='h-[350px] w-[250px] p-1 object-cover rounded-lg'></img>
                    </div>)}
            </div>
            </div>
        </div>
    )
}
