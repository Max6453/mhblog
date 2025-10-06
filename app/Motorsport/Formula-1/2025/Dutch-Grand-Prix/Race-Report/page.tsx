  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState, useEffect } from 'react'
import { Bars2Icon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import Header from "@/components/main/header";

export default function AustrianGP() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false) 
    const [loading, setLoading] = useState(true);

    return(
        <div className="bg-background h-full relative">
        <Header/>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-70 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                Dutch Grand Prix - Race report
            </h1>
            <h5 className="absolute text-6xl top-100 z-10 font-sans left-70 max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl text-center max-md:text-xl text-white font-bold">
                Glory and tragedy in Zandvoort
            </h5>
            <img
                src="/assets/DutchGP2025-R.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                    Motorsport can show 2 sides of it. Today we have seen both of them.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Hadjar on podium</h3>
                 <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    This was just simply lovely what Isack hadjar made.
                    With a B team of red bull finish on podium is just amazing performance.
                    His drive just shown what driver he is and what he can achieve in next years, potentially he even can be a title contender.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Climax of championship</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    It was expected to rain from the start of the weekend but clouds were calm for many laps.
                    Start was as expected, OP81 retained P1 and MV1 fought with LN4 for P2 but because of better traction from MV1 and softer tyres,
                    he managed to overtake LN4 for P2.
                    But at the end of the stint, LN4 overtook MV1 for 2nd place.
                    Mclarens chased each other the whole race.
                    First safety car was deployed after a crash from LH44 in T3 where he spun because of running to wide in T3 and water drops on track.
                    OP81 had quick pitstop but LN4 pitstop was delayed because of front jack's equipment either malfunctioned of he had slow reaction.
                    Still they chased after themselves, leaving competition many seconds behind.
                    2nd safety car deployed. This time it was CL16 who collided with AKA12 after leaving pits.
                    Another pitstops were made and mclarens still were racing only each other.
                    Now this moment is the most pivotal, the most crucial moment of this championship.
                    Lando Norris's car broke down in around 66th lap leaving him no choice but to retire from the race.
                    
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    This race will define a championship so let us sit back and enjoy last races with newest Australian champion.
                </p>
                <p className="text-start text-xs lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300">
                     We need to be honest with each other. 34 point gap in tightest season of all time is like having a 78 point gap in 22. You need to be either Max verstappen or your teammate have reliability of 22 ferrari...
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