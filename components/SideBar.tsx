'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavLinks from './NavLinks'

const SideBar = ({user}: SiderbarProps) => {
  return (
    <section className='sidebar'>
        <NavLinks />
    </section>
  )
}

export default SideBar