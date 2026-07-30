import { useState } from "react";
import { toast } from "sonner";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { BRANCHES, PHONES, WHATSAPP } from "@/data/site";
import { SectionHeading } from "@/components/site/ui-bits";

const inputCls =
  "w-full rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function ContactSection({ heading = true }: { heading?: boolean }) {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks! Our team will call you back shortly.");
    }, 700);
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {heading && (
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                LET'S GET YOU <span className="text-gradient">STARTED</span>
              </>
            }
            subtitle="Call, WhatsApp or drop your details — we'll reach out with plans and timings."
          />
        )}

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form data-reveal="left" onSubmit={onSubmit} className="glass grid gap-4 rounded-[2rem] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Name
                <input required name="name" placeholder="Your full name" className={inputCls} />
              </label>
              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Phone
                <input required name="phone" type="tel" placeholder="10 digit number" className={inputCls} />
              </label>
            </div>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Email
              <input required name="email" type="email" placeholder="you@email.com" className={inputCls} />
            </label>
            <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Message
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us your goal — fat loss, muscle gain, general fitness..."
                className={inputCls}
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="animated-gradient neon mt-2 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              <Send className="h-4 w-4" /> {sending ? "Sending..." : "Send Enquiry"}
            </button>
          </form>

          <div data-reveal="right" className="grid content-start gap-4">
            <div className="glass grid gap-4 rounded-[2rem] p-8">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="flex items-center gap-3 text-lg font-semibold transition-colors hover:text-primary"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  {p}
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="animated-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              {BRANCHES.map((b) => (
                <p key={b.area} className="flex gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong className="text-foreground">{b.area}</strong> — {b.address} · {b.timing}
                  </span>
                </p>
              ))}
            </div>
            <iframe
              title="M.K Fitness Club location map"
              src={BRANCHES[0].map}
              loading="lazy"
              className="h-72 w-full rounded-[2rem] border border-border grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}