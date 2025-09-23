'use client'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import 'ldrs/react/LineWobble.css'

const navigation = [
  { name: 'Latest', href: '/', current: false, id: 1 },
  { name: 'Motorsport', href: '/Motorsport', current: false, id: 2 },
  { name: 'Tech', href: '/Tech', current: false, id: 3 },
  { name: 'gaming', href: '/Reviews/Gaming', current: true, id: 4 },
  { name: 'Reviews', href: '/Reviews', current: true, id: 5 },
  { name: 'Formula 1 Analysis', href: 'https://fad-mhblog.vercel.app', current: true, id: 6 },
  { name: 'Contact', href: '/Contact', current: true, id: 7 },
  { name: 'Wallpapers', href: '/Wallpaper', current: true, id: 8 },
  { name: 'Pomodoro', href: 'https://pomodoro-mhblog.vercel.app', current: true, id: 9 },
  { name: 'About Author', href: 'https://maximharvancik.vercel.app', current: true, id: 8 },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
        <header className="relative top-0 dark:text-white z-50">
                <nav aria-label="Global" className="flex items-center justify-between lg:px-8 h-70 border-b-2">
                <div className='text-5xl text-center xl:left-115 lg:left-90 md:left-60 max-sm:left-10 sm:left-30 dark:text-white font-edu-vic-wa-nt-beginner absolute'>
                    <h1 className='font-bold font-raleway'>MHBlog</h1>
                    <h3 className='text-3xl max-sm:text-2xl max-sm:w-60'>Latest news and intrigues across many topics</h3>
                </div>
                <a href='/'>
                <img
                src= "/mobileIcon-black.png"
                className='h-32 max-sm:h-25 w-auto hover:scale-110 top-52 max-sm:top-56 right-175 max-sm:right-33.5 transition-all duration-300 absolute max-sm:hidden sm:hidden md:hidden lg:hidden xl:block'/>
                </a>
                <div className="absolute right-5 pt-10 pr-5 max-md:pr-0 max-md:right-0 max-md:pt-25">
                    <button
                    id='openBtn'
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className=" bottom-5 relative icon-default inline-flex items-center justify-center rounded-md p-2.5 text-white z-50 animation duration-300 transform transition-all"
                    >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className=" size-10 block hover:shadow-xl shadow-neutral-950 rounded-xl animation duration-300 transition-all transform" />
                    </button>

                </div>
                <ul className='flex gap-x-10 sm:gap-x-10 items-center xl:right-107 lg:right-80 sm:pt-0 sm:right-35 bottom-25 max-md:hidden block relative pt-5 h-10 text-xl'>
                    <li>
                    <a href='/' className='hover-underline-animation center'>latest</a>
                    </li>
                    <li>
                    <a href='/Motorsport' className='hover-underline-animation center'>Motorsport</a>
                    </li>
                    <li>
                    <a href='/Reviews' className='hover-underline-animation center'>Reviews</a>
                    </li>
                    <li>
                    <a href='/Reviews/Gaming' className='hover-underline-animation center'>Gaming</a>
                    </li>
                    <li>
                    <a href='/Tech' className='hover-underline-animation center'>Tech</a>
                    </li>
                    <li>
                    <a href='/Contact' className='hover-underline-animation center'>Contact</a>
                    </li>
                </ul>
                </nav>
            <AnimatePresence>
                {mobileMenuOpen && (
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="block static">
                <div className="fixed inset-1 bg-black/20" />
                <motion.div
                initial={{ x: '0', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '0', opacity: 0 }}
                transition={{ type:"spring", stiffness: 300, damping: 30, duration: 0.6 }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto opacity-10 text-center text-white bg-black/50 px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10"
                >
            <DialogPanel>
            <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    alt="mobileIcon"
                    src="/mobileIcon-black.png"
                    className="h-20 w-auto"
                />
                </a>
                <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className=" rounded-md pr-4 pb-12 text-white hover:text-red-500 transition-all duration-300"
                >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-10 hover:rotate-180 duration-300" />
                </button>
            </div>
            <div className="flow-root">
                <div className="divide-y divide-gray-500/10">
                <div className=" grid grid-cols-2 max-sm:grid-cols-1 pr-5 max-sm:pr-0">
                    {navigation.map((item) => (
                    <a
                        key={`${item.name}-${item.href}`}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-white opacity-90 text-6xl m-8 hover:text-gray-500 transition-all duration-250"
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
                </div>  
            </div>
                <div className='flex flex-col-2 gap-x-10 items-center left-145 max-sm:left-12 w-100 max-sm:w-0 relative pt-5'>
                <span>
                <a href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-12'>
                    <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                </a>
                </span>
                <span>
                <a href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-12 hover:text-black'>
                    <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                </a>
                </span>
                <span>
                <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-12'>
                <path fill='#ffffff' d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
                </a>
                </span>
                </div>
            </DialogPanel>
            </motion.div>
        </Dialog>
                )}
        </AnimatePresence>
        </header>
  )
}