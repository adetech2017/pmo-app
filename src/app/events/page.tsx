'use client';

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
      title: 'Quarterly Performance Review Forum',
      date: '2024-03-15',
      time: '10:00 AM',
      location: 'PMO Conference Center, Ikeja',
      description: 'A forum to review the quarterly performance of parastatals and discuss improvement strategies.',
      featured: true,
    },
    {
      id: '2',
      title: 'Corporate Governance Workshop',
      date: '2024-03-22',
      time: '9:00 AM',
      location: 'Lekki Business Hub, Lagos',
      description: 'Comprehensive workshop on best practices in corporate governance for parastatal officials.',
      featured: true,
    },
    {
      id: '3',
      title: 'Financial Sustainability Seminar',
      date: '2024-04-05',
      time: '2:00 PM',
      location: 'Victoria Island Conference Center',
      description: 'Exploring strategies for achieving financial self-sufficiency in state enterprises.',
      featured: false,
    },
    {
      id: '4',
      title: 'Board Members Training Program',
      date: '2024-04-12',
      time: '10:00 AM',
      location: 'PMO Training Institute',
      description: 'Capacity building program for board members of state-owned enterprises.',
      featured: false,
    },
    {
      id: '5',
      title: 'Annual Performance Awards Ceremony',
      date: '2024-04-25',
      time: '6:00 PM',
      location: 'Eko Hotel and Suites, Victoria Island',
      description: 'Celebrating outstanding performance and achievements in the parastatal sector.',
      featured: true,
    },
    {
      id: '6',
      title: 'Stakeholder Engagement Meeting',
      date: '2024-05-10',
      time: '3:00 PM',
      location: 'Government House Annex',
      description: 'Interactive session with parastatals heads and government officials.',
      featured: false,
    },
  ];

  const pastEvents = [
    {
      id: '7',
      title: 'Internal Audit Refresher Course',
      date: '2024-02-20',
      location: 'PMO Training Institute',
      description: 'Training session on internal audit procedures and best practices.',
    },
    {
      id: '8',
      title: 'Monthly Parastatals Coordination Meeting',
      date: '2024-02-15',
      location: 'PMO Headquarters',
      description: 'Regular coordination meeting with heads of parastatals.',
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
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">{event.description}</CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-blue-600 w-4 h-4 flex-shrink-0" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-blue-600 w-4 h-4 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-600 w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="primary" className="w-full">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* Event Categories Section */}
      <Section bgColor="gray">
        <SectionTitle center>Types of Events</SectionTitle>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Workshops',
              description: 'Hands-on training sessions on governance, auditing, and management practices.',
            },
            {
              title: 'Seminars',
              description: 'Expert-led discussions on current issues in parastatal management.',
            },
            {
              title: 'Forums',
              description: 'Strategic meetings for performance review and stakeholder engagement.',
            },
            {
              title: 'Awards & Recognition',
              description: 'Celebrating outstanding achievements in the parastatal sector.',
            },
          ].map((eventType, index) => (
            <Card key={index}>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {eventType.title}
              </h3>
              <p className="text-gray-600 text-sm">{eventType.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Past Events Section */}
      <Section bgColor="white">
        <SectionTitle center>Recent Past Events</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-4">
          {pastEvents.map((event) => (
            <Card key={event.id}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-grow">
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
                <div className="flex-shrink-0">
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
          <Button variant="primary" size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            Subscribe Now
          </Button>
        </div>
      </Section>
    </>
  );
}
