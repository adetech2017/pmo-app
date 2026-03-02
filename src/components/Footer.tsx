// Footer Component

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
  contactEmail = 'info@pmo.gov.ng',
  contactPhone = '+234 (0) 1 XXX XXXX',
  contactAddress = 'Lagos State, Nigeria',
  year = new Date().getFullYear(),
}) => {
  const quickLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'The Directorate', href: '/directorate' },
    { label: 'Events', href: '/events' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Media', href: '/media' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">PMO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lagos State Parastatals Monitoring Office ensures that state
              agencies and government-owned companies operate in line with
              administrative and financial guidelines.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
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
