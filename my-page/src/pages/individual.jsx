import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function individual() {
    const [photo, setPhoto] = useState({});
    const [description, setDescription] = useState('Hello');
    const location = useLocation();


    useEffect(() => {

    }, []);






    return (
        <div className='flex flex-col items-center h-1/1'>
            <h1 className='text-fourth text-8xl pb-10'> {description} {location.state}</h1>
            <div className='flex items-center py-10 w-full h-full'>
            </div>
        </div>
    )
}
