import { GraphQLClient } from "graphql-request"

const spaceId = process.env.CONTENTFUL_SPACE_ID?.trim()
const accessToken = process.env.CONTENT_DELIVERY_API_ACCESS_TOKEN?.trim()
const previewToken = process.env.CONTENT_PREVIEW_API?.trim()

if (!spaceId) {
  throw new Error("Missing CONTENTFUL_SPACE_ID environment variable")
}

if (!accessToken) {
  throw new Error("Missing CONTENT_DELIVERY_API_ACCESS_TOKEN environment variable")
}

/**
 * Returns a GraphQLClient initialized for Contentful GraphQL API.
 * Handles preview mode if the `preview` parameter is true.
 *
 * @param preview Boolean indicating whether to query from the preview API (draft content)
 */
export function getContentfulClient(preview = false) {
  const token = preview ? (previewToken || accessToken) : accessToken
  const environment = process.env.CONTENTFUL_ENVIRONMENT?.trim() || "master"
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

/**
 * Helper function to query Contentful GraphQL API.
 * Automatically trims values and makes a query request.
 *
 * @param query The GraphQL query string
 * @param variables Optional variables for the query
 * @param preview Boolean indicating whether to query draft content
 * @param fetchOptions Next.js fetch options for caching (tags, revalidate)
 */
export async function contentfulRequest<T>(
  query: string,
  variables?: Record<string, any>,
  preview = false,
  fetchOptions?: { next?: { tags?: string[]; revalidate?: number } }
): Promise<T> {
  const token = preview ? (previewToken || accessToken) : accessToken
  const environment = process.env.CONTENTFUL_ENVIRONMENT?.trim() || "master"
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
    ...(fetchOptions ? { next: fetchOptions.next } : {}),
  })

  if (!res.ok) {
    const errorBody = await res.text()
    throw new Error(`Contentful request failed (${res.status}): ${errorBody}`)
  }

  const json = await res.json()

  if (json.errors) {
    throw new Error(`Contentful GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data as T
}
