import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/site/ui-bits";
import { FEATURES } from "@/data/site";

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
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[f.icon] ?? Icons.Dumbbell;
            return (
              <article
                key={f.title}
                data-reveal="zoom"
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
                className="glass group relative overflow-hidden rounded-[1.75rem] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 text-2xl">{f.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}