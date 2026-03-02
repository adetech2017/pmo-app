// Global types for the PMO application

export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: string;
  slug: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  slug: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  email?: string;
}

export interface Programme {
  id: string;
  title: string;
  description: string;
  objectives?: string[];
  status: 'active' | 'completed' | 'upcoming';
}
