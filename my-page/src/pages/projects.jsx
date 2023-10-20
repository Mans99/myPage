import React from 'react'
import Grid from './blocks/grid'

export default function projects() {
  return (
    <>
    <div className='flex flex-col items-center h-1/1'>
        <h1 className='text-fourth text-8xl pb-10'> Projects</h1>
        <div className='flex items-center py-10 w-full h-full'>
          <Grid/>
        </div>
    </div>
    </>
  )
}
