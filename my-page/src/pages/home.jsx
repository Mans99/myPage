import React, { useState } from "react";
import Me from "./../assets/me.png"
import Icon from "./../assets/logo.png"
import Grid from "./grid";
import Popup from "./popup";
import 'reactjs-popup/dist/index.css'
import Carousel from "./carousel"
import Mail from "./buttons/mail"
import Download from "./buttons/download"
import NavBar from "./blocks/navBar";

const Home = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <div className="flex flex-col bg-primary min-h-screen">

           <NavBar/>
           
            <div className="flex flex-col items-center bg-secondary min-h-full">
                <div className="flex flex-col justify-center bg-third text-center w-full">
                    <div class="w-full h-60 lg:h-80 sm:h-70">
                        <img alt="name" src={Me} className="object-cover mx-auto w-60 lg:w-80 sm:w-70 h-60 lg:h-80 sm:h-70 rounded-full" />
                    </div>
                    <h1 className=" py-5 font-bold text-fourth lg:text-7xl sm:text-6xl text-5xl">Welcome! I'm Måns:)
                    </h1>
                    <p className="my-1 lg:text-2xl sm:text-xl text-lg text-fourth">Software Developer, Designer and Food Lover
                    </p>
                    <div className="flex py-5 items-center justify-center flex-row space-y-0 space-x-4">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-focus">Projects</a>
                        <Download/>
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
