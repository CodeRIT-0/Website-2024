'use client';

import React from 'react';
import Image from "next/image";


const ChevronLeft = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const ChevronRight = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const AlumniCard = ({ person }) => {
  return (
    <div className="flex-shrink-0 w-[280px] h-[400px] mx-4 relative">
      <div className="w-full h-full bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <a 
          href={person.url}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
    
        <div className="w-full h-[60%] relative overflow-hidden bg-gray-900">
          <Image 
            src={person.src}
            alt={person.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
      
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">{person.name}</h3>
          <div className="h-1 w-16 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const AlumniSection = ({ alumni }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative px-4 py-8 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        <span className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg shadow-xl">
          Alumni
        </span>
      </h2>

    
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 p-2 rounded-r-lg shadow-xl hover:bg-yellow-600 transition-colors"
      >
        <ChevronLeft />
      </button>
      
      <button 
        onClick={() => scroll('right')} 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 p-2 rounded-l-lg shadow-xl hover:bg-yellow-600 transition-colors"
      >
        <ChevronRight />
      </button>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden gap-4 px-8 no-scrollbar scroll-smooth "
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {alumni.map((person, index) => (
          <AlumniCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default AlumniSection;