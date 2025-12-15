'use client'
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Bars2Icon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import Header from "@/components/templates/header-template";

export default function Nurburgring() {
    return(
        <div className="bg-background h-full relative">
        <Header/>
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
            className="relative lg:top-0 min-md:top-0 max-md:top-0 max-sm:top-0 sm:top-0 h-full w-full text-center border-white sm:footer-horizontal pt-10 text-black font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
                            className="min-w-0 flex-auto rounded-md bg-transparent px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                            />
                            <button
                            type="submit"
                            className="flex-none rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-white border-2 transition duration-300"
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
                <a href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 384 512" className="absolute right-10 bottom-5">
                <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                </svg></a>
            </footer>
            <aside className="relative text-center items-baseline lg:top-0 md:top-0 max-md:top-0 max-sm:top-0 max-md:text-lg max-md:text-center">
                <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
            </aside>
        </div>
    )
}