// API Client Helper Functions

const WORDPRESS_ENDPOINT = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://your-wordpress-site.com/graphql';

// Simple fetch wrapper for GraphQL requests
export async function fetchFromWPGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  try {
    const response = await fetch(WORDPRESS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      throw new Error(`GraphQL Error: ${data.errors[0].message}`);
    }

    return data.data as T;
  } catch (error) {
    console.error('Failed to fetch from WPGraphQL:', error);
    throw error;
  }
}

// Utility function to extract excerpt from HTML content
export function stripHtmlTags(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

// Utility function to get excerpt from content
export function getExcerpt(content: string, length: number = 150): string {
  const stripped = stripHtmlTags(content);
  if (stripped.length <= length) return stripped;
  return stripped.substring(0, length) + '...';
}

// Utility function to format date
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility function to format relative time (e.g., "2 days ago")
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffSecs < 60) return 'Just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
  if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;

  return formatDate(dateString);
}
