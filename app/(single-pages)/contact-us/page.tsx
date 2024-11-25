import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FaqSection'
import PageIntro from '@/components/PageIntro'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Furniture",
    description: "Your one way to shop for furniture :)",
  };
const Contact = () => {
  return (
    <div className='px-[90px]'>
        <PageIntro sectionName={'Contact Us'} sectionBgImage={'images/contactSectionBg.webp'}/>
        <ContactForm />
        <FAQSection />
    </div>
  )
}

export default Contact
