import { Check } from "lucide-react";
import interior from "@/assets/interior.jpg";
import kettlebell from "@/assets/kettlebell.jpg";
import { SectionHeading } from "@/components/site/ui-bits";
import { WHY_US } from "@/data/site";

export function About() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="About the club"
          title={
            <>
              WHY CHOOSE <span className="text-gradient">M.K FITNESS CLUB</span>
            </>
          }
          subtitle="Two premium branches in Pune. Serious training, in a place you love walking into."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal="left" className="relative h-[460px] sm:h-[540px]">
            <div className="group absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[2rem]">
              <img
                src={interior}
                alt="Modern equipment floor at M.K Fitness Club"
                loading="lazy"
                width={1440}
                height={960}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="group absolute bottom-0 right-0 h-[62%] w-[52%] overflow-hidden rounded-[2rem] border-4 border-background shadow-2xl">
              <img
                src={kettlebell}
                alt="Member training with kettlebell"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>
            <div className="glass animate-float absolute bottom-10 left-4 rounded-2xl px-6 py-4">
              <span className="font-display text-4xl text-primary">10+</span>
              <span className="ml-2 text-xs uppercase tracking-widest text-muted-foreground">
                Years coaching
              </span>
            </div>
          </div>

          <div data-reveal="right" className="grid gap-3 sm:grid-cols-2">
            {WHY_US.map((item) => (
              <div
                key={item}
                className="glass flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
