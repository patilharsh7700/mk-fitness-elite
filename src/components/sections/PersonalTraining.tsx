import { ArrowRight } from "lucide-react";
import trainingImg from "@/assets/training.jpg";
import { NeonButton } from "@/components/site/ui-bits";
import { TRAINING_GOALS } from "@/data/site";

export function PersonalTraining() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[150px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div data-reveal="left" className="group relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-primary/40 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={trainingImg}
              alt="Personal trainer coaching a client at M.K Fitness Club Pune"
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </div>

        <div data-reveal="right">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Personal Training
          </span>
          <h2 className="mt-5 text-5xl leading-[0.92] lg:text-6xl">
            ONE COACH. ONE PLAN. <span className="text-gradient">ONE RESULT.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Your body, your schedule, your goals. Our certified personal trainers build a workout
            and diet protocol around you and track it week after week until the result shows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {TRAINING_GOALS.map((g) => (
              <span
                key={g}
                className="glass rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
              >
                {g}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <NeonButton to="/join">
              Book a Trainer <ArrowRight className="h-4 w-4" />
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
}