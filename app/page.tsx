import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Latest', href: '#', current: false },
  { name: 'Categories', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
  return (
  <div>  
    <Disclosure as="nav" className="bg-white h-30 max-md:h-50 relative max-md:fixed max-md:w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative h-16 justify-between">
          <h1 className='text-5xl font-Exo-2 pt-5'>MHBlog</h1>
          <h3 className='text-xl font-edu-vic-wa-nt-beginner pt-2'>Essays and itriques from many types of media</h3>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-end left-130 max-md:left-55 pt-10 justify-center rounded-md p-2 text-black hover:bg-white hover:text-blue-500 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-10 group-data-open:hidden transition-all duration-300" />
              <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block transition-all duration-300" />
            </DisclosureButton>
          </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <div className="hidden sm:ml-6 sm:block xl:left-160 sm:left-100 max-md:hidden text-xl relative max">
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

    <div className="relative pt-20 max-md:top-50 max-md:pl-3 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-10 pl-10 sm:grid-cols-2 -z-10">
    <div className="bg-white rounded-4xl size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    <div className="bg-white rounded-4xl w-90 h-70 max-md:size-65"></div>
    </div>

    <div className='bg-white top-70 h-screen relative'>
      <h1>About</h1>
    </div>
</div>
  )
}
