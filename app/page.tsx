'use client'
import { useState, useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Banner from "@/components/ui/Banner";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: 'About', href: '#About', current: true },
  { name: 'Latest', href: '#', current: false },
  { name: 'Categories', href: '#', current: false },
  { name: 'Contact', href: '#Contact', current: false },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Main() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
  <div>
    <Banner text="LATEST EVENTS: 24 Hours of Le Man's - WEC; Formula 1 Canadian Grand Prix - Qualifying at 10pm CET; NHL Edmonton Oilers vs Florida Panthers at 2am CET"
    speed={25} /> 
<header className="relative inset-x-0 top-0 z-50">
         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-30 bg-white">
          <div className='text-5xl text-black font-edu-vic-wa-nt-beginner'>
            <h1 className='font-bold font-raleway'>MHBlog</h1>
            <h3 className='text-3xl'>Latest news and intriques across many topics</h3>
          </div>
          <img src='/Image.png'
          className='h-30 w-auto hover:scale-110 transition-all duration-300 left-163 absolute'/>
          <div className="absolute right-5 pt-10 pr-5">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="pb-10 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 z-50 hover:text-blue-500 animation duration-300 transform transition-all"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-10" />
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
            src="./Image.png"
            className="h-20 w-auto"
          />
        </a>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className=" rounded-md pr-4 pb-12 text-blue-500 hover:text-red-500 transition-all duration-300"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="size-10" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-white opacity-90 text-6xl m-8 hover:text-blue-500 transition-all duration-250"
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
<div className='relative h-dvh'>
      <h1 className='lg:text-7xl max-md:text-5xl text-black relative max-md:top-40 lg:pt-10 pl-10 font-Exo-2'>latest</h1>
    <div className="relative top-20 max-md:top-50 max-sm:pl-11.5 max-md:pl-11.5 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Spain.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <span className='relative bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Spanish Grand Prix Debriefing</span>
        <a href='/Formula-1/Spanish-Grand-Prix'>
        <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-28 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/monaco.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <span className='relative bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Monaco Grand Prix Debriefing</span>
        <a href='/Formula-1/Monaco-Grand-Prix'>
        <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-28 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Emilia-romagna.webp' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <span className='relative bottom-66 text-xl pl-1 text-white font-bold font-Exo-2'>Emilia-Romagna Grand Prix Debriefing</span>
        <a href='/Formula-1/Emilia-Romagna-Grand-Prix'>
        <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-5 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
          See more</button>
        </a>
      </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
      <img src='/assets/Miami.avif' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>Miami Grand Prix Debriefing</span>
      <a href='/Formula-1/Miami-Grand-Prix'>
      <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-30 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/WEC-SPA.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>WEC - 6 hours of Spa</span>
      <a href='#'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:bottom-20 max-md:left-20 right-25 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
               <img src='/assets/css.png' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>CSS for beginners</span>
      <a href='#'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:left-20 right-8 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
               <img src='/assets/html.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>HTML for beginners</span>
      <a href='/Tutorials-and-tips/HTML-for-beginners'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:left-20 right-13 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
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
       className="relative top-100 h-1/2 w-full max-md:top-50 border-b text-center border-white sm:footer-horizontal pt-10 bg-blue-500 text-black border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
       id='Contact'>
          <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 max-md:top-40">
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
                      className="min-w-0 flex-auto rounded-md bg-blue-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-cyan-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 border-white border-2 transition duration-300"
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
      </footer>
    <aside className="relative bg-white/10 pl-130 top-94 max-md:top-40 max-md:pl-0 max-md:text-lg max-md:text-center">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
</div>
  )
}