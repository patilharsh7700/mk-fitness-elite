import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/site/ui-bits";
import { FEATURES } from "@/data/site";
import weights from "@/assets/weights.jpg";
import locker from "@/assets/locker.jpg";
import ropes from "@/assets/ropes.jpg";
import yoga from "@/assets/yoga.jpg";
import cardio from "@/assets/cardio.jpg";

const SHOWCASE = [
  { img: weights, title: "Free Weights Zone", tag: "Strength", span: "lg:col-span-2 lg:row-span-2" },
  { img: ropes, title: "CrossFit Area", tag: "Functional", span: "" },
  { img: cardio, title: "Cardio Zone", tag: "Endurance", span: "" },
  { img: yoga, title: "Yoga Hall", tag: "Mobility", span: "" },
  { img: locker, title: "Lockers & Steam", tag: "Recovery", span: "" },
];

export function Features() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Facilities"
          title={
            <>
              EVERYTHING YOU NEED <span className="text-gradient">UNDER ONE ROOF</span>
            </>
          }
        />

        <div className="mt-16 grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SHOWCASE.map((s, i) => (
            <article
              key={s.title}
              data-reveal="zoom"
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className={`group relative overflow-hidden rounded-[1.75rem] ${s.span}`}
            >
              <img
                src={s.img}
                alt={`${s.title} at M.K Fitness Club`}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                  {s.tag}
                </span>
                <h3 className="mt-1 text-3xl transition-transform duration-500 group-hover:-translate-y-1 lg:text-4xl">
                  {s.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map((f, i) => {
            const Icon =
              (Icons as unknown as Record<string, Icons.LucideIcon>)[f.icon] ?? Icons.Dumbbell;
            return (
              <div
                key={f.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 6) * 50}ms` }}
                className="glass group flex flex-col items-center gap-3 rounded-2xl px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">{f.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
