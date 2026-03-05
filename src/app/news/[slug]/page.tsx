'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import Button from '@/components/Button';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaDownload, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

// Mock news data - would come from WPGraphQL in production
const allNewsItems = [
  {
    id: '1',
    title: 'Lagos State Parastatals Monitoring Office Hosts 2026 Retreat for CEOs on Bold Leadership and Institutional Resilience',
    slug: '2026-ceos-retreat-bold-leadership',
    excerpt: 'The Lagos State Government, through the Parastatals Monitoring Office (PMO), on Thursday, 12th February 2026, commenced the Year 2026 Retreat for Chief Executive Officers at the Novotel Hotel, Chevy View Estate, along the Lekki-Epe Expressway.',
    fullContent: `The Lagos State Government, through the Parastatals Monitoring Office (PMO), on Thursday, 12th February 2026, commenced the Year 2026 Retreat for Chief Executive Officers of Parastatals, Agencies and Government-Owned Companies at the Novotel Hotel, Chevy View Estate, along the Lekki-Epe Expressway.

The retreat, themed "Charting the Future: Bold Leadership for Resilient Institutions," was designed as a strategic platform for reflection, alignment and forward-looking dialogue aimed at strengthening leadership capacity, institutional resilience and service delivery across public sector institutions in Lagos State.

## Welcome Address

In his welcome address, the Special Adviser to the Governor on Parastatals Monitoring, Mr. Ibrahim Babajide Obanikoro, described the retreat as a defining moment in the State's governance journey, noting that it provides an opportunity for Chief Executive Officers to pause, reflect and recalibrate towards renewed commitment to excellence in public administration. He stated that the strength of public institutions, the credibility of governance systems and the quality of service delivery experienced by citizens are direct outcomes of leadership quality.

## Keynote Address

Delivering the keynote address, the Head of Service, Mr. Bode Agoro, commended the theme of the retreat, describing it as timely and reflective of the realities confronting public sector institutions. He noted that routine administration is no longer sufficient in a rapidly evolving global environment marked by economic volatility, technological disruption and rising public expectations. According to him, resilient institutions are built through intentional leadership, strong systems, accountable processes, capable teams and adaptive strategies aligned with the vision of building a Greater Lagos.

## Leadership and Resilience Session

A major highlight of the retreat was a presentation by Princess Adenike Adedoyin-Ajayi (rtd. Permanent Secretary, LASG) on the topic "Leadership and Resilience for Navigating the New World of Work." In her session, she emphasised that leadership resilience is no longer optional but a strategic necessity in today's environment of continuous change and uncertainty.

Princess Adedoyin-Ajayi explained that resilience is not about working longer hours or enduring stress, but about the ability to think clearly, make sound decisions and sustain others under pressure. She stressed that resilient leadership is a system capability rather than a personal trait, noting that institutions must be intentionally designed to support leaders through clear decision rights, effective structures, manageable workloads and distributed leadership models. According to her, over-centralisation of decision-making, excessive approvals and multiple competing priorities often weaken institutional performance and exhaust leadership capacity.

She further highlighted that in the "new world of work," public sector leaders must build systems that promote agility, accountability, innovation and collaboration across MDAs, while also strengthening public trust through consistent service delivery and credible policy execution. She noted that leadership behaviour sets the tone for organisational culture, stressing that what leaders tolerate or ignore eventually becomes institutional practice.

The facilitator also underscored the importance of moving away from the "heroic leadership" model towards sustainable leadership systems that distribute responsibility, encourage collaboration and build institutional memory. She challenged participants to reflect on areas where individual sacrifice is being used to compensate for system weaknesses, warning that such practices may undermine long-term institutional resilience.

## Interactive Sessions

Participants engaged in interactive sessions and reflective discussions focused on leadership capacity, decision effectiveness, organisational design and culture under pressure. The retreat is expected to provoke critical reflection, inspire organisational recalibration and catalyse actionable reforms that will strengthen the institutional foundations of Lagos State beyond individual tenures.

The Year 2026 CEOs' Retreat continues with plenary sessions and knowledge-sharing engagements aimed at strengthening inter-agency collaboration, improving performance management systems and deepening a culture of accountability, transparency and results-driven governance in line with the Lagos State Government's development agenda for a Greater Lagos.`,
    author: 'PMO Communications',
    date: '2026-02-12',
    category: 'Press Release',
    featuredImage: '/news/retreat-2026-ceos.jpeg',
  },
  {
    id: '2',
    title: 'Lagos State and Federal Parastatals Summit Strengthens Collaboration for Improved Governance',
    slug: 'federal-parastatals-summit-collaboration',
    excerpt: 'The Lagos State and Federal Parastatals Summit has been described as a significant milestone for the Parastatals Monitoring Office, providing a strategic platform for meaningful engagement between federal and state agencies.',
    fullContent: `The Lagos State and Federal Parastatals Summit has been described as a significant milestone for the Parastatals Monitoring Office (PMO), providing a strategic platform for meaningful engagement between federal and state agencies aimed at enhancing service delivery and strengthening governance.

The summit reaffirmed the critical role of parastatals as the backbone of government and key drivers of effective policy implementation, while underscoring the importance of collaboration and shared responsibility across tiers of government.

## Special Adviser's Remarks

Speaking after the event, Ibrahim Babajide Obanikoro, Special Adviser, Parastatals Monitoring Office, expressed gratitude to Governor Babajide Olusola Sanwo-Olu for the confidence reposed in him through his appointment. He pledged to serve with diligence, loyalty and a strong sense of purpose throughout his tenure.

Obanikoro also appreciated the Secretary to the State Government, Barrister Abimbola Salu-Hundeyin, who represented the Governor at the summit, as well as members of the Executive Council, the Head of Service, Permanent Secretaries, and representatives of both federal and state parastatals for their participation and support.

## Commitment to Collective Success

He further commended the PMO team, led by the Permanent Secretary, for their dedication and professionalism, noting that while much work lies ahead, he remains confident in the collective capacity of all stakeholders to deliver impactful results.

According to him, sustained collaboration and shared responsibility will remain central to efforts at strengthening governance and improving public service outcomes in Lagos State.`,
    author: 'PMO Communications',
    date: '2026-02-28',
    category: 'Press Release',
    featuredImage: '/news/federal-summit-2026.jpeg',
  },
  {
    id: '3',
    title: 'Lagos Strengthening Accountability and Performance Assessments',
    slug: 'lagos-strengthening-accountability-performance',
    excerpt: 'The Lagos State Government has reinforced its commitment to fiscal discipline, transparency and improved revenue performance with the successful hosting of a Knowledge Sharing Session for Heads of Finance.',
    fullContent: `The Lagos State Government has reinforced its commitment to fiscal discipline, transparency and improved revenue performance with the successful hosting of a Knowledge Sharing Session for Heads of Finance and Accounts as well as Revenue Officers of parastatals, agencies and government-owned companies.

## Knowledge Sharing Platform

The session, organised by the Parastatals Monitoring Office (PMO), was held at the STO Resource Centre in Alausa.

It brought together top financial officers across government institutions for robust engagement on strengthening public sector performance.

## Focus Areas

Participants examined the practical application of Key Performance Indicators (KPIs), automation and innovative systems to enhance accountability, improve institutional efficiency and boost internally generated revenue.

The discussions centered on setting measurable targets, tracking outcomes effectively and adopting best practices that ensure sustainable fiscal management across government entities.

## Special Adviser's Perspective

Special Adviser to Governor Babajide Sanwo-Olu on Parastatals Monitoring Office, Ibrahim Babajide Obanikoro, noted that the session formed part of broader reforms aimed at entrenching a performance-driven culture within Lagos State's public institutions.

He highlighted the growing effectiveness of the Office of the Special Adviser in monitoring projects and overseeing the operations of parastatals and government-owned companies.

According to him, the office has strengthened compliance mechanisms, improved performance tracking frameworks and enhanced coordination across agencies to ensure that projects are delivered efficiently and in alignment with the administration's development agenda.

Obanikoro explained that through systematic monitoring, regular performance reviews and data-driven assessments, the office has helped to promote transparency, reduce operational inefficiencies and ensure value for money in public expenditure.

He commended the Permanent Secretary, Dr. Olugbemiga Aina, and the entire PMO team for organising what he described as an impactful and timely knowledge-sharing platform.

## Continued Commitment

The initiative underscores the Lagos State Government's continued resolve to build efficient, transparent and results-driven public institutions capable of delivering measurable impact and responsible governance for the benefit of residents.`,
    author: 'PMO Communications',
    date: '2026-02-20',
    category: 'Press Release',
    featuredImage: '/news/knowledge-sharing-finance.jpeg',
  },
];

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  fullContent: string;
  author: string;
  date: string;
  category: string;
  featuredImage?: string;
}

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const news = allNewsItems.find((item) => item.slug === slug) as NewsItem | undefined;

  if (!news) {
    return (
      <>
        <Hero
          title="Article Not Found"
          subtitle="The article you're looking for doesn't exist"
          backgroundColor="bg-gradient-to-r from-red-700 to-red-800"
          height="md"
        />
        <Section bgColor="white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sorry, we couldn't find this article
            </h2>
            <p className="text-gray-600 mb-8">
              The article you're looking for may have been removed or is no longer available.
            </p>
            <Button variant="primary" onClick={() => window.history.back()}>
              <FaArrowLeft className="mr-2" />
              Go Back
            </Button>
          </div>
        </Section>
      </>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Press Release': 'bg-blue-100 text-blue-800',
      'Report': 'bg-purple-100 text-purple-800',
      'News': 'bg-green-100 text-green-800',
      'Announcement': 'bg-orange-100 text-orange-800',
      'Success Story': 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={news.title}
        subtitle={news.excerpt}
        backgroundColor="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800"
        height="md"
        titleSize="text-3xl sm:text-4xl"
      />

      {/* Main Content */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold"
          >
            <FaArrowLeft size={16} />
            Back to News
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.category)}`}>
                {news.category}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" />
                <span>{formatDate(news.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-600" />
                <span>{news.author}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {news.featuredImage && (
            <div className="mb-8 rounded-lg overflow-hidden relative w-full">
              <Image
                src={news.featuredImage}
                alt={news.title}
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="whitespace-pre-line leading-relaxed mb-8">
                  {news.fullContent}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="border-t pt-8">
                <p className="text-sm font-semibold text-gray-900 mb-4">Share this article:</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost" className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100">
                    <FaTwitter size={18} />
                    Twitter
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100">
                    <FaFacebook size={18} />
                    Facebook
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100">
                    <FaLinkedin size={18} />
                    LinkedIn
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100">
                    <FaDownload size={16} />
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Related Articles Section */}
      <Section bgColor="gray">
        <SectionTitle center>Related Articles</SectionTitle>
        <SectionSubtitle center>
          Check out other news and updates
        </SectionSubtitle>

        <SectionGrid cols={3}>
          {allNewsItems
            .filter((item) => item.id !== news.id && item.category === news.category)
            .slice(0, 3)
            .map((relatedNews) => (
              <Card
                key={relatedNews.id}
                className="flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  window.location.href = `/news/${relatedNews.slug}`;
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <CardTitle className="text-lg grow line-clamp-2">{relatedNews.title}</CardTitle>
                    <span className={`text-xs font-semibold whitespace-nowrap shrink-0 px-2 py-1 rounded ${getCategoryColor(relatedNews.category)}`}>
                      {relatedNews.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="grow">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedNews.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FaCalendarAlt className="text-blue-600" />
                    {formatDate(relatedNews.date)}
                  </div>
                </CardContent>
                <div className="p-4 pt-0">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read Article →
                  </Button>
                </div>
              </Card>
            ))}
        </SectionGrid>

        {/* Fallback to other articles if no same category found */}
        {allNewsItems.filter((item) => item.id !== news.id && item.category === news.category).length === 0 && (
          <SectionGrid cols={3}>
            {allNewsItems
              .filter((item) => item.id !== news.id)
              .slice(0, 3)
              .map((relatedNews) => (
                <Card
                  key={relatedNews.id}
                  className="flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    window.location.href = `/news/${relatedNews.slug}`;
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <CardTitle className="text-lg grow line-clamp-2">{relatedNews.title}</CardTitle>
                      <span className={`text-xs font-semibold whitespace-nowrap shrink-0 px-2 py-1 rounded ${getCategoryColor(relatedNews.category)}`}>
                        {relatedNews.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="grow">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedNews.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCalendarAlt className="text-blue-600" />
                      {formatDate(relatedNews.date)}
                    </div>
                  </CardContent>
                  <div className="p-4 pt-0">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                      Read Article →
                    </Button>
                  </div>
                </Card>
              ))}
          </SectionGrid>
        )}
      </Section>
    </>
  );
}
