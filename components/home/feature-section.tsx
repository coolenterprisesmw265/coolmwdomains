import type React from "react"
import { Globe, Server, Mail, Shield, Clock, HeadphonesIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
      <Card className="">
        <CardContent className="p-12 flex flex-col items-center text-center">
          <div className="mb-4 p-4 rounded-full stroke-[1px] bg-brand-primary/10">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 leading-[1.2] poppins">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </CardContent>
      </Card>
  )
}

export default function FeatureSection() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-brand-primary-dark stroke-[1.5px]" />,
      title: "Free .mw Domain Included",
      description: "Get a free .mw domain with any hosting package for the first year.",
    },
    {
      icon: <Server className="h-8 w-8 text-brand-primary-dark stroke-[1.5px]" />,
      title: "Full cPanel Access",
      description: "Manage your website easily with our user-friendly control panel.",
    },
    {
      icon: <Mail className="h-8 w-8 text-brand-primary-dark stroke-[1.5px]" />,
      title: "Business Email Hosting",
      description: "Professional email addresses with your domain name included.",
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-primary-dark stroke-[1.5px]" />,
      title: "99.9% Uptime Guarantee",
      description: "We ensure your website stays online with our reliable servers.",
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-primary-dark stroke-[1.5px]" />,
      title: "SSL Certificate & Antivirus",
      description: "Keep your website secure with included SSL and protection.",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-brand-primary-dark stroke-[1.5px]" />,
      title: "Local Support You Can Trust",
      description: "Get help from our Malawian support team whenever you need it.",
    },
  ]

  return (
      <section className="py-28 bg-brand-primary-light/20">
        <div className="max-w-7xl mx-auto px-4">

          <div className={"grid grid-cols-1 gap-4"}>
            <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                  <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
          <div className={"bg-brand-secondary-dark w-full flex p-12 mt-6 h-full rounded-2xl"}>
            <div className={"mt-auto mx-auto"}>
              <h2 className="text-4xl text-white font-light poppins max-w-2xl my-auto mx-auto text-center">Why Host with Us?</h2>
            </div>
          </div>
        </div>
      </section>
  )
}
