  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState, useEffect } from 'react'
import { Bars2Icon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import 'ldrs/react/LineWobble.css'
import { LineWobble } from 'ldrs/react'
import 'ldrs/react/LineWobble.css'
import Masonry from '@/components/ui/Masonry';

const navigation = [
  { name: 'Home', href: '/', current: false, id: 1 },
  { name: 'Archive', href: '/Archive', current: false, id: 2 },
  { name: 'Contact', href: '/Contact', current: false, id: 3 },
  { name: 'Portfolio', href: 'https://maximharvancik.vercel.app', current: true, id: 4 },
];


const items = [
    {
      id: "1",
      img: "/assets/telemetry/Results-FP1.png",
      url: "/assets/Telemetry/Results-FP1.png",
      height: 600,
    },
    {
      id: "2",
      img: "/assets/telemetry/Sectors-FP1.png",
      url: "/assets/Telemetry/Sectors-FP1.png",
      height: 800,
    },
    {
      id: "3",
      img: "/assets/telemetry/Top_Speeds-FP1.png",
      url: "/assets/Telemetry/Top_Speeds-FP1.png",
      height: 600,
    },
        {
      id: "4",
      img: "/assets/telemetry/NORvsLEC-FP2.png",
      url: "/assets/Telemetry/NORvsLEC-FP2.png",
      height: 800,
    },
    {
      id: "5",
      img: "/assets/telemetry/Sectors-FP2.png",
      url: "/assets/Telemetry/Sectors-FP2.png",
      height: 600,
    },
    {
      id: "6",
      img: "/assets/telemetry/Top_Speeds-FP2.png",
      url: "/assets/Telemetry/Top_Speeds-FP2.png",
      height: 400,
    },
    // ... more items
];

export default function AustrianGP() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false) 
        const [loading, setLoading] = useState(true);

    return(
<div className="bg-gradient-to-bl from-neutral-50 via-neutral-500 h-full relative">
 <header className="relative top-0 dark:text-white">
              <nav aria-label="Global" className="flex items-center justify-between lg:px-8 h-70 border-b-2">
               <div className='text-5xl left-110 max-sm:left-15 text-center dark:text-white font-edu-vic-wa-nt-beginner relative'>
                 <h1 className='font-bold font-raleway text-center'>MHBlog</h1>
                 <h3 className='text-3xl max-sm:text-2xl max-sm:w-60'>Latest news and intrigues across many topics</h3>
               </div>
               <a href='/'>
               <img
               src= "/mobileIcon-black.png"
               className='h-32 max-sm:h-25 w-auto hover:scale-110 top-52 max-sm:top-56 z-50 right-175 max-sm:right-33.5 transition-all duration-300 absolute sm:hidden md:hidden lg:hidden xl:block'/>
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
             <div className='flex flex-col-2 gap-x-10 items-center left-145 max-sm:left-10 w-auto max-sm:w-0  relative pt-5'>
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
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                Belgium Grand Prix - Race Report
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl text-center max-md:text-xl text-white font-bold">
                Everything what happened in 2025 belgium Grand Prix
            </h5>
            <img
                src="/assets/MCL-Spa.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                  Spa-Francorchamps is unique track, but its uniqueness is slowly killing the racing.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                  We must now admit that spa is becoming more and more boring every year. When i started to watch f1 in 2022, Even in that year spa was boring.
                  Nothing changed in 3 years but only degraded more.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Firstly, the race started afer 1 hour and 20 minutes later because the officials were scared to let drivers race.
                    I know that stewards were afraid because of high chance of accident but we must also addmit that the safety of this car is on level where practically a death is same as commercial plane.
                    We're not in 1970's were drivers were dying like on battlefield.
                    But lets go racing after nearly 1 and half hours of waiting
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300"> 
                    The race begun as a rolling start so like in GT's or WEC, cars were moving and not stationed in box.
                    LN4 started from the 1st place with OP81 behind and CL16 watching from behind.
                    LN4 started the race but his start was tragicomedy. Later we heard from the radio that there was some potential issue with battery but still how he started the race was tragicomedic.
                    OP81 took advantage and easily overtook for 1st place at the kemmell straight.
                    After this overtake it was more or less seattled.
                    But there was still some action behind.
                    From 2nd to 6th place, the drivers were driving like without senses. In some places wven they were faster like 0.7 seconds per lap than mclarens.
                    First pitstops came.
                    OP81 pitstop was okay. There was some time lost but nothing significant.
                    Than came LN4. The pitstop was 4 seconds longer and he pitted for hards. The choice wasn't really bad. After all, pirelli nominated C1, C3, C4 tyres.
                    The hard tyre was marked as C1. The hardest compound on pirelli's menu.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                  The pace looked promising from LN4 but the mistakes he kept doing ultimately cost him a potential win.
                  Many lock-ups, going out of track lost him ~ 4-5 seconds Exactly that time was missing in the last couple of laps.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                  But Oscar Piastri drove flawless race and won his 8th total win of his carrer, equaling Charles Leclerc and Lando Norris wins.
                  Totaly deserved win for Aussie in the service on Mclarens.
                  Lando Norris finished on 2nd place with, surprisingly, Charles Leclerc on ferrari on 3rd place.
                </p>
                 <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                  Spa-francorchamps is a beautiful track in arden mountains. It will be a shame to lose such track to american or middle east tracks but something needs to change.
                  Because the f1 shifted from pure racing to entertainment. And Spa once again wasn't entertaining.
                  Looking forward to Hungaroring. Made beautiful memories last year there and it is favourite track of mine.
                  So really looking forward to it.<br/>
                  <a href="https://fad-mhblog.vercel.app/Belgium-Grand-Prix/Race" className="underline">Race analysis</a>
                </p>

              </div>
            </div>
            <footer
            className="relative lg:top-0 min-md:top-0 max-md:top-0 max-sm:top-0 sm:top-0 h-full w-full text-center border-white sm:footer-horizontal pt-10 text-black font-edu-vic-wa-nt-beginner p-10 text-2xl"
            id='Contact'>
                <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Be notify at every event which happened recent days in motorsport, tech, gaming and more.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                            Email address
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="min-w-0 flex-auto rounded-md bg-transparent px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                            />
                            <button
                            type="submit"
                            className="flex-none rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-white border-2 transition duration-300"
                            id='submitBtn'
                            >
                            Subscribe
                            </button>
                        </div>
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
                        </dl>
                    </div>
                    </div>
                </div>
                <a href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 384 512" className="absolute right-10 bottom-5">
                <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                </svg></a>
            </footer>
            <aside className="relative text-center items-baseline lg:top-0 md:top-0 max-md:top-0 max-sm:top-0 max-md:text-lg max-md:text-center">
                <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
            </aside>
        </div>
    )
}