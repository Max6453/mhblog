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
import Image from 'next/image'

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
    <Disclosure as="nav" className="bg-white h-40 max-md:h-30 relative max-md:fixed max-md:w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative h-16 justify-between pt-6">
          <h1 className='text-5xl font-Exo-2 text-black'>MHBlog</h1>
          <h3 className='text-xl font-edu-vic-wa-nt-beginner pt-2 text-black'>Essays and itriques from many types of media</h3>
          <a href='' className='w-30 h-30 absolute'>
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
      <NavigationMenu className='left-21'>
       <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="About">
                Get to know about the author.
              </ListItem>
              <ListItem href="/docs/installation" title="Newsletter">
                hear more stories from me via email.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Latest">
                Latest essays, stories, intriques and more.
              </ListItem>
              <ListItem href="#Contact" title="Contact">
                You can contact me here via multiple choices
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden transition-all duration-300 -z-50 border-t top-14 relative left-0 items-start gap-0">
  <NavigationMenu className='pt-10 bg-white grid grid-cols-2 -z-0 pb-3 pl-30 relative items-start gap-0'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
      </DisclosurePanel>
    </Disclosure>


      <h1 className='lg:text-7xl max-md:text-5xl text-black relative max-md:top-40 lg:pt-10 pl-10 font-Exo-2'>latest</h1>
    <div className="relative top-20 max-md:top-50 max-sm:pl-11.5 max-md:pl-11.5 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2 -z-10 transition-all hover:scale-120 duration-500">

    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65 hover:scale-120 transition duration-300">
      <img src='/assets/Miami.avif' className='object-cover w-full h-full z-50 rounded-4xl hover:scale-120 transition duration-500'></img>
    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65">

    </div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    </div>

    <div className='bg-white max-md:top-70 h-screen relative min-w-full' id='About'>
      <h1 className='max-md:text-5xl lg:text-5xl text-black font-Exo-2 max-md:text-center text-start md:pl-10 md:pt-10'>About</h1>
      <p className='font-raleway font-medium pt-5 pl-2 lg:text-2xl lg:w-300 lg:pl-10 text-black'>
        Hey everyone.<br/>
        My name is Max and I'm 17 years old. I'm from Žilina, Slovakia.
        This blog was created with a purpose to learn new skills and progress in my learning in web development.
        Now in lower section you can get to know me and when i finally publish my portfolio, you can see more about me.<br>
        </br>
        My biggest passion is programming and motorsport. Those two things (and tech) will be the most popular topic on my website.<br/>
        My journey with coding begun in 2022 when i needed a hobby. 
        I wanted to go to the school which specialized in programming but i wasn't accepted. Those from Slovakia known.
        So i started with simple websites and portfolios.
        Soon after i started to learn python for brief moment because i could trough python and library called FastF1 gather data and make telemetries from it.
        I'm still doing it but not as much as creating and deploying websites.<br/>
        My proudest project is <a className='font-black hover:text-blue-500' href='https://pure-rxcing.vercel.app'>pure rxcing website</a> (its not official website PLEASE DO NOT TAKE IT SERIOUSLY).
        
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 bg-white text-black'>
        I'm proficient in HTML, CSS.<br/>
        I'm advanced in Javascript and it's framework - React and beginner in next.js.<br/>
        I know basics of SQL. I can work in mySQL, postgreSQL, mongoDB.<br/>
        For design i use figma.<br/>
        And also basics of python i control.<br/>
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 xl:w-full bg-white text-black'>
          Whole section about me was intented to be written as I talking to you.
          But I can assure you when i comes to work, I'm really profesional.
          I'm must say that I'm routine oriented.
          I have perfect time management and i like to work as a team.
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 xl:w-full lg:pl-10 bg-white text-black'>
        You can see more things about me at my portfolio which will be publish in near future.
        Until then, enjoy my blog.
      </p>
    </div>

       <footer
       className="footer top-24 max-md:top-50 border-b text-center border-white grid lg:gap-250 max-md:gap-40 grid-cols-3 grid-rows-1 relative sm:footer-horizontal pt-10 bg-black text-blue-500 border-t font-edu-vic-wa-nt-beginner p-10 text-2xl"
       id='Contact'>
          <div className='grid pl-50 max-md:pl-0'>
            <a href='#'>Motorsport</a>
            <a href='#'>Tech</a>
            <a href='#'>Gaming</a>
            <a href='#'>Articles</a>
            <a href='#'>Categories</a>
          </div>
          <div className='grid'>
            <a href='mailto:maximharvancik@gmail.com'>My mail</a>
            <a href='https://www.instagram.com/harvancik_maxim/'>instagram</a>
            <a href='https://x.com/HarvancikMaxim'>twitter (X)</a>
            <a href='https://www.linkedin.com/in/maxim-harvancik-b1512a294/'>LinkedIn</a>
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
