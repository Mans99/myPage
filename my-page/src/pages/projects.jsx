import React, {useEffect, useState} from 'react'
import Grid from './blocks/grid'
export default function projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])


  return (
    <>
    <div className='flex flex-col items-center h-1/1'>
        <h1 className='text-fourth md:text-8xl sm:text-7xl text-7xl pb-10 md:mt-0 mt-10'> Projects</h1>
        <div className='flex items-center py-10 w-full h-fit'>
          <Grid />
        </div>
    </div>
    </>
  )
}
