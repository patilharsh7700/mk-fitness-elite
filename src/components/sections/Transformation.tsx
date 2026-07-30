import { useRef, useState } from "react";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";
import { SectionHeading } from "@/components/site/ui-bits";

export function Transformation() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Transformations"
          title={
            <>
              REAL PEOPLE. <span className="text-gradient">REAL RESULTS.</span>
            </>
          }
          subtitle="Drag the slider to see what consistent coaching looks like after 6 months."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div
            ref={ref}
            data-reveal="left"
            onMouseMove={(e) => move(e.clientX)}
            onTouchMove={(e) => move(e.touches[0].clientX)}
            className="relative aspect-[4/5] w-full cursor-ew-resize overflow-hidden rounded-[2rem] border border-border select-none"
          >
            <img src={after} alt="After transformation" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={before}
                alt="Before transformation"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ width: ref.current?.offsetWidth ?? "100%", maxWidth: "none" }}
              />
            </div>
            <div className="absolute inset-y-0 w-1 bg-primary" style={{ left: `${pos}%` }}>
              <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary font-display text-xs text-primary-foreground">
                ◀ ▶
              </span>
            </div>
            <span className="glass absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              Before
            </span>
            <span className="glass absolute right-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              After
            </span>
          </div>

          <div data-reveal="right" className="grid gap-5">
            {[
              {
                title: "Weight Loss — 18 kg in 6 months",
                name: "Nikhil, Punawale",
                text: "Structured cardio, strength circuits and a diet plan I could actually follow with a desk job at Hinjawadi.",
              },
              {
                title: "Muscle Gain — 9 kg lean mass",
                name: "Akash, Marunji",
                text: "Progressive overload, weekly check-ins and nutrition tracking. First time I stayed consistent for a full year.",
              },
              {
                title: "Strength — 60 kg to 140 kg deadlift",
                name: "Vaibhav, Punawale",
                text: "Form coaching from day one meant zero injuries while the numbers kept climbing.",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <h3 className="text-2xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em]">{s.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}