'use client';

import { useParams } from 'next/navigation';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import Button from '@/components/Button';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaDownload, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

// Mock news data - would come from WPGraphQL in production
const allNewsItems = [
  {
    id: '1',
    title: 'PMO Launches New Monitoring Framework',
    slug: 'pmo-launches-monitoring-framework',
    excerpt: 'A comprehensive framework designed to enhance monitoring of state parastatals and improve governance standards across all agencies.',
    fullContent: `The Lagos State Parastatals Monitoring Office has unveiled a new monitoring framework designed to revolutionize how state-owned enterprises are supervised and evaluated.

## Framework Overview

The new Monitoring Framework represents a significant advancement in the oversight of parastatals. It incorporates international best practices while being tailored to the specific context of Lagos State's parastatals ecosystem.

## Key Features

The framework includes several innovative components:

- **Real-time Performance Tracking**: An integrated system that monitors key performance indicators across all parastatals in real-time, enabling quick identification of challenges and opportunities.

- **Standardized Metrics**: Comprehensive performance metrics that are consistently applied across all parastatals, ensuring fairness and comparability.

- **Risk Assessment**: A robust risk management framework that identifies potential challenges before they become critical issues.

- **Stakeholder Engagement**: Regular consultation with parastatals leadership, government agencies, and civil society to ensure alignment with public interest.

- **Data-Driven Decision Making**: Advanced analytics capabilities that support evidence-based policy formulation and implementation.

## Expected Outcomes

The PMO expects that this framework will result in:

- Improved operational efficiency across parastatals
- Enhanced accountability and transparency
- Better resource utilization
- Reduced cost of service delivery
- Increased stakeholder confidence

The framework is now operational and all parastatals have been advised to align their operations accordingly.`,
    author: 'PMO Communications',
    date: '2024-03-01',
    category: 'Press Release',
    featuredImage: '/images/1.jpg',
  },
  {
    id: '2',
    title: 'Annual Performance Review Released',
    slug: 'annual-performance-review-2023',
    excerpt: 'The 2023 annual report showcases improved efficiency across all state-owned enterprises with a 35% average improvement in operational metrics.',
    fullContent: `The PMO is pleased to announce the release of the comprehensive 2023 annual performance review, which documents significant progress across the parastatal sector.

## Executive Summary

The 2023 performance review reveals a year of substantial achievements and measurable improvements in the management and performance of Lagos State's parastatals.

## Key Performance Indicators

### Operational Efficiency
- Average operational efficiency improved by 35%
- Cost reduction initiatives yielded ₦2.5 billion in savings
- Service delivery turnaround time reduced by 40%

### Financial Management
- Revenue collection improved by 28%
- Audit findings reduced by 45%
- Budget compliance increased to 92%

### Governance
- Board composition improved with 60% independent directors
- Audit committee effectiveness rated as "strong"
- Transparency and disclosure improved significantly

### Human Capital
- Staff training hours per employee increased by 50%
- Employee satisfaction score improved to 78%
- Turnover rate decreased to 8%

## Notable Achievements

Several parastatals demonstrated exceptional performance:

1. **Lagos State Transport Management Authority** - 45% increase in passenger revenue
2. **Lagos State Development and Property Corporation** - 52% improvement in project completion
3. **Lagos Waste Management Authority** - 38% increase in waste collection coverage

## Recommendations

The review recommends continued focus on:
- Digital transformation initiatives
- Capacity building programs
- Stakeholder engagement
- Performance-based incentives

The full detailed report is available for download on the PMO website.`,
    author: 'Research & Policy Division',
    date: '2024-02-28',
    category: 'Report',
    featuredImage: '/images/2.jpg',
  },
  {
    id: '3',
    title: 'Governance Workshop Concluded',
    slug: 'governance-workshop-success',
    excerpt: 'Over 150 parastatals officials participated in the corporate governance workshop held in Lagos, covering best practices and compliance standards.',
    fullContent: `The PMO successfully concluded a comprehensive corporate governance workshop that brought together over 150 senior officials from parastatals across Lagos State.

## Workshop Overview

The three-day workshop, held at the Victoria Island Conference Center, focused on practical governance issues and regulatory compliance.

## Workshop Modules

### Day 1: Governance Foundations
- Role of Board of Directors
- Corporate Governance Standards
- Regulatory Framework for Parastatals

### Day 2: Practical Implementation
- Board Effectiveness and Evaluation
- Risk Management Systems
- Internal Audit and Compliance

### Day 3: Case Studies and Best Practices
- Real-world case studies from successful parastatals
- Peer learning and networking
- Action planning for participants

## Participants' Feedback

- 94% of participants rated the workshop as "Excellent" or "Very Good"
- Key takeaway: Clear understanding of governance requirements
- Action items identified for implementation

## Next Steps

Participants will form peer learning groups to support implementation of lessons learned. The PMO will provide follow-up coaching and support over the next six months.`,
    author: 'Capacity Building Division',
    date: '2024-02-20',
    category: 'News',
    featuredImage: '/images/3.jpg',
  },
  {
    id: '4',
    title: 'Special Adviser Addresses Economic Forum',
    slug: 'special-adviser-economic-forum',
    excerpt: 'The Special Adviser to the Governor on Parastatals Monitoring discusses the role of efficient parastatals in achieving economic growth.',
    fullContent: `The Special Adviser to the Governor on Parastatals Monitoring delivered a keynote address at the Lagos Economic Development Forum, highlighting the strategic importance of efficient parastatals.

## Key Points from the Address

### Economic Contribution
"Our parastatals contribute over ₦150 billion annually to the state's revenue. Their efficiency directly impacts our economic growth," said the Special Adviser.

### Transformation Journey
The Special Adviser outlined the PMO's journey in transforming the parastatal sector:

- Establishment of the Monitoring Framework
- Implementation of performance-based management
- Investment in capacity building
- Adoption of technology solutions

### Vision for 2024
The vision for parastatals in 2024 includes:
- Digital transformation across all agencies
- Enhanced customer service standards
- Improved financial sustainability
- Leadership excellence programs

## Future Opportunities

The Special Adviser emphasized that parastatals present unique opportunities for:
- Youth employment
- Technology innovation
- Service delivery excellence
- Economic diversification

The full address is available on the PMO website.`,
    author: 'PMO Communications',
    date: '2024-02-15',
    category: 'News',
    featuredImage: '/images/4.jpg',
  },
  {
    id: '5',
    title: 'New Directors Appointed to PMO Leadership',
    slug: 'new-directors-appointed',
    excerpt: 'The Governor has approved the appointment of five new directors to strengthen the PMO\'s capacity in performance monitoring and evaluation.',
    fullContent: `The Office of the Governor has approved the appointment of five seasoned professionals to key directorial positions at the Parastatals Monitoring Office.

## New Appointees

### Director, Performance Monitoring
Prof. Adekunle Olayinka - Former Dean of Management Sciences at a leading university

### Director, Policy and Advocacy
Mrs. Folake Adebayo - 25 years experience in public sector management

### Director, Capacity Building and Training
Engr. Jamal Hassan - Leading expert in organizational development

### Director, Finance and Administration
Mr. Chinedu Okafor - CFO with experience in both public and private sectors

### Director, Legal and Compliance
Barrister Ngozi Adeyemi - Former Senior State Counsel

## Expectations

The new directors are expected to:
- Drive strategic initiatives across their respective portfolios
- Strengthen institutional capacity
- Enhance service delivery to parastatals
- Foster innovation and excellence

The appointments take effect immediately, and a formal inauguration ceremony is scheduled for next month.`,
    author: 'Human Resources',
    date: '2024-02-10',
    category: 'Announcement',
    featuredImage: '/images/5.jpg',
  },
  {
    id: '6',
    title: 'Success Story: Lagos Port Authority Transformation',
    slug: 'lpa-transformation-success',
    excerpt: 'The Lagos Port Authority achieved a remarkable 45% increase in operational efficiency following PMO interventions and monitoring.',
    fullContent: `The Lagos Port Authority serves as an inspiring example of successful organizational transformation following targeted interventions by the Parastatals Monitoring Office.

## The Challenge

When the PMO began monitoring LPA in 2022, the authority faced several challenges:
- Low operational efficiency (62%)
- High operational costs
- Declining customer satisfaction
- Staff morale issues

## The PMO Intervention

The PMO implemented a comprehensive transformation program including:

### Performance Monitoring
- Regular performance reviews against industry benchmarks
- Identification of efficiency gaps
- Data-driven decision support

### Capacity Building
- Leadership development program for senior management
- Technical skills training for operational staff
- Change management support

### Process Improvement
- Operational audit and redesign
- Technology modernization
- Customer service enhancement

## The Results

The results have been remarkable:

- **Operational Efficiency**: Increased from 62% to 89% (45% improvement)
- **Revenue Growth**: 38% increase in operational revenue
- **Customer Satisfaction**: Improved from 58% to 82%
- **Employee Satisfaction**: Increased from 52% to 71%
- **Cost Reduction**: ₦450 million in annual cost savings

## Key Success Factors

1. Committed leadership with clear vision
2. Employee engagement and buy-in
3. Regular monitoring and feedback
4. Investment in capacity building
5. Adoption of technology solutions

## Lessons Learned

The LPA transformation demonstrates that with proper support, monitoring, and capacity building, parastatals can achieve remarkable improvements in performance and service delivery.

The PMO is now replicating this model with other parastatals.`,
    author: 'Performance Audit Division',
    date: '2024-02-05',
    category: 'Success Story',
    featuredImage: '/images/6.jpg',
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

export default function MediaDetailPage() {
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
            Back to Media
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
            <div className="mb-8 rounded-lg overflow-hidden bg-linear-to-br from-blue-400 to-blue-600 h-96">
              {/* Placeholder for image */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>Featured Image</p>
              </div>
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
                  window.location.href = `/media/${relatedNews.slug}`;
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
                    window.location.href = `/media/${relatedNews.slug}`;
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
