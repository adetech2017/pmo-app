import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Events',
  description: 'Discover upcoming and past events organized by Lagos State Parastatals Monitoring Office. Join us for workshops, conferences, and seminars.',
  keywords: ['Events', 'Workshops', 'Conferences', 'Seminars', 'PMO Events'],
  url: 'https://pmo.lagosstate.gov.ng/events',
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
