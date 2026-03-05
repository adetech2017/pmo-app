'use client';

import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Card';
import { FaCheckCircle, FaClock, FaRocket } from 'react-icons/fa';

export default function ProgrammesPage() {
  // Mock programmes data - In production, this would come from WPGraphQL
  const programmes = [
    {
      id: '1',
      title: 'Retreat',
      description: 'Leadership retreat for strategic planning and organizational alignment.',
      objectives: [
        'Strategic planning and goal setting',
        'Team building and cohesion',
        'Stakeholder engagement',
        'Performance review and planning',
      ],
      status: 'active',
      startDate: '2025-01-15',
      progress: 75,
    },
    {
      id: '2',
      title: 'Know Your Agencies',
      description: 'Comprehensive program to familiarize stakeholders with parastatals operations and mandates.',
      objectives: [
        'Understand agency mandates',
        'Learn operational procedures',
        'Explore agency capabilities',
        'Build stakeholder relationships',
      ],
      status: 'active',
      startDate: '2025-02-01',
      progress: 60,
    },
    {
      id: '3',
      title: 'Working Tour',
      description: 'Field visits and operational tours across state-owned enterprises.',
      objectives: [
        'Observe daily operations',
        'Assess infrastructure and facilities',
        'Evaluate service delivery',
        'Gather performance data',
      ],
      status: 'active',
      startDate: '2025-01-20',
      progress: 70,
    },
    {
      id: '4',
      title: 'Book Inspection Exercises',
      description: 'Regular compliance and operational inspection programs for parastatals.',
      objectives: [
        'Ensure regulatory compliance',
        'Verify financial records',
        'Assess operational standards',
        'Identify improvement areas',
      ],
      status: 'active',
      startDate: '2025-12-01',
      progress: 80,
    },
    {
      id: '5',
      title: 'Projects Monitoring Exercises',
      description: 'Continuous monitoring of development projects and initiatives in parastatals.',
      objectives: [
        'Track project progress',
        'Monitor budget utilization',
        'Evaluate project outcomes',
        'Ensure timely delivery',
      ],
      status: 'active',
      startDate: '2025-01-10',
      progress: 65,
    },
    {
      id: '6',
      title: 'Book Inspection Exercises',
      description: 'Regular compliance and operational inspection programs for parastatals.',
      objectives: [
        'Ensure regulatory compliance',
        'Verify financial records',
        'Assess operational standards',
        'Identify improvement areas',
      ],
      status: 'upcoming',
      startDate: '2026-06-01',
      progress: 0,
    },
    {
      id: '7',
      title: 'Projects Monitoring Exercises',
      description: 'Continuous monitoring of development projects and initiatives in parastatals.',
      objectives: [
        'Track project progress',
        'Monitor budget utilization',
        'Evaluate project outcomes',
        'Ensure timely delivery',
      ],
      status: 'upcoming',
      startDate: '2026-06-15',
      progress: 0,
    },
    {
      id: '8',
      title: 'Know Your Agencies',
      description: 'Comprehensive program to familiarize stakeholders with parastatals operations and mandates.',
      objectives: [
        'Understand agency mandates',
        'Learn operational procedures',
        'Explore agency capabilities',
        'Build stakeholder relationships',
      ],
      status: 'upcoming',
      startDate: '2026-07-01',
      progress: 0,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Programmes"
        subtitle="Strategic Initiatives Driving Parastatals Excellence"
        backgroundColor="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800"
        height="md"
      />

      {/* Introduction Section */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Strategic Programmes
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The PMO executes multiple strategic programmes designed to transform
            and improve the performance of state-owned enterprises. Each programme
            is carefully designed with clear objectives, measurable targets, and
            dedicated resources to ensure success.
          </p>
        </div>
      </Section>

      {/* Active Programmes Section */}
      <Section bgColor="gray">
        <SectionTitle center>Current Programmes</SectionTitle>
        <SectionSubtitle center>
          Active initiatives driving transformation across parastatals
        </SectionSubtitle>

        <SectionGrid cols={2}>
          {programmes.filter((p) => p.status === 'active').map((programme) => (
            <Card key={programme.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flegrow">
                    <CardTitle>{programme.title}</CardTitle>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${getStatusColor(programme.status)}`}>
                    {getStatusLabel(programme.status)}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="grow">
                <CardDescription className="mb-4">
                  {programme.description}
                </CardDescription>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Progress
                    </span>
                    <span className="text-sm text-gray-600">
                      {programme.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${programme.progress}%` }}
                    />
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {programme.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* Upcoming Programmes Section */}
      <Section bgColor="white">
        <SectionTitle center>Upcoming Programmes</SectionTitle>

        <SectionGrid cols={3}>
          {programmes.filter((p) => p.status === 'upcoming').map((programme) => (
            <Card key={programme.id} className="border-2 border-yellow-400">
              <CardHeader>
                <CardTitle className="text-lg">{programme.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {programme.description}
                </CardDescription>
                <div className="flex items-center gap-2 text-sm text-yellow-700 bg-yellow-50 p-3 rounded">
                  <FaRocket className="w-4 h-4" />
                  <span>Coming June 2026</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* Programme Categories Section */}
      <Section bgColor="gray">
        <SectionTitle center>Programme Categories</SectionTitle>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: FaCheckCircle,
              title: 'Performance Optimization',
              description: 'Programs focused on improving operational efficiency and performance metrics.',
            },
            {
              icon: FaClock,
              title: 'Governance & Compliance',
              description: 'Initiatives ensuring adherence to guidelines and best governance practices.',
            },
            {
              icon: FaRocket,
              title: 'Strategic Transformation',
              description: 'Large-scale programs driving fundamental organizational change.',
            },
          ].map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="text-center">
                <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Impact Section */}
      <Section bgColor="blue">
        <SectionTitle center className="text-white">
          Programme Impact
        </SectionTitle>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            { stat: '50+', label: 'Active Programmes' },
            { stat: '100+', label: 'Parastatals Reached' },
            // { stat: '5000+', label: 'Staff Trained' },
            // { stat: '₦2.5B+', label: 'Cost Savings' },
          ].map((impact, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {impact.stat}
              </div>
              <p className="text-blue-100">{impact.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
