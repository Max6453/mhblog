'use client'
import { useState } from 'react'
import { CalendarDaysIcon, HandRaisedIcon, ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import 'ldrs/react/LineWobble.css'
import SupabaseForm from '@/components/ui/supabaseForm';
import DockBar from '@/components/ui/Dock'

const navigation = [
  { name: 'Latest', href: '/', current: false, id: 1 },
  { name: 'Motorsport', href: '/Motorsport', current: false, id: 2 },
  { name: 'Tech', href: '/', current: false, id: 3 },
  { name: 'gaming', href: '/Reviews/Gaming', current: true, id: 4 },
  { name: 'Reviews', href: '/Reviews', current: true, id: 5 },
  { name: 'Formula 1 Analysis', href: 'https://maximharvancik.vercel.app', current: true, id: 6 },
  { name: 'Contact', href: '/Contact', current: true, id: 7 },
  { name: 'Newsletter', href: '#Newsletter', current: true, id: 8 },
];
export default function Motorsport() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return( 
        <div>
                <header className="relative top-0 dark:text-white">
             <nav aria-label="Global" className="flex items-center justify-between lg:px-8 h-70 border-b-2">
              <div className='text-5xl left-110 max-sm:left-15 text-center dark:text-white font-edu-vic-wa-nt-beginner relative'>
                <h1 className='font-bold font-raleway text-center'>MHBlog</h1>
                <h3 className='text-3xl max-sm:text-2xl max-sm:w-60'>Latest news and intrigues across many topics</h3>
              </div>
              <a href='/'>
              <img
              src= "/mobileIcon-black.png"
              className='h-32 max-sm:h-25 w-auto hover:scale-110 top-52 max-sm:top-56 right-175 max-sm:right-33.5 transition-all duration-300 absolute sm:hidden md:hidden lg:hidden xl:block'/>
              </a>
              <div className="absolute right-5 pt-10 pr-5 max-md:pr-0 max-md:right-0 max-md:pt-25">
                <button
                id='openBtn'
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="bottom-5 relative icon-default inline-flex items-center justify-center rounded-md p-2.5 text-white z-50 animation duration-300 transform transition-all"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-10 block hover:-scale-y-110 animation duration-300 transition-all transform" />
    
                </button>
              </div>
               <ul className='flex gap-x-10 sm:gap-x-6 items-baseline xl:right-112 lg:right-60 md:right-30 sm:pt-0 sm:bottom-30 sm:right-35 max-sm:hidden block relative lg:bottom-25 pt-5 h-10 text-xl'>
                <li>
                  <a href='/' className='hover-underline-animation center'>latest</a>
                </li>
                <li>
                  <a href='/Motorsport' className='hover-underline-animation center'>Motorsport</a>
                </li>
                <li>
                  <a href='/Reviews' className='hover-underline-animation center'>Reviews</a>
                </li>
                <li>
                  <a href='/Reviews/Gaming' className='hover-underline-animation center'>Gaming</a>
                </li>
                <li>
                  <a href='#Newsletter' className='hover-underline-animation center'>Newsletter</a>
                </li>
                <li>
                  <a href='/Contact' className='hover-underline-animation center'>Contact</a>
                </li>
              </ul>
            </nav>
           <AnimatePresence>
            {mobileMenuOpen && (
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="block static">
            <div className="fixed inset-1 bg-black/20" />
            <motion.div
              initial={{ x: '0', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '0', opacity: 0 }}
              transition={{ type:"spring", stiffness: 300, damping: 30, duration: 0.6 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto opacity-10 text-center text-white bg-black/50 px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10"
            >
          <DialogPanel>
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="mobileIcon"
                src="/mobileIcon-black.png"
                className="h-20 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className=" rounded-md pr-4 pb-12 text-white hover:text-red-500 transition-all duration-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10 hover:rotate-180 duration-300" />
            </button>
          </div>
          <div className="flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className=" grid grid-cols-1 pr-5">
                {navigation.map((item) => (
                  <a
                    key={`${item.name}-${item.href}`}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-white opacity-90 text-6xl m-8 hover:text-blue-500 transition-all duration-250"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>  
          </div>
            <div className='flex flex-col-2 gap-x-10 items-center left-145 max-sm:left-10 w-auto max-sm:w-0 relative pt-5'>
            <span>
              <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-12'>
                <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              </span>
            <span>
              <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-12 hover:text-black'>
                <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
              </span>
            <span>
              <a href='/'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-12'>
              <path fill='#ffffff' d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
              </svg>
              </a>
              </span>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>
            )}
    </AnimatePresence>
    </header>
    
    
    {/* LATEST */}
    <div className='relative h-screen' id='Latest'>
        <div className="absolute top-0 z-[-2] h-370 w-full"/>
      <h1 className='lg:text-7xl md:text-5xl max-md:text-5xl text-white relative max-md:top-10 lg:pt-10 pl-10 font-Exo-2'>latest</h1>
    <div className="relative top-20 max-sm:pl-11.5 lg:pl-12 max-md:pl-11.5 md:pl-0 grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
    <a href='/Motorsport/Formula-1/Spanish-Grand-Prix'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Spain.jpg' className='object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Austrian Grand Prix</h3>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a>  
    <a href='/Motorsport/Formula-1/Monaco-Grand-Prix'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/monaco.jpg' className='object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>24 Hours of Nurburgring</h3>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a>  
     <a href='/Motorsport/Formula-1/Emilia-Romagna-Grand-Prix'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Canada.webp' className='object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Canadian Grand Prix </h3>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a>  
         <a href='/Motorsport/Formula-1/Emilia-Romagna-Grand-Prix'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Le-Mans.jpg' className='object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>24 Hours of Le Man's</h3>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a>  
    <a href='/Motorsport/Formula-1/Emilia-Romagna-Grand-Prix'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Spain.jpg' className='object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Spanish Grand Prix </h3>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a>  
    <a href='/Motorsport/Formula-1/Emilia-Romagna-Grand-Prix'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/Monaco.webp' className='object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Monaco Grand Prix </h3>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a>  
    </div>


          <div className="flex gap-50 max-sm:gap-25 item-center justify-center pr-15 max-sm:pr-2 bottom-30 max-sm:top-50 relative h-20">
        <a href='/Motorsport/'>
        <button
          className="w-30 h-15 rounded text-white text-black border rounded-full hover:bg-white hover:text-black duration-250"
        >
          Previous
        </button>
        </a>
        <a href='/Motorsport/Pages/3'>
            <button
            className="w-30 h-15 rounded text-white text-black border rounded-full hover:bg-white hover:text-black duration-250"
            >
            Next
            </button>
        </a>
      </div>
      <span className='relative bottom-45 max-sm:top-40 left-170 max-sm:left-34 item-center jusitfy-center'> Page 2 of 3</span>
  </div>
        {/* END LATEST */}
    
     {/* FOOTER */}
           <footer
           className="relative xl:top-60 lg:top-80 md:top-125 max-md:top-165 max-sm:top-120 h-full w-full text-center sm:footer-horizontal text-black font-edu-vic-wa-nt-beginner text-2xl"
           id='Newsletter'>
              <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                      <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
                      <p className="mt-4 text-lg text-gray-300">
                        Be notify at every event which happened recent days in motorsport, tech, gaming and more.
                      </p>
                      <SupabaseForm/>
                    </div>
                    <dl className="grid relative grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                      <div className="flex flex-col items-start">
                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                          <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
                        </div>
                        <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                        <dd className="mt-2 text-base/7 text-white">
                          I'm pulbishing every week multiple articles about many topics. Be first to see them out.
                        </dd>
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                          <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                        </div>
                        <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                        <dd className="mt-2 text-base/7 text-white">
                          If you subscribed to our newsletter and later changed your mind, don't worry you can unsubscribed any time.
                        </dd>
                      </div>
                      <div className='relative grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 left-20 max-sm:left-0'>
                        <div className='grid lg:grid-cols-1 max-sm:left-0'>
                        <h3 className='text-white max-sm:pl-0'>Follow me on my journey</h3>
                        <ul className='flex gap-5 max-sm:gap-8 max-sm:pt-10 max-sm:pl-5 relative justify-center'>
                        <li>
                        <a href='https://www.instagram.com/harvancik_maxim/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10 hover:text-shadow-blue-400'>
                        <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg></a></li>
                        <li>
                          <a href='https://www.linkedin.com/in/maxim-harvancik-b1512a294/'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10'>
                            <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg></a></li>
                        <li><a href='#'></a></li>
                        </ul>
                        </div>
                   </div>
                      <div className='flex relative'>
                        <ul className='grid grid-cols-1 gap-7 relative pl-20 max-sm:pl-23 max-sm:pl-13 justify-end text-white'>
                          <li className='hover:text-gray-400 duration-300'><a href='/Privacy-Policy'>Privacy Policy</a></li>
                          <li className='hover:text-gray-400 duration-300'><a href='/Terms-of-use'>Terms of use</a></li>
                          <li className='hover:text-gray-400 duration-300'><a href='/Contact'>Contact</a></li>
                        </ul>
                      </div>
                      <span>
                    <a href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 384 512" className="absolute right-28 max-sm:right-33">
                    <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                    </svg></a>
                      </span>
                    </dl>
                  </div>
                </div>
            </div>
          </footer>
        <aside className="relative text-center items-baseline pr-20 xl:top-10 lg:top-80 md:top-125 max-md:top-165 max-sm:top-120 max-md:text-lg max-md:text-center max-sm:pl-18">
            <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
          </aside>
      </div>
 )
}