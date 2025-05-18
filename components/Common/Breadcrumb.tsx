import { title } from 'process'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'

const Breadcrump = ({ title, links, page }: { title: string, links: { title: string; link: string; }[], page: string }) => {
    return (
        <div className=' bg-gradient-to-r from-[#F57C00] to-[#FFA726] p-10'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl text-bold text-gray-200'>{title}</h1>
                <Breadcrumb >
                    <BreadcrumbList >
                        {links.map((l, i) => (
                            <div key={i} className='flex items-center'>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={l.link}>{l.title}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </div>
                        ))}

                        <BreadcrumbItem>
                            <BreadcrumbPage>{page}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    )
}

export default Breadcrump