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
  <div>
    <Header/>
  </div>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-60 left-60 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                A Plague tale: requiem - Review
            </h1>
            <img
                src="/assets/requiem-template.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                  After nearly 3 years of the game being published, I just recently found about it. And what would i give to never played it.
                  This review contain spoilers so be cautious....
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    A plague tale: requiem is successor to previous game :innocence.
                    game started relatively slow on beautiful fields in southern France where main story of requiem take place.
                    From the beggining the game looks incredible.
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Story starts slow but eventually intensify. 
                    You play as Amicia - protagonist from previous game. Your goal is to heal your brother - Hugo, from deadly plague.
                    You will be acompanied by many characters across 16 chapter game.
                    Trough out the story, you will uncover the secrets of the plague, how it started, where and when.
                    But nothing comes easy as it seems.
                </p>
                <h3 className="text-4xl m-5 lg:pl-75 pt-5">Story</h3>
                <h5 className="text-4xl m-5 lg:pl-75 pt-5">BEWARE SPOLIRES SKIPS <a href='#skip'>HERE</a></h5>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300">
                    We begun in village in southern France where we meet Alicia and Hugo playing. 
                    Later we meet another crucial character - Lucas. A young alchymists whose learning from Amicia's and Hugo's mother - Beatrice.
                    After problems they met in destroyed town, they decided to relocate to another town. 
                    When they came to that city, everything seems beautiful. The plague seemed to heal, and overall no troubles right? 
                    But after first night, Hugo's health detorated. They needed a healer, a healer from the anscient order which specialised in plague.
                    Amicia and Lucas managed to find a healer named Vaudin, he was part of the order.
                    But after a seizure. Whole city was destroyed, along the healer who was killed by falling debris. 
                    They had no choice but to run away, again...
                    But another trouble ahead they were crossing a pontar when suddently, a soldiers attacked.
                    Here was a first moment were Amicia nearly died and Hugo, by his power to control rats, saved his sister.
                    In that particular moment they decided to not go to the Marseille where to order would take care of him but to La Cuna island.
                    This island was seen in Hugo's nightmares when he always nearly died but was saved by fenix and healing water.
                    They came to la cuňa island. Another beautiful and peaceful place. But not for long. they met a Arnauld along the way. A commander or captain on which soldiers either turned on him or deserted.
                    And he seek revenge on local count. He made a deal with Hugo that if he save his sister, Hugo would help him to kill count. Of course that Hugo accept it.
                    Later after Arnauld was locked up afrter Amicia betrayed him, the count and countess invited them to their palace as their personal guests.
                    Later in story we begun to understand more about the plague. Before Amicia and Hugo, there was another "carrier" and "protector" - Basilius was the carrier before Hugo and Aelia was the protector.
                    Basilius and Aeila foreshadowed Amelia and Hugos lives from the beggining. How both cared and protected at all costs their borthers. And carriers how fragile and innocent were.
                    After the discovery they came back to palace to reunite with mother and Lucas.
                    But count wanted to speak with Amicia. the count wanted to kill her so Hugo can be count and countess's son.
                    But he failed. But one live was extinguished. The mother was killed or more like "sacrificed".
                    After we see hugo in bed. He can't see his family so he goes investigate.
                    But when he sees in courtyard injured sister and his mother killed, the macula or the plague took control of him.
                    This was the first step of many.
                    After they leaved island, only more problems occured.
                    The count came for his "son".
                    So the fought, Arnauld with Amicia against the count's army. But Amicia was beadly injured even it seemed that she died. Another thing shifted in Hugo.
                    This step was pivotal for the macula to fully control the carrier.
                    Fortunately, Amicia lived but Aranauld gave up his live so she can safe her brother.
                    After many fights and dodging rats, Amicia and Lucas managed to get close to Hugo but he was lost.
                    The macula took over him completely. However only one way was possible.
                    The way was to kill Hugo. Amicia, heartbroken and devasted did what she had to...
                </p>
                 <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-josefin-sans pt-15 lg:w-300" id="skip">
                    2022 year was underatted for gaming industry. So many games were released but only handful of games took all the credit.
                    A plague tale: requiem will shine in my collection as oe of the most underrated games ever.
                    In 2022, I haven't seen anything about this game. Maybe only some trailers but nothing else.
                    Even in GOTY ceremony, The spotlight was on elden ring and GOW Ragnarok. I understand why.
                    GOWR is goated game. Played that myself. i didn't played elden ring yet so can't judge.
                    A plague tale: requiem shows how important is family bond and what we can overcome when we are together.
                    And also when we are alone...
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