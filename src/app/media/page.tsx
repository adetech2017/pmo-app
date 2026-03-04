'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/Card';
import Button from '@/components/Button';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function MediaPage() {
  // Mock news data - In production, this would come from WPGraphQL
  const newsItems = [
    {
      id: '1',
      title: 'PMO Launches New Monitoring Framework',
      slug: 'pmo-launches-monitoring-framework',
      excerpt: 'A comprehensive framework designed to enhance monitoring of state parastatals and improve governance standards across all agencies.',
      content: 'The Lagos State Parastatals Monitoring Office has unveiled a new monitoring framework...',
      author: 'PMO Communications',
      date: '2024-03-01',
      category: 'Press Release',
    },
    {
      id: '2',
      title: 'Annual Performance Review Released',
      slug: 'annual-performance-review-2023',
      excerpt: 'The 2023 annual report showcases improved efficiency across all state-owned enterprises with a 35% average improvement in operational metrics.',
      content: 'The PMO is pleased to announce the release of the comprehensive 2023 annual performance review...',
      author: 'Research & Policy Division',
      date: '2024-02-28',
      category: 'Report',
    },
    {
      id: '3',
      title: 'Governance Workshop Concluded',
      slug: 'governance-workshop-success',
      excerpt: 'Over 150 parastatals officials participated in the corporate governance workshop held in Lagos, covering best practices and compliance standards.',
      content: 'The PMO successfully concluded a comprehensive corporate governance workshop...',
      author: 'Capacity Building Division',
      date: '2024-02-20',
      category: 'News',
    },
    {
      id: '4',
      title: 'Special Adviser Addresses Economic Forum',
      slug: 'special-adviser-economic-forum',
      excerpt: 'The Special Adviser to the Governor on Parastatals Monitoring discusses the role of efficient parastatals in achieving economic growth.',
      content: 'At the recent economic development forum, the Special Adviser highlighted the critical importance...',
      author: 'PMO Communications',
      date: '2024-02-15',
      category: 'News',
    },
    {
      id: '5',
      title: 'New Directors Appointed to PMO Leadership',
      slug: 'new-directors-appointed',
      excerpt: 'The Governor has approved the appointment of five new directors to strengthen the PMO\'s capacity in performance monitoring and evaluation.',
      content: 'Five seasoned professionals have been appointed to key positions in the PMO...',
      author: 'Human Resources',
      date: '2024-02-10',
      category: 'Announcement',
    },
    {
      id: '6',
      title: 'Success Story: Lagos Port Authority Transformation',
      slug: 'lpa-transformation-success',
      excerpt: 'The Lagos Port Authority achieved a remarkable 45% increase in operational efficiency following PMO interventions and monitoring.',
      content: 'The Lagos Port Authority serves as an inspiring example of successful transformation...',
      author: 'Performance Audit Division',
      date: '2024-02-05',
      category: 'Success Story',
    },
  ];

  const categories = ['All', 'Press Release', 'Report', 'News', 'Announcement', 'Success Story'];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Media & News"
        subtitle="Stay Informed About PMO Activities and Updates"
        backgroundColor="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800"
        height="md"
      />

      {/* Latest News Section */}
      <Section bgColor="white">
        <SectionTitle center>Latest Updates</SectionTitle>
        <SectionSubtitle center>
          Recent news, press releases, and announcements from the PMO
        </SectionSubtitle>

        <div className="max-w-4xl mx-auto mb-12">
          {/* Featured Story */}
          {newsItems.length > 0 && (
            <Card className="mb-12 border-2 border-blue-600 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-linear-to-br from-blue-400 to-blue-600 h-64 md:h-auto" />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      Featured
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {newsItems[0].title}
                    </h2>
                    <p className="text-gray-600 mb-4">{newsItems[0].excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-blue-600" />
                        {formatDate(newsItems[0].date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUser className="text-blue-600" />
                        {newsItems[0].author}
                      </div>
                    </div>
                  </div>
                  <Link href={`/media/${newsItems[0].slug}`} className="inline-block mt-4">
                    <Button variant="primary" className="mt-4">
                      Read Full Story
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <SectionGrid cols={2}>
            {newsItems.slice(1).map((news) => (
              <Card key={news.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <CardTitle className="text-lg grow">{news.title}</CardTitle>
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold whitespace-nowrap shrink-0">
                      {news.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="grow">
                  <CardDescription className="mb-4">{news.excerpt}</CardDescription>
                  <div className="flex flex-col gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-600" />
                      {formatDate(news.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser className="text-blue-600" />
                      {news.author}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/media/${news.slug}`}>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                      Read More →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </SectionGrid>
        </div>
      </Section>

      {/* Content Categories Section */}
      <Section bgColor="gray">
        <SectionTitle center>Content Categories</SectionTitle>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Press Releases',
              count: '15+',
              description: 'Official statements and announcements from PMO',
            },
            {
              title: 'Reports',
              count: '8+',
              description: 'Comprehensive performance reviews and analyses',
            },
            {
              title: 'News Articles',
              count: '30+',
              description: 'Recent developments and organizational updates',
            },
          ].map((category, index) => (
            <Card key={index} className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {category.count}
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h4>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup Section */}
      <Section bgColor="blue">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter to receive the latest news, updates, and
            announcements directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <Button variant="primary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      {/* Archives Section */}
      <Section bgColor="white">
        <SectionTitle center>News Archive</SectionTitle>
        <SectionSubtitle center>
          Browse all news items by year
        </SectionSubtitle>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['2024', '2023', '2022', '2021'].map((year) => (
              <Card key={year} className="text-center cursor-pointer hover:shadow-lg transition-shadow">
                <h3 className="text-3xl font-bold text-blue-600">{year}</h3>
                <p className="text-sm text-gray-600 mt-2">View archives</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
