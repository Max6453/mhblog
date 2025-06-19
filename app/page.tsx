'use client'
import { useState, useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars2Icon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Banner from "@/components/ui/Banner";
import { LineWobble } from 'ldrs/react'
import 'ldrs/react/LineWobble.css'
import { supabase } from '@/supabaseClient'
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const navigation = [
  { name: 'Latest', href: '#latest', current: false },
  { name: 'Categories', href: '/Categories', current: false },
  { name: 'Contact', href: '#Contact', current: false },
  { name: 'Portfolio', href: '#About', current: true },
]

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


export default function Main() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false) 
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;


  return (
  <div>
    {/*<Banner text="LATEST EVENTS: 24 Hours of Le Man's - WEC; Formula 1 Canadian Grand Prix - Qualifying at 10pm CET; NHL Edmonton Oilers vs Florida Panthers at 2am CET"
    speed={25}/> */}
<header className="relative inset-x-0 top-0 z-50">
         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-30 bg-gray-200 shadow-2xl shadow-white">
          <div className='text-5xl text-neutral-950 font-edu-vic-wa-nt-beginner'>
            <h1 className='font-bold font-raleway'>MHBlog</h1>
            <h3 className='text-3xl max-sm:text-2xl max-sm:w-60'>Latest news and intriques across many topics</h3>
          </div>
          <img src='/mobileIcon-navbar.png'
          className='h-30 w-auto hover:scale-110 right-175 transition-all duration-300 absolute sm:hidden md:hidden lg:hidden xl:block'/>
          <div className="absolute right-5 pt-10 pr-5 max-md:pr-0 max-md:right-0 max-md:pt-25">
            <button
            id='openBtn'
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="pb-10 icon-default inline-flex items-center justify-center rounded-md p-2.5 text-neutral-950 z-50 animation duration-300 transform transition-all"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-10 block hover:-scale-y-110 animation duration-300 transition-all transform" />

            </button>
          </div>
        </nav>
       <AnimatePresence>
        {mobileMenuOpen && (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="block static">
        <div className="fixed inset-0 z-50 bg-black/20" />
        <motion.div
          initial={{ x: '0', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '0', opacity: 0 }}
          transition={{ type:"spring", stiffness: 300, damping: 30, duration: 0.6 }}
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto opacity-10 text-center text-white bg-black/50 px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10"
        >
    <DialogPanel>
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="./mobileIcon-black.png"
            className="h-20 w-auto"
          />
        </a>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className=" rounded-md pr-4 pb-12 text-white hover:text-neutral-950 transition-all duration-300"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="size-10 hover:rotate-180 duration-300" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-white opacity-90 text-6xl m-8 hover:text-neutral-700 transition-all duration-250"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      </DialogPanel>
    </motion.div>
  </Dialog>
        )}
</AnimatePresence>
</header>
    {/* END NAVBAR */}

{/* LATEST */}
<div className='relative h-dvh' id='Latest'>
  <div className="absolute top-0 z-[-2] h-330 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <h1 className='lg:text-7xl md:text-5xl max-md:text-5xl text-white relative  max-md:top-10 lg:pt-10 pl-10 font-Exo-2'>latest</h1>
    <div className="relative top-20 max-sm:pl-11.5 lg:pl-12 max-md:pl-11.5 md:pl-0 grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Canada.webp' className='object-cover w-full h-full z-50 rounded-4xl'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Canadian Grand Prix Debriefing</h3>
        <a href='/Formula-1/Canadian-Grand-Prix'>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Le-Mans.jpg' className='object-cover w-full h-full z-50 rounded-4xl'/>
        <h3 className='relative text-xl  bottom-66 pl-8 text-white font-bold font-Exo-2'>24 Hours of Le Man's</h3>
        <a href='/Motorsport/WEC/Le-Mans'>
        <button className='relative lg:bottom-20 max-md:bottom-20 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Spain.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <h3 className='relative bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Spanish Grand Prix Debriefing</h3>
        <a href='/Formula-1/Spanish-Grand-Prix'>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/monaco.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <h3 className='relative bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Monaco Grand Prix Debriefing</h3>
        <a href='/Formula-1/Monaco-Grand-Prix'>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Emilia-romagna.webp' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <h3 className='relative bottom-66 text-xl pl-1 text-white font-bold font-Exo-2'>Emilia-Romagna Grand Prix Debriefing</h3>
        <a href='/Formula-1/Emilia-Romagna-Grand-Prix'>
        <button className='relative lg:bottom-27 max-md:bottom-27 md:bottom-25 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
        </a>
      </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
      <img src='/assets/Miami.avif' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <h3 className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>Miami Grand Prix Debriefing</h3>
      <a href='/Formula-1/Miami-Grand-Prix'>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/WEC-SPA.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <h3 className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>WEC - 6 hours of Spa</h3>
      <a href='#'>
        <button className='relative lg:bottom-20 max-md:bottom-20 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500 hidden">
               <img src='/assets/css.png' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <h3 className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>CSS for beginners</h3>
      <a href='#'>
        <button className='relative lg:bottom-20 max-md:bottom-25 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500 hidden">
               <img src='/assets/html.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <h3 className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>HTML for beginners</h3>
      <a href='/Tutorials-and-tips/HTML-for-beginners'>
        <button className='relative lg:bottom-20 max-md:bottom-20 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
        See more</button>
      </a>
    </div>
    </div>
   </div>
    {/* END LATEST */}

    {/* ABOUT 
    <div className='bg-white h-screen relative min-w-full' id='About'>
      <h1 className='max-md:text-5xl lg:text-5xl text-black font-Exo-2 max-md:text-center text-start md:pl-10 md:pt-10'>About</h1>
      <p className='font-raleway font-medium pt-5 pl-2 lg:text-2xl lg:w-300 lg:pl-10 text-black'>
        Hey everyone.<br/>
        My name is Max and I'm 17 years old. I'm from Žilina, Slovakia.
        This blog was created with a purpose to learn new skills and progress in my learning in web development.
        Now in lower section you can get to know me and when i finally publish my portfolio, you can see more about me.<br>
        </br>
        My biggest passion is programming and motorsport. Those two things (and tech) will be the most popular topic on my website.<br/>
        My journey with coding begun in 2022 when i needed a hobby. 
        I wanted to go to the school which specialized in programming but i wasn't accepted. Those from Slovakia known.
        So i started with simple websites and portfolios.
        Soon after i started to learn python for brief moment because i could trough python and library called FastF1 gather data and make telemetries from it.
        I'm still doing it but not as much as creating and deploying websites.<br/>
        My proudest project is <a className='font-black hover:text-blue-500' href='https://pure-rxcing.vercel.app'>pure rxcing website</a> (its not official website PLEASE DO NOT TAKE IT SERIOUSLY).
        
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 bg-white text-black'>
        I'm proficient in HTML, CSS.<br/>
        I'm advanced in Javascript and it's framework - React and beginner in next.js.<br/>
        I know basics of SQL. I can work in mySQL, postgreSQL, mongoDB.<br/>
        For design i use figma.<br/>
        And also basics of python i control.<br/>
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 xl:w-full bg-white text-black'>
          Whole section about me was intented to be written as I talking to you.
          But I can assure you when i comes to work, I'm really profesional.
          I'm must say that I'm routine oriented.
          I have perfect time management and i like to work as a team.
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 xl:w-full lg:pl-10 pb-10 bg-white text-black'>
        You can see more things about me at my portfolio which will be publish in near future.
        Until then, enjoy my blog.
      </p>
    </div>
       END ABOUT */}

      {/* FOOTER */}
       <footer
       className="relative lg:top-100 md:top-200 max-md:top-210 max-sm:top-430 h-full w-full text-center sm:footer-horizontal pt-10 bg-gradient-to-b from-neutral-950 via-neutral-950 to-gray-900 text-black font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
                      className="min-w-0 flex-auto rounded-md bg-transparent px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline-2 border-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 border-2 border-white transition duration-300"
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
                                <div className='relative left-65'>
                  <h3 className='text-white'>Follow me on my journey</h3>
                  <ul className='flex gap-7 relative pt-10 left-60'>
                  <li>
                  <a href='https://www.instagram.com/harvancik_maxim/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10'>
                  <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg></a></li>
                  <li>
                    <a href='https://www.linkedin.com/in/maxim-harvancik-b1512a294/'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10'>
                      <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                      </svg></a></li>
                  <li><a href='#'></a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </footer>
    <aside className="relative bg-gray-900 text-center items-baseline pr-20 lg:top-100 md:top-200 max-md:top-210 max-sm:top-430 max-md:text-lg max-md:text-center">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
        <span>Web version: 1.5.3</span>
      </aside>
</div>
  )
}