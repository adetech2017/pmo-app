// GraphQL Client Configuration
// This file sets up Apollo Client for WPGraphQL integration

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Configuration: Update this with your WordPress WPGraphQL endpoint
const WORDPRESS_ENDPOINT = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://your-wordpress-site.com/graphql';

const httpLink = new HttpLink({
  uri: WORDPRESS_ENDPOINT,
  credentials: 'include', // Include cookies if needed for authenticated requests
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});

export default client;
