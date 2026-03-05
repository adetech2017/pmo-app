import type { Metadata } from 'next';

// Mock news data for metadata generation
const allNewsItems = [
  {
    id: '1',
    title: 'PMO Launches New Monitoring Framework',
    slug: 'pmo-launches-monitoring-framework',
    excerpt: 'A comprehensive framework designed to enhance monitoring of state parastatals and improve governance standards across all agencies.',
    date: '2026-03-01',
    category: 'Press Release',
  },
  {
    id: '2',
    title: 'Annual Performance Review Released',
    slug: 'annual-performance-review-2023',
    excerpt: 'The 2025 annual report showcases improved efficiency across all state-owned enterprises with a 35% average improvement in operational metrics.',
    date: '2026-02-28',
    category: 'Report',
  },
  {
    id: '3',
    title: 'Governance Workshop Concluded',
    slug: 'governance-workshop-success',
    excerpt: 'Over 150 parastatals officials participated in the corporate governance workshop held in Lagos, covering best practices and compliance standards.',
    date: '2026-02-20',
    category: 'News',
  },
  {
    id: '4',
    title: 'Special Adviser Addresses Economic Forum',
    slug: 'special-adviser-economic-forum',
    excerpt: 'The Special Adviser to the Governor on Parastatals Monitoring discusses the role of efficient parastatals in achieving economic growth.',
    date: '2026-02-15',
    category: 'News',
  },
  {
    id: '5',
    title: 'New Directors Appointed to PMO Leadership',
    slug: 'new-directors-appointed',
    excerpt: 'The Governor has approved the appointment of five new directors to strengthen the PMO\'s capacity in performance monitoring and evaluation.',
    date: '2026-02-10',
    category: 'Announcement',
  },
  {
    id: '6',
    title: 'Success Story: Lagos Port Authority Transformation',
    slug: 'lpa-transformation-success',
    excerpt: 'The Lagos Port Authority achieved a remarkable 45% increase in operational efficiency following PMO interventions and monitoring.',
    date: '2026-02-05',
    category: 'Success Story',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = allNewsItems.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    };
  }

  return {
    title: `${news.title} - PMO News`,
    description: news.excerpt,
    keywords: ['news', 'media', 'press release', news.category, 'PMO'],
    openGraph: {
      title: news.title,
      description: news.excerpt,
      url: `/news/${slug}`,
      type: 'article',
      publishedTime: news.date,
    },
  };
}

export function generateStaticParams() {
  return allNewsItems.map((news) => ({
    slug: news.slug,
  }));
}

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
