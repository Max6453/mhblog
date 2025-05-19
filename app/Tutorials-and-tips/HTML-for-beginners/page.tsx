  'use client'
  import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export default function MiamiGP() {
    return(
<div className="bg-white relative">
          <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-82 left-110 z-10 font-josefin-sans max-md:left-12 max-md:top-20 max-md:text-3xl text-blue-500 text-center font-bold">
                HTML for beginners
            </h1>
            <h5 className="absolute text-6xl top-100 left-70 z-10 font-sans max-md:left-0 max-md:pl-5 max-md:top-50 text-center max-md:text-xl text-blue-500 font-bold">
                from fundamentals to advanced
            </h5>
            <img
                src="/assets/html.jpg"
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="bg-white h-screen">
                <span className="text-2xl text-black">Reading time: <span className="text-blue-500">1.55 minutes</span></span>
                <div className="text-2xl text-center justify-center text-black pt-15 bg-white">
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    hey everyone.
                    My name is Max and here will be quick intro to HTML
                </p>
                <h3>What is HTML</h3>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                    HTML is Hypertext Markup Language which is primary used in web development.
                    Whole structure of website is depended on this file.
                    Over the years, HTML had many versions. Latest version of HTML is HTML5.
                </p>
                <h3>HTML samples</h3>
                <p className="text-start text-2xl pl-80 max-md:pl-2 max-md:w-90 font-josefin-sans pt-15 w-300">
                  HTML is best language (many developers are disaggring with a statement that HTML is programming language) to start as student or self-made developer like me :).
                  It's best to start because of it's simplicity and understanding. 
                </p>
              <div className="mockup-code w-200 top-15 rounded-4xl h-190 bg-gray-400 text-start pt-7 pl-5 left-75 relative">
                <pre><code className="text-wrap">
                  //every documnt starts with !DOCTYPE html<br/>
                  !DOCTYPE html<br/>
                  //You can choose what language your document would be - en, sk, au, etc. <br/>
                  html lang="en"<br/>
                  //metadata are going to head of your html document<br/>
                head<br/>
                //Decoding of the HTML file(UTF-8 is the best i guess. Never tried anything else.)<br/>
                  meta charset="UTF-8"<br/>
                  //This metadata are telling the browser how the HTML file will have viewport so how it would be seen on pc, mobile, tablet etc.<br/>
                  meta name="viewport" content="width=device-width, initial-scale=1.0"<br/>
                  //Name of your document<br/>
                  Document<br/>
                /head<br/>
                //Start of main content of your page is in body tag<br/>
                body<br/>
                  <br/>
                /body<br/>
                /html<br/>
                </code></pre>
              </div>
                </div>
            </div>

             <footer
       className="footer top-200 max-md:top-50 border-b text-center border-white grid lg:gap-250 max-md:gap-40 grid-cols-3 grid-rows-1 relative sm:footer-horizontal pt-10 bg-black text-blue-500 border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
          <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32 top-100 max-md:top-40">
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