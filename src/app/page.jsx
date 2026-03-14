'use client'
import { useState } from 'react'

export default function Home() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="container mx-auto relative">
                <h1 className="text-5xl font-bold text-orange-400 text-center mt-32 p-">
                    Hello, Tailwind!
                </h1>
                <button
                    className="bg-orange-500 rounded block mt-10 mx-auto border border-white/50 border-solid hover:bg-orange-400 transition-colors ease-in-out duration-300"
                    onClick={(e) => setShow((prev) => !prev)}
                >
                    Show modal
                </button>

                <div className="bg-blue-400 mt-5 w-24 h-32 animate-pulse">
                    Width & Height
                </div>
                <div className="flex justify-between gap-5">
                    <div className="bg-blue-300 w-20 h-20" />
                    <div className="bg-blue-300 w-20 h-20" />
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-blue-500 h-20" />
                    <div className="bg-blue-500 h-20" />
                </div>

                {show && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
                        <div className="mt-10 bg-white/80 rounded w1/2 p-5">
                            <h1>Modal window</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nisi id odio numquam quo
                                corporis minus inventore ad sequi ipsam aliquam
                                pariatur similique facere reiciendis, rem at
                                soluta nulla. Magni, sapiente.
                            </p>
                            <button
                                className="bg-orange-500 rounded block mt-10 mx-auto border border-white/50 border-solid hover:bg-orange-400 transition-colors ease-in-out duration-300"
                                onClick={(e) => setShow((prev) => !prev)}
                            >
                                Hide modal
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
