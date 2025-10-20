import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function BlogPostPage(props: Props) {
  // Await the params
  const { slug } = await props.params;

  // Fetch post data
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-24">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date} • {post.readTime}</p>
      <p>{post.excerpt}</p>
    </main>
  );
}

// Example fetch function
async function getPostBySlug(slug: string) {
  const posts = [
    {
      slug: "why-choose-mw-domain",
      title: "Why Choose a .mw Domain for Your Malawian Business",
      date: "May 10",
      readTime: "5 min read",
      excerpt: "Discover the benefits of using a local domain extension...",
    },
    // ...other posts
  ];

  return posts.find((p) => p.slug === slug);
}
