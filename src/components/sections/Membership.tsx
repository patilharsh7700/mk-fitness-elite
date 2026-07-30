import { Check, X, Crown } from "lucide-react";
import { NeonButton, SectionHeading } from "@/components/site/ui-bits";
import { PLANS } from "@/data/site";

export function Membership() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title={
            <>
              CHOOSE YOUR <span className="text-gradient">TRAINING PLAN</span>
            </>
          }
          subtitle="Flexible memberships for every goal. Walk into either branch or call us for current offers."
        />

        <div className="mt-16 grid items-center gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <article
              key={plan.name}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className={`relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.featured
                  ? "neon border border-primary/50 bg-card lg:scale-105 lg:py-12"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <>
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/30 blur-3xl" />
                  <span className="animated-gradient absolute right-6 top-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    <Crown className="h-3 w-3" /> Premium
                  </span>
                </>
              )}
              <p className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                {plan.tag}
              </p>
              <h3 className="relative mt-3 text-5xl">{plan.name}</h3>
              <ul className="relative mt-8 grid gap-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
                {plan.excluded.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground line-through">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-muted">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="relative mt-9">
                <NeonButton to="/join" variant={plan.featured ? "solid" : "ghost"}>
                  Get Membership
                </NeonButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}