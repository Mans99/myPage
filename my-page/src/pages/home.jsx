import React, { useState } from "react";
import Me from "./../assets/me.png"
import Icon from "./../assets/logo.png"
const Home = () => {
    const cards = [0, 1, 2, 3, 4, 5,6,7,8]
    return (
        <div className="bg-primary min-h-screen">
            <div className="flex justify-center h-40 text-fourth bg-gradient-to-t from-primary to-secondary w-screen">
                <img className="h-40 p-5" src={Icon} alt="" />
            </div>
            <div className="flex lg:flex-auto flex-col lg:flex-row justify-between min-h-full">
                <div className="flex flex-auto flex-col bg-secondary my-5 lg:my-20 lg:ml-20 lg:mr-10 text-center rounded-sm lg:py-0 lg:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold text-fourth sm:text-6xl">Welcome! I'm Måns:)
                    </h1>
                    <p className="mt-6 mb-8 text-lg text-fourth sm:mb-12">Software Developer, Designer and Food Lover
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-secondary/[0.6]">Projects</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-secondary/[0.6]">CV</a>
                    </div>
                </div>
                <div className="flex-auto w-20">

                </div>
                <div className="flex-auto w-full h-full bg-secondary lg:max-w-[800px] md:m-2">
                    <div className="bg-third grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-3 lg:justify-center g:py-2 h-full w-full">
                    {cards.map((i) => (
                        <div className="group perspective cursor-pointer bg-secondary" key={i}>
                            <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-700 aspect-h-4 aspect-w-3">
                                <div className="absolute backface-hidden rounded-lg  object-cover">
                                    <img className="rounded-lg inset-0" src={Me} alt="" />
                                </div>
                                <div className="absolute my-rotate-y-180 backface-hidden bg-fourth rounded-lg overflow-hidden h-full w-full">
                                    <div className="text-center flex flex-col items-center justify-center text-gray-800 px-2 pb-24">
                                        <h1 className="text-3xl font-semibold">The King's Man</h1>
                                        <p className="my-2">9.0 Rating</p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                            itaque assumenda saepe animi maxime libero non quasi, odit natus
                                            veritatis enim culpa nam inventore doloribus quidem temporibus
                                            amet velit accusamus.
                                        </p>
                                        <a rel="noopener noreferrer" href="#" className="px-4 my-2 py-3 text-sm text-fourth font-semibold border rounded bg-secondary hover:bg-secondary/[0.6]">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>

        </div>
    )
}
export default Home;

/**
 * 
 */