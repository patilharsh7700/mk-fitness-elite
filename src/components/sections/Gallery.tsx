import { useState } from "react";
import { X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import training from "@/assets/training.jpg";
import yoga from "@/assets/yoga.jpg";
import cardio from "@/assets/cardio.jpg";
import crossfit from "@/assets/crossfit.jpg";
import { SectionHeading } from "@/components/site/ui-bits";

const FILTERS = ["All", "Gym", "Workout", "Machines", "Yoga", "Interior"] as const;

const ITEMS = [
  { src: hero, cat: "Workout", alt: "Strength training at M.K Fitness Club Punawale", span: "lg:row-span-2" },
  { src: interior, cat: "Interior", alt: "Premium gym interior in Punawale", span: "" },
  { src: cardio, cat: "Machines", alt: "Cardio equipment zone", span: "" },
  { src: yoga, cat: "Yoga", alt: "Separate yoga hall", span: "" },
  { src: crossfit, cat: "Gym", alt: "CrossFit functional training area", span: "lg:row-span-2" },
  { src: training, cat: "Workout", alt: "Personal training session", span: "" },
  { src: interior, cat: "Machines", alt: "Modern strength machines", span: "" },
  { src: crossfit, cat: "Gym", alt: "Gym floor at Marunji branch", span: "" },
];

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const shown = ITEMS.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              INSIDE <span className="text-gradient">M.K FITNESS CLUB</span>
            </>
          }
        />

        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                filter === f
                  ? "animated-gradient text-primary-foreground"
                  : "glass text-muted-foreground hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item, i) => (
            <button
              key={`${item.alt}-${i}`}
              onClick={() => setLightbox(item.src)}
              data-reveal="zoom"
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
              className={`group relative overflow-hidden rounded-[1.5rem] ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity group-hover:opacity-95" />
              <span className="absolute bottom-4 left-5 text-left font-display text-xl tracking-wide opacity-0 transition-all duration-500 group-hover:opacity-100">
                {item.cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-background/90 p-6 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="glass absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-2xl"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="Gym gallery preview"
            className="max-h-[85vh] w-auto rounded-[1.5rem] object-contain"
          />
        </div>
      )}
    </section>
  );
}