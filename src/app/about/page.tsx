'use client';

import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card from '@/components/Card';
import { FaAward, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Commitment to the highest standards in all our endeavors and monitoring activities.',
    },
    {
      icon: FaChartLine,
      title: 'Accountability',
      description: 'Ensuring transparency and responsibility in the management of public enterprises.',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working with stakeholders to achieve sustainable development and good governance.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Continuously improving our processes and strategies to meet evolving challenges.',
    },
  ];

  const achievements: Array<{ title: string; stat: string; description: string }> = [];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About PMO"
        subtitle="Understanding Our Mission and Impact on Lagos State"
        backgroundColor="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"
        height="md"
      />

      {/* Organization Overview Section */}
      <Section bgColor="white" padding="xl">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Lagos State Parastatals Monitoring Office (PMO) is a critical
                government agency dedicated to ensuring that state-owned enterprises
                and parastatals operate efficiently, transparently, and in accordance
                with established guidelines.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Led by the Special Adviser to the Governor on Parastatals
                Monitoring, the PMO drives the T.H.E.M.E.S+ agenda through
                rigorous performance audits, comprehensive inspections, and
                promotion of good governance practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach focuses on sustainable development and reducing
                dependency on government funding while maximizing public value
                delivery.
              </p>
            </div>
            <Card variant="elevated" className="bg-linear-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Strategic Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <span className="text-blue-600 font-bold text-xl mt-1 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-700 font-medium leading-relaxed">Strategic monitoring of state enterprises</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-blue-600 font-bold text-xl mt-1 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-700 font-medium leading-relaxed">Performance evaluation and optimization</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-blue-600 font-bold text-xl mt-1 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-700 font-medium leading-relaxed">Corporate governance enhancement</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-blue-600 font-bold text-xl mt-1 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-700 font-medium leading-relaxed">Financial sustainability improvement</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-blue-600 font-bold text-xl mt-1 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-700 font-medium leading-relaxed">Capacity building and training</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section bgColor="light-gray" padding="xl">
        <div className="mb-16">
          <SectionTitle center>Our Core Values</SectionTitle>
          <SectionSubtitle center>
            These principles guide everything we do and shape our organizational culture
          </SectionSubtitle>
        </div>

        <SectionGrid cols={4}>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} variant="elevated" className="text-center hover:shadow-xl hover:-translate-y-1 group transition-all duration-300">
                <div>
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-linear-to-br from-blue-100 to-blue-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </SectionGrid>
      </Section>

      {/* Key Achievements Section */}
      {achievements.length > 0 && (
        <Section bgColor="white" padding="xl">
          <div className="mb-16">
            <SectionTitle center>Our Achievements</SectionTitle>
            <SectionSubtitle center>
              Measurable impact in improving state enterprise performance
            </SectionSubtitle>
          </div>

          <SectionGrid cols={4}>
            {achievements.map((achievement, index) => (
              <Card key={index} variant="elevated" className="text-center hover:shadow-xl hover:-translate-y-1 group transition-all duration-300">
                <div>
                  <div className="text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {achievement.stat}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </SectionGrid>
        </Section>
      )}

      {/* Organizational Structure Section */}
      <Section className="bg-linear-to-br from-blue-600 via-blue-700 to-blue-900" padding="xl">
        <SectionTitle center className="text-white mb-4">
          Organizational Structure
        </SectionTitle>
        <SectionSubtitle center className="text-blue-100 mb-12">
          Hierarchical framework ensuring effective leadership and oversight
        </SectionSubtitle>

        <div className="max-w-3xl mx-auto">
          <Card variant="elevated" className="bg-white/95 backdrop-blur-sm">
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              The PMO operates under a hierarchical structure led by the Special
              Adviser to the Governor on Parastatals Monitoring, supported by
              dedicated departments focused on audits, inspections, research,
              and training. This structure ensures comprehensive oversight of
              all state-owned enterprises and timely intervention where needed.
            </p>
          </Card>
        </div>
      </Section>

      {/* T.H.E.M.E.S+ Agenda Section */}
      <Section bgColor="gray">
        <SectionTitle center>T.H.E.M.E.S+ Agenda</SectionTitle>
        <SectionSubtitle center>
          The strategic framework driving our initiatives
        </SectionSubtitle>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              letter: 'T',
              title: 'Transportation',
              desc: 'Improving efficiency in transport-related parastatals',
            },
            {
              letter: 'H',
              title: 'Health',
              desc: 'Enhancing healthcare service delivery',
            },
            {
              letter: 'E',
              title: 'Education',
              desc: 'Supporting quality education provision',
            },
            {
              letter: 'M',
              title: 'Making Lagos Safe',
              desc: 'Security and safety initiatives',
            },
            {
              letter: 'E',
              title: 'Environment',
              desc: 'Environmental sustainability programs',
            },
            {
              letter: 'S',
              title: 'Social Services',
              desc: 'Strengthening social welfare delivery',
            },
          ].map((item, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-lg w-12 h-12 flex items-center justify-center shrink-0 font-bold text-lg">
                  {item.letter}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
