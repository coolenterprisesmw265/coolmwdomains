"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle, Phone, Mail, MessageSquare, MapPin } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  inquiryType: z.string({
    required_error: "Please select an inquiry type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function SupportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would submit this data to your backend
    console.log(values)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+265 999 362 633",
      description: "Available Monday-Friday, 8am-5pm",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "support@coolenterprisesmw.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      details: "Available on our website",
      description: "During business hours",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      details: "Area 3, Lilongwe, Malawi",
      description: "Visit us during business hours",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Message Sent Successfully!</h2>
            <p className="text-slate-600 mb-6">
              Thank you for reaching out. Our support team will get back to you as soon as possible.
            </p>
            <p className="text-slate-600">If you have an urgent matter, please call us at +265 999 362 633.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">We're Here to Help</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Reach out for help with domains, hosting, billing, or general inquiries. Our local Malawian team is ready to
          assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactMethods.map((method, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="font-medium mb-2">{method.title}</h3>
              <p className="font-medium text-slate-700">{method.details}</p>
              <p className="text-sm text-slate-500">{method.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Email</FormLabel>
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
                        <FormLabel>Phone</FormLabel>
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
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inquiry Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="domain">Domain Registration</SelectItem>
                          <SelectItem value="hosting">Hosting Support</SelectItem>
                          <SelectItem value="billing">Billing Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="resize-none min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">How do I renew my domain?</h3>
                <p className="text-slate-600">
                  You can renew your domain by logging into your account or contacting our support team. We'll also send
                  you renewal reminders via email.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-slate-600">
                  We accept bank transfers, mobile money payments (TNM Mpamba and Airtel Money), and credit/debit cards.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">How long does it take to set up hosting?</h3>
                <p className="text-slate-600">
                  Most hosting accounts are set up within 24 hours after payment confirmation. We'll notify you once
                  your account is ready.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Can I upgrade my hosting plan later?</h3>
                <p className="text-slate-600">
                  Yes, you can upgrade your hosting plan at any time. Contact our support team, and we'll help you with
                  the transition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
