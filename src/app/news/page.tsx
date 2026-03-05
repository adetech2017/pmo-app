'use client';

import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/Card';
import Button from '@/components/Button';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function NewsPage() {
  // Mock news data - In production, this would come from WPGraphQL
  const newsItems = [
    {
      id: '1',
      title: 'Lagos State Parastatals Monitoring Office Hosts 2026 Retreat for CEOs on Bold Leadership and Institutional Resilience',
      slug: '2026-ceos-retreat-bold-leadership',
      excerpt: 'The Lagos State Government, through the Parastatals Monitoring Office (PMO), on Thursday, 12th February 2026, commenced the Year 2026 Retreat for Chief Executive Officers at the Novotel Hotel, Chevy View Estate, along the Lekki-Epe Expressway.',
      image: '/news/retreat-2026-ceos.jpeg',
      content: `The Lagos State Government, through the Parastatals Monitoring Office (PMO), on Thursday, 12th February 2026, commenced the Year 2026 Retreat for Chief Executive Officers of Parastatals, Agencies and Government-Owned Companies at the Novotel Hotel, Chevy View Estate, along the Lekki-Epe Expressway.

The retreat, themed "Charting the Future: Bold Leadership for Resilient Institutions," was designed as a strategic platform for reflection, alignment and forward-looking dialogue aimed at strengthening leadership capacity, institutional resilience and service delivery across public sector institutions in Lagos State.

In his welcome address, the Special Adviser to the Governor on Parastatals Monitoring, Mr. Ibrahim Babajide Obanikoro, described the retreat as a defining moment in the State's governance journey, noting that it provides an opportunity for Chief Executive Officers to pause, reflect and recalibrate towards renewed commitment to excellence in public administration. He stated that the strength of public institutions, the credibility of governance systems and the quality of service delivery experienced by citizens are direct outcomes of leadership quality.

Delivering the keynote address, the Head of Service, Mr. Bode Agoro, commended the theme of the retreat, describing it as timely and reflective of the realities confronting public sector institutions. He noted that routine administration is no longer sufficient in a rapidly evolving global environment marked by economic volatility, technological disruption and rising public expectations. According to him, resilient institutions are built through intentional leadership, strong systems, accountable processes, capable teams and adaptive strategies aligned with the vision of building a Greater Lagos.

A major highlight of the retreat was a presentation by Princess Adenike Adedoyin-Ajayi (rtd. Permanent Secretary, LASG) on the topic "Leadership and Resilience for Navigating the New World of Work." In her session, she emphasised that leadership resilience is no longer optional but a strategic necessity in today's environment of continuous change and uncertainty.

Princess Adedoyin-Ajayi explained that resilience is not about working longer hours or enduring stress, but about the ability to think clearly, make sound decisions and sustain others under pressure. She stressed that resilient leadership is a system capability rather than a personal trait, noting that institutions must be intentionally designed to support leaders through clear decision rights, effective structures, manageable workloads and distributed leadership models.

The Year 2026 CEOs' Retreat continues with plenary sessions and knowledge-sharing engagements aimed at strengthening inter-agency collaboration, improving performance management systems and deepening a culture of accountability, transparency and results-driven governance in line with the Lagos State Government's development agenda for a Greater Lagos.`,
      author: 'PMO Communications',
      date: '2026-02-12',
      category: 'Press Release',
    },
    {
      id: '2',
      title: 'Lagos State and Federal Parastatals Summit Strengthens Collaboration for Improved Governance',
      slug: 'federal-parastatals-summit-collaboration',
      excerpt: 'The Lagos State and Federal Parastatals Summit has been described as a significant milestone for the Parastatals Monitoring Office, providing a strategic platform for meaningful engagement between federal and state agencies.',
      image: '/news/federal-summit-2026.jpeg',
      content: `The Lagos State and Federal Parastatals Summit has been described as a significant milestone for the Parastatals Monitoring Office (PMO), providing a strategic platform for meaningful engagement between federal and state agencies aimed at enhancing service delivery and strengthening governance.

The summit reaffirmed the critical role of parastatals as the backbone of government and key drivers of effective policy implementation, while underscoring the importance of collaboration and shared responsibility across tiers of government.

Speaking after the event, Ibrahim Babajide Obanikoro, Special Adviser, Parastatals Monitoring Office, expressed gratitude to Governor Babajide Olusola Sanwo-Olu for the confidence reposed in him through his appointment. He pledged to serve with diligence, loyalty and a strong sense of purpose throughout his tenure.

Obanikoro also appreciated the Secretary to the State Government, Barrister Abimbola Salu-Hundeyin, who represented the Governor at the summit, as well as members of the Executive Council, the Head of Service, Permanent Secretaries, and representatives of both federal and state parastatals for their participation and support.

He further commended the PMO team, led by the Permanent Secretary, for their dedication and professionalism, noting that while much work lies ahead, he remains confident in the collective capacity of all stakeholders to deliver impactful results.

According to him, sustained collaboration and shared responsibility will remain central to efforts at strengthening governance and improving public service outcomes in Lagos State.`,
      author: 'PMO Communications',
      date: '2026-02-28',
      category: 'Press Release',
    },
    {
      id: '3',
      title: 'Lagos Strengthening Accountability and Performance Assessments',
      slug: 'lagos-strengthening-accountability-performance',
      excerpt: 'The Lagos State Government has reinforced its commitment to fiscal discipline, transparency and improved revenue performance with the successful hosting of a Knowledge Sharing Session for Heads of Finance.',
      image: '/news/knowledge-sharing-finance.jpeg',
      content: `The Lagos State Government has reinforced its commitment to fiscal discipline, transparency and improved revenue performance with the successful hosting of a Knowledge Sharing Session for Heads of Finance and Accounts as well as Revenue Officers of parastatals, agencies and government-owned companies.

The session, organised by the Parastatals Monitoring Office (PMO), was held at the STO Resource Centre in Alausa.

It brought together top financial officers across government institutions for robust engagement on strengthening public sector performance.

Participants examined the practical application of Key Performance Indicators (KPIs), automation and innovative systems to enhance accountability, improve institutional efficiency and boost internally generated revenue.

The discussions centered on setting measurable targets, tracking outcomes effectively and adopting best practices that ensure sustainable fiscal management across government entities.

Special Adviser to Governor Babajide Sanwo-Olu on Parastatals Monitoring Office, Ibrahim Babajide Obanikoro, noted that the session formed part of broader reforms aimed at entrenching a performance-driven culture within Lagos State's public institutions.

He highlighted the growing effectiveness of the Office of the Special Adviser in monitoring projects and overseeing the operations of parastatals and government-owned companies.

According to him, the office has strengthened compliance mechanisms, improved performance tracking frameworks and enhanced coordination across agencies to ensure that projects are delivered efficiently and in alignment with the administration's development agenda.

Obanikoro explained that through systematic monitoring, regular performance reviews and data-driven assessments, the office has helped to promote transparency, reduce operational inefficiencies and ensure value for money in public expenditure.

He commended the Permanent Secretary, Dr. Olugbemiga Aina, and the entire PMO team for organising what he described as an impactful and timely knowledge-sharing platform.

The initiative underscores the Lagos State Government's continued resolve to build efficient, transparent and results-driven public institutions capable of delivering measurable impact and responsible governance for the benefit of residents.`,
      author: 'PMO Communications',
      date: '2026-02-20',
      category: 'Press Release',
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
        title="News & Updates"
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

        <div className="max-w-5xl mx-auto mb-16">
          {/* Featured Story */}
          {newsItems.length > 0 && (
            <Card variant="elevated" className="mb-16 overflow-hidden hover:shadow-xl group hover:-translate-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {newsItems[0].image && (
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={newsItems[0].image}
                      alt={newsItems[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent"></div>
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <div className="inline-block bg-linear-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                      ⭐ Featured Story
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {newsItems[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{newsItems[0].excerpt}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-600 text-base" />
                        <span>{formatDate(newsItems[0].date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUser className="text-blue-600 text-base" />
                        <span>{newsItems[0].author}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/news/${newsItems[0].slug}`} className="inline-block mt-8">
                    <Button variant="primary" size="lg">
                      Read Full Story →
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <SectionGrid cols={2}>
            {newsItems.slice(1).map((news) => (
              <Card key={news.id} variant="elevated" className="flex flex-col h-full overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-0">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="inline-block bg-linear-to-r from-blue-100 to-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0">
                      {news.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="grow mt-4">
                  <CardDescription className="mb-6 line-clamp-3">{news.excerpt}</CardDescription>
                  <div className="flex flex-col gap-3 text-sm text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-600 text-base" />
                      {formatDate(news.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-blue-600 text-base" />
                      {news.author}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href={`/news/${news.slug}`} className="w-full">
                    <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 justify-start">
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
      <Section bgColor="light-gray" padding="xl">
        <div className="text-center mb-16">
          <SectionTitle center>Content Categories</SectionTitle>
          <SectionSubtitle center>
            Explore our comprehensive collection of news and updates
          </SectionSubtitle>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Press Releases',
              count: '15+',
              description: 'Official statements and announcements from PMO',
              icon: '📰',
            },
            {
              title: 'Reports',
              count: '8+',
              description: 'Comprehensive performance reviews and analyses',
              icon: '📊',
            },
            {
              title: 'News Articles',
              count: '30+',
              description: 'Recent developments and organizational updates',
              icon: '📢',
            },
          ].map((category, index) => (
            <Card key={index} variant="elevated" className="text-center hover:shadow-xl hover:-translate-y-1 group transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
              <h3 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">
                {category.count}
              </h3>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {category.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter Signup Section */}
      <Section bgColor="blue" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated With PMO
          </h2>
          <p className="text-blue-100 mb-10 text-lg leading-relaxed">
            Subscribe to our newsletter to receive the latest news, updates, and
            announcements directly to your inbox. Stay informed about PMO initiatives.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="grow px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 text-gray-900 font-medium"
              required
            />
            <Button variant="primary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 font-bold">
              Subscribe
            </Button>
          </form>
          <p className="text-blue-100 text-sm">
            ✓ We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      {/* Archives Section */}
      <Section bgColor="white" padding="xl">
        <div className="text-center mb-16">
          <SectionTitle center>News Archive</SectionTitle>
          <SectionSubtitle center>
            Browse all news items by year and stay connected to our history
          </SectionSubtitle>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['2026', '2025', '2024', '2023'].map((year) => (
              <Card key={year} variant="outlined" className="text-center cursor-pointer hover:shadow-lg hover:border-blue-400 transition-all duration-300 group">
                <h3 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {year}
                </h3>
                <p className="text-sm text-gray-600 mt-3 font-medium group-hover:text-blue-600 transition-colors">View Archives →</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
