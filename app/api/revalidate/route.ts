import { NextRequest, NextResponse } from "next/server"
import { revalidatePath, revalidateTag } from "next/cache"

/**
 * Next.js Revalidation API Route (App Router)
 * Used as a Webhook endpoint from Contentful, or manually via browser GET requests.
 *
 * Supports:
 * 1. Explicit path revalidation: /api/revalidate?path=/gallery&secret=xxx
 * 2. Explicit tag revalidation: /api/revalidate?tag=event&secret=xxx
 * 3. Automated Contentful webhook body parsing to revalidate based on changed content type.
 */
async function handleRevalidate(request: NextRequest) {
  try {
    // 1. Verify Secret Token
    const { searchParams } = new URL(request.url)
    const secretQuery = searchParams.get("secret")
    const secretHeader = request.headers.get("x-revalidate-secret")
    const incomingSecret = secretQuery || secretHeader

    const configuredSecret = process.env.REVALIDATE_SECRET?.trim()

    // If a secret is configured in env, we must validate it
    if (configuredSecret && incomingSecret !== configuredSecret) {
      return NextResponse.json({ message: "Invalid secret token" }, { status: 401 })
    }

    // 2. Check for manual query params
    const manualPath = searchParams.get("path")
    const manualTag = searchParams.get("tag")

    if (manualPath) {
      revalidatePath(manualPath)
      return NextResponse.json({ revalidated: true, path: manualPath, now: Date.now() })
    }

    if (manualTag) {
      revalidateTag(manualTag, "default")
      return NextResponse.json({ revalidated: true, tag: manualTag, now: Date.now() })
    }

    // 3. Automated Contentful Webhook handling
    let body: any = null
    if (request.method === "POST") {
      try {
        body = await request.json()
      } catch (e) {
        // Body is not JSON, ignore
      }
    }

    if (body) {
      const contentType = body.sys?.contentType?.sys?.id
      const entryId = body.sys?.id

      if (contentType) {
        // Revalidate by Contentful Content Type Tag
        revalidateTag(contentType, "default")

        // Route mapping based on content models
        switch (contentType.toLowerCase()) {
          case "event":
          case "gallery":
          case "galleryandevents":
            revalidateTag("events", "default")
            revalidateTag("galleryandevents", "default")
            revalidatePath("/gallery")
            revalidatePath("/")
            break
          case "facility":
            revalidatePath("/academics")
            break
          case "leadership":
          case "about":
            revalidatePath("/about")
            revalidatePath("/")
            break
          default:
            // Fallback: Revalidate all core pages and data tags
            revalidateTag("events", "default")
            revalidateTag("galleryandevents", "default")
            revalidatePath("/")
            revalidatePath("/about")
            revalidatePath("/academics")
            revalidatePath("/gallery")
            revalidatePath("/contact")
            break
        }

        return NextResponse.json({
          revalidated: true,
          type: "webhook",
          contentType,
          entryId,
          now: Date.now()
        })
      }
    }

    // Generic fallback if no specific path or webhook contentType was resolved
    revalidatePath("/")
    return NextResponse.json({
      revalidated: true,
      message: "Fallback path revalidated",
      now: Date.now()
    })

  } catch (error: any) {
    return NextResponse.json(
      { message: "Revalidation failed", error: error.message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  return handleRevalidate(request)
}

export async function POST(request: NextRequest) {
  return handleRevalidate(request)
}
