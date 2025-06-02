"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image"
import * as z from "zod"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

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
                            Thank you for contacting Cool Enterprises. We&#39;ll get back to you as soon as possible.
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

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-24">
                <Card className={"h-fit"}>
                    <CardContent className="p-6 flex flex-row gap-6">
                        <div className="w-fit p-5 flex h-fit my-auto rounded-lg bg-brand-primary">
                            <Phone className="h-10 stroke-[1.2px] w-10 text-white" />
                        </div>
                        <div className={"text-left flex flex-col my-auto"}>
                            <h3 className="font-semibold uppercase poppins text-xl text-brand-secondary mb-1">Call Us</h3>
                            <p className="text-slate-700">+265 999 362 633</p>
                            <p className="text-sm text-slate-500 mt-1">Monday-Friday, 8am-5pm</p>
                        </div>

                    </CardContent>
                </Card>

                <Card className={"h-fit"}>
                    <CardContent className="p-6 flex flex-row gap-6">
                        <div className="w-fit p-5 flex h-fit my-auto rounded-lg bg-brand-primary">
                            <Mail className="h-10 stroke-[1.2px] w-10 text-white" />
                        </div>
                        <div className={"flex flex-col text-left my-auto"}>
                            <h3 className="font-semibold uppercase poppins text-xl text-brand-secondary mb-1">Email Us</h3>
                            <p className="text-slate-700">support@coolenterprisesmw.com</p>
                            <p className="text-sm text-slate-500 mt-1">We&#39;ll respond within 24 hours</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className={"h-fit"}>
                    <CardContent className="p-6 flex flex-row gap-6">
                        <div className="w-fit p-5 flex h-fit my-auto rounded-lg bg-brand-primary">
                            <MapPin className="h-10 stroke-[1.2px] w-10 text-white" />
                        </div>
                        <div className={"flex flex-col text-left my-auto"}>
                            <h3 className="font-semibold uppercase poppins text-xl text-brand-secondary mb-1">Visit Us</h3>
                            <p className="text-slate-700">Area 3, Lilongwe, Malawi</p>
                            <p className="text-sm text-slate-500 mt-1">Business hours: 8am-5pm</p>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <div className={"grid max-w-7xl lg:grid-cols-2 gap-10 mx-auto"}>
                <div className={"w-full h-full bg-brand-primary rounded-2xl overflow-hidden relative"}>
                    <div className={"w-full h-full bg-gradient-to-t from-brand-primary to-brand-primary/10 absolute z-30"}></div>
                    <Image src={"/cool-photos/CLO08595.jpg"} alt={"contact.jpg"} width={"600"} height={"600"} className={"w-full object-cover z-20 h-full"}/>
                </div>
                <Card className="p-6">
                    <CardHeader>
                        <CardTitle className={"poppins text-brand-secondary"}>Send Us a Message</CardTitle>
                        <CardDescription>Fill out the form below and we&#39;ll get back to you as soon as possible</CardDescription>
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
