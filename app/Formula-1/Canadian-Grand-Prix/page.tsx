  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function MiamiGP() {

    return(
<div className="bg-white relative">
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 max-md:top-20 max-md:text-3xl text-blue-500 text-center font-bold">
                Canadian Grand Prix - debriefing
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-0 max-md:top-50 text-center max-md:text-xl text-blue-500 font-bold">
                hear everything in eventfull Canadian Grand Prix
            </h5>
            <img
                src="/assets/Canada.webp"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="bg-white h-screen pb-10">
                <span className="text-2xl text-black">Reading time: <span className="text-blue-500">1.55 minutes</span></span>
                <div className="text-2xl text-center justify-center text-black bg-white">
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    This year's canadian grand prix was underwhelming.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    Mclaren's were for the firstv time this season struggling with the car.
                    However the mercedes capitalised on this opportunity. 
                    Red bull and max Verstappen were once again in a fight for the win.
                    Ferrari were incompetent. 
                </p>
                <img src='/assets/Race_Pace-Imola.png'
                className="w-320 h-150 items-center justify-center pt-5 pl-20 left-10 relative max-md:w-200 max-md:left-0 max-md:pl-0 object-cover max-md:h-100"/>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300"> 
                    Race start was OK. Antonelli overtook Oscar Piastri for the 3th place. 
                    Russell had an amazing start.
                    Ferrari...not so much.
                    Apart from Hamilton hitting a otter which cost him 0.5s/lap, nothing really happened
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300"> 
                    This year's grand prix was fight not on track but on pitwall. It was a strategic battle between the teams.
                    Mclaren firstly capitalised with Norris on reversed strategy. ferrari once again screwed up the strategy for the Leclerc.
                    From the start it was a long game.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300 pb-10">
                   In 64th lap, Entertainment begun. Mclarens collided on finish line.
                   An beautifull duel ended with unfortunate DNF of Lando Norris who practically drove to back of Piastri's car causing him a front wing damage and sending him to the wall.
                   Everyone said it is not matter of if but when. There you have it. In the 10th race of the year.
                </p>
                </div>
            </div>

                    <footer
                    className="relative lg:top-180 md:top-200 max-md:top-210 max-sm:top-430 h-full w-full border-b text-center border-white sm:footer-horizontal pt-10 bg-blue-500 text-black border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
                                   className="min-w-0 flex-auto rounded-md bg-blue-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-cyan-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                 />
                                 <button
                                   type="submit"
                                   className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 border-white border-2 transition duration-300"
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
                   </footer>
                 <aside className="relative bg-white/10 text-center items-baseline lg:top-180 md:top-200 max-md:top-210 max-sm:top-430 max-md:text-lg max-md:text-center">
                     <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
                   </aside>
        </div>
    )
}