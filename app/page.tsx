'use client'
import { useState, useEffect } from 'react'
import { ArrowUpIcon, CalendarDaysIcon, HandRaisedIcon} from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import SupabaseForm from '../components/ui/supabaseForm';
import Image from 'next/image'
import Header from '@/components/main/header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Main() {
  return (
  <div className='bg-neutral-900 transition-colors duration-500'>
    {/*<Banner text="LATEST EVENTS: 24 Hours of Le Man's - WEC; Formula 1 Canadian Grand Prix - Qualifying at 10pm CET; NHL Edmonton Oilers vs Florida Panthers at 2am CET"
    speed={25}/> */}
    <div>
      <Header/>
    </div>

{/* DOCK NAVBAR FOR WEB APP 
    <div className='top-20 relative'>
    <DockBar/>
    </div>

{/* END NAVBAR 

{/* LATEST */}
<div className='relative h-dvh' id='Latest'>
  <div className="absolute top-0 z-[-2] h-370 w-full"></div>
      <h1 className='lg:text-7xl md:text-5xl max-md:text-5xl text-white relative max-md:top-10 lg:pt-15 pl-10 font-Exo-2'>latest</h1>
    <div className="relative top-20 max-sm:pl-11.5 lg:pl-12 max-md:pl-11.5 md:pl-0 grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
      <a href='/Motorsport/Formula-1/2025/Abu-Dhabi-Grand-Prix/Weekend-Preview'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/abu-dhabi-preview-MCL.jpg' className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 linear-90 text-orange-500 font-bold font-Exo-2'>Abu Dhabi Grand Prix - Weekend Preview</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
      </a> 
      <a href='/Motorsport/Formula-1/2025/Qatar-Grand-Prix/Race-Report'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Qatar2025.jpg' className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>Qatar Grand Prix - Race report</h3>
        <button className='relative lg:bottom-19 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
      </a> 
      <a href='/Motorsport/Formula-1/2025/Las-Vegas-Grand-Prix/Weekend-Report'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/LasVegas2025.avif' className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-12 text-white font-bold font-Exo-2'>Las Vegas Grand Prix - Race report</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
      </a> 
      <a href='/Reviews/Gaming/Silent-Hill-2-Remake'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Silent-hill-2.jpg' className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-17 text-gray-600 font-bold font-Exo-2'>Silent Hill 2 - Review</h3>
        <button className='relative lg:bottom-19 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
      </a> 
      <a href='/Reviews/Gaming/Where-Winds-Meet'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/WWMGame.jpg' className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Where winds meet - Review</h3>
        <button className='relative lg:bottom-19 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
      </a> 
      <a href='/Motorsport/Formula-1/2025/Brazilian-Grand-Prix/Weekend-Report'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Brazil2025.avif' className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Brazilian Grand Prix - weekend report</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
      </a> 
    </div>
   </div>
    {/* END LATEST */}

    {/* MOST POPULAR */}
          <div className='relative grid lg:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 w-full h-250 xl:top-40 lg:top-100 md:top-110 max-sm:top-330'>
           <div className='relative w-full'>
            <h3 className='lg:text-4xl text-center max-sm:text-5xl text-white relative max-md:top-0 lg:pt-10 pr-10 pb-0.5 max-sm:pb-2 font-Exo-2'>Trending</h3>
             <hr className='w-100 max-sm:w-70 left-37 max-sm:left-10 relative'/>
            <ul className='grid relative pl-27 max-sm:pl-0.5'>
            <li>
               <a href='/Reviews/Gaming/Ghost-of-Yotei'>
               <div className='w-100 h-65 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 rounded-3xl border-2 border-white -z-50'>
                  <span className='text-xl bg-opacity-60 bg-black/50 z-50 flex absolute top-61.5 max-sm:top-57 h-13 pl-5 rounded-b-3xl w-100 max-sm:w-79'>
                   Ghost of Yotei: Review
                  </span>                
                <img src="/assets/ghost-of-yotei.png" className='hover:scale-110 duration-250 object-cover w-full h-full -z-10'/>
               </div>
               </a>
            </li>
            <li>
               <a href='Motorsport/Formula-1/2025/Singapore-Grand-Prix/weekend-report'>
               <div className='w-100 h-65 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 rounded-3xl border-2 border-white -z-50'>
                  <span className='text-xl bg-opacity-60 bg-black/50 z-50 flex absolute top-146.5 max-sm:top-131 h-13 pl-5 rounded-b-3xl w-100 max-sm:w-79'>
                   Singapore Grand Prix - Weekend report
                  </span>                
                <img src="/assets/SingaporeGP2025.jpg" className='hover:scale-110 duration-250 object-cover w-full h-full -z-10'/>
               </div>
               </a>
            </li>
            <li>
               <a href='Motorsport/Formula-1/2025/American-Grand-Prix/weekend-report'>
               <div className='w-100 h-55 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 rounded-3xl border-2 border-white'>
                  <span className='text-xl bg-opacity-60 bg-black/50 z-50 flex absolute top-221 max-sm:top-195 h-13 pl-5 rounded-b-3xl w-100 max-sm:w-79'>
                   American Grand Prix - Weekend Report
                  </span>                
                <img src="/assets/cota2025.webp" className='hover:scale-110 duration-250'/>
               </div>
               </a>
            </li>
           </ul>
          </div>
          {/* TECH, REVIEW, ETC... */}
          <div className=' relative w-full'>
            <h3 className='lg:text-4xl text-center max-sm:text-5xl text-white relative max-md:top-0 lg:pt-10 max-sm:pt-20 pl-10 max-sm:pl-3 pb-0.5 max-sm:pb-2 font-Exo-2'>Editor's choice</h3>
            <hr className='w-100 max-sm:w-70 left-48 max-sm:left-10 relative'/>
            <ul className='grid relative pl-37 max-sm:pl-0.5'>
            <li>
               <a href='/Motorsport/Formula-1/2025/Azerbaijan-Grand-Prix'>
               <div className='w-100 h-65 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 rounded-3xl border-2 border-white -z-50'>
                  <span className='text-xl bg-opacity-60 bg-black/50 z-50 flex absolute top-61.5 max-sm:top-57 h-13 pl-5 rounded-b-3xl w-100 max-sm:w-79'>
                   Azerbaijan Grand Prix - Weekend report
                  </span>                
                <img src="/assets/bakuF1.jpg" className='hover:scale-110 duration-250 object-cover w-full h-full -z-10'/>
               </div>
               </a>
            </li>
            <li>
               <a href='/Reviews/Gaming/Ghost-of-Yotei'>
               <div className='w-100 h-65 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 rounded-3xl border-2 border-white -z-50'>
                  <span className='text-xl bg-opacity-60 bg-black/50 z-50 flex absolute top-146.5 max-sm:top-131 h-13 pl-5 rounded-b-3xl w-100 max-sm:w-79'>
                   Ghost of yotei: Review
                  </span>                
                <img src="/assets/ghost-of-yotei.png" className='hover:scale-110 duration-250 object-cover w-full h-full -z-10'/>
               </div>
               </a>
            </li>
            <li>
               <a href='Motorsport/Formula-1/2025/American-Grand-Prix/weekend-report'>
               <div className='w-100 h-55 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 rounded-3xl border-2 border-white'>
                  <span className='text-xl bg-opacity-60 bg-black/50 z-50 flex absolute top-221 max-sm:top-195 h-13 pl-5 rounded-b-3xl w-100 max-sm:w-79'>
                   American Grand Prix - Weekend report
                  </span>                
                <img src="/assets/cota2025.webp" className='hover:scale-110 duration-250'/>
               </div>
               </a>
            </li>
           </ul>
          </div>
        </div>
    {/* END MOST POPULAR */}

      {/* FOOTER */}
       <footer
       className="relative xl:top-40 lg:top-80 md:top-125 max-md:top-165 max-sm:top-580 h-full w-full text-center sm:footer-horizontal pt-10 text-black font-edu-vic-wa-nt-beginner p-10 text-2xl"
       id='Newsletter'>
          <div className="relative isolate overflow-hidden py-16 sm:py-24 max-sm:py-0 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-0">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Be notify at every event which happened recent days in motorsport, tech, gaming and more.
                  </p>
                  <SupabaseForm/>
                </div>
                <dl className="grid relative grid-cols-1 gap-x-8 gap-y-10 max-sm:pt-20 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      I’m publishing multiple articles every week on a variety of topics. Be the first to see them.
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      If you subscribe to our newsletter and later change your mind, don’t worry — you can unsubscribe at any time.
                    </dd>
                  </div>
                  <div className='relative grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 left-20 max-sm:left-0'>
                    <div className='grid lg:grid-cols-1 max-sm:left-0'>
                    <h3 className='text-white max-sm:pl-0'>Follow me on my journey</h3>
                    <ul className='flex gap-5 max-sm:gap-8 max-sm:pt-10 max-sm:pl-1 relative justify-center'>
                    <li>
                    <a href='https://www.instagram.com/harvancik_maxim/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10 hover:text-shadow-blue-400'>
                    <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg></a></li>
                    <li>
                      <a href='https://www.linkedin.com/in/maxim-harvancik-b1512a294/'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10'>
                        <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg></a></li>
                    </ul>
                    </div>
               </div>
                  <div className='flex relative'>
                    <ul className='grid grid-cols-1 gap-7 relative pl-20 max-sm:pl-19 justify-end text-white'>
                      <li className='hover:text-gray-400 duration-300'><a href='/Legal/Privacy-Policy'>Privacy Policy</a></li>
                      <li className='hover:text-gray-400 duration-300'><a href='/Legal/Terms-of-use'>Terms of use</a></li>
                      <li className='hover:text-gray-400 duration-300'><a href='/Contact'>Contact</a></li>
                    </ul>
                  </div>
                  <span>
                <a href="#top" className='absolute right-23'>
                  <ArrowUpIcon className='size-20 text-white hover:-translate-y-1 duration-200'/></a>
                  </span>
                </dl>
              </div>
            </div>
        </div>
        <div className='pt-10 max-sm:pt-0 absolute top-100 md:left-65 sm:left-20 max-sm:left-18'>
          <a href='/application-167c16ef-20d8-4555-98a0-3b864bd69ec4.apk' download>
          <button className='className="px-6 py-3 p-3 font-Exo-2 bg-background hover:bg-white text-white hover:text-black border-white border rounded-xl shadow-lg transition'>
            Download our app
          </button>
          </a>
        </div>
      </footer>
          <aside className="relative text-center items-baseline pr-20 xl:top-40 lg:top-80 md:top-125 max-md:top-165 max-sm:top-620 max-md:text-lg max-md:text-center max-sm:pl-18">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
</div>
  )
}