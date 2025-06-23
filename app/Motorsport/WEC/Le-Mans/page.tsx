  'use client'
  import { useState, useEffect } from "react";
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { supabase } from "@/lib/supabaseClient";

export default function WEC24H() {
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
                 <aside className="relative bg-white/10 text-center items-baseline lg:top-51 md:top-610 max-md:top-710 max-sm:top-730 max-md:text-lg max-md:text-center">
                     <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
                   </aside>
        </div>
    )
}