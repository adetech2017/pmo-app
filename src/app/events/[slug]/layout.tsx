import type { Metadata } from 'next';

// Mock events data for metadata generation
const allEvents = [
  {
    id: '1',
    title: 'Paraface',
    slug: 'paraface',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'PMO Conference Center, Ikeja',
    description: 'Parastatals Facility Conference - A forum for parastatals heads and stakeholders.',
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
    title: 'Pargem',
    slug: 'pargem',
    date: '2024-04-05',
    time: '2:00 PM',
    location: 'Victoria Island Conference Center',
    description: 'Parastatals Governance and Excellence Management program.',
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
    title: 'I am alive',
    slug: 'i-am-alive',
    date: '2024-04-25',
    time: '6:00 PM',
    location: 'Eko Hotel and Suites, Victoria Island',
    description: 'Annual Impact and Livelihood Enhancement Initiative for Ventures and Enterprises.',
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
