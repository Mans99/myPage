import React, { useState } from "react";
import Me from "./../assets/me.png"
import Icon from "./../assets/logo.png"
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const cards = [0, 1, 2, 3, 4, 5,6,7, 8]
    return (
        <div className="bg-primary min-h-screen">
            <div className="flex justify-center h-40 text-fourth bg-gradient-to-t from-primary to-secondary w-screen">
                <img className="h-40 p-5" src={Icon} alt="" />
            </div>
            <div className="flex lg:flex-auto flex-col lg:flex-row justify-between min-h-full">
                <div className="flex flex-auto flex-col bg-secondary my-5 lg:my-20 lg:ml-20 lg:mr-10 text-center rounded-sm lg:py-0 lg:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold text-fourth sm:text-6xl">Welcome! I'm Måns:)
                    </h1>
                    <p className="mt-6 mb-8 text-lg text-fourth sm:mb-12">Software Developer, Designer and Food Lover
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-focus">Projects</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-focus">CV</a>
                    </div>
                </div>
                <div className="flex-auto w-20">

                </div>
                <div className="flex-auto w-full h-full bg-secondary lg:max-w-[800px] md:m-2">
                    <div className="bg-third grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-3 lg:justify-center g:py-2 h-full w-full">
                    {cards.map((i) => (
                        <div className="group perspective cursor-pointer bg-secondary" key={i}>
                            <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-700 aspect-h-4 aspect-w-3">
                                <div className="absolute backface-hidden rounded-lg  object-cover">
                                    <img className="rounded-lg inset-0" src={Me} alt="" />
                                </div>
                                <div className="absolute my-rotate-y-180 backface-hidden bg-fourth rounded-lg overflow-hidden h-full w-full">
                                    <div className="text-center flex flex-col items-center justify-center text-gray-800 px-2 pb-24">
                                        <h1 className="text-3xl font-semibold">The King's Man</h1>
                                        <p className="my-2">9.0 Rating</p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                            itaque assumenda saepe animi maxime libero non quasi, odit natus
                                            veritatis enim culpa nam inventore doloribus quidem temporibus
                                            amet velit accusamus.
                                        </p>
                                        <a rel="noopener noreferrer" href="#" className="px-4 my-2 py-3 text-sm text-fourth font-semibold border rounded bg-secondary hover:bg-focus">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
        
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-black/[0.2] focus:outline-none"
            onClick={() => setShowModal(false)}
         >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-fourth outline-none focus:outline-none" onClick={(e) => e.stopPropagation()}>
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-secondary text-fourth active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-focus outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    )
}
export default Home;


