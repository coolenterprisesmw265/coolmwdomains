import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialSection() {
  const clients = [
    { name: "Story Workshop", logo: "story-workshop-logo.png" },
    { name: "Dream Financial", logo: "dream-finance.png" },
    { name: "Realcon Associates", logo: "realcon-associates.png" },
    { name: "ARTS SACCO", logo: "arts-sacco.png" },
    { name: "Pre Malawi", logo: "PRE.png" },
  ]


  return (
      <section className="py-24 bg-slate-100/20">
        <div className="container mx-auto px-4">
          <div className={"mx-auto w-fit flex flex-col"}>
            <p className={"font-semibold text-center poppins text-brand-primary mb-1"}>Testimonials</p>

            <h1 className="text-4xl font-bold text-center mb-1 tracking-tight text-brand-secondary-dark">Trusted by Malawian Brands</h1>
            <div className={"flex flex-row gap-2 mx-auto w-fit mt-4 mb-12"}>
              <div className={"w-6 h-[2px] bg-brand-secondary-light rounded-[1em]"}>
              </div>
              <div className={"w-3 h-[3px] bg-brand-primary rounded-[1em]"}>
              </div>
              <div className={"w-6 h-[2px] bg-brand-secondary-light rounded-[1em]"}>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {clients.map((client, index) => (
                <div key={index} className="flex items-center py-6 justify-center">
                  <div className="saturate-0 w-full h-12 flex items-center justify-center">
                    <img
                        src={`/clients/${client.logo}`}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
            ))}
          </div>


          {/* Carousel */}
          <div className="relative mt-12">
            <Carousel className={"max-w-3xl mx-auto"}>
              <CarouselContent >
                {[
                  {
                    name: "Dream Finance Limited",
                    role: "Operations Manager",
                    fallback: "DFL",
                    testimonial:
                        "Cool Enterprises gave us reliable hosting and quick support. We recommend their services to anyone serious about online growth.",
                  },
                  {
                    name: "Arts Sacco",
                    role: "Director of Operations",
                    fallback: "AS",
                    testimonial:
                        "The stories on HerVoiceMW have inspired me to pursue my dreams despite the challenges. Seeing other women succeed gives me the confidence to believe in myself.",
                  },
                  {
                    name: "Thoko Nyirenda",
                    role: "Community Leader",
                    fallback: "TN",
                    testimonial:
                        "HerVoiceMW has created a platform where women's voices are not only heard but celebrated. It's changing the narrative about what women can achieve in our society.",
                  },
                  {
                    name: "Ahmed Daud",
                    role: "Graphic Designer",
                    fallback: "AD",
                    testimonial:
                        "HerVoiceMW has given me a new perspective on the power of shared stories and inclusive design. It’s inspiring to be part of this journey.",
                  },
                ].map(({ name, role, testimonial }, index) => (
                    <CarouselItem key={index} className="sm:basis-3/4 md:basis-1 lg:basis-2/2">
                      <Card className="rounded-3xl mx-auto bg-brand-secondary-dark">
                        <CardContent className="p-12">
                          <div className="flex flex-col md:flex-row gap-6 items-center">

                            <div>
                              <div className="text-xl text-white/90 font-light mona-sans leading-[1.3] text-center mb-4">
                                <span className={"font-semibold text-brand-primary"}>&#34;</span>{testimonial}<span className={"font-semibold text-brand-primary"}>&#34;</span>
                              </div>
                              <div className={"flex flex-col mx-auto w-fit gap-2"}>
                                <Image src={"/testimonial-avatar.svg"} alt={"avatar"} width={"500"} height={"500"} className={"w-auto mx-auto h-16"} />

                                <div className="font-semibold text-lg text-brand-primary leading-1 mona-sans text-center mt-2">{name}</div>
                                <div className="font-medium text-sm text-brand-primary-light text-center">{role}</div>
                              </div>

                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <CarouselPrevious className="absolute -left-5 sm:-left-8 top-1/2 -translate-y-1/2 z-50" />
              <CarouselNext className="absolute -right-5 sm:-right-8 top-1/2 -translate-y-1/2 z-50" />
            </Carousel>
          </div>
        </div>
      </section>
  )
}
