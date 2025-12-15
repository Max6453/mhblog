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
                Italian grand prix - weekend report
            </h1>
            <h5 className="absolute text-6xl top-100 z-10 font-sans left-20 max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl text-center max-md:text-xl text-white font-bold">
                Never underestimate red bull and Verstappen
            </h5>
            <img
                src="/assets/Monza2025.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                    Very interesting race weekend with many memorable moments.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Friday</h3>
                 <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    Friday was straight-forward with first signs of speed with many teams.
                    We already knew that competition will be close because MCL39's biggest weaknesses are top speed, high drag and cornering efficiency.
                    My predictions contained Mclarens on top of the podium, either LN4 or OP81.
                    3rd would take either Ferrari or Red bull.
                    Mercedes was whole friday invincible. I only saw them when Kimi Antonelli beached his car in FP1.
                    But still we had before us Qualifying session and race.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Saturday</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    In FP3, we saw only glimpses of full performance.
                    Mclaren finished 1st but Ferrari was close. MV1 was close too. but Mercedes not so much.
                    Qualifying came.
                    First big dissapointment came with williamses, which qualifed only on P14 and P13.
                    In Q2, Mclaren and LN4 fans were on the edges when LN4 nearly didn't passed Q2. But he managed to do it.
                    Bortoleto once again great qualifying session on P8.
                    But surprisingly, MV1 took pole with fastest lap of the F1 history, averaging over 263 km/h.
                    2nd LN4 and 3rd OP81. Ferrari were only good for P4 and P5 but Hamilton had still pending penalty after yellow flag infrigement at dutch grand prix last week.
                    Still great prelude for sunday's race.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Sunday</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    First 5 laps were chaotic. LN4 was pushed on grass by MV1 and later cut whole chicane,
                    Ferrari of CL16 gave up every horse just to be infront on OP81.
                    Hamilton was quick i first 13-16 laps where he managed to overtake multiple cars but later got stuck behind CL16.
                    Now, a long game begun.
                    Tyre degradation is small in Monza. But, the surface was resurfaced, giving more grip but also less tyre degradation.
                    First 4 drivers were pushing strong to 40th lap. MV1 pitted for hards on 38. Later CL16 pitted same for hards.
                    Meanwhile, CS55 and OB87 collided in 2nd chicane or precisely in T4.
                    But they managed to go racing so no safety car was deployed.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Controversy</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300">
                    At the 47th lap, Mclaren finally called they drivers to box.
                    But they switched boxing order so OP81 was called first even though LN4 was infront him.
                    Team's argument was that OP81 was covering CL16.
                    OP81' pitstop was flawless wiht 1.9.
                    LN4 pitstop came. Once again team screwed his pitstop with 5.6.
                    Mclaren was in awkward position now. Practically in the same position as in Hungarian grand prix in 2024.
                    Mclarens decision was to swap positions, promoting LN4 to 2nd place and OP81 demoting to P3.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300">
                    This race was really exiting. It had everything what formula 1 race can offer.
                    About that controvery. I don't think it was something that will define championship.
                    I mean yes, it was unfair against Oscar however he only gave up P2 and lost only 3 points.
                    In Hungary last year, Lando gave up 1st place, losing 7 points and gained 8 points.
                    But also circumstances are different so really tricky position.
                    But overall i enjoyed the race and i hope more races like this will come.
                    Next stop: Baku, Azerbaijan.
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