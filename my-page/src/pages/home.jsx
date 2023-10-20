import React, { useEffect, useState } from "react";
import Me from "./../assets/me.png"
import 'reactjs-popup/dist/index.css'
import Download from "./buttons/download"
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {
    const [text] = useTypewriter({
        words: ['photografer', 'food lover', 'vikings fan', 'nerd', 'lover of Sara Saber'],
        loop: {},
    });

    return (
        <div className="bg-primary flex max-h-screen w-screen">
            <div className="flex space-x-16 sm:space-x-0 flex-col sm:justify-center items-center pt-20 md:flex-row text-center w-full h-fit">
                <div className="flex sm:justify-center justify-end w-full h-[450px] ">
                    <img alt="name" src={Me} className="object-cover w-[350px] lg:w-[450px] h-[350px] lg:h-full rounded-full" />
                </div>
                <div className="flex pt-5 items-center text-left sm:text-center flex-col w-full ">
                    <text className="font-bold text-fourth lg:text-8xl sm:text-7xl text-5xl">Hello!</text>
                    <text className="font-bold text-fourth pb-5 lg:text-8xl sm:text-7xl text-5xl">I'm Måns,</text>
                    <h1>
                        <div>
                            <span className="lg:text-4xl sm:text-2xl text-lg text-fourth">Software Developer,</span>
                        </div>
                        <span className="lg:text-4xl sm:text-2xl text-lg text-fourth sm:text-left">Designer and {text}</span>
                        <span className="text-fourth lg:text-4xl sm:text-2xl text-lg">
                            <Cursor />
                        </span>
                    </h1>
                    <div className="flex py-5 items-center justify-center flex-row space-x-4">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 lg:text-2xl sm:text-xl text-lg  text-fourth font-semibold border rounded bg-focus hover:bg-secondary">Projects</a>
                        <Download />
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
