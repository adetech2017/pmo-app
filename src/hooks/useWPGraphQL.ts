// Custom Hook for WPGraphQL Data Fetching

import { useState, useEffect } from 'react';

interface UseWPGraphQLReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Custom hook for fetching data from WPGraphQL
 * @param query - GraphQL query string
 * @param variables - Query variables
 * @returns Object with data, loading, and error states
 */
export function useWPGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
): UseWPGraphQLReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://your-wordpress-site.com/graphql';

        const response = await fetch(endpoint, {
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

        const result = await response.json();

        if (result.errors) {
          throw new Error(result.errors[0].message || 'GraphQL Error');
        }

        setData(result.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, variables]);

  return { data, loading, error };
}
