"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathName = usePathname()
  return (
    <aside className='sidebar ' >
       <div className='flex gap-4 size-full flex-col' >
        <Link className='sidebar-logo' href='/' >
            <Image alt='logo' width={180} height={28} src="/assets/images/logo-text.svg" />
        </Link>
        <nav className='sidebar-nav'>
            <SignedIn>
                <ul className='sidebar-nav_elements' >
                    {navLinks.slice(0,6).map((link)=>{
                        const isActive = link.route == pathName
                        return(
                            <li key={link.route} className={`sidebar-nav_element group ${isActive?'bg-purple-gradient text-white':'text-gray-700'}`}  >
                                <Link className='sidebar-link' href={link.route} >
                                    <Image 
                                    className={`${isActive && "brightness-200"}`}
                                    alt='logo'
                                    width={24}
                                    height={24}
                                    src={link.icon}
                                     />
                                     {link.label}
                                </Link>
                            </li>
                        )
                    })}

                </ul>
                <ul className='sidebar-nav_elements' >
                {navLinks.slice(6).map((link)=>{
                        const isActive = link.route == pathName
                        return(
                            <li key={link.route} className={`sidebar-nav_element group ${isActive?'bg-purple-gradient text-white':'text-gray-700'}`}  >
                                <Link className='sidebar-link' href={link.route} >
                                    <Image 
                                    className={`${isActive && "brightness-200"}`}
                                    alt='logo'
                                    width={24}
                                    height={24}
                                    src={link.icon}
                                     />
                                     {link.label}
                                </Link>
                            </li>
                        )
                    })}
                    <li className='flex-center cursor-pointer gap-2 p-4'>
                        <UserButton afterSignOutUrl='/' showName />
                    </li>

                </ul>
            </SignedIn>

            <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href='/sign-in' >Login</Link>
                </Button>
            </SignedOut>

        </nav>

       </div>
    </aside>
  )
}

export default Sidebar
