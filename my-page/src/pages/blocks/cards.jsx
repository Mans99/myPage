import React from 'react'
import Me from '../../assets/me.png'
import { Link } from 'react-router-dom'
import Background from '../../assets/Wild_west/home_screen_background.jpg'

export default function cards() {
    const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8]



    return (
        <>
            {cards.map((i) => (
                <div key={i}>
                    <div className="group perspective" >
                        <section class="mx-auto w-fit p-1 group ">
                            <div class="w-[330px] h-fit hover:pl-1 transition-all duration-300">
                                <div class="relative overflow-hidden">
                                    <img class="h-96 w-full object-cover opacity-90 rounded-lg" src={Background} alt="" />
                                    <p className='absolute bottom-6 left-6 text-4xl text-fourth text-ellipsis'>Hej {i}</p>
                                    <div class="absolute rounded-lg h-full w-full bg-black/20 flex -bottom-10 group-hover:bottom-0 opacity-0 justify-center items-center group-hover:opacity-100 transition-all duration-600">
                                        <Link to="/individual" state={i} class="bg-focus hover:bg-primary -bottom-10 rounded-lg text-fourth mt-48 py-2 px-5 ">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            ))}
             <div className="group perspective" >
                        <section class="mx-auto w-fit p-1 group ">
                            <div class="w-[330px] h-fit transition-all duration-300">
                                <div class="relative overflow-hidden">
                                    <div class="h-96 w-full object-cover rounded-lg bg-secondary/40" src={Me} alt="" />
                                    <p className='absolute bottom-6 left-[110px] text-[250px] text-fourth/20 text-ellipsis'>? </p>
                                    <p className='absolute bottom-6 left-10 text-4xl text-fourth/70 text-ellipsis'>More To Come... </p>
                                </div>
                            </div>
                        </section>
                    </div>



        </>
    );

}




/**
 * <div className="group perspective cursor-pointer " >
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-700 p-1 h-[440px] w-[330px]">
                            <div className="absolute backface-hidden rounded-lg  object-cover">
                                <div className='relative'>
                                    <img className="rounded-lg inset-0" src={Me} alt="" />
                                    <p className='absolute bottom-6 left-6 text-4xl text-fourth text-ellipsis'>Hej {i}</p>
                                </div>
                            </div>
                            <div className="absolute my-rotate-y-180 backface-hidden bg-fourth rounded-lg overflow-hidden p-1 h-[440px] w-[330px]">
                                    <div className="flex flex-col items-center justify-center text-gray-800">
                                        <h1 className="text-3xl font-semibold">The King's Man</h1>
                                        <p className="">9.0 Rating</p>
                                        <p className=''>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                            itaque assumenda saepe animi maxime libero non quasi, odit natus
                                        </p>
                                        <Link to="/individual" className="text-md h-10 w-20 text-fourth pr-10 font-semibold border rounded bg-secondary  hover:bg-focus" state={i}> Test </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * <div className="group perspective cursor-pointer bg-secondary" key={i}>
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
                                            
                                        </p>
                                        <a rel="noopener noreferrer" href="#" className="px-4 my-2 py-3 text-sm text-fourth font-semibold border rounded bg-secondary hover:bg-focus">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div> */