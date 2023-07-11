import React, { useState } from "react";
import Me from "./assets/me.png"
import Icon from "./../public/logo.png"
const Home = () => {
    return (
        <div className="bg-primary min-h-screen">
            <div className="w-screen max-h-20">
                <img class="max-h-40 pl-10" src={Icon} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
                <div className="flex flex-auto flex-col  my-20 pl-20 pr-20 text-center rounded-sm lg:py-0 lg:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold text-fourth leadi sm:text-6xl">Welcome! I'm Måns:)
                    </h1>
                    <p className="mt-6 mb-8 text-lg text-fourth sm:mb-12">Software Developer, Designer and Food Lover
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-secondary/[0.6]">Projects</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-secondary/[0.6]">CV</a>
                    </div>
                </div>
                <div className='flex-auto w-10'></div>
                <div className="flex lg:items-center lg:justify-center lg:py-2 lg:pr-2 lg:mt-8 h-fit">
                    <div class="grid grid-cols-3 gap-2">

                        <div className="transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div>
                                <img class="h-auto max-w-full rounded-lg transition-full " src={Me} alt="" />
                            </div>
                            <div className="absolute inset-0 max-w-full [transform:rotateY(180deg)] [backface:visibility:hidden]">
                            </div>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg transition-full hover:rounded-lg hover:blur-xs" src={Me} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg transition-full hover:rounded-lg hover:blur-xs" src={Me} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg transition-full hover:rounded-lg hover:blur-xs" src={Me} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg transition-full hover:rounded-lg hover:blur-xs" src={Me} alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg transition-full hover:rounded-lg hover:blur-xs" src={Me} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home;