// Footer Component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  contactEmail = 'pmo@lagosstate.gov.ng',
  contactPhone = '+234 (0) 1 XXX XXXX',
  contactAddress = 'Block 1 Secretariant Alausa, Ikeja, Lagos State',
  year = new Date().getFullYear(),
}) => {
  const quickLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'The Directorate', href: '/directorate' },
    { label: 'Events', href: '/events' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'News', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-gray-100 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/images/logo.jpeg"
                alt="PMO Logo"
                width={60}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lagos State Parastatals Monitoring Office ensures that state
              agencies and government-owned companies operate in line with
              administrative and financial guidelines.
            </p>
          </div>

          {/* Quick Links Section 1 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section 2 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">More Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 shrink-0 text-lg" />
                <p className="text-gray-400 leading-relaxed">{contactAddress}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400 shrink-0 text-lg" />
                <a
                  href={`tel:${contactPhone}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 shrink-0 text-lg" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-12" />

        {/* Social Media Section */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <a
            href="https://www.instagram.com/lasgpmo?igsh=MW4xeTJub2ZtZnh2Yw=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
            title="Follow us on Instagram"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1HJWhmowHS/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
            title="Like us on Facebook"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://x.com/pmolasg?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
            title="Follow us on X"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={20} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p className="font-medium">
            &copy; {year} Lagos State Parastatals Monitoring Office (PMO). All
            rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Committed to transparency and accountability in public service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
