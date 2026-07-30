import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      data-reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function NeonButton({
  to,
  href,
  children,
  variant = "solid",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  const cls =
    variant === "solid"
      ? "animated-gradient text-primary-foreground neon"
      : "glass text-foreground hover:border-primary/60";
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:scale-105 ${cls}`;
  if (to)
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  return (
    <a href={href} className={base}>
      {children}
    </a>
  );
}

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-32">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 lg:px-8">
        <h1 data-reveal className="text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p data-reveal className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
}