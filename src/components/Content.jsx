import React from 'react'
import CardProjectFirst from './CardProjectFirst'

export default function Content(prop) {
  return (
    <div style={{ '--theme_base_color': prop.theme.base_color, '--theme_para_text_color': prop.theme.para_text_color, '--theme_color': prop.theme.theme_color }}>
      <div className="relative isolate overflow-hidden bg-base-color px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">

        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 id='about' className="pt-8 text-3xl font-bold tracking-tight text-theme-color sm:text-4xl">About</h1>
                <p className="mt-6 text-xl leading-8 text-para-text-color">
                  Hi! I am currently pursuing a major in Computer Science at BITS Pilani, K. K. Birla Goa Campus. I have a passion for web design, UX design and full-stack web development.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://i.imgur.com/2rCrnDD.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-para-text-color lg:max-w-lg">
                <p>
                  Driven by a strong desire to deliver tangible results, I approach challenges head-on with a solution-focused mindset. I believe in striking a balance between optimism and realism, ensuring practicality while pushing the boundaries of creativity.
                  <br></br>
                  <br></br>
                  My goal is to create exceptional digital experiences that captivate users and leave a lasting impression. Through continuous learning and exploration, I stay at the forefront of new technologies and industry best practices, aiming to deliver cutting-edge solutions.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-para-text-color">
                  <li className="flex gap-x-3">
                    <span>
                      I am proficient in the following tech-stacks:
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-bold text-para-text-color">ReactJS:</strong> Experienced in using React to develop high-performance applications, utilizing its virtual DOM, component-based architecture, and state management capabilities to ensure optimal rendering and user interactions.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-bold text-para-text-color">JavaScript:</strong> Proficient in leveraging JavaScript to develop dynamic and interactive web applications. Skilled in utilizing JavaScript's robust functionality to create responsive and engaging user experiences.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-bold text-para-text-color">Tailwind CSS:</strong> Experienced in Tailwind CSS to create stylish and responsive web applications. Proficient in utilizing Tailwind CSS's utility-first approach and extensive class library to streamline development and achieve consistent and efficient styling across projects.
                    </span>
                  </li>
                </ul>
                <h2 id='projects' className="py-8 text-3xl font-bold tracking-tight text-theme-color sm:text-4xl">Projects</h2>
                  <CardProjectFirst />
                <h2 id='experience' className="pt-8 text-3xl font-bold tracking-tight text-theme-color sm:text-4xl">Experience</h2>
                <p className="mt-6">
                  Looking forward to fill this section with lots of new experiences as opportunities arrive.
                </p>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
                <p className="mt-6">
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                  Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                  tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                  turpis ipsum eu a sed convallis diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
