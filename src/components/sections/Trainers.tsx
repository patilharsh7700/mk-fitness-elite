import { Instagram, Facebook, Youtube } from "lucide-react";
import t1 from "@/assets/trainer1.jpg";
import t2 from "@/assets/trainer2.jpg";
import t3 from "@/assets/trainer3.jpg";
import { SectionHeading } from "@/components/site/ui-bits";

const TRAINERS = [
  { name: "Mahesh Kadam", img: t1, exp: "10 Years Experience", spec: "Strength & Muscle Gain" },
  { name: "Priya Shinde", img: t2, exp: "7 Years Experience", spec: "Fat Loss & Functional" },
  { name: "Sagar Jadhav", img: t3, exp: "8 Years Experience", spec: "Powerlifting & CrossFit" },
];

export function Trainers() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              CERTIFIED <span className="text-gradient">TRAINERS</span>
            </>
          }
          subtitle="Coaches who know form, nutrition and how to keep you consistent."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TRAINERS.map((t, i) => (
            <article
              key={t.name}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className="group relative overflow-hidden rounded-[2rem] border border-border"
            >
              <img
                src={t.img}
                alt={`${t.name}, certified personal trainer in Pune`}
                loading="lazy"
                width={900}
                height={1200}
                className="h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">{t.exp}</p>
                <h3 className="mt-1 text-3xl leading-none">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.spec}</p>
                <div className="mt-4 flex gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-3">
                  {[Instagram, Facebook, Youtube].map((Icon, k) => (
                    <a
                      key={k}
                      href="#"
                      aria-label={`${t.name} social profile`}
                      className="glass grid h-9 w-9 place-items-center rounded-xl hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}