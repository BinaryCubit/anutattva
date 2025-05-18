import Details from '@/components/Aboutus/Details'
import Breadcrump from '@/components/Common/Breadcrumb'
import CTA from '@/components/Common/CTA'
import React from 'react'


const links = [
    {
        title: "Home",
        link: "/"
    },
    
]
const Aboutus = () => {
  return (
    <div>
         <Breadcrump title='About us' links={links} page='about-us' />
        <Details/>
        <CTA/>
    </div>
  )
}

export default Aboutus