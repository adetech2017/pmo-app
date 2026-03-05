'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle, SectionGrid } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/Card';
import Button from '@/components/Button';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function EventsPage() {
  // Mock events data - In production, this would come from WPGraphQL
  const upcomingEvents = [
    {
      id: '1',
      title: 'PARAFACE',
      slug: 'paraface',
      date: '2026-03-15',
      time: '10:00 AM',
      location: 'PMO Conference Center, Ikeja',
      description: 'Parastatals Interface - A forum for parastatals heads and stakeholders.',
      featured: true,
    },
    {
      id: '2',
      title: 'Submit',
      slug: 'submit',
      date: '2026-03-22',
      time: '9:00 AM',
      location: 'Lekki Business Hub, Lagos',
      description: 'Strategic Submission and Monitoring Initiative for Better Enterprise Transformation.',
      featured: true,
    },
    {
      id: '3',
      title: 'PARGEM',
      slug: 'pargem',
      date: '2026-04-05',
      time: '2:00 PM',
      location: 'Victoria Island Conference Center',
      description: 'Parastatals Revenue Generating Meeting.',
      featured: false,
    },
    {
      id: '4',
      title: 'Parley',
      slug: 'parley',
      date: '2026-04-12',
      time: '10:00 AM',
      location: 'PMO Training Institute',
      description: 'Parastatals Leadership Engagement and Yearly forum.',
      featured: false,
    },
    {
      id: '5',
      title: '"I Am Alive" Sensitization Programme',
      slug: 'i-am-alive',
      date: '2026-04-25',
      time: '6:00 PM',
      location: 'Eko Hotel and Suites, Victoria Island',
      description: 'Sensitization programme on Pension Verification Exercise.',
      featured: true,
    },
  ];

  const pastEvents = [
    {
      id: '6',
      title: "CEO's Retreat",
      slug: 'ceos-retreat',
      date: '2025-12-15',
      location: 'PMO Leadership Center',
      description: 'Executive leadership retreat for strategic planning and organizational alignment.',
    },
    {
      id: '7',
      title: 'Lagos State - Federal Summit',
      slug: 'lagos-federal-summit',
      date: '2025-11-20',
      location: 'Lagos State Convention Center',
      description: 'Summit bringing together Lagos State and Federal government stakeholders for collaborative governance.',
    },
    {
      id: '8',
      title: 'Workshop on Improving Work Ethics in the Workplace',
      slug: 'work-ethics-workshop',
      date: '2025-10-18',
      location: 'PMO Training Institute',
      description: 'Workshop on Improving Work Ethics in the Workplace Through Employee Wellness and Resilience Initiatives in Parastatals/Agencies for Management Staff.',
    },
    {
      id: '9',
      title: 'Knowledge Sharing Session for Heads of Finance',
      slug: 'finance-knowledge-sharing',
      date: '2025-09-22',
      location: 'PMO Conference Center',
      description: 'Knowledge Sharing Session for Heads of Finance and Accounts/Revenue Officers of Parastatals, Agencies & Government-Owned Companies.',
    },
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Events"
        subtitle="Seminars, Workshops, and Engagement Programs"
        backgroundColor="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800"
        height="md"
      />

      {/* Upcoming Events Section */}
      <Section bgColor="white">
        <SectionTitle center>Upcoming Events</SectionTitle>
        <SectionSubtitle center>
          Join us for seminars, workshops, and strategic forums
        </SectionSubtitle>

        <SectionGrid cols={3}>
          {upcomingEvents.map((event) => (
            <Card key={event.id} className={`flex flex-col h-full ${event.featured ? 'border-2 border-blue-600' : ''}`}>
              {event.featured && (
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full inline-block text-xs font-semibold mb-3 w-fit">
                  Featured Event
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="grow">
                <CardDescription className="mb-4">{event.description}</CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-blue-600 w-4 h-4 shrink-0" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-blue-600 w-4 h-4 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-600 w-4 h-4 shrink-0 mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/events/${event.slug}`} className="w-full">
                  <Button variant="primary" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* Past Events Section */}
      <Section bgColor="white">
        <SectionTitle center>Recent Past Events</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-4">
          {pastEvents.map((event) => (
            <Card key={event.id}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{event.description}</p>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-600 w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-600 w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="blue">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Our Events
          </h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events,
            seminars, and workshops.
          </p>
          <Button variant="primary" size="lg">
            Subscribe Now
          </Button>
        </div>
      </Section>
    </>
  );
}
