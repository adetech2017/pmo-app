import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'News & Updates',
  description: 'Stay updated with the latest news, press releases, and updates from Lagos State Parastatals Monitoring Office.',
  keywords: ['News', 'Press Release', 'Articles', 'Publications'],
  url: 'https://pmo.lagosstate.gov.ng/news',
});

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
