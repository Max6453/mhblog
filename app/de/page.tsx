'use client'
import { useState, useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from "react"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const navigation = [
  { name: 'About', href: '#About', current: true },
  { name: 'Latest', href: '#', current: false },
  { name: 'Categories', href: '#', current: false },
  { name: 'Contact', href: '#Contact', current: false },
]

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Formula 1",
    href: "/Formula-1",
    description:
      "A pinnacle of motorsport",
  },
  {
    title: "WEC",
    href: "/WEC",
    description:
      "World Endurance Championship. The most competetive field in history of WEC is live right now. Don't miss it.",
  },
  {
    title: "Motorsport",
    href: "/Motorsport",
    description:
      "the hub of motorsport. Wheter to know more about upcomming regulations in F1 or how recent races in WEC ended, here you will know it sooner than anyone",
  },
  {
    title: "Tech",
    href: "/Tech",
    description: "From electronics to automotive. Choice is yours",
  },
  {
    title: "Around the world",
    href: "/Around-the-world",
    description:
      "Other topics and essays you can see",
  },
  {
    title: "Tutorials and tips",
    href: "/Tutorials-and-tips",
    description:
      "Even i can teach so head to the docs section and get to know about web development",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Main() {

  return (
  <div>  
    <Disclosure as="nav" className="bg-white h-40 max-md:h-35 relative max-md:fixed max-md:w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative h-16 justify-between pt-6">
          <h1 className='text-5xl font-Exo-2 text-black'>MHBlog</h1>
          <h3 className='text-xl font-edu-vic-wa-nt-beginner pt-2 text-black'>Essays and itriques from many types of media</h3>
          <a href='' className='w-30 h-30 absolute max-md:hidden'>
          <img src="/Image.png" className='bottom-24 left-125 items-center relative sm:hidden md:hidden max-md:hidden lg:block hover:scale-90 duration-400'/>
          </a>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-end max-md:left-165 sm:left-150 max-sm:left-70 pt-10 justify-center rounded-md p-2 text-black hover:bg-white hover:text-blue-500 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-10 group-data-open:hidden transition-all duration-300" />
              <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block transition-all duration-300" />
            </DisclosureButton>
          </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <div className="hidden sm:ml-6 sm:block xl:left-180 max-sm:hidden md:left-100 lg:left-90 max-md:hidden text-xl relative max">
     <Menubar className='m-2 p-7 px-5 bottom-2 relative'>
      <MenubarMenu>
        <MenubarTrigger>Motorsport</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Formula 1 
          </MenubarItem>
          <MenubarItem>
            WEC
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Motorsport hub
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>tech</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Iphone
          </MenubarItem>
          <MenubarItem>
            Andorid
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>PC</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>OS</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Windows</MenubarItem>
              <MenubarItem>Linux</MenubarItem>
              <MenubarItem>MacOS</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Automotive hub</MenubarItem>
          <MenubarItem>Phones hub</MenubarItem>
          <MenubarItem>systems hub</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tutorials</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            HTML</MenubarItem>
          <MenubarItem>
            CSS</MenubarItem>
          <MenubarItem>
            JavaScript
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cybersecurity
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            UI Design
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Around the world</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Games
          </MenubarItem>
          <MenubarItem>
            Movies
            </MenubarItem>
            <MenubarItem>
              Politics
            </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden transition-all duration-300 -z-50 border-t top-19 w-100 relative left-0 items-start gap-0">
<Menubar className='m-2 p-7 px-5 bottom-2 right-8 relative bg-white w-full'>
      <MenubarMenu>
        <MenubarTrigger>Motorsport</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Formula 1 
          </MenubarItem>
          <MenubarItem>
            WEC
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Motorsport hub
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>tech</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Iphone
          </MenubarItem>
          <MenubarItem>
            Andorid
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>PC</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>OS</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Windows</MenubarItem>
              <MenubarItem>Linux</MenubarItem>
              <MenubarItem>MacOS</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Automotive hub</MenubarItem>
          <MenubarItem>Phones hub</MenubarItem>
          <MenubarItem>systems hub</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tutorials</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            HTML</MenubarItem>
          <MenubarItem>
            CSS</MenubarItem>
          <MenubarItem>
            JavaScript
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cybersecurity
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            UI Design
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Around the world</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Games
          </MenubarItem>
          <MenubarItem>
            Movies
            </MenubarItem>
            <MenubarItem>
              Politics
            </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
      </DisclosurePanel>
    </Disclosure>
    {/* END NAVBAR */}

{/* LATEST */}

      <h1 className='lg:text-7xl max-md:text-5xl text-black relative max-md:top-40 lg:pt-10 pl-10 font-Exo-2'>neueste Nachrichten</h1>
    <div className="relative top-20 max-md:top-50 max-sm:pl-11.5 max-md:pl-11.5 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/monaco.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <span className='relative bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Nachbesprechung des Grand Prix von Monaco</span>
        <a href='/Formula-1/Monaco-Grand-Prix'>
        <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-28 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Emilia-romagna.webp' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <span className='relative bottom-66 text-xl pl-1 text-white font-bold font-Exo-2'>Nachbesprechung des Großen Preises der Emilia-Romagna</span>
        <a href='/Formula-1/Emilia-Romagna-Grand-Prix'>
        <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-5 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
          See more</button>
        </a>
      </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
      <img src='/assets/Miami.avif' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>Nachbesprechung des Grand Prix von Miami</span>
      <a href='/Formula-1/Miami-Grand-Prix'>
      <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-30 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/WEC-SPA.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>WEC – 6 Stunden von Spa</span>
      <a href='#'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:bottom-20 max-md:left-20 right-25 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
               <img src='/assets/css.png' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>CSS für Anfänger</span>
      <a href='#'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:left-20 right-8 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
               <img src='/assets/html.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>HTML für Anfänger</span>
      <a href='/Tutorials-and-tips/HTML-for-beginners'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:left-20 right-13 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    </div>
    {/* END LATEST */}

    {/* ABOUT */}
    <div className='bg-white max-md:top-70 h-screen relative min-w-full bottom-10' id='About'>
      <h1 className='max-md:text-5xl lg:text-5xl text-black font-Exo-2 max-md:text-center text-start md:pl-10 md:pt-10'>über mich</h1>
      <p className='font-raleway font-medium pt-5 pl-2 lg:text-2xl lg:w-300 lg:pl-10 text-black'>
Hallo zusammen.<br/>
Mein Name ist Max, ich bin 17 Jahre alt und komme aus Žilina, Slowakei.
Dieser Blog wurde erstellt, um neue Fähigkeiten zu erlernen und meine Kenntnisse in der Webentwicklung zu vertiefen.
Im unteren Bereich könnt ihr mich kennenlernen und sobald ich mein Portfolio veröffentliche, erfahrt ihr mehr über mich.<br>
</br>
Meine größte Leidenschaft ist Programmieren und Motorsport. Diese beiden Dinge (und Technik) werden das beliebteste Thema auf meiner Website sein.<br/>
Meine Reise mit dem Programmieren begann 2022, als ich ein Hobby brauchte.

Ich wollte eine Schule besuchen, die sich auf Programmieren spezialisiert hat, wurde aber nicht angenommen. Die Leute aus der Slowakei wussten Bescheid.
Also begann ich mit einfachen Websites und Portfolios.
Bald darauf begann ich kurz Python zu lernen, weil ich mit Python und der Bibliothek FastF1 Daten sammeln und daraus Telemetriedaten erstellen konnte.
Ich mache das immer noch, aber nicht so viel wie das Erstellen und Bereitstellen von Websites.<br/>
Mein stolzestes Projekt ist<a className='font-black hover:text-blue-500' href='https://pure-rxcing.vercel.app'>reine RXCING-Website</a> (es ist keine offizielle Website, BITTE NEHMEN SIE SIE NICHT ERNST).
        
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 bg-white text-black'>
        Ich beherrsche HTML und CSS.<br/>
        Ich bin fortgeschritten in Javascript und dem dazugehörigen Framework React und Anfänger in next.js.<br/>
        Ich kenne die Grundlagen von SQL. Ich arbeite mit MySQL, PostgreSQL und MongoDB.<br/>
        Für das Design verwende ich Figma.<br/>
        Außerdem beherrsche ich die Grundlagen von Python.<br/>
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 xl:w-full bg-white text-black'>
        Der gesamte Abschnitt über mich sollte so geschrieben werden, als würde ich mit Ihnen sprechen.
        Aber ich kann Ihnen versichern, dass ich bei der Arbeit wirklich professionell bin.
        Ich muss sagen, dass ich routinemäßig orientiert bin.
        Ich habe ein perfektes Zeitmanagement und arbeite gerne im Team.
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 xl:w-full lg:pl-10 pb-10 bg-white text-black'>
        Weitere Informationen zu mir finden Sie in meinem Portfolio, das in Kürze veröffentlicht wird.
        Bis dahin wünschen wir Ihnen viel Spaß auf meinem Blog.
      </p>
    </div>
      {/* END ABOUT */}

      {/* FOOTER */}
       <footer
       className="footer top-24 max-md:top-50 border-b text-center border-white grid lg:gap-250 max-md:gap-40 grid-cols-3 grid-rows-1 relative sm:footer-horizontal pt-10 bg-blue-500 text-black border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
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
          <div className="relative isolate overflow-hidden bg-blue-500 py-16 sm:py-24 lg:py-32 top-20 max-md:top-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-4xl font-semibold tracking-tight text-white">Abonnieren Sie unseren Newsletter</h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Seien Sie über alle Ereignisse der letzten Tage in den Bereichen Motorsport, Technik, Gaming und mehr informiert.
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
                      className="min-w-0 flex-auto rounded-md bg-blue-700 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-cyan-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 border-white border-2 transition duration-300"
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
                    <dt className="mt-4 text-base font-semibold text-white">Wöchentliche Artikel</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      Ich veröffentliche jede Woche mehrere Artikel zu verschiedenen Themen. Seien Sie der Erste, der sie sieht.
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      Wenn Sie unseren Newsletter abonniert und es sich später anders überlegt haben, können Sie ihn jederzeit wieder abbestellen.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
        </div>
    <aside className="bg-white/10 pl-124 top-20 max-md:top-40 relative max-md:pl-0 max-md:text-lg max-md:text-center">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by MHBlog</p>
      </aside>
</div>
  )
}
