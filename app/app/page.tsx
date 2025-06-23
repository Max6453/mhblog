'use client'
import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from "framer-motion"
import { Dialog, DialogPanel } from '@headlessui/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";

const navigation = [
  { name: 'Latest', href: '/app', current: false },
  { name: 'Archive', href: '/Archive', current: false },
  { name: 'Contact', href: '/Contact', current: false },
  { name: 'Portfolio', href: '/', current: true },
] 

export default function MobileApp() {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false) 
          const [loading, setLoading] = useState(true);

    return(
        <div className='bg-neutral-950'>
            <header className="relative inset-x-0 top-0 z-50">
                     <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-10 bg-gray-200 shadow-2xl shadow-white">
                      <div className='text-3xl text-neutral-950 font-edu-vic-wa-nt-beginner top-0 absolute left-1/3'>
                        <h1 className='font-bold font-raleway'>MHBlog</h1>
                        <h3 className='text-3xl max-sm:text-2xl max-sm:w-60 hidden'>Latest news and intrigues across many topics</h3>
                      </div>
                      <img src='/mobileIcon-navbar.png'
                      className='h-30 w-auto hover:scale-110 right-175 transition-all duration-300 absolute sm:hidden md:hidden lg:hidden xl:block'/>
                      <div className="absolute right-5 pt-10 pr-5 max-md:pr-0 max-md:right-0 max-md:pt-25">
                        <button
                        id='openBtn'
                          type="button"
                          onClick={() => setMobileMenuOpen(true)}
                          className="pb-25 icon-default inline-flex items-center justify-center rounded-md p-2.5 text-neutral-950 z-50 animation duration-300 transform transition-all"
                        >
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon aria-hidden="true" className="size-10 block hover:-scale-y-110  animation duration-300 transition-all transform" />
            
                        </button>
                      </div>
                    </nav>
                   <AnimatePresence>
                    {mobileMenuOpen && (
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="block static">
                    <div className="fixed inset-0 z-50 bg-black/20" />
                    <motion.div
                      initial={{ x: '0', opacity: 0 }}
                      animate={{ x: 1, opacity: 1 }}
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
                    <span>MHBlog</span>
                    <br/>
                    <span className='opacity-50'>App version: 1.5.0</span><br/>
                  </div>
                  </DialogPanel>
                </motion.div>
              </Dialog>
                    )}
            </AnimatePresence>
            </header>
            <div className="grid grid-cols-1 grid-rows-1 ">
       <Carousel className="max-md:left-0 max-md:w-90 rounded-2xl">
       <h4
       className='font-Exo-2 text-xl text-center pt-2 top-150 text-black z-10 h-11 bg-gray-200 absolute w-full'>Pics of the week</h4>
      <CarouselContent>
     <CarouselItem className="left-36 cursor-grab active:cursor-grabbing">
      <img src="/assets/grello-mobile.jpg" className='w-full h-full'></img>
      <div className="bg-gray-500 opacity-80"></div>
     </CarouselItem>
     <CarouselItem className="text-center left-36 cursor-grab active:cursor-grabbing">
      <img src="assets/24-Nurburgring-mobile.jpg" className="w-full h-160"></img>
     </CarouselItem>
     <CarouselItem className="text-center cursor-grab active:cursor-grabbing">
      <img src="/assets/MBW-le-mans.jpg" className='h-160'></img>
     </CarouselItem>
     </CarouselContent>
      <CarouselPrevious className="left-0 hidden"/>
      <CarouselNext className="right-0 hidden" />
    </Carousel>
                <div className="relative w-full h-100">
                    <img src="/assets/24-Nurburgring-mobile.jpg"/>
                    <div className='text-start bg-gray-200 top-99 h-20 w-full z-10 absolute'>
                    <h3 className='font-Exo-2 text-xl text-center text-black'>24 Hours of Nurburgring was wild</h3>
                    <a href='/'>
                        <button className='relative top-3 left-1/3 w-25 h-10 rounded-full text-black bg-white border shadow-4xl border-white hover:bg-white hover:border-white hover:text-white transition duration-300'>
                        See more</button>
                    </a>
                    </div>
                </div>
                <div className="relative w-full h-100">
                    <img src="/assets/setup-app.jpg"/>
                    <div className='text-start bg-gray-200 top-99 h-20 w-full z-10 absolute'>
                    <h3 className='font-Exo-2 text-xl text-center text-black'>Newest review of product just released</h3>
                    <a href='/'>
                        <button className='relative top-3 left-1/3 w-25 h-10 rounded-full text-black bg-white border shadow-4xl border-white hover:bg-white hover:border-white hover:text-white transition duration-300'>
                        See more</button>
                    </a>
                    </div>
                </div>
                <div className='relative w-full h-100 top-19'>
                    <img src="/assets/canada-duel.jpg"/>
                    <div className='text-start bg-gray-200 h-20 w-full z-10 absolute'>
                    <h3 className='font-Exo-2 text-xl text-black pt-12 text-center'>Cool pic from Canada:)</h3>
                    </div>
                </div>
                <div className='relative w-full'>
                    <img src="/assets/Le-Mans.jpg"/>
                     <div className='text-start bg-gray-200 h-20 w-full z-10 absolute'>
                    <h3 className='font-Exo-2 text-xl text-black'>Have you read the latest WEC debriefing?</h3>
                    <a href='/'>
                        <button className='relative bottom-5 left-1/3 w-25 h-10 rounded-full text-black bg-white border shadow-4xl border-white hover:bg-white hover:border-white hover:text-white transition duration-300'>
                        See more</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}