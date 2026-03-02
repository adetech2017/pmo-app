import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Media & News',
  description: 'Stay updated with the latest news, press releases, and media coverage from Lagos State Parastatals Monitoring Office.',
  keywords: ['Media', 'News', 'Press Release', 'Articles', 'Publications'],
  url: 'https://pmo.lagosstate.gov.ng/media',
});

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
