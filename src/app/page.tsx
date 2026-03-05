'use client';

import HeroCarousel from '@/components/HeroCarousel';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';
import { FaCheckCircle, FaBullseye, FaHandshake } from 'react-icons/fa';

export default function Home() {
  const heroSlides = [
    {
      id: 1,
      title: 'Lagos State Parastatals Monitoring Office',
      subtitle: 'Ensuring Excellence and Accountability in State-Owned Enterprises',
      image: '/images/1.jpg',
      cta: { text: 'Learn More', href: '/about' },
    },
    {
      id: 2,
      title: 'Our Mission',
      subtitle: 'Improving Performance Through Process Re-engineering and Governance Excellence',
      image: '/images/2.jpg',
      cta: { text: 'Explore Our Work', href: '/programmes' },
    },
    {
      id: 3,
      title: 'Excellence in Monitoring',
      subtitle: 'Strategic oversight driving efficiency across all state-owned enterprises',
      image: '/images/3.jpg',
      cta: { text: 'Our Programmes', href: '/programmes' },
    },
    {
      id: 4,
      title: 'Governance & Accountability',
      subtitle: 'Building sustainable and efficient organizations through best practices',
      image: '/images/4.jpg',
      cta: { text: 'Meet Our Team', href: '/directorate' },
    },
    {
      id: 5,
      title: 'Join Our Mission',
      subtitle: 'Together we can transform Lagos State parastatals into models of excellence',
      image: '/images/5.jpg',
      cta: { text: 'Get in Touch', href: '/contact' },
    },
  ];

  const quickLinks = [
    {
      title: 'The Directorate',
      description: 'Meet our leadership team and key officials guiding the PMO\'s vision',
      href: '/directorate',
      icon: FaHandshake,
    },
    {
      title: 'Our Events',
      description: 'Stay updated with our latest events, seminars, and conferences',
      href: '/events',
      icon: FaBullseye,
    },
    {
      title: 'Programmes',
      description: 'Explore our strategic programmes and initiatives',
      href: '/programmes',
      icon: FaCheckCircle,
    },
  ];

  const recentNews = [
    {
      title: 'PMO Launches New Monitoring Framework',
      excerpt: 'A comprehensive framework to enhance monitoring of state parastatals',
      date: 'March 1, 2024',
      slug: 'pmo-launches-monitoring-framework',
    },
    {
      title: 'Annual Performance Review Released',
      excerpt: 'The 2023 annual report showcases improved efficiency across all agencies',
      date: 'February 28, 2024',
      slug: 'annual-performance-review',
    },
    {
      title: 'Governance Workshop Concluded',
      excerpt: 'Over 150 parastatals officials participated in the corporate governance workshop',
      date: 'February 20, 2024',
      slug: 'governance-workshop',
    },
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <HeroCarousel slides={heroSlides} autoPlay={true} interval={8000} />

      {/* Vision Section */}
      <Section bgColor="white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <FaBullseye className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Vision</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Improve Efficiency and Effectiveness of all State-Owned Parastatals
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We envision a future where every state-owned enterprise operates at
            peak efficiency, delivering exceptional value to the Lagos State
            Government and its citizens through strategic monitoring and
            governance excellence.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section bgColor="gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
                <FaCheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Drive Performance Through Process Re-engineering
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are committed to improving the performance of all
                state-owned parastatals through:
              </p>
              <ul className="space-y-3">
                {[
                  'Internal process re-engineering',
                  'Enhanced corporate governance',
                  'Agency self-sustainability',
                  'Reduced government fund dependency',
                  'Continuous performance monitoring',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-8 border-2 border-red-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Performance Audits',
                    desc: 'Regular evaluations of parastatals performance',
                  },
                  {
                    title: 'Inspections',
                    desc: 'Comprehensive inspections to ensure compliance',
                  },
                  {
                    title: 'Good Governance',
                    desc: 'Promoting best practices in corporate governance',
                  },
                  {
                    title: 'Sustainability',
                    desc: 'Driving financial and operational sustainability',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Mandate Section */}
      <Section className="bg-linear-to-r from-blue-700 to-green-700">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mandate</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-yellow-300">
            <p className="text-white text-lg leading-relaxed">
              Mandated to initiate, formulate, execute, monitor, and evaluate
              policies relating to effective and efficient monitoring of
              parastatals and government-owned companies to ensure they are
              managed and run in accordance with administrative guidelines and
              best practices in corporate governance.
            </p>
          </div>
        </div>
      </Section>

      {/* Quick Links Section */}
      <Section bgColor="white">
        <SectionTitle center>Explore Our Work</SectionTitle>
        <SectionSubtitle center>
          Discover more about PMO&apos;s initiatives and leadership
        </SectionSubtitle>

        <SectionGrid cols={3}>
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link key={index} href={link.href}>
                <Card hover className="h-full">
                  <CardHeader>
                    <IconComponent className="w-8 h-8 text-red-600 mb-3" />
                    <CardTitle>{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{link.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
                      Learn More →
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </SectionGrid>
      </Section>

      {/* Latest News Section */}
      <Section bgColor="gray">
        <div className="mb-12">
          <SectionTitle center>Latest Updates</SectionTitle>
          <SectionSubtitle center>
            Stay informed about PMO&apos;s recent activities and announcements
          </SectionSubtitle>
        </div>

        <SectionGrid cols={3}>
          {recentNews.map((news, index) => (
            <Link key={index} href={`/news`}>
              <Card hover>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
                  <p className="text-sm text-gray-500 mt-2">{news.date}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription>{news.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
                    Read More →
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </SectionGrid>

        <div className="text-center mt-12">
          <Link href="/news">
            <Button variant="primary" className="bg-red-600 hover:bg-red-700">View All News</Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-linear-to-r from-red-700 via-red-600 to-blue-700">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Work With Us
          </h2>
          <p className="text-white/90 mb-8">
            Whether you represent a state-owned enterprise or are interested in
            our work, we&apos;d love to connect with you.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
