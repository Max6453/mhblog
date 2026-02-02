'use client'
import { ArrowUpIcon, CalendarDaysIcon, HandRaisedIcon} from '@heroicons/react/24/outline'
import * as React from "react"
import SupabaseForm from '../components/ui/supabaseForm';
import Image from 'next/image'
import Header from '@/components/templates/header-template';
import Snowfall from 'react-snowfall'
import RssIcon from '@heroicons/react/24/outline';

const articles = [
  {title: 'Stock market in feburary - big drop for tech giant',
   href: '/Tech/stock/stock-market-last-february-week-2026',
   coverImage: '/assets/tech/microsoft-drop-february.webp',
   ImageName: 'microsoft drop'
  },
  {title: 'Clair Obscur: Expedition 33 - Review ',
   href: '/Reviews/Gaming/Clair-Obscur-Expedition-33',
   coverImage: '/assets/gaming/Expedition-33.avif',
   ImageName: 'E33'
  },
  {title: 'Assassins Creed: Mirage - Review ',
   href: '/Reviews/Gaming/Assassins-Creed-Mirage',
   coverImage: '/assets/gaming/ACMirage.jpg',
   ImageName: 'portimao'
  },
  {title: 'Portimao returns for 2027, 2028 season',
   href: '/Motorsport/Formula-1/feed/portimao-returns',
   coverImage: '/assets/motorsport/Portimao.avif',
   ImageName: 'portimao'
  },
  {title: 'Big RAM shortage - Could AI drastically change RAM market',
   href: '/Tech/ram-shortage-2025',
   coverImage: '/assets/tech/ram-shortage.jpg',
   ImageName: 'PC'
  },
  {title: 'Abu Dhabi Grand Prix - Weekend Report',
   href: '/Motorsport/Formula-1/2025/Abu-Dhabi-Grand-Prix/Weekend-Report',
   coverImage: '/assets/motorsport/lando-abu-dhabi-post-race-moment.webp',
   ImageName: 'LN1'
  },
]

