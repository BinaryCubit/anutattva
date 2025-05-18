import Breadcrump from '@/components/Common/Breadcrumb'
import CTA from '@/components/Common/CTA'
import AimlCourse from '@/components/Courses/AIML'

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

const AIML = () => {
    return (
        <div>
            <Breadcrump title='Artificial Intelligence & Machine Learning' links={links} page='aiml' />
            <AimlCourse />
            <CTA/>
        </div>
    )
}

export default AIML