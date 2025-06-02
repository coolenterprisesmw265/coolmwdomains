import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, ArrowRight } from "lucide-react"

interface HeroCta {
  text: string
  href: string
}

interface HeroProps {
  title: string
  subtitle: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
      <section className="bg-gradient-to-t from-brand-primary to-brand-secondary-dark text-white py-16 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-3">
                <div className="promo-badge flex gap-3 py-3 px-6 rounded-full w-fit bg-brand-primary/10">
                  <Zap className="h-5 w-5 text-brand-primary" />
                  <span>30% Discount first month purchase</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl semibold mb-6 leading-[1.2] tracking-tight">
                {title}
                <span className="relative inline-block">
                <span className="relative z-10 font-semibold">{" with Cool"}</span>
                <span className="absolute bottom-2 left-0 w-full h-2 bg-brand-primary opacity-70 z-0"></span>
              </span>
              </h1>

              <p className="text-[20px] mb-10 text-white/90 leading-[1.4] max-w-2xl">{subtitle}</p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild variant={"primary"}>
                  <Link href={primaryCta.href} className="flex items-center gap-2">
                    {primaryCta.text}
                  </Link>
                </Button>
                <Button
                    asChild
                    variant={"secondary"}
                >
                  <Link href={secondaryCta.href} className="flex items-center gap-2">
                    {secondaryCta.text}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <svg
                    className="h-6 w-6 text-brand-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9.97 9.47L7.8 11.04L8.2 12.93L10.53 13.23L12 15.3L13.47 13.23L15.8 12.93L16.2 11.04L14.03 9.47L13.8 7L12 7.88L10.2 7L9.97 9.47Z"
                      fill="currentColor"
                  />
                </svg>
                <span className="font-medium">Starting from</span>
                <span className="text-2xl font-bold text-brand-primary-light poppins">MWK 199,000</span>
                <span>per year</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <g opacity="0.8">
                    <rect
                        x="50"
                        y="250"
                        width="300"
                        height="50"
                        rx="4"
                        fill="white"
                        fillOpacity="0.1"
                        stroke="white"
                        strokeWidth="2"
                    />
                    <rect x="70" y="265" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="100" y="265" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="130" y="265" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="280" y="265" width="50" height="20" rx="2" fill="white" fillOpacity="0.2" />

                    <rect
                        x="75"
                        y="175"
                        width="250"
                        height="50"
                        rx="4"
                        fill="white"
                        fillOpacity="0.15"
                        stroke="white"
                        strokeWidth="2"
                    />
                    <rect x="95" y="190" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="125" y="190" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="155" y="190" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="255" y="190" width="50" height="20" rx="2" fill="white" fillOpacity="0.2" />

                    <rect
                        x="100"
                        y="100"
                        width="200"
                        height="50"
                        rx="4"
                        fill="white"
                        fillOpacity="0.2"
                        stroke="white"
                        strokeWidth="2"
                    />
                    <rect x="120" y="115" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="150" y="115" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="180" y="115" width="20" height="20" rx="2" fill="#00D7B9" />
                    <rect x="230" y="115" width="50" height="20" rx="2" fill="white" fillOpacity="0.2" />

                    <line
                        x1="200"
                        y1="50"
                        x2="200"
                        y2="350"
                        stroke="white"
                        strokeOpacity="0.3"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                    <circle cx="200" cy="50" r="4" fill="white" />
                    <circle cx="200" cy="350" r="4" fill="white" />

                    <circle cx="100" cy="175" r="4" fill="white" />
                    <circle cx="300" cy="175" r="4" fill="white" />

                    <circle cx="75" cy="250" r="4" fill="white" />
                    <circle cx="325" cy="250" r="4" fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
