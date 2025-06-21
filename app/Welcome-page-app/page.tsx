'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function WelcomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white h-full">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold font-Exo-2 tracking-tight text-balance text-gray-900 sm:text-7xl">
              Welcome to the official app of MHBlog
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 font-edu-vic-wa-nt-beginner">
              Latest news and intrigues across many topics from motorsport to tech.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-neutral-950 px-3.5 py-2.5 text-sm font-edu-vic-wa-nt-beginner font-semibold text-white hover:text-black shadow-xs hover:bg-white duration-300 hover:border-black border"
              >
                head to the main page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
