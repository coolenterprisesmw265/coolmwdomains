import Hero from "@/components/home/hero"
import FeatureSection from "@/components/home/feature-section"
import PricingTable from "@/components/home/pricing-table"
import TestimonialSection from "@/components/home/testimonial-section"
import FaqSection from "@/components/home/faq-section"

export default function HostingPage() {
  return (
    <div>
      <Hero
        title="Get Secure .mw Domain and Web Hosting in Malawi"
        subtitle="Launch your website with a free .mw domain, full cPanel access, business-grade email, and local Malawian support."
        primaryCta={{
          text: "View Plans",
          href: "#plans",
        }}
        secondaryCta={{
          text: "Get Started Now",
          href: "/hosting/signup",
        }}
      />

      <FeatureSection />

      <section id="plans" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Hosting Plan</h2>
          <PricingTable />
        </div>
      </section>

      <TestimonialSection />

      <FaqSection />
    </div>
  )
}
