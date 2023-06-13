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

