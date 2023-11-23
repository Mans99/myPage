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
                    <p className='text-xl text-center text-fourth whitespace-pre-wrap'>
                        {`I am a 24 year old swede currently trying to survive my fourth year of college. There I hope to get a M.Sc Information- & Communication technologies degree with an emphasis on Software development. If I had  to describe myself I would say that I am a positive and curious person with a wide array of interests. Living by the mantra that things become more enjoyable the more you know about them.  \n\nRecently I've decided to try to put what I learnt into practice which is why I created this website, in order to display them to the world. \n\nIf you'd like to know more I suggest you download my cv or, even better, hit me up with an e-mail. 

                        `}


                 </p>
                </div>
            </div>
        </div>
    )
}
