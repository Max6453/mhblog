  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState, useEffect } from 'react'
import { Bars2Icon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import Header from "@/components/main/header";

export const meta = {
  title: "British Grand Prix 2025",
  excerpt: "Friday report",
  coverImage: "/images/belgium-gp.jpg",
  date: "2025-07-04",
};

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
    <div>
      <Header/>
    </div>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                British Grand Prix - Friday Report
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl text-center max-md:text-xl text-white font-bold">
                Wrap up for friday in 2025 british Grand Prix
            </h5>
            <img
                src="/assets/McLaren-in-FP1-Silverstone-scaled.webp"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                  From the beggining of this weekend we thought that this year's british grand prix will be close.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Before Silverstone</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    In Austria, Mclaren were driving in their own championship. they gave leclerc up to 20 seconds and lapped cars to roughly P7.
                    Until 20th lap, Mclarens were after themselves. I believe every mclaren fan was having an heart attacks every lap.
                    The climax of this racing was OP81 attempt to overtake LN4 to T4 but he locked-up his tyres and nearly hit it's own teammate.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    After the first pitstop, the action on track got quiet. Sometimes, backmarkers fought each other but the gap at front was getting bigger every lap.
                    This phenonemon last only 6 laps. OP81 started to push and managed to lower the gap to LN4.
                    But Mclaren didn't planned to repeat the situation from 14th lap so they pitted LN4 again sooner than OP81. This was the whole race.
                    Behind Mclarens, Leclerc was in no-man zone. No one was around him, only fans cheering and occasional backmarkers. GR63s mercedes was worse on that.
                    Nearly got lapped at the end of the race but backmarkers slowed down enough mclarens.
                    The backmarkers were really god at slowing front runners this year.
                    FC43 nearly collided with OP81, pushing him off track. To Argentinian defense, he didn't notice him in his mirros because he was occupied wis his own fight with another.
                    Lando Norris managed to finish P1 fith Piastri P2 and Leclerc completing the podium.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">FP1 and FP2</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300"> 
                    FP1 started at 13:30 CEST and it was calm. Only here and there some spins from Gasly or Bortoleto but nothing crazy.
                    There was only one thing crazy. After many dissapointing races, Ferrari is looking strong for the first time i dare to say in this season.
                    Hamilton won FP1 with Norris and Piastri behind him. I believe this FP1 was great source of valuable data for the teams and they will progress more in FP2. 
                </p>
                <div >
                  <ul className="grid lg:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-2 gap-x-2 gap-10 p-2 mt-5 rounded-4xl w-full h-full ">
                    <li>
                      <img src="/assets/telemetry/NORvsLEC-FP2.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Results-FP1.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Results-FP2.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>                      
                      <img src="/assets/telemetry/Sectors-FP1.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Sectors-FP2.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Top_Speeds-FP2.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                  </ul>
                </div>
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
                <span className="text-sm lg:pl-110 max-sm:pt-5 relative max-sm:pl-0 sm:pl-5 md:pl-20">
                  Note that the telemetries I am showing you is my own creation using dedicated library
                  <a href="https://docs.fastf1.dev"className="p-1 underline">(fastf1)</a>.
                  </span>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans lg:pt-30 max-sm:pt-30 lg:w-300 md:w-200 ">
                   FP2 wasn't a different story. Another great source of valuable data and astonishing lap of Lando Norris.
                   Also a little detail i noticed, Both mclarens need to lift in copse or T9. Why? I don't know particulary but when i will, i will keep you posted.
                   FP2 won Lando Norris with both ferraris closing the podium.
                   Tommorow wil be full of surprises and overall an fun day to watch.
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