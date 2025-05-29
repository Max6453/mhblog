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
          <h3 className='text-xl font-edu-vic-wa-nt-beginner pt-2 text-black'>Ensayos y artículos de diversos medios</h3>
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

      <h1 className='lg:text-7xl max-md:text-5xl text-black relative max-md:top-40 lg:pt-10 pl-10 font-Exo-2'>últimas noticias</h1>
    <div className="relative top-20 max-md:top-50 max-sm:pl-11.5 max-md:pl-11.5 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2">
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/monaco.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <span className='relative bottom-66 text-xl pl-8 text-white font-bold font-Exo-2'>Informe final del Gran Premio de Mónaco</span>
        <a href='/Formula-1/Monaco-Grand-Prix'>
        <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-28 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
          See more</button>
        </a>
      </div>
      <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/Emilia-romagna.webp' className='object-cover w-full h-full z-50 rounded-4xl'></img>
        <span className='relative bottom-66 text-xl pl-1 text-white font-bold font-Exo-2'>Informe final del Gran Premio de Emilia-Romaña</span>
        <a href='/Formula-1/Emilia-Romagna-Grand-Prix'>
        <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-5 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
          See more</button>
        </a>
      </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
      <img src='/assets/Miami.avif' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>Informe final del Gran Premio de Miami</span>
      <a href='/Formula-1/Miami-Grand-Prix'>
      <button className='bg-white border border-blue-500 relative bottom-20 max-md:-left-4.5 left-30 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
        <img src='/assets/WEC-SPA.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl pl-10 text-white font-bold font-Exo-2'>WEC - 6 horas de Spa</span>
      <a href='#'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:bottom-20 max-md:left-20 right-25 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
               <img src='/assets/css.png' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>CSS para principiantes</span>
      <a href='#'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:left-20 right-8 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-110 transition duration-500">
               <img src='/assets/html.jpg' className='object-cover w-full h-full z-50 rounded-4xl'></img>
      <span className='relative bottom-66 text-xl left-5 text-white font-bold font-Exo-2 text-start'>HTML para principiantes</span>
      <a href='/Tutorials-and-tips/HTML-for-beginners'>
      <button className='bg-white border border-blue-500 relative bottom-14 max-md:left-20 right-13 text-black font-Exo-2 rounded-full w-25 h-10 hover:bg-blue-500 hover:border-white hover:text-white transition duration-300'>
        See more</button>
      </a>
    </div>
    </div>
    {/* END LATEST */}

    {/* ABOUT */}
    <div className='bg-white max-md:top-70 h-screen relative min-w-full bottom-10' id='About'>
      <h1 className='max-md:text-5xl lg:text-5xl text-black font-Exo-2 max-md:text-center text-start md:pl-10 md:pt-10'>About</h1>
      <p className='font-raleway font-medium pt-5 pl-2 lg:text-2xl lg:w-300 lg:pl-10 text-black'>
        Hola a todos.<br/>
        Me llamo Max y tengo 17 años. Soy de Žilina, Eslovaquia.
        Este blog se creó con el propósito de aprender nuevas habilidades y progresar en mi aprendizaje del desarrollo web.
        En la sección inferior podrán conocerme y, cuando finalmente publique mi portafolio, podrán ver más sobre mí.<br>
        </br>
        Mi mayor pasión es la programación y el automovilismo. Ambas cosas (y la tecnología) serán los temas más populares en mi sitio web.<br/>
        Mi trayectoria con la programación comenzó en 2022 cuando necesitaba un pasatiempo.
        Quería ir a una escuela especializada en programación, pero no me aceptaron. Los eslovacos lo sabían.
        Así que empecé con sitios web y portafolios sencillos.
        Poco después, empecé a aprender Python por un breve tiempo, ya que, a través de Python y la biblioteca FastF1, podía recopilar datos y generar telemetrías.
        Sigo haciéndolo, pero no tanto como para crear e implementar sitios web.<br/>
Mi proyecto del que estoy más orgulloso es el <a className='font-black hover:text-blue-500' href='https://pure-rxcing.vercel.app'>sitio web de Pure Rxcing</a> (no es un sitio web oficial, POR FAVOR, NO LO TOME EN SERIO).
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 bg-white text-black'>
        Soy experto en HTML y CSS.<br/>
        Tengo un nivel avanzado de Javascript y su framework, React, y un nivel básico de Next.js.<br/>
        Conozco los fundamentos de SQL. Puedo trabajar con MySQL, PostgreSQL y MongoDB.<br/>
        Para el diseño, uso Figma.<br/>
        También tengo conocimientos básicos de Python.<br/>

      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 xl:w-full bg-white text-black'>
        Toda la sección sobre mí se escribió mientras hablaba contigo.
        Pero te aseguro que, en el trabajo, soy muy profesional.
        Debo decir que soy una persona rutinaria. Tengo una excelente gestión del tiempo y me gusta trabajar en equipo.
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 xl:w-full lg:pl-10 pb-10 bg-white text-black'>
      Puedes ver más sobre mí en mi portafolio, que publicaré próximamente. Hasta entonces, disfruta de mi blog.
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
                  <h2 className="text-4xl font-semibold tracking-tight text-white">Suscríbete a nuestro boletín</h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Manténgase informado de todos los eventos que ocurrieron los últimos días en deportes de motor, tecnología, juegos y más.
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
                    <dt className="mt-4 text-base font-semibold text-white">Artículos semanales</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      Publico artículos semanales sobre diversos temas. ¡Sé el primero en leerlos!
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                    <dd className="mt-2 text-base/7 text-white">
                      Si te suscribiste a nuestra newsletter y luego cambiaste de opinión, no te preocupes, puedes darte de baja en cualquier momento.
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
