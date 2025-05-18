import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Headerlinks } from '@/static/links'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-white shadow-md'>
            <div className='container mx-auto flex items-center px-10 py-3 justify-between  '>
                <Image src="/Images/logo/logo.svg" alt="Anutattva Foundation Logo" width={200} height={100} className='sm:w-56 sm:h-28 w-36
                 ' />
                <nav className='hidden md:block'>
                    <ul className='flex items-center space-x-5'>
                        {
                            Headerlinks.map((l, i) => (
                                <li key={i}><Link className='text-[#333333] hover:text-[#f57c00]' href={l.link}>{l.title}</Link></li>
                            ))
                        }

                    </ul>
                </nav>
                <Sheet>
                    <SheetTrigger className='md:hidden'><Menu className='' /></SheetTrigger>
                    <SheetContent>
                        <SheetTitle></SheetTitle>
                        <nav className='p-10'>
                            <ul className='flex flex-col  space-y-3'>
                                {
                                    Headerlinks.map((l, i) => (
                                        <li key={i}><Link className='text-[#333333] hover:text-[#f57c00]' href={l.link}>{l.title}</Link></li>
                                    ))
                                }

                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    )
}

export default Header