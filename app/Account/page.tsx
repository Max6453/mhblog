'use client'
import { useState } from 'react'
import { supabase } from "@/lib/supabaseClient";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from "framer-motion"
import { Dialog, DialogPanel } from '@headlessui/react'

export default function Account() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    push_notifications: "everything",
    content_interest: "everything",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      // Map camelCase names to snake_case state keys
      [name === "firstName" ? "first_name" :
       name === "lastName" ? "last_name" :
       name === "pushNotifications" ? "push_notifications" :
       name === "contentInterest" ? "content_interest" :
       name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await supabase.from("account").insert([
      {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        push_notifications: form.push_notifications,
        content_interest: form.content_interest,
      },
    ]);
    setLoading(false); // Make sure 'email' is unique in your table

  setLoading(false);

    if (error) {
      console.error(error);
      setError("Failed to submit. Please try again.");
    } else {
      setSuccess(true);
  }
};

  return (
    <div className="bg-white text-black">
      <header className="relative top-0">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-10 bg-gray-200 shadow-2xl shadow-white">
          <div className='text-2xl text-neutral-950 font-edu-vic-wa-nt-beginner top-0 absolute left-33 pt-1'>
            <h1 className='font-bold font-raleway'>MHBlog</h1>
          </div>
          <div className="absolute right-5 pt-10 pr-5 max-md:pr-0 max-md:right-0 max-md:pt-25">
            <button
              id='openBtn'
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="pb-25 icon-default inline-flex items-center justify-center rounded-md p-2.5 text-neutral-950 z-50 animation duration-300 transform transition-all"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-10 block hover:-scale-y-110  animation duration-300 transition-all transform" />
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed h-screen" />
              <motion.div
                initial={{ translate: '-60%', opacity: 0 }}
                animate={{ translate: 0, opacity: 1 }}
                exit={{ translate: '-100%', opacity: 1 }}
                transition={{ type: "keyframes", stiffness: 300, damping: 30, duration: 0.5 }}
                className="fixed right-0 inset-y-0 z-50 w-full overflow-y-auto opacity-10 text-center text-blue-500 bg-white px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10"
              >
                <DialogPanel>
                  <div className="flex z-50 items-center justify-between">
                    <a href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="./mobileIcon-navbar.png"
                        className="h-20 w-auto"
                      />
                    </a>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className=" rounded-md pr-4 pb-12 text-red-500 hover:text-neutral-950 transition-all duration-300"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="size-10 hover:rotate-180 duration-300" />
                    </button>
                  </div>
                  <div className=" flow-root">
                    <div className="divide-gray-500/10 font-Exo-2">
                      <div className="flex text-4xl top-12 relative text-start text-neutral-950">
                        <ul className='flex flex-col gap-5'>
                          <li><a href='/'>Latest</a></li>
                          <li><a href='/'>Formula 1</a></li>
                          <li><a href='/'>Tutorials</a></li>
                          <li><a href='/'>Motorsport</a></li>
                          <li><a href='/Contact'>Contact</a></li>
                        </ul>
                        <hr className='w-50 bg-black absolute top-77' />
                        <span className='absolute top-85'><a href='/Account'>MyAccount</a></span>
                      </div>
                    </div>
                    <div className='absolute bottom-10 text-start text-neutral-950'>
                      <span>MHBlog</span>
                      <br />
                      <span className='opacity-50'>App version: 2.0.0</span><br />
                    </div>
                  </div>
                </DialogPanel>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </header>
      <main className="bg-white h-screen relative">
        <h1 className='text-4xl pt-4 text-black'>Welcome back, {form.first_name ? `, ${form.first_name}${form.last_name ? ` ${form.last_name}` : ""}` : ""}

        </h1>
        <h2 className="pt-10 text-2xl text-center">Your information</h2>
        <form className='bg-white' onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-gray-900/10 pb-12 text-center">
              <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder='first name'
                      autoComplete="given-name"
                      className="border-2 border-black rounded-md text-black h-10"
                      value={form.first_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder='last name'
                      autoComplete="family-name"
                      className="border-2 border-black rounded-md h-10 text-black"
                      value={form.last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-4 max-sm:left-0 relative">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder='mhblog.enjoyer@gmail.com'
                      autoComplete="email"
                      className="border-2 border-black rounded-md text-black h-10"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NOTIFICATIONS */}
          <div className="mt-10 space-y-10 h-60 bg-white">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
              <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="pushNotifications"
                    type="radio"
                    value="everything"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    checked={form.push_notifications === "everything"}
                    onChange={handleChange}
                  />
                  <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="pushNotifications"
                    type="radio"
                    value="email"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    checked={form.push_notifications === "email"}
                    onChange={handleChange}
                  />
                  <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="pushNotifications"
                    type="radio"
                    value="none"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    checked={form.push_notifications === "none"}
                    onChange={handleChange}
                  />
                  <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          {/* INTEREST */}
          <div className='bg-white text-black h-50'>
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">What kind of content you are most interested in on my page</legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything-content"
                    name="contentInterest"
                    type="radio"
                    value="everything"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    checked={form.content_interest === "everything"}
                    onChange={handleChange}
                  />
                  <label htmlFor="push-everything-content" className="block text-sm/6 font-medium text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-formula1"
                    name="contentInterest"
                    type="radio"
                    value="formula1"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    checked={form.content_interest === "formula1"}
                    onChange={handleChange}
                  />
                  <label htmlFor="push-formula1" className="block text-sm/6 font-medium text-gray-900">
                    Formula 1
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-wec"
                    name="contentInterest"
                    type="radio"
                    value="wec"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    checked={form.content_interest === "wec"}
                    onChange={handleChange}
                  />
                  <label htmlFor="push-wec" className="block text-sm/6 font-medium text-gray-900">
                    WEC
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="flex items-center justify-center gap-x-6 bg-white relative">
            <button
              type="submit"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:text-black hover:border-2 shadow-xs hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {success && <p className="text-green-600 text-xl text-center">Changes applied</p>}
          {error && <p className="text-red-600 text-xl text-center">{error}</p>}
        </form>
      </main>
    </div>
  )
}