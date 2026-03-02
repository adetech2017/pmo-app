import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Gallery',
  description: 'Explore our visual gallery showcasing PMO activities, events, offices, and team members. Browse our collection of photos from various PMO initiatives.',
  keywords: ['Gallery', 'Photos', 'Images', 'Activities', 'Events', 'Office'],
  url: 'https://pmo.lagosstate.gov.ng/gallery',
  ogImage: '/images/1.jpg',
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
