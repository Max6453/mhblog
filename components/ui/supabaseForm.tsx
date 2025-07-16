'use client'
import { useState } from 'react'
import * as React from "react"
import { supabase } from "@/lib/supabaseClient";


function SupabaseForm () {
 const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
   const [newsletterError, setNewsletterError] = useState<string | null>(null);


  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(false);
    setNewsletterError(null);

    const { error } = await supabase.from("newsletter").insert([
      { email: newsletterEmail }
    ]);

    if (error) {
      setNewsletterError("Failed to subscribe. Please try again.");
    } else {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
    }
  };

  return(
    <form onSubmit={handleNewsletterSubmit} className="mt-6 flex max-w-md gap-x-4">
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
            className="min-w-0 flex-auto rounded-md bg-transparent px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline-2 border-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
            value={newsletterEmail}
            onChange={e => setNewsletterEmail(e.target.value)}
        />
        <button
            type="submit"
            className="flex-none rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 border-2 border-white transition duration-300"
            id='submitBtn'
        >
            Subscribe
        </button>
            {newsletterSuccess && (
            <span className="text-green-400 ml-4 self-center">Subscribed!</span>
            )}
            {newsletterError && (
            <span className="text-red-400 ml-4 self-center">{newsletterError}</span>
            )}
    </form>
  )
}

export default SupabaseForm;