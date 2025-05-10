  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function MiamiGP() {

    return(
<div className="bg-white relative">
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-80 z-10 font-josefin-sans max-md:left-7 max-md:top-70 max-md:text-4xl text-blue-600 text-center font-bold">
                Miami Grand Prix - debriefing
            </h1>
            <h5 className="absolute text-6xl top-100 left-20 z-10 font-sans max-md:left-7 max-md:top-70 max-md:text-4xl text-blue-500 font-bold">
                Everything that happened in Miami Grand Prix
            </h5>
            <img
                src="/assets/Miami.avif"
                className="min-w-full transition-transform duration-300"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="bg-white h-screen">
                <span className="text-2xl text-black">Reading time: <span className="text-blue-500">1.55 minutes</span></span>
                <div className="text-2xl text-center justify-center text-black pt-15 bg-white">
                <p className="text-start text-2xl pl-80 font-josefin-sans pt-20 w-300">
                    "I'm looking forward to strong result here in Miami.
                    Personally i love the track, it gives good vibes both the track and the city and miami really have a good flow with fast corners in 1st sector, slow in 2nd sector and two straights in 3th sector.
                    Our car should suit the track so i have high hopes for the race"
                </p>
                <p className="text-start text-2xl pl-80 font-josefin-sans pt-20 w-300">
                    Pirelli nominated for this race C3, C4 and C5 tyres which are much softer than used last year.
                    It still looks like a one-stop. A different one-stop - a slightly trickier one-stop, but still a one-stop.
                    Of course, we won’t know for certain until we run on the track, but the pre-event models still suggest the one-stop race with the Medium and Hard compounds is the quickest.
                </p>
                <p className="text-start text-2xl pl-80 font-josefin-sans pt-20 w-300"> 
                    We can say that Miami this season will be really unpredictable with chances of rain on saturday and sunday.
                    Also the softer compound isn't really helping in this situation.
                    Every team will have hard weekend but you fans, you will be pleased with many actions both on and off track.
                </p>
                </div>
            </div>

             <footer
       className="footer top-24 max-md:top-50 border-b text-center border-white grid lg:gap-250 max-md:gap-40 grid-cols-3 grid-rows-1 relative sm:footer-horizontal pt-10 bg-black text-blue-500 border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
          <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32 top-20 max-md:top-40">
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
    <aside className="bg-black/90 pl-124 top-20 max-md:top-40 relative max-md:pl-0 max-md:text-lg max-md:text-center">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
        </div>
    )
}