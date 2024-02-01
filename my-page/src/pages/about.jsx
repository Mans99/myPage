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
                        {`I am a 24-year-old Swede pursuing an engineering degree in information- & Communication Technologies. Currently, I'm in my fourth year looking to graduate with a master's in Software Development. In the future, I hope to work in the field of AI and help harness the possibilities it presents.
                        \nI created this website partly as a challange for myself and also as a way to display my projects to the world. In the future most projects will be centered around Machine Learning, so if that interests you be sure to check in every so often:) 
                        \nIf you'd like to know more I suggest you download my CV or, even better, hit me up with an e-mail.`}
                 </p>
                </div>
            </div>
        </div>
    )
}
