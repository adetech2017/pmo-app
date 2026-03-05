'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
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
        backgroundColor="bg-linear-to-r from-blue-700 via-blue-600 to-blue-800"
        height="md"
      />

      {/* Upcoming Events Section */}
      <Section bgColor="white">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-3">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Join us for seminars, workshops, and strategic forums
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group cursor-pointer transition-all duration-300"
            >
              <Card className={`flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                event.featured
                  ? 'border-2 border-blue-600 lg:scale-105 origin-center'
                  : ''
              }`}>
                {/* Featured Badge */}
                {event.featured && (
                  <div className="flex justify-center -mt-3 relative z-10">
                    <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Featured Event
                    </div>
                  </div>
                )}

                <CardHeader className="pt-6">
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="grow">
                  <CardDescription className="text-gray-600 mb-6 line-clamp-3">
                    {event.description}
                  </CardDescription>

                  {/* Event Details */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                      <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                        <FaCalendarAlt className="text-blue-600 w-4 h-4" />
                      </div>
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                      <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                        <FaClock className="text-blue-600 w-4 h-4" />
                      </div>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                      <div className="shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <FaMapMarkerAlt className="text-blue-600 w-4 h-4" />
                      </div>
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="border-t border-gray-100 pt-4">
                  <Link href={`/events/${event.slug}`} className="w-full">
                    <Button
                      variant="primary"
                      className={`w-full font-semibold transition-all transform hover:scale-105 ${
                        event.featured ? 'bg-blue-600 hover:bg-blue-700' : ''
                      }`}
                    >
                      View Details →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Past Events Section */}
      <Section bgColor="gray">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">
            Recent Past Events
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Celebrating our successful seminars and forums
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              className="group cursor-pointer transition-all duration-300"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-gray-300 hover:border-l-blue-600">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 p-1">
                  <div className="grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-3 text-gray-600">
                        <FaCalendarAlt className="text-blue-600 w-4 h-4 shrink-0" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <FaMapMarkerAlt className="text-blue-600 w-4 h-4 shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg text-xs font-bold">
                      ✓ Completed
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-800">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated on Our Events
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Subscribe to our newsletter to receive updates about upcoming events,
            seminars, and workshops directly to your inbox.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-50 font-semibold transform hover:scale-105 transition-all shadow-lg"
          >
            Subscribe Now
          </Button>
        </div>
      </Section>
    </>
  );
}
