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
                            <div className="w-[330px] h-fit transition-all duration-300">
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