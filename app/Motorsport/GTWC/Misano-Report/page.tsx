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
<div className="bg-background h-full relative">
  <Header/>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                GTWC Misano report
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl text-center max-md:text-xl text-white font-bold">
                Everything you need to know about latest misano races in GTWC powered by AWS
            </h5>
            <img
                src="/assets/GTWC-Misano-BMW.jpg"
                className="min-w-full overflow-hidden transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                  After a long time, I decided to watch races during the misano weekend in GTWC Europe Series powered by AWS. 
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">First Race</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    First race was driven in night around 20 pm.
                    #51 AF Corse claimed yesterday pole position with another ferrari #74 Kessel racing behind on second and #46 MBW Team WRT with Valentino Rossi on 3rd.
                    Early action saw a safety car and full-course yellow, but the front runners' order remained largely unchanged.
                    Team WRT executed much better their pitstop than leading ferrari, gaining on them 0.1 second after pitstops.
                    The battle between BMW and Ferrari was intense but MBW managed to overtake #51 into T10-T11 corners.
                    #46 won first race and another back-to-back win for it's crew.
                </p>
                 <h3 className="text-4xl m-5 lg:pl-75 pt-5">Second Race</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300"> 
                    Firstly the race started okay, nothing serious happened.
                    But after 15 minutes and 16 seconds, #1 Grasser Lamborghini crashed intro barries and caught fire. Miraculously, driver got out on his own.
                    No serious injury was made. Red flag was launched for 2 hours. We resumed racing around 17:20 local time.
                    After many obstacles, #59 Garage 59 with Mclaren 720s GT3 Evo won second race. This victory marked Garage 59’s first GTWC win since 2016.
                    #48 Winward racing with mercedes-AMG GT3 EVO finish 2nd but many attempts to overtake #59 were made but none were successful. 
                </p>
                  {/*
                  <div className="relative top-30">
                    <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.1}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    blurToFocus={true}
                    colorShiftOnHover={true}
                    </div>
                    />*/}
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