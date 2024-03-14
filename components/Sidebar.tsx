import React, { useContext } from 'react'
import Link from 'next/link'
import { SidebarContext } from '@/contexts/SidebarContext';
import { usePathname } from 'next/navigation';
import { NavLinks } from '@/constants';
import { X } from 'lucide-react';

const Sidebar = () => {

  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const pathname = usePathname();

  return (
    <div 
      className={`
        ${isOpen ? "opacity-100" : "opacity-0"}
         fixed z-40 top-0 w-full h-full bg-black/50 transition-all pointer-events-none
      `}
    >
      <div 
        className={`
        ${isOpen ? "right-0" : "-right-full"}
         fixed top-0 h-full w-full sm:w-[50vw] lg:w-[30vw] px-4 bg-white dark:bg-gray-950 transition-all duration-400 pointer-events-auto
      `}
      >

        <div className='py-5'>
          <X
            onClick={()=> { setIsOpen(false), document.body.style.overflow = "auto" }} 
            className="text-2xl cursor-pointer" 
          />
        </div>

        <div className="flex text-xl font-semibold text-center justify-center mb-12 mt-6">
          Sehatra
        </div>

        <ul className="mx-auto flex flex-col items-center justify-center space-y-4 font-medium text-xl">
          {NavLinks.map((link) => {
            const isActive = pathname === link.route;
            return(
              <li 
                key={link.label}
                className={`
                  ${ isActive && "text-indigo-800" }
                  text-lg font-semibold tracking-wide
                `}
              >
                <Link 
                  href={link.route}
                  onClick={()=> { setIsOpen(false), document.body.style.overflow = "auto" }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}

export default Sidebar