'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardContent } from '@/components/Card';
import { FaEnvelope, FaPhone, FaSearch, FaTimes } from 'react-icons/fa';

export default function DirectoratePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Leadership and Directors - PMO Organizational Structure
  const teamMembers = [
    {
      id: '0',
      name: 'Ibrahim Babajide Obanikoro',
      position: 'Special Adviser, Parastatals Monitoring',
      department: 'Executive',
      bio: 'Ibrahim Babajide Obanikoro, popularly called IBO, brings expertise in parastatals monitoring with a strong background in political science and public administration. A graduate of King\'s College, Lagos, with a Bachelor of Science in Political Science from St Cloud University, Minnesota, USA, and a Master\'s degree in Public Administration (MPA) from Pace University, New York, USA.',
      email: 'ibrahim.obanikoro@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/sa-image.jpg',
      level: 'executive',
    },
    {
      id: '1',
      name: 'Dr. Olugbemiga Ayoola Aina',
      position: 'Permanent Secretary, Lagos State Government',
      department: 'Executive',
      bio: 'Dr Aina Olugbemiga Ayoola is a self-motivated, career inclined individual interested in the use of his professional, leadership and management skills and knowledge to work collaboratively with the human resources in the Lagos State Public Service and any other organisation with challenging and collaborative motives. He has had a distinguished Public Service career in the Lagos State Civil Service for more than three decades (32 years) both as an astute physician, researcher, medical and public administrator.',
      email: 'permanentsecretary@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/ps-image.jpg',
      level: 'executive',
    },
    {
      id: '2',
      name: 'Mrs Folashade Salako',
      position: 'Director, Admin and Human Resources Department',
      department: 'Admin & HR',
      bio: 'Manages administrative operations and human resources development for the PMO team.',
      email: 'folashade.salako@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-2.jpg',
      level: 'director',
    },
    {
      id: '3',
      name: 'Mrs Modupe Aladegbemi',
      position: 'Director, Inspectorate Department',
      department: 'Inspectorate',
      bio: 'Leads regular inspections and compliance monitoring of state-owned enterprises.',
      email: 'modupe.aladegbemi@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-3.jpg',
      level: 'director',
    },
    {
      id: '4',
      name: 'Mrs Adeola Shinaba',
      position: 'Director, Monitoring & Projects Department',
      department: 'Monitoring & Projects',
      bio: 'Oversees monitoring of parastatals projects and ensures performance against benchmarks.',
      email: 'adeola.shinaba@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-4.jpg',
      level: 'director',
    },
    {
      id: '5',
      name: 'Mr. Adelu Adeniyi S.',
      position: 'Director, Finance & Accounts Department',
      department: 'Finance & Accounts',
      bio: 'Manages financial operations and accounts for the PMO and parastatals oversight.',
      email: 'adelu.adeniyi@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-5.jpg',
      level: 'director',
    },
    {
      id: '6',
      name: 'Mrs Egbinade Adeola',
      position: 'Director, Information and Communication Technology',
      department: 'ICT',
      bio: 'Manages ICT infrastructure and digital transformation initiatives across parastatals.',
      email: 'egbinade.adeola@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-6.jpg',
      level: 'director',
    },
    {
      id: '7',
      name: 'Mr. Kayode Abayomi',
      position: 'Director, Public Affairs',
      department: 'Public Affairs',
      bio: 'Handles communication, public relations and stakeholder engagement for the PMO.',
      email: 'kayode.abayomi@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      level: 'director',
    },
    {
      id: '8',
      name: 'Mrs Adeola Adediji',
      position: 'Director, Procurement',
      department: 'Procurement',
      bio: 'Oversees procurement operations and vendor management for state enterprises.',
      email: 'adeola.adediji@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-8.jpg',
      level: 'director',
    },
    {
      id: '9',
      name: 'Mrs Ero-Phillips Olawepo Motunrayo',
      position: 'Head, Planning, Research and Statistics',
      department: 'Planning & Research',
      bio: 'Leads strategic planning, research initiatives and data analysis for parastatals performance.',
      email: 'olawepo.motunrayo@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-9.jpg',
      level: 'head',
    },
    {
      id: '10',
      name: 'Mrs Temitope Adebutu-Obasanjo',
      position: 'Senior Special Assistant to the Governor (Parastatals Monitoring)',
      department: 'Executive',
      bio: 'Oversees the entire PMO operation and ensures alignment with government policies and the T.H.E.M.E.S+ agenda.',
      email: 'temitope.adebutu@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-1.jpg',
      level: 'SSA',
    },
    {
      id: '11',
      name: 'Mr. Adebanjo Olalekan Kazeem',
      position: 'Head, Internal Audit',
      department: 'Audit',
      bio: 'Manages internal audit functions ensuring accountability and compliance across the PMO.',
      email: 'adebanjo.kazeem@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
      image: '/images/member-10.jpg',
      level: 'head',
    },
  ];

  // Department color mapping
  const departmentColors: Record<string, { bg: string; badge: string; text: string; light: string }> = {
    Executive: { bg: 'bg-gradient-to-br from-red-50 to-red-100', badge: 'bg-red-600', text: 'text-red-700', light: 'text-red-600' },
    'Admin & HR': { bg: 'bg-gradient-to-br from-blue-50 to-blue-100', badge: 'bg-blue-600', text: 'text-blue-700', light: 'text-blue-600' },
    Inspectorate: { bg: 'bg-gradient-to-br from-green-50 to-green-100', badge: 'bg-green-600', text: 'text-green-700', light: 'text-green-600' },
    'Monitoring & Projects': { bg: 'bg-gradient-to-br from-purple-50 to-purple-100', badge: 'bg-purple-600', text: 'text-purple-700', light: 'text-purple-600' },
    'Finance & Accounts': { bg: 'bg-gradient-to-br from-amber-50 to-amber-100', badge: 'bg-amber-600', text: 'text-amber-700', light: 'text-amber-600' },
    ICT: { bg: 'bg-gradient-to-br from-cyan-50 to-cyan-100', badge: 'bg-cyan-600', text: 'text-cyan-700', light: 'text-cyan-600' },
    'Public Affairs': { bg: 'bg-gradient-to-br from-pink-50 to-pink-100', badge: 'bg-pink-600', text: 'text-pink-700', light: 'text-pink-600' },
    Procurement: { bg: 'bg-gradient-to-br from-indigo-50 to-indigo-100', badge: 'bg-indigo-600', text: 'text-indigo-700', light: 'text-indigo-600' },
    'Planning & Research': { bg: 'bg-gradient-to-br from-teal-50 to-teal-100', badge: 'bg-teal-600', text: 'text-teal-700', light: 'text-teal-600' },
    Audit: { bg: 'bg-gradient-to-br from-orange-50 to-orange-100', badge: 'bg-orange-600', text: 'text-orange-700', light: 'text-orange-600' },
  };

  const getDepartmentColor = (department: string) => {
    return departmentColors[department] || { bg: 'bg-gray-50', badge: 'bg-gray-600', text: 'text-gray-700', light: 'text-gray-600' };
  };

  // Get unique departments
  const departments = ['all', ...new Set(teamMembers.map(m => m.department))];

  // Filter team members
  const filteredMembers = useMemo(() => {
    return teamMembers.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  const executives = filteredMembers.filter(m => m.level === 'executive');
  const directors = filteredMembers.filter(m => m.level === 'director' || m.level === 'head' || m.level === 'SSA');

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="The Directorate"
        subtitle="Meet the Leadership Team Driving Excellence in Parastatals Monitoring"
        backgroundColor="bg-gradient-to-r from-red-700 via-blue-700 to-red-800"
        height="md"
      />

      {/* Introduction Section */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Executive Leadership
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            The key personnel steering the PMO
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our directorate comprises seasoned professionals with extensive
            experience in public administration, auditing, governance, and
            strategic management. Together, we drive the PMO&apos;s mission to
            enhance efficiency and effectiveness across all state-owned
            enterprises.
          </p>
        </div>
      </Section>


      {/* Executive Leadership */}
      {executives.length > 0 && (
        <Section bgColor="white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Executive Leadership</h3>
            <p className="text-gray-600 mb-8">Senior management overseeing PMO operations</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {executives.map((member) => {
                const colors = getDepartmentColor(member.department);
                return (
                  <div
                    key={member.id}
                    className="group cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  >
                    <Card className={`h-full flex flex-col overflow-hidden border-l-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                      style={{ borderLeftColor: colors.badge.replace('bg-', '#').replace('600', '') }}
                    >
                      <div className="flex flex-col gap-0 h-full">
                        {/* Image Container */}
                        <div className={`relative w-full overflow-hidden ${colors.bg}`} style={{ aspectRatio: '3/4' }}>
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center 10%' }}
                              quality={85}
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                              <span className="text-gray-400">No Image</span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <CardContent className="flex flex-col grow">
                          {/* Department Badge */}
                          <div className="mb-3">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${colors.badge}`}>
                              {member.department}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                            {member.name}
                          </h3>

                          <p className={`${colors.light} font-semibold mb-4 text-sm`}>
                            {member.position}
                          </p>

                          <p className="text-gray-600 mb-6 grow text-sm leading-relaxed">
                            {member.bio}
                          </p>

                          {/* Contact Info */}
                          <div className="flex flex-col gap-3 border-t pt-4">
                            <div className="flex items-center gap-3 text-sm hover:bg-gray-50 p-2 rounded transition-colors">
                              <FaEnvelope className={`${colors.light} shrink-0 w-4 h-4`} />
                              <a
                                href={`mailto:${member.email}`}
                                className={`${colors.light} hover:underline break-all`}
                              >
                                {member.email}
                              </a>
                            </div>

                            <div className="flex items-center gap-3 text-sm hover:bg-gray-50 p-2 rounded transition-colors">
                              <FaPhone className={`${colors.light} shrink-0 w-4 h-4`} />
                              <a
                                href={`tel:${member.phone}`}
                                className={`${colors.light} hover:underline`}
                              >
                                {member.phone}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      )}

      {/* Management Team Grid */}
      {directors.length > 0 && (
        <Section bgColor="gray">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Management Team</h3>
            <p className="text-gray-600 mb-8">Directors and heads of departments and key divisions</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directors.map((member) => {
                const colors = getDepartmentColor(member.department);
                return (
                  <div
                    key={member.id}
                    className="group cursor-pointer transition-all duration-300"
                  >
                    <Card className={`h-full flex flex-col overflow-hidden border-t-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                      style={{ borderTopColor: colors.badge.replace('bg-', '#').replace('600', '') }}
                    >
                      {/* Image Container */}
                      <div className={`relative w-full overflow-hidden mb-4 rounded-t-lg ${colors.bg}`} style={{ aspectRatio: '3/4' }}>
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            style={{ objectPosition: 'center 10%' }}
                            quality={85}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-300">
                            <span className="text-gray-400 text-sm">No Image</span>
                          </div>
                        )}
                      </div>

                      <CardContent className="flex flex-col grow">
                        {/* Department Badge */}
                        <div className="mb-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${colors.badge}`}>
                            {member.department}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>

                        <p className={`${colors.light} font-semibold mb-3 text-xs leading-tight`}>
                          {member.position}
                        </p>

                        <p className="text-gray-600 text-sm mb-4 grow leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 border-t border-gray-200 pt-4">
                          <div className="flex items-center gap-2 text-xs hover:bg-gray-50 p-2 rounded transition-colors">
                            <FaEnvelope className={`${colors.light} w-3 h-3 shrink-0`} />
                            <a
                              href={`mailto:${member.email}`}
                              className={`${colors.light} hover:underline break-all`}
                            >
                              {member.email}
                            </a>
                          </div>

                          <div className="flex items-center gap-2 text-xs hover:bg-gray-50 p-2 rounded transition-colors">
                            <FaPhone className={`${colors.light} w-3 h-3 shrink-0`} />
                            <a
                              href={`tel:${member.phone}`}
                              className={`${colors.light} hover:underline`}
                            >
                              {member.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      )}

      {/* No Results Message */}
      {filteredMembers.length === 0 && (
        <Section bgColor="white">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn&apos;t find any team members matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('all');
              }}
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </Section>
      )}

      {/* How to Contact Section */}
      <Section className="bg-linear-to-r from-red-700 to-blue-700">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Have questions or need to schedule a meeting with our team? We&apos;re
            here to help. Feel free to reach out to any of our directors or use
            our contact form.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
}
