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
            <h1 className="absolute text-6xl top-62 left-52 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                Brazilian Grand Prix - Weekend report
            </h1>
            <img
                src="/assets/Brazil2025.avif"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                    The championship is getting trickier for drivers.
                </p>
                 <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    Brazil showed us once again why it is one of the best circuits on calendar.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Friday</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    We saw first surprises on friday in Sprint Qualifying with mercedes being 2nd best car on track with Kimi Antonelli leading in P2.
                    but also Aston Martin coocked some performance in SQ, where they finished in P5 and P7 and MV1 between them.
                    Ultimately, LN4 took Pole position for upcoming sprint race on saturday.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Saturday</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Sprint was raced on damp/dry conditions with track being dry in most part of the track but 1st sector was still wet.
                    OP81, NH27 and FC43 paid the price for it. They went wider, than most of the cars, on the kerb sending their cars into uncotrolable spin and into barriers.
                    This was significant loss for OP81 which extended LN4 lead by 9 points.
                    But we also saw a horrifying accident for Gabriel Bortoleto when after mysterious reasons his car lost the rear, sending him into 1st barrier with 34G force impact and a few moments later another hit into barriers with 57G force of impact.
                    Luckily, Bortoleto was safe, unharmed and was ready to race in qualifying but his car was unable to take part of qualifying.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Sunday</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    After another pole position and sprint win from LN4, he saw only one thing - A win in Brazilian grand prix.
                    and he went for it, and successfuly he won by significant margin to 2nd AKA12 and 3rd MV1.
                    MV1 damage limitation after horrible qualifying which set him on P16 and later start from the pit box was beyond expectation.
                    No every driver can achieve what verstappen did 2-times in a row in Brazil.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Another controversy...</h3>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    However, what race it would be if we wouldn't have any controversial decision by stewards.
                    After safety car restart around 20th lap, LN4 pulled off AKA12 who got much slower acceleration and OP81 with CL16 quickly caught up from both of his sides.
                    In T1, it looked like they could get trough 3-wide with CL16 giving AKA12 extra space on right side, but He instead started closing his left side where was OP81.
                    And accident happened where OP81 took Antonelli's RR tyre, sending him straight into CL16 who had no choice but to retire from the race because of significant damages sustained from the crash.
                    To be honest, if I was a steward, from me it would be a racing incident because AKA12 closed to much OP81 but also OP81 didn't had right for the corner by the driving regulations...
                    The stewards awarded OP81 with 10 second time penalty for causing collision. 
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Anyway, LN4 extends his lead to OP81 by 24 points.
                    It was fun and exiting race and Im looking forward to next year.
                    Next stop: Las vegas, Nevada, USA.
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