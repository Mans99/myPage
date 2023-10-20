import React from 'react'
import Me from '../../assets/me.png'

export default function cards() {
    const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8]



    return (
        <>
            {cards.map((i) => (
                <div key={i}>
                    <div className="group perspective cursor-pointer " >
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-700 min-p-3 h-[440px] w-[330px]">
                            <div className="absolute backface-hidden rounded-lg  object-cover">
                                <div className='relative'>
                                    <img className="rounded-lg inset-0" src={Me} alt=""/>
                                    <p className='absolute bottom-6 left-6 text-4xl text-fourth text-ellipsis'>Hej</p>
                                </div>
                            </div>
                            <div className="absolute my-rotate-y-180 backface-hidden bg-fourth rounded-lg overflow-hidden p-3 h-[440px] w-[330px]">
                                <div className="text-center flex flex-col items-center justify-center text-gray-800 h-full w-full">
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
                    </div>
                </div>
            ))
            }
        </>
    );

}




/**<div className="group perspective cursor-pointer bg-secondary" key={i}>
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