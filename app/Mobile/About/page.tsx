'use client'
import { useState, useEffect } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function About() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return(
        <div className="relative bg-mobile h-screen">
            <header className="bg-secondary-mobile h-20 fixed w-full overflow-hidden">
                <h1 className="text-4xl text-black font-raleway pt-4 pl-8">About MHBlog</h1>
            </header>

            <div className='relative top-30 text-2xl text-start'>
                <p className='font-raleway'>
                    MHBlog was created with a purpose to learnand develop my skills as web developer.
                    Main content of this blog is motorsport but you can also see on my blog tutorials, game, tech, movie reviews,...
                    If you are interested to collaborate or anything more you can view my personal portfolio where you can learn much more about me.
                </p>
                <p className='pt-10'>
                  <a href='/'>Link here.</a>
                </p>

                    <a href='/Mobile'>
                        <button className='relative top-10 left-1/5 w-50 h-15 rounded-full hover:shadow-2xl shadow-black text-black bg-white border border-black hover:bg-black hover:border-white hover:text-white transition duration-300'>
                        Return back</button>
                    </a>
            </div>

        </div>
    )
}