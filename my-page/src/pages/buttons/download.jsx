import React from 'react'

export default function download() {
  return (
    <>
    <a className='h-fit hover:text-third' href={"/cv.pdf"} download="Mans_cv" target='_blank' >CV</a>
    </>
  )
}
