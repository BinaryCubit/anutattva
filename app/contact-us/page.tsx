import Breadcrump from '@/components/Common/Breadcrumb'
import { ContactusForm } from '@/components/contactus/contactusForm'
import GoogleMap from '@/components/contactus/googlemap'
import React from 'react'
const links = [
    {
        title: "Home",
        link: "/"
    },
    
]
const ContactUs = () => {
  return (
    <div>
         <Breadcrump title='Contact us' links={links} page='contact-us' />
        <GoogleMap/>
        <ContactusForm/>
    </div>
  )
}

export default ContactUs