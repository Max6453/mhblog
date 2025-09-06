'use client'
import { useState, useEffect } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from "framer-motion"
import { Dialog, DialogPanel } from '@headlessui/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import React from 'react';

export default function MobileApp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [showSplash, setShowSplash] = useState(true);

      useEffect(() => {
  const timer = setTimeout(() => {
    setShowSplash(false); // triggers exit animation
  }, 2000); // 3 seconds splash screen

  return () => clearTimeout(timer);
}, []);

return(
 <div className='bg-background font-raleway'>

  {/* OPENING ANIMATION */}
        <AnimatePresence>
          {showSplash && (
            <motion.div
              key="splash"
              className="absolute inset-0 z-[9999] flex items-center justify-center bg-neutral-950"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <motion.img
                src="/mobileIcon-Black.png"
                alt="Benefactor Logo"
                className="w-32 h-32"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                style={{ filter: 'drop-shadow(0 0 20px #ffffff)' }}
              />
              <motion.h1
                className="text-white absolute bottom-20 text-3xl font-orbitron text-center"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                MHBlog
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HEADER */}
            <header className="relative top-0">
              <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-10 w-full z-50  bg-background border-b fixed border-white">
              <div className='text-2xl text-white relative left-28 font-edu-vic-wa-nt-beginner top-0 pt-1'>
                <h1 className='font-bold font-raleway'>MHBlog</h1>
              </div>
              <div className="absolute right-5 pt-10 pr-5 max-md:pr-0 max-md:right-0 max-md:pt-25">
                <button
                id='openBtn'
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="pb-25 icon-default inline-flex items-center justify-center rounded-md p-2.5 text-white z-50 animation duration-300 transform transition-all"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-10 block hover:-scale-y-110 hover:shadow-2xl shadow-white animation duration-300 transition-all transform" />
    
                </button>
              </div>
            </nav>
            <AnimatePresence>
            {mobileMenuOpen && (
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed h-screen" />
            <motion.div
              initial={{ translate: '-60%', opacity: 0 }}
              animate={{ translate: 0, opacity: 1 }}
              exit={{ translate: '-100%', opacity: 1 }}
              transition={{ type:"keyframes", stiffness: 300, damping: 30, duration: 0.5 }}
              className="fixed right-0 inset-y-0 z-50 w-full overflow-y-auto opacity-10 text-center text-blue-500 bg-background px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10"
            >
                <DialogPanel>
                  <div className="flex z-50 items-center justify-between">
                    <a href="/" className="-m-1.5 p-1.5">
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
                      className=" rounded-md pr-4 pb-12 text-red-500 hover:text-neutral-950 transition-all duration-300"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="size-10 hover:rotate-180 duration-300" />
                    </button>
                  </div>
                  <div className=" flow-root">
                    <div className="divide-gray-500/10 font-Exo-2">
                      <div className="flex text-4xl top-12 relative text-start text-white">
                        <ul className='flex flex-col gap-5'>
                        <li><a href='/Mobile'>Tech</a></li>
                        <li><a href='/'>Gaming</a></li>
                        <li><a href='/'>Motorsport</a></li>
                        <li><a href='/'>Reviews</a></li>
                        <li><a href='/Contact'>Contact</a></li>
                        </ul>
                        <hr className='w-50 bg-black absolute top-77'/>
                        <span className='absolute top-85'><a href='/Mobile/Account'>MyAccount</a></span>
                        <span className='absolute top-95'><a href='/Mobile/Functions'>What's new in 3.0</a></span>
                      </div>
                    </div>
                    <div className='absolute bottom-10 text-start text-white'>
                    <span>MHBlog</span>
                    <br/>
                    <span className='opacity-50'>App version: 3.0.0</span><br/>
                    </div>
                  </div>
                  </DialogPanel>
                </motion.div>
              </Dialog>
                    )}
            </AnimatePresence>
            </header>


            <div className="grid grid-cols-1 grid-rows-1 -z-10">
             <h4 className='font-Exo-2 text-4xl text-center top-13 text-white z-10 h-11 bg-background absolute w-full'>
               Latest
             </h4>
              {/* *
                  <Carousel className="max-md:left-0 max-md:w-full rounded-2xl">
                  <h4
                  className='font-Exo-2 text-4xl text-center top-0 text-white z-10 h-11 bg-background absolute w-full'>
                    Latest
                    </h4>
                  <CarouselContent>
                <CarouselItem className=" cursor-grab active:cursor-grabbing">
                  <a href='/Mobile'>
                  <img src="/assets/DutchGP2025-R.jpg" className='object-cover h-full w-full z-10'/>
                  <span className='text-2xl pl-2 absolute bottom-0 bg-black/40 w-full'>Glory and tragedy in Zandvoort</span>
                  </a>
                </CarouselItem>
                <CarouselItem className="text-center cursor-grab active:cursor-grabbing">
                  <img src="/assets/GTWC-Misano-BMW.jpg" className="w-full h-full object-cover"/>
                  <span className='text-2xl pl-2 left-94 absolute bottom-0 bg-black/40 w-full'>Glory and tragedy in Zandvoort</span>
                </CarouselItem>
                <CarouselItem className="text-center cursor-grab active:cursor-grabbing">
                  <img src="/assets/Silverstone-2025-mobile-wallpaper.jpg" className='w-full h-160 object-cover'/>
                  <span className='text-2xl pl-2 left-189 absolute bottom-0 bg-black/40 w-full'>Glory and tragedy in Zandvoort</span>
                </CarouselItem>
                </CarouselContent>
                  <CarouselPrevious className="left-0"/>
                  <CarouselNext className="right-0" />
                </Carousel>
                */}



 <div className="relative top-30 max-sm:pl-11.5 grid-rows-1 grid-cols-1 grid gap-10">
      <a href='/Tech/Google/google-court-rulling-3-9'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/google-court.webp'  className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Why did google's stock spiked up by 8%</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a> 
      <a href='/Motorsport/Formula-1/2025/Dutch-Grand-Prix/Race-Report'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='assets/DutchGP2025-R.jpg'  className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Dutch Grand Prix - Race report</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more
        </button>
      </div>
    </a> 
      <a href='/Motorsport/Formula-1/2025/Dutch-Grand-Prix/Qualifying-Report'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/DutchGP2025-Q.webp'  className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Dutch Grand Prix - Qualifying report</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a> 
    <a href='/Motorsport/Formula-1/2025/Dutch-Grand-Prix/Friday-Report'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/DutchGP2025.png'  className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Dutch Grand Prix - Friday report</h3>
        <button className='relative lg:bottom-20 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a> 
    <a href='/Reviews/Gaming/No-Mans-Sky-Voyagers'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/no-mans-sky-voyagers.jpg'  className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>No Man's Sky: Voyagers update review</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a> 
    <a href='/Reviews/Gaming/Death-Stranding-2-On-The-Beach'>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
        <img src='/assets/DS2.jpg'  className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250'/>
        <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Death Stranding 2: On the beach - review</h3>
        <button className='relative lg:bottom-26 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more</button>
      </div>
    </a>
  </div>


  <div className='relative top-50 bg-background'>
    <div className='bg-neutral-800 h-30'>
      <h1 className='text-2xl text-center'>Create your account!</h1>
      <h5>By creating your account, no news can miss you</h5>
      <button className='relative left-31 top-5 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
          See more
      </button>
      </div>

      <div className='h-50 pt-10'>
        <h1 className='text-2xl text-center'>MHBlog plus</h1>
        <h5 className='text-xs text-center'>This project is powered by many energy drinks, long nights and determination.
          It's made by one developer so a little donate would be much appreciated:)
        </h5>
        <button className='relative left-31 top-5 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
            See pricing
        </button>
      </div>
    </div>
  </div>
 </div>
 );
};