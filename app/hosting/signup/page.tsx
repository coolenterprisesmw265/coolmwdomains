"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  organization: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  domain: z.string().min(3, {
    message: "Domain name must be at least 3 characters.",
  }),
  package: z.string({
    required_error: "Please select a hosting package.",
  }),
  notes: z.string().optional(),
})

export default function SignupPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      domain: "",
      notes: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would submit this data to your backend
    console.log(values)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Thank You for Registering!</h2>
            <p className="text-slate-600 mb-6">
              Our team will contact you shortly to complete your hosting setup and domain registration.
            </p>
            <p className="text-slate-600">If you have any immediate questions, please call us at +265 999 362 633.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Register for Your Hosting Package</h1>
          <p className="text-slate-600">
            Fill in the form below to reserve your .mw domain and hosting account. Our team will contact you to complete
            the setup.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business/Organization Name (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Ltd" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+265 999 123 456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Domain Name (.mw)</FormLabel>
                      <FormControl>
                        <Input placeholder="yourbusiness.mw" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your domain name without the extension. We'll check availability for you.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hosting Package</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a hosting package" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mw-tiny">Mw-Tiny (MWK 199,000/year)</SelectItem>
                          <SelectItem value="mw-bronze">Mw-Bronze (MWK 299,999/year)</SelectItem>
                          <SelectItem value="mw-silver">Mw-Silver (MWK 500,999/year)</SelectItem>
                          <SelectItem value="mw-gold">Mw-Gold (MWK 800,000/year)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any specific requirements or questions?"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Register Now
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
