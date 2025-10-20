"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle, Globe, Check } from "lucide-react"

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
  extension: z.string({
    required_error: "Please select a domain extension.",
  }),
  reason: z.string().optional(),
})

export default function RegisterDomainPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      domain: "",
      reason: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would submit this data to your backend
    console.log(values)
    setIsSubmitted(true)
  }

  const domainExtensions = [
    { value: "mw", label: ".mw", description: "Malawi's primary domain extension" },
    { value: "co.mw", label: ".co.mw", description: "For commercial entities" },
    { value: "org.mw", label: ".org.mw", description: "For organizations" },
    { value: "ac.mw", label: ".ac.mw", description: "For academic institutions" },
    { value: "net.mw", label: ".net.mw", description: "For network providers" },
  ]

  const pricingPlans = [
    { duration: "1 Year", price: "81,000 MWK" },
    { duration: "2 Years", price: "162,000 MWK" },
    { duration: "3 Years", price: "216,000 MWK" },
  ]

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Domain Registration Request Received!</h2>
            <p className="text-slate-600 mb-6">
              We'll check the availability of your domain and contact you shortly to complete the registration process.
            </p>
            <p className="text-slate-600">If you have any immediate questions, please call us at +265 999 362 633.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
      <div>
          <div className={"bg-brand-secondary-dark w-full py-16"}>
              <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-12 text-white">
                      <h1 className="text-4xl leading-[1] trackimg-tight font-semibold mb-4">Register a <span className={"text-brand-primary"}>.mw</span> Domain for Your Brand or Organization</h1>
                      <p className=" max-w-3xl mx-auto">
                          Search and register instantly. Choose from Malawi&#39;s official domain extensions.
                      </p>
                  </div>
              </div>
          </div>
          <div className={"mt-[-5em] max-w-7xl mx-auto"}>
              <Card className={"p-8 rounded-3xl"}>
                  <CardHeader className={"text-center mx-auto grid grid-cols-3"}>
                      <div className={"border-[1px] border-brand-primary my-auto w-[50%] ml-auto"}>

                      </div>
                      <CardTitle className={"poppins font-semibold text-brand-secondary"}>Available Domain Extensions</CardTitle>
                      <div className={"border-[1px] border-brand-primary my-auto w-[50%] mr-auto"}>

                      </div>
                  </CardHeader>
                  <CardContent>
                      <ul className="flex flex-row gap-4 py-6">
                          {domainExtensions.map((ext, index) => (
                              <li key={index} className="flex items-start">
                                  <Globe className="h-10 w-10 stroke-[1.3px] text-brand-primary mr-2 mt-0.5" />
                                  <div>
                                      <div className="font-semibold text-brand-secondary-dark">{ext.label}</div>
                                      <div className="text-sm text-slate-500">{ext.description}</div>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </CardContent>
                  <CardDescription className={"text-center"}>Choose from Malawi&#39;s official domain extensions</CardDescription>
              </Card>
          </div>
            <div className="max-w-7xl mx-auto py-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-1 h-full flex flex-col gap-8">
                  <Card className=" p-6 rounded-3xl flex flex-col">
                    <CardHeader>
                      <CardTitle className={"poppins text-brand-secondary"}>Domain Pricing</CardTitle>
                      <CardDescription>All extensions are priced the same</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="">
                        {pricingPlans.map((plan, index) => (
                          <div key={index} className="flex justify-between py-3 border-t border-brand-secondary-light/30 items-center">
                            <span className="bg-brand-primary text-white py-2 px-4 rounded-lg text-sm font-semibold">{plan.duration}</span>
                            <span className="text-slate-700">{plan.price}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-auto h-full flex flex-col p-6 rounded-3xl bg-brand-secondary border-brand-secondary-dark">
                      <div className={"mt-auto"}>
                          <CardHeader>
                              <CardTitle className={"poppins text-brand-primary"}>Why Our Domains?</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <ul className="space-y-3 text-slate-100">
                                  <li className="flex flex-row gap-2 leading-[1.2]">
                                      <div className={"border-2 my-auto flex border-brand-primary rounded-full p-1 w-fit"}>
                                          <Check className="text-white h-3 w-3" />
                                      </div>

                                      <span className={"my-auto flex"}>MWK 9,000 less than competitors</span>
                                  </li>
                                  <li className="flex flex-row gap-2 leading-[1.2]">
                                      <div className={"border-2 my-auto flex border-brand-primary rounded-full p-1 w-fit"}>
                                          <Check className="text-white h-3 w-3" />
                                      </div>

                                      <span className={"my-auto flex"}>Discounted rates for multi-year</span>
                                  </li>
                                  <li className="flex flex-row gap-2 leading-[1.2]">
                                      <div className={"border-2 my-auto flex border-brand-primary rounded-full p-1 w-fit"}>
                                          <Check className="text-white h-3 w-3" />
                                      </div>

                                      <span className={"my-auto flex"}>Free DNS management</span>
                                  </li>
                                  <li className="flex flex-row gap-2 leading-[1.2]">
                                      <div className={"border-2 my-auto flex border-brand-primary rounded-full p-1 w-fit"}>
                                          <Check className="text-white h-3 w-3" />
                                      </div>

                                      <span className={"my-auto flex"}>Local support team</span>
                                  </li>
                              </ul>
                          </CardContent>
                      </div>

                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <Card className={"p-6 rounded-3xl"}>
                    <CardHeader>
                      <CardTitle className={"poppins text-brand-secondary"}>Domain Registration Form</CardTitle>
                      <CardDescription>Fill in the details below to register your domain</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          {/* Full Name */}
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

                          {/* Organization */}
                          <FormField
                            control={form.control}
                            name="organization"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Organization Name (optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Company Ltd" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Email & Phone */}
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

                          {/* Domain & Extension */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="domain"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Preferred Domain Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="yourbusiness" {...field} />
                                  </FormControl>
                                  <FormDescription>Enter your domain name without the extension</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="extension"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Extension</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select extension" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {domainExtensions.map((ext) => (
                                        <SelectItem key={ext.value} value={ext.value}>
                                          {ext.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* Reason */}
                          <FormField
                            control={form.control}
                            name="reason"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Reason for Registration (optional)</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your website or project"
                                    className="resize-none text-[16px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Hosting Option */}
                          <FormField
                            control={form.control}
                            name="hostWithUs"
                            render={({ field }) => (
                              <FormItem className="flex items-center gap-2">
                                <input type="checkbox" {...field} />
                                <FormLabel>Host with us?</FormLabel>
                              </FormItem>
                            )}
                          />

                          {/* Hosting Package (if hosting) */}
                          {form.watch("hostWithUs") && (
                            <FormField
                              control={form.control}
                              name="hostingPackage"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Select Hosting Package</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select hosting plan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {[
                                        { value: "basic", label: "Basic Hosting - 150,000 MWK/yr" },
                                        { value: "business", label: "Business Hosting - 300,000 MWK/yr" },
                                        { value: "premium", label: "Premium Hosting - 500,000 MWK/yr" },
                                      ].map((pkg) => (
                                        <SelectItem key={pkg.value} value={pkg.value}>
                                          {pkg.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />
                          )}

                          {/* Nameservers (if NOT hosting) */}
                          {!form.watch("hostWithUs") && (
                            <FormField
                              control={form.control}
                              name="nameservers"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nameservers (optional)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ns1.yourhost.com, ns2.yourhost.com" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          )}

                          {/* Payment Method */}
                          <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Payment Method</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select payment method" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="bank">Direct Bank Transfer</SelectItem>
                                    <SelectItem value="mobile-money">Mobile Money (Airtel, TNM)</SelectItem>
                                    <SelectItem value="card">Card Payment</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />

                          {/* Bank Details */}
                          {form.watch("paymentMethod") === "bank" && (
                            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 space-y-2">
                              <p><strong>Bank:</strong> NBS Bank</p>
                              <p><strong>Account Name:</strong> Cool Enterprises Ltd</p>
                              <p><strong>Account Number:</strong> 1234567890</p>
                              <p><strong>Branch:</strong> Lilongwe</p>
                            </div>
                          )}

                          {/* Mobile Money Details */}
                          {form.watch("paymentMethod") === "mobile-money" && (
                            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 space-y-2">
                              <p><strong>Airtel Money:</strong> 0999 123 456</p>
                              <p><strong>TNM Mpamba:</strong> 0888 654 321</p>
                              <p>Please include your domain name in the payment reference.</p>
                            </div>
                          )}

                          <Button type="submit" variant={"primary"} className="w-full rounded-lg">
                            Search & Register
                          </Button>
                        </form>
                      </Form>

                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
      </div>
  )
}
