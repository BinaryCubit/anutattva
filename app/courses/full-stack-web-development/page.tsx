import Breadcrump from '@/components/Common/Breadcrumb'
import CTA from '@/components/Common/CTA'

import FullStackCourseDetails from '@/components/Courses/FullStack'

import React from 'react'

const links = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Courses",
        link: "/courses"
    }
]

const WebDevelopemnt = () => {
    return (
        <div>
            <Breadcrump title='Full Stack Web Development' links={links} page='full-stack-web-development' />
            <FullStackCourseDetails />
            <CTA/>
        </div>
    )
}

export default WebDevelopemnt