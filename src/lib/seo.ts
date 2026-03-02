import type { Metadata } from 'next';

const baseUrl = 'https://pmo.lagosstate.gov.ng';

export interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  url?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  noIndex?: boolean;
}

export function generateMetadata(props: SEOMetadataProps): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = '/images/og-image.jpg',
    ogType = 'website',
    url = baseUrl,
    author,
    publishedDate,
    modifiedDate,
    noIndex = false,
  } = props;

  const fullTitle = `${title} | PMO Lagos`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: [
      'PMO',
      'Lagos State',
      'Parastatals',
      'Monitoring',
      'Governance',
      ...keywords,
    ],
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      type: ogType,
      locale: 'en_NG',
      url,
      title: fullTitle,
      description,
      siteName: 'PMO Lagos',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
      ...(publishedDate && { publishedTime: publishedDate }),
      ...(modifiedDate && { modifiedTime: modifiedDate }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@PMOLagos',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lagos State Parastatals Monitoring Office',
    alternateName: 'PMO Lagos',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.jpeg`,
    description: 'Lagos State Parastatals Monitoring Office ensures that state agencies and government-owned companies operate in line with administrative and financial guidelines.',
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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+234-1-XXXX-XXXX',
      email: 'info@pmo.gov.ng',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generatePageSchema(props: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
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
    ...(props.author && {
      author: {
        '@type': 'Organization',
        name: props.author,
      },
    }),
  };
}
