import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "What is included in your hosting packages?",
      answer:
          "Our hosting packages include a free .mw domain for the first year, full cPanel access, business email hosting, SSL certificates, and local Malawian support. Higher-tier packages include additional features like more storage, email accounts, and priority support.",
    },
    {
      question: "How do I register a .mw domain?",
      answer:
          "You can register a .mw domain through our domain registration page. Simply search for your preferred domain name, select the extension (.mw, .co.mw, etc.), and complete the registration process. We'll handle all the technical details for you.",
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer:
          "Yes, we offer a 30-day money-back guarantee on our hosting services. If you're not completely satisfied within the first 30 days, you can request a refund. Please refer to our refund policy for more details.",
    },
    {
      question: "How can I get support if I have issues?",
      answer:
          "We offer support via phone (+265 999 362 633), email (support@coolenterprisesmw.com), and through our support page. Our local Malawian team is available to assist you with any questions or technical issues.",
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer:
          "Yes, you can easily upgrade your hosting plan as your website grows. Simply contact our support team, and we'll help you transition to a higher-tier package with minimal downtime.",
    },
  ]

  return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto lg:grid-cols-4 grid-cols-1 grid gap-4">
          <div className={"bg-gradient-to-t from-brand-primary to-brand-primary/0 w-full h-full rounded-3xl"}>

          </div>

          <div className="mx-auto flex flex-col col-span-2 w-full ">
            <div className={"mx-auto w-fit flex flex-col"}>
              <p className={"font-semibold text-center poppins text-brand-primary mb-1 tracking-wider"}>FAQ</p>

              <h1 className="text-4xl font-bold text-center mb-1 tracking-tight text-brand-secondary-dark w-[80%] mx-auto">Frequently Asked Questions</h1>
              <div className={"flex flex-row gap-2 mx-auto w-fit mt-4 mb-12"}>
                <div className={"w-6 h-[2px] bg-brand-primary rounded-[1em]"}>
                </div>
                <div className={"w-3 h-[3px] bg-brand-secondary rounded-[1em]"}>
                </div>
                <div className={"w-6 h-[2px] bg-brand-primary rounded-[1em]"}>
                </div>
              </div>
            </div>
            <div className={"bg-brand-primary/5 py-12 px-18 w-full mx-auto rounded-3xl"}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left poppins font-semibold text-brand-secondary leading-[1.2]">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className={"bg-gradient-to-t from-brand-primary to-brand-primary/0 w-full h-full rounded-3xl"}>

          </div>
        </div>
      </section>
  )
}
