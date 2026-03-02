import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Lagos State Parastatals Monitoring Office. Find our contact information, office address, phone numbers, and email addresses.',
  keywords: ['Contact', 'Office Address', 'Phone', 'Email', 'Support'],
  url: 'https://pmo.lagosstate.gov.ng/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
