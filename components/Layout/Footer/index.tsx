'use client'
import { footerCourseLink, footerQuickLink } from '@/static/links'
import { Home, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const current = usePathname()
    if (current === "/admin") {
        return null;
    }
    return (
        <div className='bg-[#333333] text-gray-400'>
            <div className='container mx-auto p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5 space-x-5 '>
                    <div className='flex flex-col gap-2'>
                        <Image src="/Images/logo/logo.svg" alt="Anutattva Foundation Logo" width={200} height={100} className='sm:w-56 sm:h-28
                 ' />
                        <p>
                            Anutattva Foundation is dedicated to transforming education through innovative, industry-relevant training in technology, data, and emerging fields. We empower individuals with skills that matter in the real world.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-bold text-xl '>Quick Links</h2>
                        <ul className='flex flex-col space-y-3'>
                            {
                                footerQuickLink.map((l, i) => (
                                    <li key={i}><Link className='hover:text-[#f57c00]' href={l.link}>{l.title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-bold text-xl '>Our Courses</h2>
                        <ul className='flex flex-col space-y-3'>
                            {
                                footerCourseLink.map((l, i) => (
                                    <li key={i}><Link className='hover:text-[#f57c00]' href={l.link}>{l.title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-bold text-xl '>Connect With us</h2>
                        <p className='flex items-center gap-2'><Home /> 722/17 Nai Basti, Gurgaon, Haryana-122001</p>
                        <p className='flex items-center gap-2'><Mail /> info@anutattvafoundation.in</p>
                        <p className='flex items-center gap-2'><Phone /> +91-8398948765, +91-7988007320</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer