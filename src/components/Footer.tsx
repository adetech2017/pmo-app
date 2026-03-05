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
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
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
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section 2 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">More Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-400 mt-1 shrink-0" />
                <p className="text-gray-400">{contactAddress}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-red-400 shrink-0" />
                <a
                  href={`tel:${contactPhone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-400 shrink-0" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Social Media Section */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/lasgpmo?igsh=MW4xeTJub2ZtZnh2Yw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-400 transition-colors"
            title="Follow us on Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/1HJWhmowHS/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-400 transition-colors"
            title="Like us on Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/pmolasg?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-400 transition-colors"
            title="Follow us on X"
          >
            <FaXTwitter size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {year} Lagos State Parastatals Monitoring Office (PMO). All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
