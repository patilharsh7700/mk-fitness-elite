import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Clock,
} from "lucide-react";
import { BRAND, NAV, PHONES, WHATSAPP, BRANCHES } from "@/data/site";
import { useScrollReveal } from "@/hooks/use-scroll-fx";

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className="animated-gradient h-full transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

function MouseGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[55] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen blur-3xl md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, var(--primary) 0%, transparent 65%)",
        transition: "left .25s ease-out, top .25s ease-out",
      }}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass py-2 shadow-[0_10px_40px_-25px_black]" : "py-4"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 lg:px-8">
      <Link to="/" className="flex min-w-0 items-center gap-3">
  <img
    src="/src/assets/logo.png"
    alt="MK Fitness Club Logo"
    className="h-11 w-11 shrink-0 rounded-2xl object-cover"
  />
  <span className="min-w-0">
    <span className="block truncate font-display text-xl leading-none tracking-wide">
      M.K FITNESS CLUB
    </span>
    <span className="block truncate text-[11px] tracking-[0.3em] text-muted-foreground">
      PUNAWALE · MARUNJI
    </span>
  </span>
</Link>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                path === item.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/join"
            className="animated-gradient ml-3 rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="glass grid h-11 w-11 place-items-center rounded-2xl xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-3 rounded-3xl p-4 xl:hidden">
          <div className="grid gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                  path === item.to ? "bg-primary/15 text-primary" : "text-foreground/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join"
              className="animated-gradient mt-2 rounded-xl px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="font-display text-3xl">M.K FITNESS CLUB</span>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A premium fitness club in Punawale and Marunji, Pune — certified trainers, modern
            equipment and a community that pushes you forward.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="glass grid h-10 w-10 place-items-center rounded-xl transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-widest text-primary">QUICK LINKS</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-widest text-primary">BRANCHES</h3>
          <ul className="mt-4 grid gap-4 text-sm text-muted-foreground">
            {BRANCHES.map((b) => (
              <li key={b.area} className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">{b.area}</strong>
                  <br />
                  {b.address}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-widest text-primary">CONTACT & HOURS</h3>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {PHONES.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Punawale — Open 24 Hours
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Marunji — 6 AM to 11 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND}. All rights reserved.
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
