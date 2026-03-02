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

  const achievements = [
    {
      title: 'Parastatals Monitored',
      stat: '50+',
      description: 'State-owned enterprises under regular supervision',
    },
    {
      title: 'Performance Audits',
      stat: '200+',
      description: 'Comprehensive evaluations conducted annually',
    },
    {
      title: 'Efficiency Improvement',
      stat: '35%',
      description: 'Average improvement in operational efficiency',
    },
    {
      title: 'Cost Savings',
      stat: '$50M+',
      description: 'Government resources saved through interventions',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About PMO"
        subtitle="Understanding Our Mission and Impact"
        backgroundColor="bg-gradient-to-r from-red-700 via-blue-700 to-red-800"
        height="md"
      />

      {/* Organization Overview Section */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
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
            <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Strategic monitoring of state enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Performance evaluation and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Corporate governance enhancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Financial sustainability improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Capacity building and training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section bgColor="gray">
        <SectionTitle center>Our Core Values</SectionTitle>
        <SectionSubtitle center>
          These principles guide everything we do
        </SectionSubtitle>

        <SectionGrid cols={4}>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index}>
                <div className="text-center">
                  <IconComponent className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </SectionGrid>
      </Section>

      {/* Key Achievements Section */}
      <Section bgColor="white">
        <SectionTitle center>Our Achievements</SectionTitle>
        <SectionSubtitle center>
          Measurable impact in improving state enterprise performance
        </SectionSubtitle>

        <SectionGrid cols={4}>
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-2 border-red-300">
              <div className="mb-4">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {achievement.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* Organizational Structure Section */}
      <Section className="bg-linear-to-r from-blue-700 to-green-700">
        <SectionTitle center className="text-white">
          Organizational Structure
        </SectionTitle>
        <SectionSubtitle center className="text-blue-100">
          Hierarchical framework ensuring effective leadership and oversight
        </SectionSubtitle>

        <div className="max-w-2xl mx-auto mt-12 text-white text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <p className="leading-relaxed">
              The PMO operates under a hierarchical structure led by the Special
              Adviser to the Governor on Parastatals Monitoring, supported by
              dedicated departments focused on audits, inspections, research,
              and training. This structure ensures comprehensive oversight of
              all state-owned enterprises and timely intervention where needed.
            </p>
          </div>
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
