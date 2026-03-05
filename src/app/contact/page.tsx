'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardContent } from '@/components/Card';
import Button from '@/components/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Get in Touch with the PMO"
        backgroundColor="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800"
        height="md"
      />

      {/* Contact Information and Form Section */}
      <Section bgColor="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      Lagos State Parastatals Monitoring Office
                      <br />
                      Block 1 Secretariant Alausa, 
                      <br />
                      Ikeja, Lagos State
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <FaPhone className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600">
                      <a href="tel:+2341xxxxxxx" className="hover:text-blue-600">
                        +234 (0) 1 XXX XXXX
                      </a>
                      <br />
                      <a href="tel:+2341yyyyyyy" className="hover:text-blue-600">
                        +234 (0) 1 YYY YYYY
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:pmo@lagosstate.gov.ng"
                        className="hover:text-blue-600"
                      >
                        pmo@lagosstate.gov.ng
                      </a>
                      <br />
                      <a
                        href="mailto:pmoict11@gmail.com"
                        className="hover:text-blue-600"
                      >
                        pmoict11@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <FaClock className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:00 PM
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/pmolasg?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    title="Follow us on X"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/lasgpmo?igsh=MW4xeTJub2ZtZnh2Yw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    title="Follow us on Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1HJWhmowHS/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    title="Like us on Facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">
                    We have received your inquiry and will respond within 24-48 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+234 (0) 1 XXX XXXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="monitoring">Monitoring Concerns</option>
                    <option value="event">Event Participation</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="complaint">Complaint or Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Response Section */}
      <Section bgColor="gray">
        <SectionTitle center>Quick Contacts</SectionTitle>
        <SectionSubtitle center>
          Reach specific departments directly
        </SectionSubtitle>

        <SectionGrid cols={3}>
          {[
            {
              title: 'Public Relations',
              email: 'pmoict11@gmail.com',
              phone: '+234 (0) 1 XXX XXX',
            },
            {
              title: 'Compliance & Inspections',
              email: 'pmoict11@gmail.com',
              phone: '+234 (0) 1 YYY YYY',
            },
            {
              title: 'Project Monitoring',
              email: 'pmoict11@gmail.com',
              phone: '+234 (0) 1 ZZZ ZZZ',
            },
          ].map((dept, index) => (
            <Card key={index}>
              <h3 className="font-semibold text-gray-900 mb-3">{dept.title}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-600 w-4 h-4 shrink-0" />
                  <a href={`mailto:${dept.email}`} className="text-gray-600 hover:text-blue-600">
                    {dept.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-blue-600 w-4 h-4 shrink-0" />
                  <a href={`tel:${dept.phone}`} className="text-gray-600 hover:text-blue-600">
                    {dept.phone}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* Map Section (Placeholder) */}
      <Section bgColor="white">
        <SectionTitle center>Visit Us</SectionTitle>
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <FaMapMarkerAlt className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">Map location will be displayed here</p>
          </div>
        </div>
      </Section>
    </>
  );
}
