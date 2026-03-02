'use client';

import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardContent } from '@/components/Card';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function DirectoratePage() {
  // Leadership and Directors - PMO Organizational Structure
  const teamMembers = [
    {
      id: '1',
      name: 'Mrs Temitope Adebutu-Obasanjo',
      position: 'Senior Special Assistant to the Governor (Parastatals Monitoring)',
      bio: 'Oversees the entire PMO operation and ensures alignment with government policies and the T.H.E.M.E.S+ agenda.',
      email: 'temitope.adebutu@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '2',
      name: 'Mrs Folashade Salako',
      position: 'Director, Admin and Human Resources Department',
      bio: 'Manages administrative operations and human resources development for the PMO team.',
      email: 'folashade.salako@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '3',
      name: 'Mrs Modupe Aladegbemi',
      position: 'Director, Inspectorate Department',
      bio: 'Leads regular inspections and compliance monitoring of state-owned enterprises.',
      email: 'modupe.aladegbemi@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '4',
      name: 'Mrs Adeola Shinaba',
      position: 'Director, Monitoring & Projects Department',
      bio: 'Oversees monitoring of parastatals projects and ensures performance against benchmarks.',
      email: 'adeola.shinaba@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '5',
      name: 'Mr. Adelu Adeniyi S.',
      position: 'Director, Finance & Accounts Department',
      bio: 'Manages financial operations and accounts for the PMO and parastatals oversight.',
      email: 'adelu.adeniyi@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '6',
      name: 'Mrs Egbinade Adeola',
      position: 'Director, Information and Communication Technology',
      bio: 'Manages ICT infrastructure and digital transformation initiatives across parastatals.',
      email: 'egbinade.adeola@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '7',
      name: 'Mr. Kayode Abayomi',
      position: 'Director, Public Affairs',
      bio: 'Handles communication, public relations and stakeholder engagement for the PMO.',
      email: 'kayode.abayomi@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '8',
      name: 'Mrs Adeola Adediji',
      position: 'Director, Procurement',
      bio: 'Oversees procurement operations and vendor management for state enterprises.',
      email: 'adeola.adediji@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '9',
      name: 'Mrs Ero-Phillips Olawepo Motunrayo',
      position: 'Head, Planning, Research and Statistics',
      bio: 'Leads strategic planning, research initiatives and data analysis for parastatals performance.',
      email: 'olawepo.motunrayo@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
    {
      id: '10',
      name: 'Mr. Adebanjo Olalekan Kazeem',
      position: 'Head, Internal Audit',
      bio: 'Manages internal audit functions ensuring accountability and compliance across the PMO.',
      email: 'adebanjo.kazeem@lagosstate.gov.ng',
      phone: '+234 (0) 1 XXX XXXX',
    },
  ];

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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experienced Leadership
          </h2>
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
      <Section bgColor="gray">
        <SectionTitle center>Executive Leadership</SectionTitle>
        <SectionSubtitle center>
          The key personnel steering the PMO
        </SectionSubtitle>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-red-600">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 bg-linear-to-r from-blue-400 to-blue-600 rounded-lg shrink-0" />
              <CardContent className="grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {teamMembers[0].position}
                </p>
                <p className="text-gray-600 mb-4">{teamMembers[0].bio}</p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaEnvelope className="text-red-600" />
                    <a
                      href={`mailto:${teamMembers[0].email}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {teamMembers[0].email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaPhone className="text-red-600" />
                    <a
                      href={`tel:${teamMembers[0].phone}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {teamMembers[0].phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </Section>

      {/* Team Members Grid */}
      <Section bgColor="white">
        <SectionTitle center>Management Team</SectionTitle>
        <SectionSubtitle center>
          Heads of departments and key officials
        </SectionSubtitle>

        <SectionGrid cols={3}>
          {teamMembers.slice(1).map((member) => (
            <Card key={member.id} className="flex flex-col h-full">
              <div className="w-full h-40 bg-linear-to-br from-blue-300 to-blue-500 rounded-lg mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 text-sm mb-4 grow">
                {member.bio}
              </p>
              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <FaEnvelope className="text-red-600 w-4 h-4 shrink-0" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-red-600 transition-colors break-all"
                  >
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaPhone className="text-red-600 w-4 h-4 shrink-0" />
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* How to Contact Section */}
      <Section className="bg-linear-to-r from-red-700 to-blue-700">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-blue-100 mb-8">
            Have questions or need to schedule a meeting with our team? We&apos;re
            here to help. Feel free to reach out to any of our directors or use
            our contact form.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
}
