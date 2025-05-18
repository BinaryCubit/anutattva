import Breadcrump from '@/components/Common/Breadcrumb'

import QuantumComputingCourseDetails from '@/components/Courses/QuantumComputing'

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

const QuantumComputing = () => {
    return (
        <div>
            <Breadcrump title='Quantum Computing & Quantum Machine Learning' links={links} page='qauntum-computing' />
            <QuantumComputingCourseDetails />
        </div>
    )
}

export default QuantumComputing