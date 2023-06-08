import React from 'react'

const CardProjectFirst = () => {
    return (
        <a href='http://localhost:3000/'>
            <div className="max-w-sm w-full lg:max-w-full lg:flex cursor-pointer border border-[#0F172A] rounded">
                <div
                    className="h-full
                w-full flex lg:rounded-t-none lg:rounded-l text-center overflow-visible"
                    title="Portfolio project"
                ><img src='https://i.imgur.com/FLU12uz.png' className='object-scale-cover'></img></div>
                <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                    <div className="mb-0">
                        <p className="text-[10px] text-[#52CDCF]">
                            <svg
                                className="fill-current text-gray-500 w-3 h-3 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M64 2C31.765 2 4 29.764 4 62s27.765 60 60 60 60-27.764 60-60S96.235 2 64 2zm32.22 90.12c-3.07 2.9-7.85 5.3-13.6 5.3-10.14 0-18.34-8.57-18.34-19.5 0-10.3 7.6-19 17.83-19 4.7 0 8.46 1.74 11.1 4.53l-3.56 3.46c-1.73-1.65-4.15-2.68-7.1-2.68-5.7 0-10.36 4.8-10.36 11.08 0 6.28 4.66 11.08 10.36 11.08 3.15 0 5.52-1.27 7.04-3.1v-6h-8.3v-8h14.6v20.74zM54.4 70.96c0 8.66 6.65 14.9 15.44 14.9 4.95 0 8.33-1.48 10.54-3.1l-3.3-3.56c-1.3 1-3.07 1.82-7 1.82h-.15c-6.66 0-11.36-4.75-11.36-11.3 0-7.7 6.2-12.87 15.5-12.87v-.15c9.18 0 15.14 4.93 15.14 14.34v2h-22.6v-1.92zm-.08-33.5c0 8.68 6.2 13.1 15.25 13.1 5.44 0 8.5-1.03 11.3-2.68l-2.83-4.07c-1.65 1.38-3.65 2.2-8.02 2.2h-.15c-6.52 0-11.15-4.4-11.15-11.23 0-6.82 4.8-12.2 12.3-12.2 4.93 0 7.46 1.5 9.83 2.98l2.88-3.95c-3.02-2.05-7.05-3.45-12.9-3.45-10.48 0-16.86 6.6-16.86 16.2v.07z" />
                            </svg>
                            Powered by ReactJS
                        </p>
                        <div className="text-black font-semibold text-2xl tracking-wide mb-1">
                            Personal Portfolio
                        </div>
                        <p className="text-[#566c8a] font-light text-sm tracking-wide">
                            Built a dynamic personal portfolio website using ReactJS and tailwindCSS, incorporating custom components and state variables for seamless user experience demonstrating expertise in front-end development using modern frameworks and libraries.
                        </p>
                    </div>
                </div>
            </div>
        </a>

    )
}

export default CardProjectFirst