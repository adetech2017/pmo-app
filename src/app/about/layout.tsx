import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about Lagos State Parastatals Monitoring Office, our vision, mission, mandate, and organizational structure.',
  keywords: ['About PMO', 'Mission', 'Vision', 'Mandate', 'THEMES+', 'Lagos State'],
  url: 'https://pmo.lagosstate.gov.ng/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
