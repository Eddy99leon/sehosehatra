"use client"
import React, { useContext } from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { SidebarContext } from '@/contexts/SidebarContext'
import { ThemeContext } from '../contexts/ThemeContext';
import { NavLinks } from '@/constants'
import { Button } from './ui/button'
import Link from 'next/link'
import { AlignJustify, CalendarHeart, MoonStar, Sun } from 'lucide-react'
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const { setIsOpen } = useContext(SidebarContext);
  const { theme, handleSwitchTheme } = useContext(ThemeContext);
  const pathname = usePathname();

  return (
    <header className='w-full border-b'>
      <Sidebar />
      <div className='wrapper flex justify-between items-center py-4'>

        <Link href="/" className='flex items-center font-bold'>
          <CalendarHeart className='text-4xl mr-1 text-ColorViolet' />
          <span className='text-base sm:text-lg md:text-xl'>
            Sehatra
          </span>
        </Link>

        <SignedIn>
          <ul className='hidden md:flex items-center gap-5'>
            {NavLinks.map((link) => {
              const isActive = pathname === link.route;
              return(
                <li 
                  key={link.route}
                  className={`
                    ${ isActive && "text-indigo-800" }
                    text-lg font-semibold
                  `}
                >
                  <Link 
                    href={link.route}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </SignedIn>

        <div className='flex items-center w-32 justify-end gap-3'>
          {/* Dark/Light button */}
          <div 
              onClick={handleSwitchTheme} 
              className='cursor-pointer text-ColorVert'
          >
            { theme === "dark" ? 
                <Sun className='text-3xl' /> 
                :
                <MoonStar className='text-3xl' />
            }
          </div>
          {/* user and menu button */}
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <button 
              className='block md:hidden'
              onClick={()=> setIsOpen(true)}
            >
              <AlignJustify />
            </button>
          </SignedIn>
          {/* Login button */}
          <SignedOut>
            <Button asChild className='button px-2 sm:px-4 hover:bg-ColorViolet/80'>
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>

      </div>
    </header>
  )
}

export default Navbar