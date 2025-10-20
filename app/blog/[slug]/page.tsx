import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  const post = await getPostBySlug(slug)
  if (!post) return notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Back button */}
      <Link
        href="/blog"
        className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 relative mb-8 rounded-2xl overflow-hidden shadow-md">
        <Image
          src={post.coverImage || "/placeholder-blog.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        {post.title}
      </h1>

      {/* Meta info */}
      <div className="text-gray-500 mb-10 text-sm flex items-center gap-3">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
        {post.author && (
          <>
            <span>•</span>
            <span>By {post.author}</span>
          </>
        )}
      </div>

      {/* Blog content */}
      <article className="prose prose-lg prose-blue dark:prose-invert max-w-none">
        <p>{post.excerpt}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vestibulum eros ut felis vehicula, in tempor felis pretium. Proin ut
          magna id arcu consequat cursus. Suspendisse ut mi nec velit aliquam
          interdum in in justo.
        </p>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Use a local .mw domain to build trust with Malawian customers.</li>
          <li>Enhances SEO ranking within Malawi’s digital space.</li>
          <li>Shows authenticity and local presence.</li>
        </ul>
        <p>
          Ready to register your .mw domain? Visit{" "}
          <a href="https://coolmwdomains.com" className="text-blue-600 hover:underline">
            Cool MW Domains
          </a>{" "}
          and get started today.
        </p>
      </article>
    </main>
  )
}

// Mock data for now
async function getPostBySlug(slug: string) {
  const posts = [
    {
      slug: "why-choose-mw-domain",
      title: "Why Choose a .mw Domain for Your Malawian Business",
      date: "May 10, 2025",
      readTime: "5 min read",
      author: "Cool Enterprises Ltd.",
      excerpt: "Discover the benefits of using a local .mw domain extension and how it strengthens your brand’s presence in Malawi.",
      coverImage: "/images/mw-domain-cover.jpg",
    },
    {
      slug: "domain-registration-guide",
      title: "Step-by-Step Guide to Registering a .mw Domain",
      date: "May 15, 2025",
      readTime: "7 min read",
      author: "Cool Enterprises Ltd.",
      excerpt: "Learn how to easily register a .mw domain name for your business or organization in Malawi.",
      coverImage: "/images/register-guide.jpg",
    },
  ]

  return posts.find((p) => p.slug === slug)
}
