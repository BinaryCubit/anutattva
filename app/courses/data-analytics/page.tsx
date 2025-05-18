import Breadcrump from '@/components/Common/Breadcrumb'
import CTA from '@/components/Common/CTA'

import DataAnalyticsCourseDetails from '@/components/Courses/DataAnalytics'

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

const DataAnalytics = () => {
    return (
        <div>
            <Breadcrump title='Data Analytics and Business Intelligence' links={links} page='data-analytics' />
            <DataAnalyticsCourseDetails />
            <CTA/>
        </div>
    )
}

export default DataAnalytics