import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#About', current: true },
  { name: 'Latest', href: '#', current: false },
  { name: 'Categories', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Main() {
  return (
  <div>  
    <Disclosure as="nav" className="bg-white h-40 max-md:h-40 relative max-md:fixed max-md:w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative h-16 justify-between pt-6">
          <h1 className='text-5xl font-Exo-2 text-black'>MHBlog</h1>
          <h3 className='text-xl font-edu-vic-wa-nt-beginner pt-2 text-black'>Essays and itriques from many types of media</h3>
          <a href='/'>
          <img src="/Image.png" className='bottom-24 left-125 items-center relative sm:hidden md:hidden max-md:hidden lg:block'/>
          </a>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-end left-150 max-md:left-165 sm:left-150 max-sm:left-93 pt-10 justify-center rounded-md p-2 text-black hover:bg-white hover:text-blue-500 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-10 group-data-open:hidden transition-all duration-300" />
              <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block transition-all duration-300" />
            </DisclosureButton>
          </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <div className="hidden sm:ml-6 sm:block xl:left-200 max-sm:hidden md:left-100 lg:left-110 max-md:hidden text-xl relative max">
              <div className="flex space-x-4 transition-all duration-300">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-300 text-black hover:text-blue-500' : 'text-black hover:bg-white hover:text-blue-500',
                      'rounded-md px-3 py-2 text-xl font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden transition-all duration-300 -z-50">
        <div className="space-y-1 px-2 pb-5 bg-white pt-25 transition-all duration-300 border-b border-black shadow-2xl">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-300 text-black hover:text-blue-500' : 'text-black hover:bg-white hover:text-blue-500',
                'block rounded-md px-3 py-2 text-base font-medium transition-all duration-300',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div className="relative pt-20 max-md:top-50 max-sm:pl-20 max-md:pl-8 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2 -z-10">
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    </div>

    <div className='bg-white max-md:top-70 h-screen relative' id='About'>
      <h1 className='md:text-3xl lg:text-5xl text-black font-Exo-2 max-md:text-center text-start md:pl-10 md:pt-10'>About</h1>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10'>
        Hey everyone.<br/>
        My name is Max and I'm 17 years old. I'm from Žilina, Slovakia.
        My biggest passion is programming and motorsport. Those two things (and tech) will be the most popular topic on my website.<br/>
        My journey with coding begun in 2022 when i needed a hobby. 
        I wanted to go to the school which specialized in programming but i wasn't accepted. Those from Slovakia known.
        So i started with simple websites and portfolios.
        Soon after i started to learn python for brief moment because i could trough python and library called FastF1 gather data and make telemetries from it.
        I'm still doing it but not as much as creating and deploying websites.<br/>
        My proudest project is <a className='font-black hover:text-blue-500' href='https://pure-rxcing.vercel.app'>pure rxcing website</a> (its not official website PLEASE DO NOT TAKE IT SERIOUSLY).
        
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 bg-white'>
        I'm proficient in HTML, CSS.<br/>
        I'm advanced in Javascript and it's framework - React.<br/>
        I know basics of SQL. I can work in mySQL, postgreSQL, mongoDB.<br/>
        For design i use figma.<br/>
        And also basics of python i control.<br/>
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 lg:pl-10 bg-white'>
          Whole section about me was intented to be written as I talking to you.
          But I can assure you when i comes to work, I'm really profesional.
          I'm must say that I'm routine oriented.
          I have perfect time management and i like to work as a team.
      </p>
      <p className='font-raleway font-medium pt-5 lg:text-2xl lg:w-300 xl:w-full lg:pl-10 bg-white'>
        You can see more things about me at my portfolio which will be publish in near future.
        Until then, enjoy my blog.
      </p>
    </div>
</div>
  )
}
