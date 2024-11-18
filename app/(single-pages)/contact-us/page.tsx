import ContactForm from '@/components/ContactForm'
import FAQSection from '@/components/FaqSection'
import PageIntro from '@/components/PageIntro'
import React from 'react'

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
