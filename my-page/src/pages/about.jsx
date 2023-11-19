import React from 'react'
import Me from './../assets/me.png'

export default function about() {
    return (
        <div>
            <div className="flex justify-center w-full md:h-[250px] h-[250px]">
                <div className="flex flex-col justify-center h-full w-fit">
                    <img alt="name" src={Me} className="object-cover h-full w-[250px] rounded-full" />
                </div>
            </div>
            <h1 className="flex justify-center w-full text-8xl text-fourth/90 pt-10"> Who am I?</h1>
            <div className='flex flex-col justify-center items-center w-full h-full pt-10'>
                <div className='flex justify-center items-center w-2/3 h-fit'>
                    <text className='text-xl text-center text-fourth'>
                        I am a 24 year old swede currently trying to survive my fourth year of college. 
                 </text>
                </div>
            </div>
        </div>
    )
}
