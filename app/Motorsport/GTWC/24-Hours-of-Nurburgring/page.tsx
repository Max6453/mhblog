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
import { supabase } from "@/lib/supabaseClient";

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Archive', href: '/Archive', current: false },
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

export default function MiamiGP() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false) 
        const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading (e.g., fetching data)
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <LoadingScreen />;

            const [newsletterEmail, setNewsletterEmail] = useState("");
              const [newsletterSuccess, setNewsletterSuccess] = useState(false);
                const [newsletterError, setNewsletterError] = useState<string | null>(null);
  
    
    const handleNewsletterSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setNewsletterSuccess(false);
      setNewsletterError(null);
    
      const { error } = await supabase.from("newsletter").insert([
        { email: newsletterEmail }
      ]);
    
      if (error) {
        setNewsletterError("Failed to subscribe. Please try again.");
      } else {
        setNewsletterSuccess(true);
        setNewsletterEmail("");
      }
    };
    

    return(
<div className="bg-gradient-to-bl from-neutral-50 via-neutral-500 h-full relative">
  <header className="relative inset-x-0 top-0 z-50" id="top">
         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-30 bg-gray-200 shadow-2xl shadow-white">
          <div className='text-5xl text-neutral-950 font-edu-vic-wa-nt-beginner'>
            <h1 className='font-bold font-raleway'>MHBlog</h1>
            <h3 className='text-3xl max-sm:text-2xl max-sm:w-60'>Latest news and intrigues across many topics</h3>
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
            src="/mobileIcon-black.png"
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
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                24 Hours of Nurburgring
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-0 max-md:top-50 md:text-3xl sm:text-xl lg:text-6xl text-center max-md:text-xl text-white font-bold">
                hear everything in eventfull 24 hours of Nurburgring
            </h5>
            <img
                src="/assets/24-Nurburgring.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-sm:size-96 max-md:size-96 max-sm:hidden"
                alt="Miami Grand Prix"
            />
            <img src="/assets/24-Nurburgring-mobile.jpg"
            className="hidden w-full max-sm:block"/>
            </div>
            </header>
            <div className="relative pb-10">
                <div className="text-2xl justify-center text-white to-neutral-900 md:left-0  relative text-start">
                <span className="text-2xl text-white pl-2">Reading time: <span className="text-white">1.55 minutes</span></span>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                  24 Hours of Nurburgring never dissapoints.
                </p>
                <h4 className="text-start text-3xl lg:pl-80 font-Exo-2 pt-15">Race in  few words</h4>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                  The 53rd race in Nurburgring was one to remember.
                  From absolute domination of Manthey racing along with kevin Estre and whole crew to dissapointing results for the same team.
                  After 5 years of waiting, Rowe racing with BMW M4 GT3 won the 24 hours of Nurburgring after penalisation of Manthey racing with 140 seconds time penalty.
                  From the start of the race drivers were pushing. Manthey Racing dominated whole race even in night when for a brief moment the time delta to 2nd place was over a minute.
                  But BMW with Rowe racing didn't gave up. They pushed in early morning and caught up to Porsche.
                  When those 2 teams were fighting, the gap to 3rd place was more approximately 2 minutes.
                </p>
                <img src='/assets/Grello.webp'
                className="w-full pt-20 pb-10 max-sm:hidden "/>
                <img src="/assets/grello-mobile.jpg"
                className="w-full pt-20 pb-10 hidden max-sm:block"/>
                <h4 className="text-start text-3xl lg:pl-80 font-Exo-2">Controversy</h4>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-raleway pt-15 lg:w-300"> 
                  The most controversial penalty given in this race was in 3 hours and 18 seconds when Manthey racing with Rowe racing were stuck in traffic and losing time.
                  Manthey wanted to overtook the Aston martin GT4 car which was under the blue flags. AM left a door open on the right side of the track.
                  kevin Estre saw this opportunity and went for the gap. Unfortunately the AM closed the doors and the cars collided and after a hit from a barrier, AM was oveturned in middle of the track.
                  The invesitgation took place and after an hour, Manthey Racing were given a 140 seconds time penalty for causing a collision which practically ended their race.
                </p>
                <h4 className="text-start text-3xl lg:pl-80 font-Exo-2 pt-15">My perspective</h4>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-raleway pt-15 lg:w-300"> 
                  This incident was interesting and hard to judge. Kevin Estre saw an opportunity and went for the gap which you could see if you watch his onboard or livestream.
                  Aston Martin left a door open and in matter of seconds, when they were side by side, he closed the door causing a collision.
                  Big factor in this issue could be the blue flags. I know that blue flags works completely different than in F1 but still, if you see it you know there is faster car approaching.
                  I also know that a slower car don't need to move from the racing line. Estre could've done it differently like wait a little bit more but he would lost a lot of time however it is Kevin Estre on Nurburgring.
                  My opinion is that the penalisation was deserved but really harshed.
                  But still Rowe drove much better and after all deserved to win the 24 hours of Nurburgring.
                </p>
                <h4 className="text-start text-3xl lg:pl-80 font-Exo-2 pt-15">Classification</h4>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-20 font-raleway pt-15 pb-10 lg:w-300 md:w-200 ">
                  Whole classification you can see <a className="underline" href="https://www.intercontinentalgtchallenge.com/images/results/144/24h_nbr_20_Race_Result_overall.pdf">here</a>
                </p>
              </div>
            </div>
                           <footer
                           className="relative lg:top-140 md:top-250 max-md:top-330 max-sm:top-560 h-full w-full text-center sm:footer-horizontal pt-10 bg-gradient-to-b from-neutral-950 via-neutral-950 to-gray-900 text-black font-edu-vic-wa-nt-beginner p-10 text-2xl">
                              <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                                    <div className="max-w-xl lg:max-w-lg">
                                      <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
                                      <p className="mt-4 text-lg text-gray-300">
                                        Be notify at every event which happened recent days in motorsport, tech, gaming and more.
                                      </p>
                                      <form onSubmit={handleNewsletterSubmit} className="mt-6 flex max-w-md gap-x-4">
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
                                          value={newsletterEmail}
                                          onChange={e => setNewsletterEmail(e.target.value)}
                                        />
                                        <button
                                          type="submit"
                                          className="flex-none rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 border-2 border-white transition duration-300"
                                          id='submitBtn'
                                        >
                                          Subscribe
                                        </button>
                                         {newsletterSuccess && (
                                            <span className="text-green-400 ml-4 self-center">Subscribed!</span>
                                          )}
                                          {newsletterError && (
                                            <span className="text-red-400 ml-4 self-center">{newsletterError}</span>
                                          )}
                                      </form>
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
                                      <div className='relative grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 left-20 max-sm:left-0'>
                                        <div className='grid lg:grid-cols-1 max-sm:left-0'>
                                        <h3 className='text-white max-sm:pl-0'>Follow me on my journey</h3>
                                        <ul className='flex gap-5 max-sm:gap-8 max-sm:pt-10 max-sm:pl-5 relative justify-center'>
                                        <li>
                                        <a href='https://www.instagram.com/harvancik_maxim/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10 hover:text-shadow-blue-400'>
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
                                      <div className='flex relative'>
                                        <ul className='grid grid-cols-1 gap-7 relative pl-20 max-sm:pl-13 justify-end text-white'>
                                          <li className='hover:text-gray-400 duration-300'><a href='/Privacy-Policy'>Privacy Policy</a></li>
                                          <li className='hover:text-gray-400 duration-300'><a href='/Terms-of-use'>Terms of use</a></li>
                                          <li className='hover:text-gray-400 duration-300'><a href='/'>Contact</a></li>
                                        </ul>
                                      </div>
                                    </dl>
                                  </div>
                                </div>
                            </div>
                          </footer>
                 <aside className="relative text-center items-baseline lg:top-0 md:top-0 max-md:top-0 max-sm:top-0 max-md:text-lg max-md:text-center">
                     <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
                   </aside>
        </div>
    )
}