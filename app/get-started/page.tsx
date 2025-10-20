import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Secure your .mw domain and launch your website today.</h1>
        <p className="text-xl text-slate-600 mb-12">
          Take the first step towards establishing your online presence in Malawi with our reliable hosting and domain
          services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="font-medium mb-2">Call Us</h3>
              <p className="text-slate-600">+265 999 362 633</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="font-medium mb-2">Email Us</h3>
              <p className="text-slate-600">support@coolenterprisesmw.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="font-medium mb-2">Visit Our Office</h3>
              <p className="text-slate-600">Area 3, Lilongwe, Malawi</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/hosting/signup">Register for Hosting</Link>
          </Button>
          <Button asChild variant={"secondary"} size="lg">
            <Link href="/register-domain">Register a Domain</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
