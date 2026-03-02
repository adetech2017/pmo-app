// GraphQL Queries for PMO Website
// These queries fetch data from WordPress via WPGraphQL

import { gql } from '@apollo/client';

// Query for fetching news/posts
export const GET_NEWS = gql`
  query GetNews($first: Int = 6) {
    posts(first: $first) {
      edges {
        node {
          id
          title
          slug
          excerpt
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// Query for fetching events (custom post type)
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 6) {
    events(first: $first) {
      edges {
        node {
          id
          title
          slug
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// Query for fetching team members (custom post type)
export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 20) {
    teamMembers(first: $first) {
      edges {
        node {
          id
          title
          content
          acfTeamMember {
            position
            email
            phoneNumber
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// Query for fetching programmes
export const GET_PROGRAMMES = gql`
  query GetProgrammes($first: Int = 10) {
    programmes(first: $first) {
      edges {
        node {
          id
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// Query for fetching a single post by slug
export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      excerpt
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// Query for fetching a single event by slug
export const GET_EVENT_BY_SLUG = gql`
  query GetEventBySlug($slug: String!) {
    eventBy(slug: $slug) {
      id
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// Query for fetching pages (e.g., About page)
export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// Query for site settings
export const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    generalSettings {
      title
      description
      url
    }
  }
`;
