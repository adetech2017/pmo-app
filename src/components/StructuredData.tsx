import React from 'react';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

export const OrganizationSchema = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lagos State Parastatals Monitoring Office',
    alternateName: 'PMO Lagos',
    url: 'https://pmo.lagosstate.gov.ng',
    logo: 'https://pmo.lagosstate.gov.ng/images/logo.jpeg',
    description:
      'Lagos State Parastatals Monitoring Office ensures that state agencies and government-owned companies operate in line with administrative and financial guidelines.',
    sameAs: [
      'https://twitter.com/PMOLagos',
      'https://linkedin.com/company/pmo-lagos',
      'https://facebook.com/PMOLagos',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Parastatals House',
      addressLocality: 'Ikeja',
      addressRegion: 'Lagos State',
      postalCode: '100211',
      addressCountry: 'NG',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+234-1-XXXX-XXXX',
        email: 'info@pmo.gov.ng',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Support',
        telephone: '+234-1-YYYY-YYYY',
        email: 'inquiries@pmo.gov.ng',
      },
    ],
  };

  return <StructuredData data={data} />;
};

export const WebPageSchema = (props: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
}) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: props.title,
    description: props.description,
    url: props.url,
    ...(props.imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: props.imageUrl,
        width: 1200,
        height: 630,
      },
    }),
    ...(props.datePublished && { datePublished: props.datePublished }),
    ...(props.dateModified && { dateModified: props.dateModified }),
  };

  return <StructuredData data={data} />;
};

export const BreadcrumbSchema = (props: {
  items: { name: string; url: string }[];
}) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: props.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://pmo.lagosstate.gov.ng${item.url}`,
    })),
  };

  return <StructuredData data={data} />;
};
