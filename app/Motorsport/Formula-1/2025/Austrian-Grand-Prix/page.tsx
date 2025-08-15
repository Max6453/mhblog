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
import Header from "@/components/main/header";
const LoadingScreen: React.FC = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.0)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      zIndex: 9999,
      transition: "all",
      animation:"ease-in-out",
      animationDuration:"300ms"
    }}
  >
   <LineWobble
  size="80"
  stroke="5"
  bgOpacity="0.1"
  speed="1.75"
  color="white" 
/>
  </div>
);

export default function AustrianGP() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false) 
        const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading (e.g., fetching data)
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <LoadingScreen />;

    return(
<div className="bg-gradient-to-bl from-neutral-50 via-neutral-500 h-full relative">
  <div>
    <Header/>
  </div>
<div className="bg-black fixed w-full h-full top-0 z-50 jusitfy-items-center">
 <span className="text-6xl font-Exo-2 items-baseline relative jusitfy-center top-1/3 left-1/3">Not yet published...</span>
</div>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                Austrian Grand Prix - race report
            </h1>
            <h5 className="absolute text-6xl top-100 left-10 z-10 font-sans max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl text-center max-md:text-xl text-white font-bold">
                hear everything in eventfull Austrian Grand Prix
            </h5>
            <img
                src="/assets/Austria.webp"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                  This years Canadian Grand Prix was underwhelming
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                    Mclaren's were for the firstv time this season struggling with the car.
                    However the mercedes capitalised on this opportunity. 
                    Red bull and max Verstappen were once again in a fight for the win.
                    Ferrari were incompetent. 
                </p>
                <img src='/assets/canada-duel.jpg'
                className="w-full pt-20 pb-10"/>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Race start was OK. Antonelli overtook Oscar Piastri for the 3th place. 
                    Russell had an amazing start.
                    Ferrari...not so much.
                    Apart from Hamilton hitting a otter which cost him 0.5s/lap, nothing really happened
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300"> 
                    This year's grand prix was fight not on track but on pitwall. It was a strategic battle between the teams.
                    Mclaren firstly capitalised with Norris on reversed strategy. ferrari once again screwed up the strategy for the Leclerc.
                    From the start it was a long game.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 pb-10 lg:w-300 md:w-200 ">
                   In 64th lap, Entertainment begun. Mclarens collided on finish line.
                   An beautifull duel ended with unfortunate DNF of Lando Norris who practically drove to back of Piastri's car causing him a front wing damage and sending him to the wall.
                   Everyone said it is not matter of if but when. There you have it. In the 10th race of the year.
                </p>
              </div>
            </div>
                    <footer
                    className="relative lg:top-0 min-md:top-0 max-md:top-00 max-sm:top-0 sm:top-300 h-full w-full text-center border-white sm:footer-horizontal pt-10 text-black font-edu-vic-wa-nt-beginner p-10 text-2xl"
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