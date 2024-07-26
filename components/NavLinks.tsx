import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
    const pathName = usePathname();

  return (
    <nav className='flex flex-col gap-4'>
            <Link href={'/'}
                className='flex mb-12 cursor-pointer items-center gap-2'
            >
                <Image
                    src={'/icons/logo.svg'}
                    width={34}
                    height={34}
                    alt='Horizon Logo'
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='md:sidebar-logo text-26 font-igm-plex-serif font-bold text-black-1'>Horizon</h1>
            </Link>
            <div className='mobilenav-sheet'>
                <nav className='flex h-full flex-col sm:max-md:gap-6 sm:max-md:pt-16 text-white'>

                    {sidebarLinks.map((item) => {
                        const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                        return (
                            <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                                <div className='relative size-6'>
                                    <Image
                                        src={item.imgURL}
                                        alt={item.label}
                                        fill
                                        className={cn({
                                            'brightness-[3] invert-0' : isActive
                                        })}
                                        />
                                </div>
                                <p className={cn(
                                    'sidebar-label', {'!text-white': isActive}
                                )}>
                                    {item.label}
                                </p>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </nav>
  )
}

export default NavLinks