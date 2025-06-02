import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Why Choose a .mw Domain for Your Malawian Business",
      excerpt:
        "Discover the benefits of using a local domain extension for your business in Malawi and how it can improve your local SEO and customer trust.",
      date: "May 10",
      readTime: "5 min read",
      slug: "why-choose-mw-domain",
    },
    {
      id: "2",
      title: "The Benefits of cPanel Hosting Explained",
      excerpt:
        "Learn about the features and advantages of cPanel hosting and how it can simplify website management for businesses of all sizes.",
      date: "April 28",
      readTime: "7 min read",
      slug: "cpanel-hosting-benefits",
    },
    {
      id: "3",
      title: "Setting Up Business Email with Your Domain",
      excerpt:
        "A step-by-step guide to configuring professional email addresses using your custom domain name and best practices for email management.",
      date: "April 15",
      readTime: "8 min read",
      slug: "setting-up-business-email",
    },
    {
      id: "4",
      title: "Website Security Best Practices for Malawian Businesses",
      excerpt:
        "Essential security measures every Malawian website owner should implement to protect their online presence from common threats.",
      date: "March 30",
      readTime: "6 min read",
      slug: "website-security-best-practices",
    },
    {
      id: "5",
      title: "How to Choose the Right Hosting Plan for Your Website",
      excerpt:
        "Factors to consider when selecting a hosting package that meets your website's needs, from storage requirements to expected traffic.",
      date: "March 15",
      readTime: "5 min read",
      slug: "choosing-right-hosting-plan",
    },
    {
      id: "6",
      title: "The Importance of Local Support for Your Web Hosting",
      excerpt:
        "Why having a local support team matters for your business website and how it can save you time and money in the long run.",
      date: "February 28",
      readTime: "4 min read",
      slug: "importance-of-local-support",
    },
  ]

  return (
      <>
        <div className={"bg-brand-secondary-dark w-full py-24"}>
          <div className="container mx-auto px-4 flex flex-col lg:px-8">
            <div className="text-white">
              <h1 className="text-6xl max-w-3xl leading-[1] trackimg-tight mx-auto text-center font-semibold mb-4">Learn, Grow <br/>& Stay Updated</h1>
              <p className="lg:max-w-xl mx-auto text-center">
                Articles about domain management, hosting, digitalization, and best practices for your online presence in
                Malawi.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-0 py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
                <Card key={post.id} className="flex border-none flex-col h-full">
                  <div className={"w-full h-[25em] bg-brand-primary rounded-2xl mb-4"}>

                  </div>
                  <CardFooter className="flex items-center text-sm text-slate-500 mt-auto p-0 mb-2 pb-6 border-b-[1px] border-slate-300">
                    <CalendarIcon className="h-4 w-4 stroke-[1.2px] text-brand-primary-dark mr-2" />
                    <span className={"uppercase"}>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className={"font-semibold text-sm text-brand-primary-dark"}>LESSONS</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </CardFooter>
                  <CardHeader className="p-0 mb-2 pt-4">
                    <CardTitle className="text-2xl mona-sans leading-[1.2]">
                      <Link href={`/blog/${post.slug}`} className="hover:text-slate-700 transition poppins text-brand-secondary leading-[1.2]">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                </Card>
            ))}
          </div>
        </div>
      </>

  )
}
