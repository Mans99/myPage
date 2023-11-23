import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './../../assets/projects.json'

export default function cards(pro) {
    const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8]



    return (
        <>
            {Object.keys(Projects).map((i) => (
                <div key={i}>
                    <div className="group perspective" >
                        <section className="mx-auto w-fit p-1 group ">
                            <div className="w-[330px] h-fit hover:pl-1 transition-all duration-300">
                                <div className="relative overflow-hidden shadow-2xl shadow-black/20">
                                    <img className="h-96 w-full object-cover rounded-lg" src={`${Projects[i].src}${Projects[i].pictures[0]}`} alt="" />
                                    <p className='absolute bottom-6 z-10 left-6 text-4xl text-fourth text-ellipsis'>{i}</p>
                                    
                                    
                                    <Link to="/individual" state={Projects[i]} className="absolute rounded-lg h-full w-full bg-black/30 flex bottom-0 opacity-50 justify-center items-center group-hover:opacity-0 transition-all duration-600"/>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            ))}
             <div className="group perspective" >
                        <section className="mx-auto w-fit p-1 group ">
                            <div className="w-[330px] h-fit transition-all  duration-300">
                                <div className="relative overflow-hidden shadow-2xl">
                                    <div className="h-96 w-full object-cover rounded-lg bg-secondary/40"/>
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