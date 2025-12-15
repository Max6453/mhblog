  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { useState, useEffect } from 'react'
import { Bars2Icon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import Header from "@/components/templates/header-template";

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
<div className="bg-background h-full relative">
  <div>
    <Header/>
  </div>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-60 left-45 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                Death Stranding 2: On the Beach - Review
            </h1>
            <img
                src="/assets/DS2.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                    This game will go down as one of the best of its era.<br/>
                    Caution: spoilers ahead
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    Welcome in sandy Mexico. We play once again as a porter Sam.
                    As we know from previous game, we departed from bridges to live and raise our child - Lou.
                    But after unexpected events, we find ourselves connecting Australia to chiral network.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Death stranding 2 is unique experience.
                    From gameplay to storyline. Every aspect of this game is breathtaking.
                    
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                    From the 1st game, Death stranding 2 improved significantly in graphics.
                    I can say that I played the most beautiful game of this decade yet.
                    Also the mechanics weren't left untouched. I loved from the moment i got a vehicle a option to fix my vehicle.
                    It was annoying to create every time in 1st game a vehicle which was either destroyed by timefall or by other damage.
                    Another thing they improved was highway builder. Finally my exceeded materials were returned back and could've been used on another things.
                    Also, physics in game is much better. The driving isn't nerve wrecking, you won't be stopped by every rock on the ground.
                    Death Stranding 2 was also more hillarious. Some jokes were really comedial and also fight with Higgs was good but i miis the "particle of god" higgs.
                    I felt that Higgs lost his mind in 2nd game.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                    It is a little regretful that the BT's aren't that scary like in previous game or other enemies aren't that scary.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                    When i heard for the first time about death stranding 2, i was sceptical because the 1st one was really hard to finish.
                    It was really slow and everything started in chapter 6. However in 2nd game, I enjoyed the game from the very first chapter.
                    I believe that i played Game Of The Year 2025. This game got from me 10/10. 
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