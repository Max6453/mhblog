'use client'
import ContactForm from '@/components/ui/contactForm';
import Header from '@/components/main/header';


export default function Contact() {
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
