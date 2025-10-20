import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

interface PlanFeature {
  text: string
  included: boolean
}

interface HostingPlan {
  name: string
  storage: string
  emails: string
  subdomains: string
  price: string
  features: PlanFeature[]
  popular?: boolean
}

export default function PricingTable() {
  const plans: HostingPlan[] = [
    {
      name: "Mw-Tiny",
      storage: "50GB",
      emails: "10",
      subdomains: "2",
      price: "199,000",
      features: [
        { text: "Free .mw Domain", included: true },
        { text: "cPanel Access", included: true },
        { text: "SSL Certificate", included: true },
        { text: "Daily Backups", included: false },
        { text: "Priority Support", included: false },
      ],
    },
    {
      name: "Mw-Bronze",
      storage: "100GB",
      emails: "15",
      subdomains: "5",
      price: "299,999",
      features: [
        { text: "Free .mw Domain", included: true },
        { text: "cPanel Access", included: true },
        { text: "SSL Certificate", included: true },
        { text: "Daily Backups", included: true },
        { text: "Priority Support", included: false },
      ],
      popular: true,
    },
    {
      name: "Mw-Silver",
      storage: "200GB",
      emails: "30",
      subdomains: "10",
      price: "500,999",
      features: [
        { text: "Free .mw Domain", included: true },
        { text: "cPanel Access", included: true },
        { text: "SSL Certificate", included: true },
        { text: "Daily Backups", included: true },
        { text: "Priority Support", included: true },
      ],
    },

  ]

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
        {plans.map((plan, index) => (
            <div
                key={index}
                className={`rounded-3xl border ${plan.popular ? "border-brand-primary" : "border-slate-200"} overflow-hidden`}
            >
              {plan.popular && (
                  <div className="bg-brand-primary text-white text-center py-3 poppins text-[16px] font-medium">Most Popular</div>
              )}
              <div className="p-10">
                <h3 className="text-sm uppercase tracking-wider font-medium poppins text-gray-400">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold poppins tracking-tight text-brand-secondary-dark">MWK {plan.price}</span>
                  <span className="text-slate-500">/year</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Storage</span>
                    <span className="font-medium">{plan.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Emails</span>
                    <span className="font-medium">{plan.emails}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subdomains</span>
                    <span className="font-medium">{plan.subdomains}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        {feature.included ? (
                            <Check className="h-5 w-5 text-brand-primary mr-2" />
                        ) : (
                            <div className="h-5 w-5 mr-2" />
                        )}
                        <span className={feature.included ? "" : "text-slate-400"}>{feature.text}</span>
                      </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-brand-primary text-white mt-auto rounded-lg hover:bg-brand-primary-dark">
                  <Link href="/register-domain">Sign Up</Link>
                </Button>
              </div>
            </div>
        ))}
      </div>
  )
}
