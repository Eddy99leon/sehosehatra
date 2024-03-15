"use client"
import { NavLinks } from '@/constants';
import { SignedIn } from '@clerk/nextjs';
import { CalendarHeart, Facebook, Github, Linkedin, SendHorizontal, Twitter} from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {

  const pathname = usePathname();

  return (
    <div className=' border-t'>
      <div className='wrapper'>

        <div className='flex justify-between items-center py-6 border-b'>
          <div className='flex items-center font-bold'>
            <CalendarHeart className='text-4xl mr-1 text-ColorViolet' />
            <span className='text-base sm:text-lg md:text-xl'>
              Sehatra
            </span>
          </div>
          <SignedIn>
            <ul className='hidden md:flex items-center gap-5'>
              {NavLinks.map((link) => {
                const isActive = pathname === link.route;
                return(
                  <li 
                    key={link.route}
                    className={`
                      ${ isActive && "text-indigo-800" }
                      text-xs font-bold uppercase
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
          <div className='flex items-center gap-x-3'>
            <a href="">
              <Facebook size={18} />
            </a>
            <a href="">
              <Linkedin size={20} />
            </a>
            <a href="">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className='py-8'>
          <div className='flex items-center justify-center mb-8'>
            <h1 className='mr-3 sm:mr-4 font-semibold text-sm sm:text-base'>
              S'abonner :
            </h1>
            <div className='relative w-[220px] h-[35px] rounded overflow-hidden'>
              <input 
                type="email"
                className='absolute w-full h-full bg-slate-300 text-gray-700 text-xs sm:text-sm outline-none pl-2 font-medium'
                placeholder='Ton email ..'
              />
              <button className='absolute right-0 h-full bg-ColorViolet px-3'>
                <SendHorizontal size={18} />
              </button>
            </div>
          </div>
          <p className='text-center text-sm font-medium'>
            Coder avec ❤️ by 
            <span className='font-semibold ml-1'>
              Eddy Andriamisaina.
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer