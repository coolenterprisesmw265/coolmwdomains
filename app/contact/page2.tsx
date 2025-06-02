"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"

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
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
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
                        <h2 className="text-2xl font-bold mb-4">Message Sent Successfully!</h2>
                        <p className="text-slate-600 mb-6">
                            Thank you for contacting Cool Enterprises. We'll get back to you as soon as possible.
                        </p>
                        <p className="text-slate-600">If you have an urgent matter, please call us at +265 999 362 633.</p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="pb-24">
            <div className={"bg-brand-primary/10 w-full py-24 flex"}>
                <div className="max-w-7xl grid-cols-1 gap-12 grid mx-auto">
                    <div className="text-brand-secondary max-w-3xl mx-auto my-auto text-center">
                        <h1 className="text-5xl max-w-lg mx-auto leading-[1.1] trackimg-tight font-semibold mb-4">More support<br/>Less waiting time.</h1>
                        <p className=" max-w-[60%] mx-auto font-medium">
                            Have questions about our services? Need help with your domain or hosting? Get in touch with our team.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-24">
                <Card>
                    <CardContent className="p-6 flex flex-row items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                            <Phone className="h-6 w-6 text-slate-700" />
                        </div>
                        <div className={"text-left flex flex-col"}>
                            <h3 className="font-medium poppins text-lg text-brand-primary">Call Us</h3>
                            <p className="text-slate-700">+265 999 362 633</p>
                            <p className="text-sm text-slate-500 mt-1">Monday-Friday, 8am-5pm</p>
                        </div>

                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 flex flex-row items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                            <Mail className="h-6 w-6 text-slate-700" />
                        </div>
                        <div className={"flex flex-col text-left"}>
                            <h3 className="font-medium mb-2">Email Us</h3>
                            <p className="text-slate-700">support@coolenterprisesmw.com</p>
                            <p className="text-sm text-slate-500 mt-1">We&#39;ll respond within 24 hours</p>
                        </div>

                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 flex flex-row items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                            <MapPin className="h-6 w-6 text-slate-700" />
                        </div>
                        <div className={"flex flex-col text-left"}>
                            <h3 className="font-medium mb-2">Visit Us</h3>
                            <p className="text-slate-700">Area 3, Lilongwe, Malawi</p>
                            <p className="text-sm text-slate-500 mt-1">Business hours: 8am-5pm</p>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <div className={"grid max-w-7xl lg:grid-cols-2 gap-4 mx-auto"}>
                <div className={"w-full h-full bg-brand-primary rounded-2xl"}>

                </div>
                <Card className="mx-auto p-6">
                    <CardHeader>
                        <CardTitle className={"poppins text-brand-secondary"}>Send Us a Message</CardTitle>
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
                                            <FormMessage className={"mona-sans text-sm text-red-700"}/>
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
                                                <FormMessage className={"mona-sans text-sm text-red-700"}/>
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
                                                <FormMessage className={"mona-sans text-sm text-red-700"}/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="How can we help you?" {...field} />
                                            </FormControl>
                                            <FormMessage className={"mona-sans text-sm text-red-700"}/>
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
                                                <Textarea placeholder="Your message..." className="resize-none min-h-[150px]" {...field} />
                                            </FormControl>
                                            <FormMessage className={"mona-sans text-sm text-red-700"}/>
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" variant={"primary"} className="w-full rounded-lg py-4 cursor-pointer">
                                    Send Message
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}
