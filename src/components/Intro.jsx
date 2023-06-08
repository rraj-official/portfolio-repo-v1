import React, { useState, useEffect } from 'react'

const links = [
  { name: 'HIRE ME', href: 'mailto: rraj.official5@gmail.com' },
  // { name: 'RESUME', href: 'https://drive.google.com/file/d/1xfWVpsXueoPMTV-0z1CmL_IcJPHQxZR3/view?usp=sharing' },
]
const stats = [
  { name: 'Projects', value: '3' },
  { name: 'Hours of experience', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Loyalty', value: 'Unlimited' },
]

// const dark = { base_color: '#0F172A', para_text_color: '#899BB5', color: '#52CDCF' } //dark
// const light = { base_color: '#9ED8DB', para_text_color: 'black', theme_color: '#E8F1F2' } //light

export default function Intro(prop) {
  return (
    <div style={{ '--theme_base_color': prop.theme.base_color, '--theme_para_text_color': prop.theme.para_text_color, '--theme_color': prop.theme.theme_color }}>
      <div className=" isolate bg-gray-900 py-24 sm:py-32">
        <img
          src={prop.theme.image}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-light text-4xl tracking-normal text-white sm:text-7xl">Hi, I am Rohit.</h2>
            <p className="mt-6 text-2xl tracking-wide leading-8 text-theme-color">
              I am a web-developer, web designer <br></br>
              and a technology enthusiast.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="text-base font-semibold leading-7 text-white">
              {links.map((link) => (
                <a href={link.href}>
                  <button class="text-xl bg-theme-color hover:bg-[#52CDCF] text-white tracking-wide py-[5px] px-[12px] rounded-full font-normal">
                    {link.name}
                  </button>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className=" text-2xl leading-7 text-theme-color py-2">{stat.name}</dt>
                  <dd className="text-4xl  leading-9 tracking-normal text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

