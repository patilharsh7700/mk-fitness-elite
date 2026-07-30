import { STATS } from "@/data/site";
import { useCounter } from "@/hooks/use-scroll-fx";

function Stat({ value, suffix, label, decimals = 0 }: { value: number; suffix: string; label: string; decimals?: number }) {
  const { ref, display } = useCounter(value, decimals);
  return (
    <div className="glass rounded-[1.75rem] px-6 py-8 text-center transition-transform duration-500 hover:-translate-y-2">
      <span ref={ref} className="font-display text-5xl text-gradient lg:text-6xl">
        {display}
        {suffix}
      </span>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div data-reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}