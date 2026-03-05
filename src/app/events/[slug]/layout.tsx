import type { Metadata } from 'next';

// Mock events data for metadata generation
const allEvents = [
  {
    id: '1',
    title: 'PARAFACE',
    slug: 'paraface',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'PMO Conference Center, Ikeja',
    description: 'Parastatals Interface - A forum for parastatals heads and stakeholders.',
  },
  {
    id: '2',
    title: 'Submit',
    slug: 'submit',
    date: '2024-03-22',
    time: '9:00 AM',
    location: 'Lekki Business Hub, Lagos',
    description: 'Strategic Submission and Monitoring Initiative for Better Enterprise Transformation.',
  },
  {
    id: '3',
    title: 'PARGEM',
    slug: 'pargem',
    date: '2024-04-05',
    time: '2:00 PM',
    location: 'Victoria Island Conference Center',
    description: 'Parastatals Revenue Generating Meeting.',
  },
  {
    id: '4',
    title: 'Parley',
    slug: 'parley',
    date: '2024-04-12',
    time: '10:00 AM',
    location: 'PMO Training Institute',
    description: 'Parastatals Leadership Engagement and Yearly forum.',
  },
  {
    id: '5',
    title: '"I Am Alive" Sensitization Programme',
    slug: 'i-am-alive',
    date: '2024-04-25',
    time: '6:00 PM',
    location: 'Eko Hotel and Suites, Victoria Island',
    description: 'Sensitization programme on Pension Verification Exercise.',
  },
  {
    id: '6',
    title: "CEO's Retreat",
    slug: 'ceos-retreat',
    date: '2025-12-15',
    time: '9:00 AM',
    location: 'PMO Leadership Center',
    description: 'Executive leadership retreat for strategic planning and organizational alignment.',
  },
  {
    id: '7',
    title: 'Lagos State - Federal Summit',
    slug: 'lagos-federal-summit',
    date: '2025-11-20',
    time: '10:00 AM',
    location: 'Lagos State Convention Center',
    description: 'Summit bringing together Lagos State and Federal government stakeholders for collaborative governance.',
  },
  {
    id: '8',
    title: 'Workshop on Improving Work Ethics in the Workplace',
    slug: 'work-ethics-workshop',
    date: '2025-10-18',
    time: '8:30 AM',
    location: 'PMO Training Institute',
    description: 'Workshop on Improving Work Ethics in the Workplace Through Employee Wellness and Resilience Initiatives in Parastatals/Agencies for Management Staff.',
  },
  {
    id: '9',
    title: 'Knowledge Sharing Session for Heads of Finance',
    slug: 'finance-knowledge-sharing',
    date: '2025-09-22',
    time: '2:00 PM',
    location: 'PMO Conference Center',
    description: 'Knowledge Sharing Session for Heads of Finance and Accounts/Revenue Officers of Parastatals, Agencies & Government-Owned Companies.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = allEvents.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The event you are looking for does not exist.',
    };
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    title: `${event.title} - PMO Events`,
    description: event.description,
    keywords: ['events', 'seminars', 'workshops', event.title, 'PMO'],
    openGraph: {
      title: event.title,
      description: event.description,
      url: `/events/${slug}`,
      type: 'article',
      publishedTime: event.date,
    },
  };
}

export function generateStaticParams() {
  return allEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
