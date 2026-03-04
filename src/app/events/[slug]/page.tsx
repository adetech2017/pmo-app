'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle } from '@/components/Section';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import Button from '@/components/Button';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaArrowLeft, FaShare, FaDownload } from 'react-icons/fa';

// Mock events data - would come from WPGraphQL in production
const allEvents = [
  {
    id: '1',
    title: 'Paraface',
    slug: 'paraface',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'PMO Conference Center, Ikeja',
    description: 'Parastatals Facility Conference - A forum for parastatals heads and stakeholders.',
    fullContent: `The Parastatals Facility Conference (Paraface) is a premier gathering of heads and senior officials of state-owned enterprises. This comprehensive forum provides a platform for discussing critical issues affecting the parastatal sector, sharing best practices, and fostering collaboration among participating agencies.

The conference agenda includes keynote addresses from industry experts, panel discussions on governance and performance improvement, and networking sessions. Topics covered include:

- Strategic Planning and Execution
- Financial Management and Accountability
- Organizational Performance Metrics
- Stakeholder Engagement and Communication
- Risk Management and Compliance

Participants will gain insights into the latest trends in parastatal management and have the opportunity to network with peers from other organizations.`,
    featured: true,
    agenda: [
      { time: '08:00 - 09:00 AM', title: 'Registration & Refreshments' },
      { time: '09:00 - 09:30 AM', title: 'Opening Remarks' },
      { time: '09:30 - 11:00 AM', title: 'Keynote Address: Future of Parastatals' },
      { time: '11:00 - 11:15 AM', title: 'Coffee Break' },
      { time: '11:15 - 01:00 PM', title: 'Panel Discussion: Governance & Performance' },
      { time: '01:00 - 02:00 PM', title: 'Lunch Break' },
      { time: '02:00 - 03:30 PM', title: 'Breakout Sessions' },
      { time: '03:30 - 05:00 PM', title: 'Networking Reception' },
    ],
  },
  {
    id: '2',
    title: 'Submit',
    slug: 'submit',
    date: '2024-03-22',
    time: '9:00 AM',
    location: 'Lekki Business Hub, Lagos',
    description: 'Strategic Submission and Monitoring Initiative for Better Enterprise Transformation.',
    fullContent: `The Strategic Submission and Monitoring Initiative for Better Enterprise Transformation (SUBMIT) is designed to enhance the operational capacity and performance of state-owned enterprises through strategic monitoring and targeted interventions.

This initiative focuses on:

- Performance assessment and benchmarking
- Capacity building and skill development
- Process improvement and optimization
- Technology adoption and digital transformation
- Stakeholder coordination and collaboration

The program combines theoretical training with practical case studies from leading organizations in the parastatal sector.`,
    featured: true,
    agenda: [
      { time: '08:30 - 09:00 AM', title: 'Registration' },
      { time: '09:00 - 10:00 AM', title: 'Program Overview' },
      { time: '10:00 - 12:00 PM', title: 'Module 1: Strategic Monitoring' },
      { time: '12:00 - 01:00 PM', title: 'Lunch' },
      { time: '01:00 - 03:00 PM', title: 'Module 2: Enterprise Transformation' },
      { time: '03:00 - 03:15 PM', title: 'Break' },
      { time: '03:15 - 04:30 PM', title: 'Q&A and Discussion' },
    ],
  },
  {
    id: '3',
    title: 'Pargem',
    slug: 'pargem',
    date: '2024-04-05',
    time: '2:00 PM',
    location: 'Victoria Island Conference Center',
    description: 'Parastatals Governance and Excellence Management program.',
    fullContent: `The Parastatals Governance and Excellence Management (Pargem) program is a comprehensive training initiative designed to equip parastatal leaders with the knowledge and skills necessary to achieve organizational excellence.

The program covers:

- Corporate Governance Principles
- Excellence Management Frameworks
- Leadership Development
- Strategic Human Resource Management
- Innovation and Continuous Improvement

Participants will engage with international best practices and learn from experienced practitioners in the field.`,
    featured: false,
    agenda: [
      { time: '01:00 - 02:00 PM', title: 'Registration & Welcome' },
      { time: '02:00 - 03:30 PM', title: 'Governance Framework' },
      { time: '03:30 - 04:00 PM', title: 'Break' },
      { time: '04:00 - 05:30 PM', title: 'Excellence Management' },
      { time: '05:30 - 06:00 PM', title: 'Closing Session' },
    ],
  },
  {
    id: '4',
    title: 'Parley',
    slug: 'parley',
    date: '2024-04-12',
    time: '10:00 AM',
    location: 'PMO Training Institute',
    description: 'Parastatals Leadership Engagement and Yearly forum.',
    fullContent: `The Parastatals Leadership Engagement and Yearly forum (Parley) brings together senior leaders from across the parastatal sector for strategic discussions and collaborative planning.

Key topics include:
- Sectoral Performance Review
- Strategic Priorities for the Year
- Emerging Challenges and Solutions
- Cross-sectoral Collaboration
- Leadership Excellence`,
    featured: false,
    agenda: [
      { time: '09:00 - 10:00 AM', title: 'Registration & Breakfast' },
      { time: '10:00 - 11:30 AM', title: 'Sectoral Performance Review' },
      { time: '11:30 - 01:00 PM', title: 'Strategic Priorities Discussion' },
      { time: '01:00 - 02:00 PM', title: 'Lunch' },
      { time: '02:00 - 03:30 PM', title: 'Group Discussions' },
    ],
  },
  {
    id: '5',
    title: 'I am alive',
    slug: 'i-am-alive',
    date: '2024-04-25',
    time: '6:00 PM',
    location: 'Eko Hotel and Suites, Victoria Island',
    description: 'Annual Impact and Livelihood Enhancement Initiative for Ventures and Enterprises.',
    fullContent: `The Annual Impact and Livelihood Enhancement Initiative for Ventures and Enterprises (I AM ALIVE) celebrates the achievements of parastatals in creating positive social and economic impact.

This annual gala event features:
- Recognition of outstanding performers
- Impact stories and case studies
- Networking among parastatal leaders
- Entertainment and awards ceremony
- Strategic vision for the coming year`,
    featured: true,
    agenda: [
      { time: '05:30 - 06:00 PM', title: 'Welcome Reception' },
      { time: '06:00 - 07:00 PM', title: 'Dinner & Cocktails' },
      { time: '07:00 - 08:00 PM', title: 'Awards & Recognition' },
      { time: '08:00 - 09:00 PM', title: 'Entertainment' },
    ],
  },
];

