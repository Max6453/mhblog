 'use client'
 import { useState, useEffect } from 'react'
 import { supabase } from "@/lib/supabaseClient";
 
 function ContactForm() {

 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    about: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSuccess(false);

  const { error } = await supabase.from("contacts").insert([
    {
      about: form.about,
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
    },
  ]);
  setLoading(false);

  if (error) {
    console.error(error); // <-- Add this line
    setError("Failed to submit. Please try again.");
  } else {
    setSuccess(true);
    setForm({ about: "", firstName: "", lastName: "", email: "" });
  }
};

return(
    <form className='bg-neutral-900 text-white' onSubmit={handleSubmit}>
      <div className="space-y-12 top-15 relative">
        <div className="border-b border-white pb-12">
       <h1 className='font-Exo-2 text-3xl max-sm:text-xl pt-3left-1/5 max-sm:left-0 md:left-0 max-md:left-0'>
        hey, If you have any questions or if you want to give me a feedback on my website, you can do it here and also you can contact via socials here</h1>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div className="mt-2">
              <textarea
                    id="about"
                    name="about"
                    required
                    placeholder='Write your feedback or improvements. This field is required'
                    rows={3}
                    className="max-sm:left-2 lg:left-110 md:left-80 lg:w-150 lg:h-100 w-80 h-50 border-2 rounded-xl border-white relative"
                    value={form.about}
                    onChange={handleChange}
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-12 text-center">
          <h2 className="text-xl pl-5 font-semibold">Optional information</h2>
          <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium ">
                First name
              </label>
              <div className="mt-2">
          <input
          id="first-name"
          name="firstName"
          type="text"
          placeholder='first name'
          autoComplete="given-name"
          className="border-2 border-black rounded-md h-10"
          value={form.firstName}
          onChange={handleChange}
        />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium">
                Last name
              </label>
              <div className="mt-2">
                <input
          id="last-name"
          name="lastName"
          type="text"
          placeholder='last name'
          autoComplete="family-name"
          className="border-2 border-black rounded-md h-10"
          value={form.lastName}
          onChange={handleChange}
        />
              </div>
            </div>

            <div className="sm:col-span-4 max-sm:left-0 relative">
              <label htmlFor="email" className="block text-sm/6 font-medium">
                Email address
              </label>
              <div className="mt-2">
                <input
          id="email"
          name="email"
          type="email"
          placeholder='mhblog.enjoyer@gmail.com' 
          autoComplete="email"
          className="border-2 border-black rounded-md h-10"
          value={form.email}
          onChange={handleChange}
        />
              </div>
            </div>
          </div>
        </div>
      </div>
 <div className="mt-6 flex items-center justify-center pb-10 pt-5 gap-x-6">
          <button type="button" className="text-sm/6 font-semibold">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:text-black hover:border-2 shadow-xs hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
        {success && <p className="text-green-600 text-xl text-center">Thank you for your feedback!</p>}
        {error && <p className="text-red-600 text-xl text-center">{error}</p>}
      </form>
)
}

export default ContactForm;