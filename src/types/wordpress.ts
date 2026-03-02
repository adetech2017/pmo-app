// WordPress/WPGraphQL Types

export interface WPGraphQLPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author?: {
    node: {
      name: string;
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface WPGraphQLPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface WPGraphQLNode {
  node: WPGraphQLPost;
}

export interface WPGraphQLResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
  }>;
}

export interface WPGraphQLEdges<T> {
  edges: Array<{
    node: T;
  }>;
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
}
