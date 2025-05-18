import Breadcrump from '@/components/Common/Breadcrumb'
import CTA from '@/components/Common/CTA'

import DataScienceCourseDetails from '@/components/Courses/DataScience'

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

const DataScience = () => {
    return (
        <div>
            <Breadcrump title='Data Science' links={links} page='data-science' />
            <DataScienceCourseDetails />
            <CTA/>
        </div>
    )
}

export default DataScience