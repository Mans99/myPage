import React, { useEffect, useState } from "react";
import Me from "./../assets/me.png"
import 'reactjs-popup/dist/index.css'
import Download from "./buttons/download"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [text] = useTypewriter({
        words: ['Photografer', 'Foodie', 'Minnesota Vikings Supporter', 'Coffee Nerd', 'Amateur Mixologist', 'Sourdough Baker', 'Home cook'],
        loop: {},
    });

    return (


        <div className="flex justify-center max-h-screen w-screen">
            <div className="flex flex-col items-center w-full h-full">
                <div className="flex lg:space-x-16 md:space-x-12  sm:space-x-0 md:flex-row flex-col sm:justify-center items-center lg:pt-5 md:pt-5 pt-0 text-center w-full h-fit">
                    <div className="flex md:justify-end justify-center w-full md:h-[350px] h-[200px]">
                        <div className="flex flex-col justify-center h-full w-fit">
                            <img alt="name" src={Me} className="object-cover w-[200px] h-[200px]  md:w-[350px] lg:w-[350px] md:h-[350px] lg:h-full rounded-full" />
                        </div>
                    </div>
                    <div className="flex sm:pt-10 pt-5 sm:items-center sm:text-center  md:items-start md:text-left  flex-col w-full ">
                        <p className="font-bold text-fourth lg:text-8xl sm:text-6xl mb-5 text-5xl whitespace-pre-wrap">{`Hello, \nI'm Måns!`}</p>
                        <h1>
                            <div>
                                <span className="lg:text-4xl sm:text-2xl text-lg text-fourth">ML/Software Developer,</span>
                            </div>
                            <span className="lg:text-4xl sm:text-2xl text-lg text-fourth sm:text-left">Designer and {text}</span>
                            <span className="text-fourth lg:text-4xl sm:text-2xl text-lg">
                                <Cursor />
                            </span>
                        </h1>
                        <div className="flex pt-5 items-center justify-center flex-row space-x-4">
                            <Link to="/projects" className="px-8 py-3 lg:text-2xl sm:text-xl text-lg cursor-pointer text-fourth font-semibold border rounded bg-focus hover:bg-secondary">
                                Projects
                            </Link>
                            <div className="px-8 py-3 lg:text-2xl sm:text-xl text-lg text-fourth cursor-pointer font-semibold border rounded bg-focus hover:bg-secondary">
                                <Download />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home;

/**
<button
className="bg-secondary text-fourth border active:bg-pink-600 font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:bg-focus outline-none focus:outline-none mr-1 mb-1"
type="button"
onClick={() => setShowModal(true)}
>
Open regular modal
</button>  */
