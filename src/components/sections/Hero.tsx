import { ChevronDown, Dumbbell, Flame, HeartPulse, Timer } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { NeonButton } from "@/components/site/ui-bits";
import { useParallax } from "@/hooks/use-scroll-fx";

const floaters = [
  { Icon: Dumbbell, cls: "left-[6%] top-[28%]", delay: "0s" },
  { Icon: Flame, cls: "right-[10%] top-[22%]", delay: "1.2s" },
  { Icon: HeartPulse, cls: "left-[14%] bottom-[22%]", delay: "2.1s" },
  { Icon: Timer, cls: "right-[8%] bottom-[28%]", delay: "0.6s" },
];

export function Hero() {
  const offset = useParallax(0.3);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Athlete deadlifting at M.K Fitness Club gym in Punawale, Pune"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ transform: `translateY(${offset}px) scale(1.06)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
      <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />

      {floaters.map(({ Icon, cls, delay }, i) => (
        <div
          key={i}
          aria-hidden
          className={`glass animate-float absolute hidden h-16 w-16 place-items-center rounded-2xl text-primary md:grid ${cls}`}
          style={{ animationDelay: delay }}
        >
          <Icon className="h-7 w-7" />
        </div>
      ))}

      <div className="relative mx-auto max-w-5xl px-4 pt-28 text-center">
        <span
          data-reveal
          className="glass inline-flex rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[0.34em] text-primary"
        >
          Punawale · Marunji · Pune
        </span>
        <h1
          data-reveal
          style={{ ["--reveal-delay" as string]: "120ms" }}
          className="mt-6 text-[3.2rem] leading-[0.88] sm:text-7xl lg:text-[7.5rem]"
        >
          TRANSFORM YOUR BODY
          <br />
          <span className="text-gradient">BUILD YOUR CONFIDENCE</span>
        </h1>
        <p
          data-reveal
          style={{ ["--reveal-delay" as string]: "240ms" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Train with certified trainers using world-class equipment.
        </p>
        <div
          data-reveal
          style={{ ["--reveal-delay" as string]: "340ms" }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <NeonButton to="/join">Join Now</NeonButton>
          <NeonButton to="/branches" variant="ghost">
            Explore Branches
          </NeonButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div className="mx-auto grid h-11 w-7 place-items-start rounded-full border border-border pt-2">
          <span className="animate-scroll-dot h-2 w-2 rounded-full bg-primary" />
        </div>
        <ChevronDown className="mx-auto mt-1 h-4 w-4 text-muted-foreground" />
      </div>
    </section>
  );
}