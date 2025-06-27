import { gql, GraphQLClient } from "graphql-request"

const hygraphClient = new GraphQLClient(
    process.env.HYGRAPH_API_URL || "https://eu-west-2.cdn.hygraph.com/content/cmbqefdwd006g07uyhl9udvav/master",
)

// Updated GraphQL queries to match your exact schema
export const GET_ALL_POSTS = gql`
  query GetAllPosts($first: Int, $skip: Int) {
    blogPosts(first: $first, skip: $skip, orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      content {
        html
      }
      readingTime
      category {
        title
        categoryColor {
          hex
        }
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
        title
      }
      featured
      publishedAt
    }
    blogPostsConnection {
      aggregate {
        count
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    blogPost(where: { slug: $slug }) {
      id
      title
      slug
      excerpt
      content {
        html
      }
      readingTime
      category {
        title
        categoryColor {
          hex
        }
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
        title
      }
      featured
      publishedAt
    }
  }
`

// Updated featured posts query - removed the where clause to avoid type issues
export const GET_FEATURED_POSTS = gql`
  query GetFeaturedPosts {
    blogPosts(first: 10, orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      readingTime
      category {
        title
        categoryColor {
          hex
        }
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
        title
      }
      featured
      publishedAt
    }
  }
`

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($categoryTitle: String!, $first: Int, $skip: Int) {
    blogPosts(
      where: { category: { title: $categoryTitle } }
      first: $first
      skip: $skip
      orderBy: publishedAt_DESC
    ) {
      id
      title
      slug
      excerpt
      readingTime
      category {
        title
        categoryColor {
          hex
        }
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
        title
      }
      featured
      publishedAt
    }
  }
`

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      title
      categoryColor {
        hex
      }
    }
  }
`

// Fixed search query - removed content search and simplified structure
export const SEARCH_POSTS = gql`
  query SearchPosts($searchTerm: String!, $first: Int, $skip: Int) {
    blogPosts(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { excerpt_contains: $searchTerm }
          { author: { name_contains: $searchTerm } }
        ]
      }
      first: $first
      skip: $skip
      orderBy: publishedAt_DESC
    ) {
      id
      title
      slug
      excerpt
      readingTime
      category {
        title
        categoryColor {
          hex
        }
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
        title
      }
      featured
      publishedAt
    }
  }
`

// Alternative search approach - get all posts and filter client-side
export const GET_ALL_POSTS_FOR_SEARCH = gql`
  query GetAllPostsForSearch {
    blogPosts(orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      content {
        html
      }
      readingTime
      category {
        title
        categoryColor {
          hex
        }
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
        title
      }
      featured
      publishedAt
    }
  }
`

// API functions
export async function getAllPosts(first = 50, skip = 0) {
    try {
        const data = await hygraphClient.request(GET_ALL_POSTS, { first, skip })
        return {
            posts: data.blogPosts || [],
            totalCount: data.blogPostsConnection?.aggregate?.count || 0,
        }
    } catch (error) {
        console.error("Error fetching posts:", error)
        return { posts: [], totalCount: 0 }
    }
}

export async function getPostBySlug(slug: string) {
    try {
        const data = await hygraphClient.request(GET_POST_BY_SLUG, { slug })
        return data.blogPost
    } catch (error) {
        console.error("Error fetching post by slug:", error)
        return null
    }
}

// Updated getFeaturedPosts to filter client-side
export async function getFeaturedPosts() {
    try {
        const data = await hygraphClient.request(GET_FEATURED_POSTS)
        const allPosts = data.blogPosts || []

        // Filter featured posts client-side to handle different data types
        const featuredPosts = allPosts.filter((post) => {
            // Handle different possible values for featured field
            if (typeof post.featured === "boolean") {
                return post.featured === true
            }
            if (typeof post.featured === "number") {
                return post.featured > 0 // Treat any positive number as featured
            }
            if (typeof post.featured === "string") {
                return post.featured.toLowerCase() === "true" || post.featured === "1"
            }
            return false
        })

        return featuredPosts.slice(0, 3) // Return max 3 featured posts
    } catch (error) {
        console.error("Error fetching featured posts:", error)
        return []
    }
}

export async function getPostsByCategory(categoryTitle: string, first = 20, skip = 0) {
    try {
        const data = await hygraphClient.request(GET_POSTS_BY_CATEGORY, {
            categoryTitle,
            first,
            skip,
        })
        return data.blogPosts || []
    } catch (error) {
        console.error("Error fetching posts by category:", error)
        return []
    }
}

export async function getCategories() {
    try {
        const data = await hygraphClient.request(GET_CATEGORIES)
        return data.categories || []
    } catch (error) {
        console.error("Error fetching categories:", error)
        return []
    }
}

// Updated search function with fallback to client-side filtering
export async function searchPosts(searchTerm: string, first = 20, skip = 0) {
    try {
        // Try server-side search first (without content search)
        const data = await hygraphClient.request(SEARCH_POSTS, {
            searchTerm,
            first,
            skip,
        })
        return data.blogPosts || []
    } catch (error) {
        console.error("Server-side search failed, falling back to client-side search:", error)

        try {
            // Fallback: Get all posts and filter client-side
            const data = await hygraphClient.request(GET_ALL_POSTS_FOR_SEARCH)
            const allPosts = data.blogPosts || []

            // Client-side filtering
            const filteredPosts = allPosts.filter((post) => {
                const searchLower = searchTerm.toLowerCase()
                return (
                    post.title?.toLowerCase().includes(searchLower) ||
                    post.excerpt?.toLowerCase().includes(searchLower) ||
                    post.content?.html?.toLowerCase().includes(searchLower) ||
                    post.author?.name?.toLowerCase().includes(searchLower) ||
                    post.category?.title?.toLowerCase().includes(searchLower)
                )
            })

            // Apply pagination client-side
            return filteredPosts.slice(skip, skip + first)
        } catch (fallbackError) {
            console.error("Client-side search also failed:", fallbackError)
            return []
        }
    }
}

// Get all posts for client-side search
export async function getAllPostsForSearch() {
    try {
        const data = await hygraphClient.request(GET_ALL_POSTS_FOR_SEARCH)
        return data.blogPosts || []
    } catch (error) {
        console.error("Error fetching all posts for search:", error)
        return []
    }
}

// Debug function to check schema
export async function debugSchema() {
    const INTROSPECTION_QUERY = gql`
    query IntrospectionQuery {
      __schema {
        queryType {
          fields {
            name
            type {
              name
              kind
            }
          }
        }
      }
    }
  `

    try {
        const data = await hygraphClient.request(INTROSPECTION_QUERY)
        return data
    } catch (error) {
        console.error("Error debugging schema:", error)
        return null
    }
}
