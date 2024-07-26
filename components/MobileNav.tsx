'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
  

const MobileNav = ({user}: MobileNavProps) => {
  return (
    <section className='w-fulll max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image
                    src='/icons/hamburger.svg'
                    alt='menu'
                    width={30}
                    height={30}
                    className='cursor-pointer'
                />
            </SheetTrigger>
            <SheetContent side='left' className='border-none bg-white'>
                <NavLinks />
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav