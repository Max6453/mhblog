'use client'
import { useState } from 'react'
import { CalendarDaysIcon, HandRaisedIcon, ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion"
import SupabaseForm from '@/components/ui/supabaseForm';
import DockBar from '@/components/ui/Dock'
import Header from '@/components/main/header'

const itemsPerPage = 6;

const articles = [
          {
    title: "Italian Grand Prix - Weekend report",
    href: "/Motorsport/Formula-1/2025/Italian-Grand-Prix/Weekend-Report",
    image: "/assets/Monza2025.jpg",
  },
        {
    title: "Dutch Grand Prix - Race report",
    href: "/Motorsport/Formula-1/2025/Dutch-Grand-Prix/Race-Report",
    image: "/assets/DutchGP2025-R.jpg",
  },
        {
    title: "Dutch Grand Prix - Qualifying report",
    href: "/Motorsport/Formula-1/2025/Dutch-Grand-Prix/Qualifying-Report",
    image: "/assets/DutchGP2025-Q.webp",
  },
        {
    title: "Dutch Grand Prix - Friday report",
    href: "/Motorsport/Formula-1/2025/Dutch-Grand-Prix/Friday-Report",
    image: "/assets/DutchGP2025.png",
  },
      {
    title: "Hungarian Grand Prix - Weekend Report",
    href: "/Motorsport/Formula-1/2025/Hungarian-Grand-Prix/Weekend-Report",
    image: "/assets/Hungary-mcl.avif",
  },
    {
    title: "Hungarian Grand Prix - preview",
    href: "/Motorsport/Formula-1/2025/Hungarian-Grand-Prix/Preview",
    image: "/assets/Hungary-Preview.jpg",
  },
    {
    title: "Belgium Grand Prix - race report",
    href: "/Motorsport/Formula-1/2025/Belgium-Grand-Prix/Race-Report",
    image: "/assets/MCL-Spa.jpg",
  },
    {
    title: "Belgium Grand Prix - weekend report",
    href: "/Motorsport/Formula-1/2025/Belgium-Grand-Prix/Weekend-Report",
    image: "/assets/OP81-Spa.jpg",
  },
    {
    title: "GTWC Misano - report",
    href: "/Motorsport/GTWC/Misano-Report",
    image: "/assets/GTWC-Misano-BMW.jpg",
  },
  {
    title: "British Grand Prix - race report",
    href: "/Motorsport/Formula-1/2025/British-Grand-Prix/Race-Report",
    image: "/assets/britshGP2025.jpg",
  },
  {
    title: "British Grand Prix - Friday report",
    href: "/Motorsport/Formula-1/2025/british-Grand-Prix/Friday-Report",
    image: "/assets/McLaren-in-FP1-Silverstone-scaled.webp",
  },
  {
    title: "Austrian Grand Prix",
    href: "/Motorpsort/Formula-1/2025/Austrian-Grand-Prix/Race-Report",
    image: "/assets/Austria.webp",
  },
  {
    title: "24 Hours of Nurburgring",
    href: "/Motorsport/GTWC/24-Hours-of-Nurburgring",
    image: "/assets/24-Nurburgring.jpg",
  },
  {
    title: "Canadian Grand Prix",
    href: "/Motorsport/Formula-1/2025/Canadian-Grand-Prix",
    image: "/assets/Canada.webp",
  },
  {
    title: "24 Hours of Le Man's",
    href: "/Motorsport/WEC/24-Hours-of-Le-Mans",
    image: "/assets/Le-Mans.jpg",
  },
  {
    title: "Spanish Grand Prix",
    href: "/Motorsport/Formula-1/2025/Spanish-Grand-Prix",
    image: "/assets/Spain.jpg",
  },
  {
    title: "Monaco Grand Prix",
    href: "/Motorsport/Formula-1/2025/Monaco-Grand-Prix",
    image: "/assets/monaco.jpg",
  },
  {
    title: "Emilia-Romagna Grand Prix",
    href: "/Motorsport/Formula-1/2025/Emilia-Romagna-Grand-Prix",
    image: "/assets/Emilia-romagna.webp",
  },
];

export default function Motorsport() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedArticles = articles.slice(startIndex, startIndex + itemsPerPage);


    return(
        <div>
          <div>
            <Header/>
          </div>
<div>
    <h1 className='text-5xl text-start m-5 pt-10'>Motorsport</h1>
    <div className='text-xl m-5 text-start'>
        <p className='max-sm:w-80 w-200'>
            Welcome to mhblog motorsport hub. Here you can view latest news, reports, briefings and more content focused on motorsport.
            You will mainly see formula 1, WEC, GTWC or any big event in the world of motorsport.
            In recent years, motorsport is finally getting the recognition it deserve and it is my pleasure to be the first one to inform you about latest intrigues in world of motorsport.
        </p>
    </div>
</div>

{/* LATEST */}
<div className='relative h-screen' id='Latest'>
      <div className="absolute top-0 z-[-2] h-370 w-full"></div>
      <h1 className='lg:text-7xl md:text-5xl max-md:text-5xl text-white relative max-md:top-10 lg:pt-10 pl-10 font-Exo-2'>Articles</h1>
            <div className="relative top-20 max-sm:pl-11.5 lg:pl-12 max-md:pl-11.5 md:pl-0 grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
        {selectedArticles.map((article, index) => (
          <a href={article.href} key={index}>
            <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden">
              <img src={article.image} className='object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250' />
              <h3 className='relative items-center bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>{article.title}</h3>
              <button className='relative lg:bottom-28 max-md:bottom-27 md:bottom-20 left-1/3 w-25 h-10 rounded-full text-white bg-neutral-950 border border-white hover:bg-white hover:border-black hover:text-black transition duration-300'>
                See more
              </button>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
            <div className="flex px-39 max-sm:px-30 relative bottom-30 max-sm:top-40 h-20">
        <a href='/Motorsport/Pages/2'>
        <button
          className="w-30 h-15 rounded text-white text-black border rounded-full hover:bg-white hover:text-black duration-250"
        >
          Next
        </button>
        </a>
      </div>
    </div>
    {/* END LATEST */}

 {/* FOOTER */}
       <footer
       className="relative xl:top-80 lg:top-80 md:top-125 max-md:top-165 max-sm:top-350 h-full w-full text-center sm:footer-horizontal text-black font-edu-vic-wa-nt-beginner text-2xl"
       id='Newsletter'>
          <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Be notify at every event which happened recent days in motorsport, tech, gaming and more.
                  </p>
                  <SupabaseForm/>
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
                    <ul className='grid grid-cols-1 gap-7 relative pl-20  max-sm:pl-23 justify-end text-white'>
                      <li className='hover:text-gray-400 duration-300'><a href='/Privacy-Policy'>Privacy Policy</a></li>
                      <li className='hover:text-gray-400 duration-300'><a href='/Terms-of-use'>Terms of use</a></li>
                      <li className='hover:text-gray-400 duration-300'><a href='/Contact'>Contact</a></li>
                    </ul>
                  </div>
                  <span>
                <a href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 384 512" className="absolute right-28 max-sm:right-33">
                <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                </svg></a>
                  </span>
                </dl>
              </div>
            </div>
        </div>
      </footer>
    <aside className="relative text-center items-baseline pr-20 xl:top-80 lg:top-80 md:top-125 max-md:top-165 max-sm:top-350 max-md:text-lg max-md:text-center max-sm:pl-18">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
  </div>
 )
}