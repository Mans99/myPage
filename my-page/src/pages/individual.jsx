import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Me from "./../assets/me.png"

export default function individual() {
    const [photo, setPhoto] = useState({});
    const [description, setDescription] = useState('Hello');
    const location = useLocation();

    let list = [0,1,2,3,4,5,6,7]


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])






    return (
        <div className='flex flex-col items-center h-1/1'>
            <h1 className='text-fourth text-8xl pb-10'> {description} {location.state}</h1>
            <div className='flex md:flex-row flex-col items-center py-10 w-2/3 h-fit'>
                <div className='flex sm:flex-row flex-col items-center w-full h-fit justify-between'>
                    <p className='lg:text-4xl md:text-3xl sm:text-2xl text-3xl p-2 sm:p-0 text-third'>Technologies</p>
                    <p className='lg:text-4xl md:text-3xl sm:text-2xl text-3xl p-2 sm:p-0 text-third'>Language</p>
                    <p className='lg:text-4xl md:text-3xl sm:text-2xl text-3xl p-2 sm:p-0 text-third'>placeholder</p>
                </div>
            </div>
            <div className="w-2/3 h-fit sm:p-10 p-5">
                    <p className='text-fourth/80 text-center text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim gravida mi, in facilisis velit aliquet eu. Integer sagittis tempus ipsum, a semper ligula dictum sit amet. Nulla fringilla tempor metus, in porta augue imperdiet non. Quisque ut nunc eu arcu ornare viverra. Mauris laoreet felis sit amet eleifend pharetra. In rhoncus massa ut fringilla vestibulum. Integer est sapien, laoreet id mi sit amet, faucibus consectetur nisi. Vivamus eu fermentum sapien, ultrices laoreet nisl. Nullam lacinia consectetur leo, nec gravida sapien rhoncus vel. Fusce in tortor odio. Etiam at hendrerit felis, in sodales est. Aliquam ut erat eu justo elementum ornare at maximus dolor. Cras ultricies tempus tortor, bibendum hendrerit mauris. Donec id condimentum odio. Maecenas vitae nisl nulla. Mauris quis eros eu eros faucibus aliquet vitae a mauris.

Maecenas lacus est, bibendum non vulputate in, posuere sed est. Curabitur ullamcorper mi sed gravida pretium. Maecenas iaculis justo vitae quam tempus, sit amet venenatis ex tincidunt. Vivamus sem turpis, fermentum at pulvinar in, luctus sit amet orci. Etiam quis convallis purus. Nam massa libero, faucibus vitae convallis ac, viverra ut risus. Aenean mollis massa convallis sapien dignissim, eget euismod dolor vulputate. Cras dictum nisl sit amet consequat sodales. Vestibulum ligula.</p>
                </div>
                <div className='grid w-fit h-fit lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 justify-'>
                    {list.map((i) => 
                    <div key={i}>
                        <img src={Me} alt="" className='max-h-72 p-1'></img> 
                    </div>)}
                </div>
        </div>
    )
}
