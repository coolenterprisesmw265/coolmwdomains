import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string; // e.g., 'h-96' or 'min-h-[60vh]'
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className={`relative container mx-auto mt-6 rounded-3xl bg-brand-primary h-[20em]  flex flex-col z-10 overflow-hidden`}>
      {/* Background Image */}

        <Image src={backgroundImage} alt={"Hero-Image"} width={"1500"} height={"1000"} className={"object-cover z-20 w-full h-full absolute top-0 bott left-0 right-0 mx-auto"} />
        <div className={"absolute z-30 bg-brand-secondary-dark/80 bg-blend-multiply h-full w-full"}></div>
        {/* Text Content */}
        <div className="max-w-7xl relative z-40 flex flex-col mx-auto h-full px-4 text-white">
            <div className="flex flex-col my-auto text-center w-fit h-fit">
                <h1 className="text-5xl font-bold uppercase text-brand-primary">{title}</h1>
                {subtitle && (
                <p className="mt-2 text-[16px] md:text-[lg] text-white/80 max-w-2xl">
                    {subtitle}
                </p>
                )}
            </div>
          </div>
    </section>
  );
}
