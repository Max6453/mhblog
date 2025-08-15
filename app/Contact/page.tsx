'use client'
import { useState, useEffect } from 'react'
import ContactForm from '@/components/ui/contactForm';
import Header from '@/components/main/header';


export default function Contact() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
   <div className='bg-neutral-900 transition-colors duration-500'> 
    <div>
      <Header/>
    </div>
    {/* Contact form */}
    <ContactForm/>
    </div>
  )
}
