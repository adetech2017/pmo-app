// Navigation Component

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  label: string;
  href: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'The Directorate', href: '/directorate' },
    { label: 'Our Events', href: '/events' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'News', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200 shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="PMO Logo"
              width={50}
              height={50}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classNames(
                  'px-4 py-2 text-sm font-semibold transition-all duration-200 relative',
                  isActive(link.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600',
                  'after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-blue-600 after:rounded-full after:transition-all after:duration-200',
                  isActive(link.href) ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={classNames(
                'inline-flex items-center justify-center p-2 rounded-lg transition-all duration-200',
                'text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100'
              )}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={classNames(
        'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-96' : 'max-h-0'
      )}>
        <div className="bg-gray-50 border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={classNames(
                'block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200',
                isActive(link.href)
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
