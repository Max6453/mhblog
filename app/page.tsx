'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function blog() {

  return (
    <div className="h-screen">
      <header
        className="w-full inset-x-0 shadow-lg transition-transform duration-300 bg-white">
        <div className="relative text-start pt-3 pl-3">
          <h1 className="text-6xl font-Exo-2">MHBlog</h1>
          <h3 className="text-xl font-edu-vic-wa-nt-beginner pt-2">
            Essays and other intriques from Maxim harvančík
          </h3>
        </div>
        <nav className="inline-flex bottom-10 relative list-none gap-5 font-Exo-2 text-xl justify-end left-260">
          <ul className="" />
          <li><a href="#">About</a></li>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"></a></li>
        </nav>
        {/*Mobile menu */}
        <nav className="hidden">
          <ul className="" />
          <li><a href="#">About</a></li>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"></a></li>
        </nav>
      </header>

      <div className="pt-20 grid lg:grid-cols-3 md:grid-cols-1 grid-rows-3 gap-8 pl-10">
        <div className="bg-white rounded-4xl w-90 h-70"></div>
        <div className="bg-white rounded-4xl w-90 h-70"></div>
        <div className="bg-white rounded-4xl w-90 h-70"></div>
        <div className="bg-white rounded-4xl w-90 h-70"></div>
      </div>
    </div>
  );
}