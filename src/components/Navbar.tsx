'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // For open/close icons

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={scrollDirection === 'down' ? { y: '-100%' } : { y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 40 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-blur-lg backdrop-filter transition-all duration-500',
        isOpen ? 'bg-black/70' : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/"
               className="text-xl font-bold text-white">Byyte.co
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/"
               className="text-white hover:text-gray-400">Home
            </Link>
            <Link href="/"
               className="text-white hover:text-gray-400">Home
            </Link>
            <Link href="/contact"
               className="text-white hover:text-gray-400">Contact Me
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={isOpen ? { height: '100vh' } : { height: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden bg-black/70 text-white fixed inset-0 z-40"
      >
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          <Link href="/"
             className="text-white hover:text-gray-400 text-xl" onClick={toggleMenu}>
              Home
          </Link>
          <Link href="/contact"
                 className="text-white hover:text-gray-400 text-xl" onClick={toggleMenu}>
              Contact Me
          </Link>
          <Link href="/contact"
                 className="text-white hover:text-gray-400 text-xl" onClick={toggleMenu}>
              Contact Me
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
