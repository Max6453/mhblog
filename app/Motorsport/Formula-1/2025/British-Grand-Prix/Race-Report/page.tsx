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
                Everything you need to know about 2025 british Grand Prix
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
                  WHAT A RACE IT WAS! Simply incredible. 
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                  When it's raining in Silverstone, you know something will happen in grand prix. And it did. Many things did.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">First laps</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                  But first things first. Verstappen started in P1 with both mclarens in P2 and P3. Behind was invencible George Russell on P4 and Lewis Hamilton with ferrari on P5.
                  From the formation lap, Things escalated quickly. Many drivers such as GR63 or CL16 pitted for slicks even though the track was damp and 3rd sector was absolutely wet.
                  Their gamble didn't worked out and they needed to pit once again.
                  But MV1 had a good start. Even in one point, it looked like OP81 would pass him but MV1 covered him perfectly and LN4 behind them just watch how would thing unfold.
                  For a few laps, There was a calm at the front of the field but in midfield, literally a war was happening. Cars were flying in every direction off and on track.
                  Liam lawson unfortunately paid the ultimate price and retired after a collision with Esteban Ocon in T4.
                  But let's go back to the front for now.
                  Around 8th to 12 lap. OP81 managed to get close to MV1. MV1 Already felt the first signs of tyre wear.
                  In T14 he nearly spun but he managed to stay on track but OP81 utilize this opportunity and passed him, promoting to P1.
                  LN4 was in first 20 laps in field of no one. occasionaly LH44 came by but as quickly he came, he also left.
                </p>
                 <h3 className="text-4xl m-5 lg:pl-75 pt-5">Controversy</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300"> 
                  First safety car was deployed after a heavy rain struck the circuit. Mind that it was already pass 20 laps of remaining 52.
                  OP81 was leading the race infront of MV1 and LN4.
                  Right after the chapel corner, the lights of the safety car went our giving the signal to OP81 to slow down and wait until the safety car is in the pitlane.
                  But he braked with exccesive force (as we know right now it was over 59.2 psi) and MV1 nearly crashed into OP81. 
                  After further investigation, OP81 was given a 10 second time penalty for safety car infrigment.
                  Right after this incident, MV1 spun and lost countless of positions. His race was practically destroyed because he had no pace for the rest of the race.
                  But LN4 started to push and caught up OP81 to 1.4 seconds gap.
                  But they pitted and gap after pitstops was only 4.3 seconds.
                </p>
                <div>
                  <ul className="grid lg:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-2 gap-x-2 gap-10 p-2 mt-5 rounded-4xl w-full h-full ">
                    <li>
                      <img src="/assets/telemetry/LapTime_Distributions-R.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Position_Changes-R.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Strategy.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>                      
                      <img src="/assets/landostand.webp" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Top_Speeds-R.png" className="rounded-2xl hover:scale-105 duration-300"/>
                    </li>
                    <li>
                      <img src="/assets/telemetry/Team_Pace-R.png" className="rounded-2xl hover:scale-105 duration-300"/>
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
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Race finish</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300"> 
                  FA14 and GR63 were the first one to pit for slick tyres.
                  Rest of the field followed them after 1-4 laps after they pitted. But the track in first couple of laps was still wet so the performance was quite bad.
                  But when the track dryed up, The performance increased massively promoting them many positions.
                  After the last pitstops the field was stabilized, at least for a moment. And also with many Surprises.
                  Like Nico Hulkenberg who finished this race on unbelievably P3 with Sauber. the car which was literally the worst last and the beggining of this season.
                  Also, PG10 finished on P6 with alpine which was also briliant for the team.
                  But Lando Norris won his first british grand prix in silverstone with Oscar Piastri in 2nd and Hulkenberg in P3.
                  Because of Hulkenberg's P3, Hamilton's record of finishing every season on podium in silverstone was crushed.
                  But after a decade, Nico Hulkenberg finished for the first time on podium.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                  Overall this race was for me the best race of the season yet. It's really close to Australia but Silverstone was much more entertaining.
                  With many crashes and many happy stories but also many tragic ones, I must say that I am looking forward to next year's British Grand Prix.
                  Silverstone, You never dissapoint...
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