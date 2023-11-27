import React from 'react'
import Cards from './cards'

export default function grid(pro) {

    return (
        <div className="flex flex-auto justify-center w-fit h-fit px-10 md:m-2">
            <div className="grid grid-cols-1 mexs:grid-cols-2 me:grid-cols-4 mes:grid-cols-3 gap-3 justify-center g:py-2 h-fit w-fit">
                <Cards pro={pro}/>
            </div>
        </div>
    )
}