export default function Main() {
  const selectedArticles = articles.filter(article =>
    [
      '/Reviews/Gaming/Clair-Obscur-Expedition-33',
      '/Motorsport/Formula-1/feed/portimao-returns',
      '/Motorsport/Formula-1/2025/Abu-Dhabi-Grand-Prix/Weekend-Report'
    ].includes(article.href)
  );

 const selectedArticlesPopular = articles.filter(article =>   [
    '/Reviews/Gaming/Clair-Obscur-Expedition-33',
    '/Reviews/Gaming/Assassins-Creed-Mirage',
    '/Motorsport/Formula-1/feed/portimao-returns'
  ].includes(article.href)
);


  return (
  <div className='bg-neutral-900 transition-colors duration-500'>
    {/* FOR WINTER ONLY  
  <Snowfall
  color='#fff'
  enable3DRotation={true}/>
  */}
    {/*
    <Banner text="LATEST EVENTS: 24 Hours of Le Man's - WEC; Formula 1 Canadian Grand Prix - Qualifying at 10pm CET; NHL Edmonton Oilers vs Florida Panthers at 2am CET"
    speed={25}/> 
    */}
    <div>
      <Header/>
    </div>

{/* DOCK NAVBAR FOR WEB APP 
    <div className='top-20 relative'>
    <DockBar/>
    </div>

{/* END NAVBAR 

{/* LATEST */}
<div className='h-dvh' id='Latest'>
  <div className="absolute top-0 z-[-2] h-370 w-full"></div>
      <h1 className='lg:text-7xl md:text-5xl max-md:text-5xl text-white relative max-md:top-10 lg:pt-15 pl-10 font-Exo-2'>latest</h1>
    <div className="relative top-20 max-sm:pl-11.5 lg:pl-12 max-md:pl-11.5 md:pl-0 grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
      {articles.map((article, index) => (
        <a href={article.href} key={index}>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 overflow-hidden duration-250 hover:shadow-xl shadow-white">
        <Image
        alt={article.ImageName}
        width={300} height={300}
        src={article.coverImage}
        className=' object-cover w-full h-full z-50 rounded-4xl hover:scale-110 duration-250 hover:shadow-lg shadow-white'/>
        <h3 className='relative items-center bottom-66 text-xl pl-3 max-sm:pt-2 linear-90 text-white font-bold font-Exo-2'>{article.title}</h3>
      </div>
      </a>
       ))}
    </div>
   </div>
    {/* END LATEST */}

    {/* MOST POPULAR */}
          <div className='relative grid lg:grid-cols-2  p-1 -m-6 pt-10 max-sm:grid-cols-1 sm:grid-cols-1 w-full h-250 xl:top-40 lg:top-100 md:top-110 sm:top-100 max-sm:top-330'>
           <div className='relative w-full'>
            <h3 className='lg:text-4xl text-center max-sm:text-5xl text-white relative max-md:top-0 lg:pt-10 pr-10 max-sm:pl-15 pb-0.5 max-sm:pb-2 font-Exo-2'>Trending</h3>
             <hr className='w-100 max-sm:w-70 left-37 max-sm:left-14 relative'/>
            <div className='flex flex-col relative lg:pl-26 md:pl-0 max-sm:pl-3'>
            {selectedArticlesPopular.map(article => (
              <a href={article.href} key={article.href}>
                <div className="w-100 h-65 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 justify-items-center rounded-3xl border-2 border-white">
                  <Image
                    alt={article.ImageName}
                    width={300}
                    height={300}
                    src={article.coverImage}
                    className="object-cover w-full h-full hover:scale-110 duration-250"
                  />
                  <h3 className="z-50 relative bottom-15 pt-5 max-sm:pt-0 text-center text-xl pl-3 text-white bg-black/60 w-full h-15 font-bold font-Exo-2">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          </div>
          {/* TECH, REVIEW, ETC... */}
          <div className=' relative w-full '>
            <h3 className='lg:text-4xl text-center max-sm:text-5xl text-white relative max-md:top-0 lg:pt-10 max-sm:pt-20 pl-10 md:pl-0 max-sm:pl-9 pb-0.5 max-sm:pb-2 font-Exo-2'>Editor's choice</h3>
            <hr className='w-100 max-sm:w-70 left-48 max-sm:left-14 relative'/>
           <div className='flex flex-col relative lg:pl-37 md:pl-0 max-sm:pl-3'>
            {selectedArticles.map(article => (
              <a href={article.href} key={article.href}>
                <div className="w-100 h-65 max-sm:w-80 max-sm:m-5 overflow-hidden m-10 justify-items-center rounded-3xl border-2 border-white">
                  <Image
                    alt={article.ImageName}
                    width={300}
                    height={300}
                    src={article.coverImage}
                    className="object-cover w-full h-full hover:scale-110 duration-250"
                  />
                  <h3 className="z-50 relative bottom-15 pt-5 max-sm:pt-0 text-center text-xl pl-3 text-white bg-black/60 w-full h-15 font-bold font-Exo-2">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          </div>
        </div>
    {/* END MOST POPULAR */}

      {/* FOOTER */}
       <footer
       className="relative xl:top-60 lg:top-80 md:top-125 max-md:top-165 sm:top-350 max-sm:top-600 h-full w-full text-center sm:footer-horizontal pt-10 text-black font-edu-vic-wa-nt-beginner p-10 text-2xl"
       id='Newsletter'>
          <div className="relative isolate overflow-hidden py-16 sm:py-24 max-sm:py-0 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-0">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Be notify at every event which happened recent days in motorsport, tech, gaming and more.
                  </p>
                  <SupabaseForm/>
                </div>
                <dl className="grid relative grid-cols-1 gap-x-8 gap-y-10 max-sm:pt-25 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      I’m publishing multiple articles every week on a variety of topics. Be the first to see them.
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      If you subscribe to our newsletter and later change your mind, don’t worry — you can unsubscribe at any time.
                    </dd>
                  </div>
                  <div className='relative grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 left-20 max-sm:left-0'>
                    <div className='grid lg:grid-cols-1 max-sm:left-0'>
                    <h3 className='text-white max-sm:pl-0'>Follow me on my journey</h3>
                    <ul className='flex gap-3 max-sm:gap-8 max-sm:pt-10 max-sm:pl-1 relative justify-center'>
                    <li>
                    <a href='https://www.instagram.com/harvancik_maxim/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10 hover:text-shadow-blue-400'>
                    <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg></a></li>
                    <li>
                      <a href='https://www.linkedin.com/in/maxim-harvancik-b1512a294/'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='size-10'>
                        <path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg></a>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 hover:text-gray-400 duration-300 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                    </li>
                    </ul>
                    </div>
               </div>
                  <div className='flex relative'>
                    <ul className='grid grid-cols-1 gap-7 relative pl-20 max-sm:pl-19 justify-end text-white'>
                      <li className='hover:text-gray-400 duration-300'><a href='/Legal/Privacy-Policy'>Privacy Policy</a></li>
                      <li className='hover:text-gray-400 duration-300'><a href='/Legal/Terms-of-use'>Terms of use</a></li>
                      <li className='hover:text-gray-400 duration-300'><a href='/Contact'>Contact</a></li>
                    </ul>
                  </div>
                  <span>
                <a href="#top" className='absolute right-23'>
                  <ArrowUpIcon className='size-20 text-white hover:-translate-y-1 duration-200'/></a>
                  </span>
                </dl>
              </div>
            </div>
        </div>
        <div className='pt-10 max-sm:pt-0 absolute top-100 md:left-65 sm:left-20 max-sm:left-16'>
          <a href='/downloads/application-167c16ef-20d8-4555-98a0-3b864bd69ec4.apk' download>
          <button className='className="px-6 py-3 p-3 font-Exo-2 bg-background hover:bg-white text-white hover:text-black border-white border rounded-xl shadow-lg transition'>
            Download our app
          </button>
          </a>
        </div>
      </footer>
          <aside className="relative text-center items-baseline pr-20 xl:top-60 lg:top-80 md:top-125 max-md:top-165 sm:top-350 max-sm:top-600 max-md:text-lg max-md:text-center max-sm:pl-18">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
</div>
  )
}