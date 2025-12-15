  'use client'
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Header from "@/components/templates/header-template";

export default function MiamiGP() {
    return(
<div className="bg-background relative">
  <div>
    <Header/>
  </div>
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-50 z-10 font-josefin-sans max-md:left-7 max-md:top-20 max-md:text-3xl text-blue-500 text-center font-bold">
                Emilia-Romagna Grand Prix - debriefing
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-0 max-md:top-50 text-center max-md:text-xl text-blue-500 font-bold">
                hear everything in eventfull Italian Grand Prix
            </h5>
            <img
                src="/assets/Emilia-romagna.webp"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="bg-white h-screen pb-10">
                <span className="text-2xl text-black">Reading time: <span className="text-blue-500">1.55 minutes</span></span>
                <div className="text-2xl text-center justify-center text-black bg-white">
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    Emilia-Romagna once again did not dissapoint.
                    We will talk now about everything that happened in the Emilia-Romagna Grand Prix.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    From the beggining of the weekend, Max Verstappen and his red bull showed signs of speed and possible threat to dominant Mcl39 of Lando Norris and Oscar Piastri.
                    Right after the start, MV1 saw the oportunity to overtake in T1 because OP81 choose more conservative approach to T1 and MV1 took advantage of it.
                    MV1 overtook the OP81 and from then on, MV1 shows excellent pace and he was practically unstopable.
                    Mclaren from the first time this season were slower on average than red bull of MV1.
                    Soon after, LN4 made great overtake into villenueve chicane (T4) and grabbed the P3.
                </p>
                <img src='/assets/Race_Pace-Imola.png'
                className="w-320 h-150 items-center justify-center pt-5 pl-20 left-10 relative max-md:w-200 max-md:left-0 max-md:pl-0 object-cover max-md:h-100"/>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300"> 
                    Around the 30th lap, The engine of Esteban Ocon couldn't handled it and blow up causing the virtual safety car (VSC).
                    The drivers whose pitted sooner such as Charles Leclerc on Oscar Piastri were in serious disadvanatge. Cars which stayed longer on medium had opportunity to pit and change the tires.
                    So MV1 stayed in P1 and LN4 P2.
                    In the last 20th laps, the car of Andrea Kimi Antonelli couldn't handled it either and AKA12 DNF causing another this time safety car.
                    MV1, LN4, LH44 took this advantage and pitted for newer tires. However CL16 and OP81 were once again disadvantaged.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300"> 
                    The first driver to finish was none other than Max Verstappen.
                    Second was Lando Norris.
                    Closing the podium on 3th was Oscar Piastri.
                </p>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300 pb-10">
                   This Years Imola was one to watch with planty of action on the track and also with amazing atmosphere whole weekend.
                   If this was the last Imola for a long time, then it was a beautifull way to say goodbye to Formula 1.
                </p>
                </div>
            </div>

             <footer
       className="footer relative top-338 max-md:top-650 border-b text-center border-white grid lg:gap-250 max-md:gap-40 grid-cols-3 grid-rows-1 sm:footer-horizontal pt-20 bg-black text-blue-500 border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
          <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32 top-162 max-md:top-380 pt-20">
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
    <aside className="bg-black/90 pl-124 top-228 max-md:top-447 relative max-md:pl-0 max-md:text-lg max-md:text-center">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
        </div>
    )
}