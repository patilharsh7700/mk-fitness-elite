import crossfit from "@/assets/crossfit.jpg";
import { NeonButton } from "@/components/site/ui-bits";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          data-reveal="zoom"
          className="relative overflow-hidden rounded-[2.5rem] border border-primary/30 px-6 py-20 text-center"
        >
          <img
            src={crossfit}
            alt="Functional training area"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl leading-[0.95] sm:text-6xl">
              READY TO START YOUR <span className="text-gradient">FITNESS JOURNEY?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Join today. Your first session is on us.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <NeonButton to="/join">Get Membership</NeonButton>
              <NeonButton href="tel:8698967644" variant="ghost">
                Call 8698967644
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}