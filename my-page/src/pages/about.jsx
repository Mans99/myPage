import React from 'react'
import Me from './../assets/me.png'
import { useEffect } from 'react'

export default function about() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="flex justify-center w-full md:h-[250px] h-[200px]">
                <div className="flex flex-col justify-center h-full w-fit">
                    <img alt="name" src={Me} className="object-cover h-full md:w-[250px] w-[200px] rounded-full" />
                </div>
            </div>
            <h1 className="flex justify-center w-full sm:text-8xl text-6xl text-fourth/90 pt-7"> Who am I?</h1>
            <div className='flex flex-col justify-center items-center w-full h-full pt-7'>
                <div className='flex justify-center items-center w-2/3 h-fit'>
                    <p className='text-xl text-center mb-5 text-fourth whitespace-pre-wrap'>
                        {`I am a 24 year old swede currently trying to survive my fourth year of college. There I hope to get a M.Sc Information- & Communication technologies degree with an emphasis on Software development. If I had  to describe myself I would say that I am a positive and curious person with a wide array of interests. Living by the mantra that things become more enjoyable the more you know about them.
                        \nRecently I've decided to try to put what I learnt into practice which is why I created this website, in order to display them to the world.
                        \nIf you'd like to know more I suggest you download my cv or, even better, hit me up with an e-mail.`}
                 </p>
                </div>
            </div>
        </div>
    )
}
