import { NotebookTabs } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Details = () => {
    return (
        <div className='py-16'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10'>
                    <div>
                        <div className='flex items-center text-3xl gap-2 '>
                            <NotebookTabs className='text-blue-500' />
                            <h1>About us</h1>
                        </div>
                        <p>At Anutattva Foundation, we are on a mission to empower the next generation of tech leaders by providing industry-relevant, future-ready education. Founded with a vision to bridge the gap between academic knowledge and real-world skills, we specialize in delivering hands-on training in Artificial Intelligence & Machine Learning (AIML), Data Science, Data Analytics, Full Stack Web Development, and Quantum Computing.</p>
                        <br />
                        <p>We believe that quality education should be accessible, practical, and career-oriented. Our programs are designed by industry experts, academic scholars, and passionate educators who bring deep domain knowledge and real-time project experience to the classroom.</p>
                        <br />

                        <p>Rooted in the philosophy of Anutattva, meaning "the ultimate subtle truth," we believe in providing education that is both deeply insightful and practically impactful. Our mission is to bridge the gap between academic theory and industry application by offering programs designed by top professionals, researchers, and educators.</p>
                        <br />
                        <p>Whether you're a student, a job seeker, or a working professional, our flexible learning paths help you master high-demand technologies, build job-ready portfolios, and unlock opportunities in top companies and research institutions.</p>
                        <br />
                        <h2 className='text-xl'>Why Choose Anutattva Foundation?</h2>
                        <ul className='pl-10'>
                            <li>✅ Comprehensive & Industry-Aligned Curriculum</li>
                            <li>✅ Experienced Mentors & Subject Experts</li>
                            <li>✅ Live Projects & Real-World Case Studies</li>
                            <li>✅ Career Counseling, Interview Prep & Placement Assistance</li>
                            <li>✅ Government Aprooved Certification and Internship Opportunities</li>
                            <li>✅ Access to Advanced Tech Domains like Quantum AI and Full Stack Engineering</li>
                        </ul>
                        <br />
                        <p>At Anutattva Foundation, we’re not just teaching — we’re shaping innovators, problem solvers, and leaders of tomorrow. Whether you're beginning your journey or looking to advance your career, we are here to guide, support, and inspire you every step of the way.</p>
                    </div>
                    <Image src="/Images/banner/banner.jpg" alt="" width={600} height={600} className='rounded-xl shadow-md' />
                </div>

            </div>
        </div>
    )
}

export default Details