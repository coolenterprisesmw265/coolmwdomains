"use client"

import { useEffect, useState } from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Hero from "@/components/home/hero"
import FeatureSection from "@/components/home/feature-section"
import PricingTable from "@/components/home/pricing-table"
import TestimonialSection from "@/components/home/testimonial-section"
import FaqSection from "@/components/home/faq-section"
import Image from "next/image"

export default function HomePage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col absolute top-0 right-0 bottom-0 left-0 z-50 items-center justify-center h-screen bg-brand-secondary-dark text-brand-primary transition-opacity duration-500">

                <div className="w-16 h-16 border-4 border-brand-primary flex border-t-transparent rounded-full animate-spin">
                    <div className="w-10 h-10 flex border-4 border-white border-t-transparent rounded-full my-auto mx-auto animate-spin">
                        <div className="w-4 h-4 border-4 border-brand-primary-dark border-t-transparent rounded-full my-auto mx-auto animate-spin">

                        </div>
                    </div>
                </div>
                <p className="mt-4 font-semibold text-white">Loading, please wait...</p>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Reliable .mw Domain & Hosting in Malawi | Cool Enterprises</title>
                <meta name="description" content="Get reliable hosting with free .mw domain, cPanel, and local support. Trusted by top Malawian brands." />
            </Head>

            <div>
                <Hero
                    title="Get Secure .mw Domain & Web Hosting in Malawi"
                    subtitle="Launch your website with a free .mw domain, full cPanel access, business-grade email, and local Malawian support."
                    primaryCta={{ text: "View Plans", href: "/hosting" }}
                    secondaryCta={{ text: "Get Started Now", href: "/get-started" }}
                />

                <FeatureSection />

                <section className="py-28 max-w-7xl mx-auto lg:px-8 px-4">
                    <p className="font-semibold text-center poppins text-brand-primary mb-1">.Mw Domains Pricing</p>
                    <h1 className="text-4xl font-bold max-w-lg mx-auto text-center mb-1 tracking-tight text-brand-secondary-dark">
                        Find the right Hosting for your Domain
                    </h1>
                    <div className="flex flex-row gap-2 mx-auto w-fit mt-4 mb-12">
                        <div className="w-6 h-[2px] bg-brand-primary rounded-[1em]"></div>
                        <div className="w-3 h-[2px] bg-brand-secondary rounded-[1em]"></div>
                        <div className="w-6 h-[2px] bg-brand-primary rounded-[1em]"></div>
                    </div>
                    <PricingTable />
                </section>

                <TestimonialSection />
                <FaqSection />

                <section className="pb-24 lg:px-0 md:px-6 sm:px-4 px-4">
                    <section className="lg:py-24 py-16 bg-brand-primary rounded-3xl px-6 text-center text-white max-w-7xl mx-auto">
                        <h2 className="lg:text-4xl text-3xl font-semibold mb-6 poppins tracking-tight leading-[1.2px]">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg mb-4 max-w-2xl mx-auto">
                            Launch your website with a trusted Malawian hosting provider today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" variant="secondary">
                                <Link href="/hosting/signup">Register Now</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-brand-primary-dark">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </section>
                </section>
            </div>
        </>
    )
}
