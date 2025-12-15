'use client'
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Header from "@/components/templates/header-template";

export default function MiamiGP() {
    return(
<div className="bg-background relative">
  <Header/>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-75 z-10 font-josefin-sans max-md:left-7 max-md:top-20 max-md:text-3xl text-blue-500 text-center font-bold">
                Monaco Grand Prix - debriefing
            </h1>
            <h5 className="absolute text-6xl top-100 left-13 z-10 font-sans max-md:left-0 max-md:top-50 text-center max-md:text-xl text-blue-500 font-bold">
                hear everything in eventfull Monaco Grand Prix
            </h5>
            <img
                src="/assets/monaco.webp"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="bg-white h-screen pb-10">
                <span className="text-2xl text-black">Reading time: <span className="text-blue-500">1.50 minutes</span></span>
                <div className="text-2xl text-center justify-center text-black bg-white">
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    Monaco Grand Prix as Mclaren fan and LN4 fun really delivered.
                    This year's Monaco grand prix presented a change in strategy with mandatory 2 stop strategy.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    The start of the race was chaotic. Lando Norris from 1st place locked up his tyres but managed to stayed on first place from Charles Leclerc on 2nd.
                    As we know monaco, the racing was boring and overtaking was impossible. From mcl fan perspective, The race was tense.
                    Lando Norris started from first place but nothing was guaranted. There was still a threat of either mchanical failure or overtake via strategy.
                    Charles leclerc was fast whole weekend. the threat was there.
                    In last 10 laps, Max verstappen stayed much longer on track promoting him on first place.
                    Lando Norris after last pitstop was 2nd and Leclerc was 3th.
                    In very last lap, Max verstappen pitted with him ending in P4 ahead of Hamilton.
                    Lando Norris won Monaco grand Prix, Second win of the season after Australia and 6th of total win.
                    Leclerc and Piastri topped the podium with P2 and P3.
                </p>
                <img src='/assets/Race_Pace-Monaco.png'
                className="w-320 h-150 items-center justify-center pt-5 pl-20 left-10 relative max-md:w-200 max-md:left-0 max-md:pl-0 object-cover max-md:h-100"/>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300"> 
                    Someone had brilliant weekend, someone had a weekend to forget. mercedes are one of them.
                    After disasterious qualifying which ended with antonelli crashing in Q2 and Russell's "retirement" from qualifying after an battery issue.
                    In race, Mercedes was indinstict. until 70th lap, mercedes was still P14 and P15. 
                    After a bold and illegal overtake from cutting the chicane, Russell was handed a drive-trough penalty, an eqvuivalent of 18+ seconds penalty.
                    After chequered flag, Mercedes ended up in P11 for Russel and P18 for Antonelli.
                    Really tragic weekend from squad from brekley.
                </p>
                <img src='/assets/Position_Changes.png'
                className="w-320 h-150 items-center justify-center pt-5 pl-20 left-10 relative max-md:w-200 max-md:left-0 max-md:pl-0 object-cover max-md:h-100"/>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300 pb-10">
                   This Years Monaco was as same as the last year. Boring and long. But atleast for papaya fans, Their drivers finished in P1 and P3 in Monaco.
                   Really great weekend from them.
                   I'm personally looking forward to upcoming Spanish grand prix with new directive on flexi wings. This should make racing and championships much interesting.
                </p>
                </div>
            </div>

             <footer
       className="footer relative top-500 max-md:top-805 border-b text-center border-white grid lg:gap-250 max-md:gap-40 grid-cols-3 grid-rows-1 sm:footer-horizontal pt-20 bg-black text-blue-500 border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
       id='Contact'>
          <div className='grid pl-50 max-md:pl-0'>
            <h5>Content</h5>
            <hr></hr>
            <a href='#' className='hover:text-white transition duration-300'>Motorsport</a>
            <a href='#' className='hover:text-white transition duration-300'>Tech</a>
            <a href='#' className='hover:text-white transition duration-300'>Gaming</a>
            <a href='#' className='hover:text-white transition duration-300'>Articles</a>
            <a href='#' className='hover:text-white transition duration-300'>Categories</a>
          </div>
          <div className='grid'>
            <h5>Contact</h5>
            <hr></hr>
            <a href='mailto:maximharvancik@gmail.com' className='hover:text-white transition duration-300'>My mail</a>
            <a href='https://www.instagram.com/harvancik_maxim/' className='hover:text-white transition duration-300'>instagram</a>
            <a href='https://x.com/HarvancikMaxim' className='hover:text-white transition duration-300'>twitter (X)</a>
            <a href='https://www.linkedin.com/in/maxim-harvancik-b1512a294/' className='hover:text-white transition duration-300'>LinkedIn</a>
            <a href='#'></a>
          </div>
      </footer>
          <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32 top-320 max-md:top-530 pt-20">
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
                      className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                    <dd className="mt-2 text-base/7 text-gray-400">
                      I'm pulbishing every week multiple articles about many topics. Be first to see them out.
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                    <dd className="mt-2 text-base/7 text-gray-400">
                      If you subscribed to our newsletter and later changed your mind, don't worry you can unsubscribed any time.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
        </div>
    <aside className="bg-black/90 pl-124 top-390 max-md:top-601 relative max-md:pl-0 max-md:text-lg max-md:text-center">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
        </div>
    )
}