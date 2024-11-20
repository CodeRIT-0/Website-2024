'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/team', label: 'Team' },
    { path: '/registration', label: 'Ice-Breaker 2024', special: true }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''} bg-[#1b2430]`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/logo.png"
              width={80}
              height={80}
              alt="CodeRIT logo"
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

         
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  ${pathname === item.path ? 'text-[#17cf97]' : 'text-gray-300 hover:text-[#17cf97]'}
                  ${item.special 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-full font-medium text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm'
                    : 'text-lg tracking-wide font-medium transition-colors duration-200 relative group'
                  }
                `}
              >
                {item.label}
                {!item.special && (
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#17cf97] transition-all duration-200 group-hover:w-full" />
                )}
              </Link>
            ))}
          </div>

       
          <div className="md:hidden">
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a3239] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-200 ${
                    clicked ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-200 ${
                    clicked ? 'opacity-0' : 'top-3'
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-200 ${
                    clicked ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

     
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          clicked ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2a3239]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                ${pathname === item.path ? 'text-[#17cf97]' : 'text-gray-300 hover:text-[#17cf97]'}
                ${item.special 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full'
                  : ''
                }
                block px-4 py-2 text-base font-medium transition-colors duration-200
              `}
              onClick={() => setClicked(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}