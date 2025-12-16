  'use client'
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState, useEffect } from 'react'
import { Bars2Icon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import Header from "@/components/templates/header-template";

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
                Azerbaijan grand prix - weekend report
            </h1>
            <h5 className="absolute text-6xl top-100 z-10 left-70 font-sans max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl max-md:text-xl text-white font-bold">
                Up's and down's in Azerbaijan
            </h5>
            <img
                src="/assets/motorsport/bakuF1.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                    Possible turnaround in championship now possible for verstappen
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Friday</h3>
                 <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    I didn't watched friday's practices and also data were funny from fastf1 so i couldn't fully analyse drives from friday.
                    Also, as always, nothing really happened in FP1 and FP2, apart Norris's little crash at T4 where he damaged suspension.
                    And Piastri a lap later sratched wall at T16.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Qualifying</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    2025 Azerbaijan grand prix saw longest qualifying session ever recorded.
                    It lasted for 2 hours (race in monza was 1.30 hours), and also another record was broken for most red flags in session.
                    We seen 6 red flags across 3 qualifying sessions.
                    From top teams, only CL16 and OP81 failed to complete Q3 where they crahed into barriers.
                    Pole position won MV1 and surprisingly, CS55 finished P2 in qualy with Lawson in P3.
                    LN4 and McLaren didn't managed session very well and they finished only at P7.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Sunday</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Race was calm until T5-T6 where OP81 crashed into barriers, causing a safety car.
                    His race came to the end after failing start procedure when he moved before lights went out.
                    Stewards gave him 5 second time penalty but won't be converted into grid penalty for Singapore.
                    Later when he wanted salvage atleast something, he made an error in braking and locked his tyres, causing him to go straight into barrier.
                    Now this was golden opportunity for LN4 to gain for championship most of the points available.
                    for the rest of the race it was quiet. Sometimes someone fought but for only lower places.
                    Podium was stabilised and top 10 too.
                    MV1 won 2025 Azerbaijan grand prix with GR63 in P2 and beautiful result for spaniard in williams colors.
                    CS55 finished in P3, achieving 1st podium in current regulations.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">What is happening to McLaren?</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300">
                    After their decisions and their incopetence in recent races, I need to write whole section for them.
                    I'm a Mclaren fan. I have always been a mclaren fan. I still remember 2023 season where in Bahrain, Oscar's race ended after 10 laps with techical failure.
                    Or Miami where they have been dead last.
                    But let's go back to present. Mclaren right now are making mistakes which no top team should do.
                    5th race in a row bad pitstop for Lando. For a driver which was there for 7 years, won constructors championship last year and a driver's championship contender is just unacceptable.
                    I mean, this race was just oscar's fault so no hard feeling towards him, I believe in singapore he will make a day harder for every competitor.
                    For Lando, today he did everyhting right, apart the safety car restart where he overslept a bit to much.
                    But otherwise he did everything right. Today the team when he needed them the most, they let him down once again.
                    Miserable pitstops and a car which for the last 3 years have top speed as a turtle and this season so optimize aero, they biggest weakness is drag.
                    I only hope they can bounce back and win in Singapore atleast one of them.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300">
                    This race was underwhelming.
                    I didn't enjoyed any minute of the race and I personally don't like Baku as a track.
                    But anyway,
                    Next stop: Singapore.
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