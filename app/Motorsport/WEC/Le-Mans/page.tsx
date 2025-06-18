  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function WEC24H() {

    return(
<div className="bg-white relative">
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 max-md:top-20 max-md:text-3xl text-blue-500 text-center font-bold">
                24 Hours of Le Man's Debriefing
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-0 max-md:top-50 text-center max-md:text-xl text-blue-500 font-bold">
                Everything you need to know from the 94th year of 24 hours of Le Man's.
            </h5>
            <img
                src="/assets/Le-Mans.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="bg-white h-screen pb-20">
                <span className="text-2xl text-black">Reading time: <span className="text-blue-500">3 minutes</span></span>
                <div className="text-2xl text-center justify-center text-black bg-white">
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    This year's Le Man's was intersting.
                    From the beggining of this year i was really looking forward to Le Man's particulary because i got to know more about my favourite drivers and teams i want to support.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    As soon as the clock struck 16:00, Drivers begun the 24 hours of le man's.
                    The start was pretty chill. No one spun or got taken out.
                    Porsche #6 starting from 21th place after a disqualification in hyperpole because of the car being underweight Kevin Estre wasted no time.
                    In first hour, #6 was in top 5. Meanwhile after successfull hyperpole from cadillac and other crews of porsche, they wasted no time either.
                    Cadillac unfortunately had no race pace and was overtaken really quickly by porsche #5 and later by three ferraris.
                    Many hours, porsche was in the lead but when night came closer, so did a ferrari. They were flying around de la sarthe circuit in colder conditions.
                    Also Porsche #6 managed to get into fight with ferrari's in top 3.
                </p>
                <img src='/assets/Race_Pace-Imola.png'
                className="w-320 h-150 items-center justify-center pt-5 pl-20 left-10 relative max-md:w-200 max-md:left-0 max-md:pl-0 object-cover max-md:h-100"/>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300"> 
                    Night time came.
                    Porsche lacked pace and so every other competitors. Apart from ferrari. they didn't.
                    And I must say, the night was calm. Not like last year when was raining for 6 hours.
                    Only thing that happened was some retirements from LMGT3's and crash from LMP2 car.
                    unfortunately, BMW #46 in LMGT3 with Valentino Rossi retired once again from failure.
                    The crew of #46 are cursed or just really unlucky.

                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300"> 
                  Sunset over Le Man's 
                  Morning came and so did the race pace of competitors but ferrari's build so big gap it was practically imposibble to beat them.
                  Morning was also calm and only few retirements happened but that's endurance racing.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300 pb-10">
                   We are in last hours of 24 hours of Le Man's.
                   ferrari #83 was in the lead with ex Formula 1 driver and one-time winner - Robert Kubica. We must admit that his pace in that car was overwhelming.
                   Porsche #6 managed to shorten the gap a little but still not enough.
                   Porsche #92 in LMGT3 managed to build the gap over the 1 minute which was really impresive and another example of t´domination of manthey racing brand.
                   But in the finish line, the gap was only 33 seconds after a final pitstops.
                   In LMP2 class, There was one and only Inter Europol Competition with gap nearly 2 minutes. Polish squad really took this Le Man's personally.
                   Another sooner end met a United Autosports mclaren 720s with crew ##95 made only 80 laps and crew #59 314 laps but both cars retired.
                   Also both BMW in hypercar class were pushed to garage which is always a bad sign. they were able to complete Le Man's but with gaps on the leading cars with #20 12 laps and #15 26 laps.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300 pb-10">
                  ROBERT KUBICA WINS 2025 24 HOURS OF LE MAN'S 
                  Incredible performance by crew #83 and whole AF corse team, beating manufacturer team and also Porsche #6.
                  Also incredible performance by porsche #6 by finishing 2nd from 21st place. Respect to them.
                  After an DSQ of #50 ferrari, #51 ferrari was promoted to 3th place.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300 pb-10">
                  INTER EUROPOL COMPETITION HUMBLED IT'S COMPETITORS
                  A dominant victory from the polish team by over a minute.
                  Vds panis team finished second and also incredible performance by giving the 3th place a whole lap.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300 pb-10">
                  MANTHEY 1ST PHORM WINS THE LMGT3 CATEGORY
                  Incredible performance by the team. The champagne must taste really good.
                  Vista AF corse and TF Sport closing up the podium in LMGT3 category
                </p>

                <p>this years Le Man's was exciting. I really enjoyed it and I'm definitely looking forward to the 95th year of Le Man's</p>
                </div>
            </div>

             <footer
                    className="relative lg:top-501 md:top-610 max-md:top-810 max-sm:top-995 h-full w-full border-b text-center border-white sm:footer-horizontal pt-10 bg-blue-500 text-black border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
                 <aside className="relative bg-white/10 text-center items-baseline lg:top-51 md:top-610 max-md:top-710 max-sm:top-730 max-md:text-lg max-md:text-center">
                     <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
                   </aside>
        </div>
    )
}