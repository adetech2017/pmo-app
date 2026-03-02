import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'The Directorate',
  description: 'Meet the leadership team driving excellence in parastatals monitoring. Explore our experienced directors and management team.',
  keywords: ['Directorate', 'Leadership', 'Team', 'Directors', 'Management'],
  url: 'https://pmo.lagosstate.gov.ng/directorate',
});

export default function DirectorateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