interface AgendaItem {
  time: string;
  title: string;
}

interface Event {
  id: string;
  title: string;
  slug: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullContent: string;
  featured?: boolean;
  agenda: AgendaItem[];
}

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const event = allEvents.find((e) => e.slug === slug) as Event | undefined;
  const [isRegistered, setIsRegistered] = useState(false);

  if (!event) {
    return (
      <>
        <Hero
          title="Event Not Found"
          subtitle="The event you're looking for doesn't exist"
          backgroundColor="bg-gradient-to-r from-red-700 to-red-800"
          height="md"
        />
        <Section bgColor="white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sorry, we couldn't find this event
            </h2>
            <p className="text-gray-600 mb-8">
              The event you're looking for may have been removed or is no longer available.
            </p>
            <Button variant="primary" onClick={() => window.history.back()}>
              <FaArrowLeft className="mr-2" />
              Go Back
            </Button>
          </div>
        </Section>
      </>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={event.title}
        subtitle={event.description}
        backgroundColor="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800"
        height="md"
      />

      {/* Main Content */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold"
          >
            <FaArrowLeft size={16} />
            Back to Events
          </button>

          {/* Event Details Card */}
          <Card className={`mb-8 ${event.featured ? 'border-2 border-blue-600' : ''}`}>
            <CardContent className="p-8">
              {event.featured && (
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Event
                </div>
              )}

              {/* Event Header Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaCalendarAlt className="text-blue-600 text-lg" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                      <p className="text-lg font-semibold text-gray-900">{formatDate(event.date)}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaClock className="text-blue-600 text-lg" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Time</p>
                      <p className="text-lg font-semibold text-gray-900">{event.time}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                      <p className="text-lg font-semibold text-gray-900">{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Content */}
              <div className="prose prose-sm max-w-none mb-8">
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {event.fullContent}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsRegistered(!isRegistered)}
                  className="flex-1"
                >
                  {isRegistered ? '✓ Registered' : 'Register Now'}
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                  <FaShare size={16} />
                  Share
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                  <FaDownload size={16} />
                  Download Details
                </Button>
              </div>

              {/* Success Message */}
              {isRegistered && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                  <p className="text-green-800">
                    Thank you for registering! A confirmation email has been sent to your inbox.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Event Agenda */}
          {event.agenda && event.agenda.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item: AgendaItem, index: number) => (
                    <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
                      <div className="min-w-35">
                        <p className="font-semibold text-blue-600 text-sm">{item.time}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>

      {/* Related Events Section */}
      <Section bgColor="gray">
        <SectionTitle center>Other Upcoming Events</SectionTitle>
        <SectionSubtitle center>
          Check out our other scheduled events
        </SectionSubtitle>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents
            .filter((e) => e.id !== event.id)
            .slice(0, 3)
            .map((relatedEvent) => (
              <Card
                key={relatedEvent.id}
                className="flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  window.location.href = `/events/${relatedEvent.slug}`;
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{relatedEvent.title}</CardTitle>
                </CardHeader>
                <CardContent className="grow">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-blue-600 w-4 h-4" />
                      <span>{formatDate(relatedEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-blue-600 w-4 h-4" />
                      <span className="line-clamp-2">{relatedEvent.location}</span>
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 pt-0">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    View Event →
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </Section>
    </>
  );
}
