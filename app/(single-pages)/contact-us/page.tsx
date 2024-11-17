import ContactForm from '@/components/ContactForm'
import PageIntro from '@/components/PageIntro'
import React from 'react'

const Contact = () => {
  return (
    <div className='px-[90px]'>
        <PageIntro sectionName={'Contact Us'} sectionBgImage={'images/contactSectionBg.webp'}/>
        <ContactForm />
    </div>
  )
}

export default Contact
