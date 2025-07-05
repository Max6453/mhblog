import Link from 'next/link'
import { GalleryVerticalEnd } from "lucide-react"
 
export default function NotFound() {
  return (
    <div className='bg-blue-500 h-screen w-full font-Exo-2'>
            <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            MHBlog
          </a>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
            <span className='text-7xl'>404</span><br></br>
            <span className='text-3xl'>Page not found</span>
            <span className='text-xl pt-6'>Sorry, couldn't find a page you're looking for</span>
            <a href='/'>
        <button className='w-25 h-10 rounded-full relative top-5 text-blue-500 bg-white border border-black hover:bg-blue-500 hover:border-white hover:shadow-2xl hover:text-white transition duration-300'>
          See more</button>
        </a>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/assets/Le-Mans.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </div>
  )
}