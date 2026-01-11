export default async (request, context) => {
  const url = new URL(request.url)

  // Only split-test the homepage
  if (url.pathname !== "/") {
    return context.next()
  }

  // Check for existing variant cookie
  const cookie = request.headers.get("cookie") || ""
  const match = cookie.match(/ns_variant=(A|B)/)

  let variant

  if (match) {
    variant = match[1]
  } else {
    // 70% A / 30% B split
    variant = Math.random() < 0.7 ? "A" : "B"
  }

  // Serve the correct variant
  const response = variant === "A"
    ? await fetch(new URL("/index.html", url))
    : await fetch(new URL("/variant-b.html", url))

  // Persist variant for 30 days
  response.headers.append(
    "Set-Cookie",
    "ns_variant=" + variant + "; Path=/; Max-Age=2592000; SameSite=Lax"
  )

  return response
}
