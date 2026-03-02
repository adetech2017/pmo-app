import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Programmes',
  description: 'Discover PMO programmes and initiatives designed to enhance governance, performance audits, compliance monitoring, and staff development.',
  keywords: ['Programmes', 'Initiatives', 'Performance Audit', 'Compliance', 'Development', 'Training'],
  url: 'https://pmo.lagosstate.gov.ng/programmes',
});

export default function ProgrammesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
