import React from 'react'
import Cards from './cards'
import Me from './../assets/me.png'

export default function grid() {

    return (
        <div className="flex-auto w-full h-full bg-secondary lg:max-w-[800px] md:m-2">
            <div className="bg-third grid grid-cols-2 sm:grid-cols-3 gap-3 lg:justify-center g:py-2 h-full w-full">
                <Cards/>
            </div>
        </div>
    )
}
