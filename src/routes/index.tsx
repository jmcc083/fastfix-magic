import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Smartphone,
  BatteryCharging,
  Gamepad2,
  DoorOpen,
  Laptop,
  Droplets,
  Phone,
  Menu,
  Printer,
  Unlock,
  HardDrive,
} from "lucide-react";
import logo from "@/assets/clones-tech-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clones Tech Repair — Premium Device Repair in Clones" },
      {
        name: "description",
        content:
          "Fast, honest, expert repairs for phones, tablets, consoles and smart home systems. Same-day service. Fair prices. Trusted across Clones.",
      },
      { property: "og:title", content: "Clones Tech Repair — Premium Device Repair in Clones" },
      {
        property: "og:description",
        content:
          "Same-day phone, tablet, console and smart home repairs in Clones, Co. Monaghan. Honest pricing, expert work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Clones Tech Repair",
          description:
            "Premium, honest device repair in Clones — phones, tablets, consoles and smart home systems.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Clones",
            addressRegion: "Co. Monaghan",
            addressCountry: "IE",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "4" },
        }),
      },
    ],
  }),
});

function FadeIn({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Smartphone,
    title: "Screen & Display Repair",
    body: "Cracked, shattered or unresponsive — phone and tablet screens replaced with precision, often while you wait.",
  },
  {
    icon: BatteryCharging,
    title: "Battery & Charging Ports",
    body: "Won't hold a charge or won't charge at all? We diagnose and repair batteries and charging ports fast.",
  },
  {
    icon: Gamepad2,
    title: "Console & Gaming Repair",
    body: "Nintendo Switch, PlayStation and Xbox repairs — from charging faults to joystick drift and dock issues.",
  },
  {
    icon: DoorOpen,
    title: "Smart Home & Intercom Systems",
    body: "From door entry systems to smart intercoms that won't connect to your phone — we sort connectivity issues properly, not just patch them.",
  },
  {
    icon: Laptop,
    title: "Laptop & Computer Repair",
    body: "Slow, cracked, or acting up — hardware diagnostics and repair for laptops and desktops alike.",
  },
  {
    icon: Droplets,
    title: "Water Damage & Diagnostics",
    body: "Dropped it in water? Don't panic. Free diagnosis to assess what's recoverable before any work begins.",
  },
  {
    icon: Unlock,
    title: "Unlocking, Sales & Accessories",
    body: "Phone unlocking, software fixes, and a shop full of handsets, tablets and accessories — smartphones, tablets and laptops, sold and set up.",
  },
  {
    icon: HardDrive,
    title: "Software & Data Transfer",
    body: "Operating system installs, virus removal and safe transfer of your photos, contacts and files between devices.",
  },
  {
    icon: Printer,
    title: "Printing, Scanning & Binding",
    body: "Printing, laminating, scanning and bookbinding — walk-in document services right in The Diamond.",
  },
];

const pillars = [
  {
    title: "Genuinely Fast",
    body: "Most common repairs — screens, charging ports, batteries — are sorted in 30 to 60 minutes, not days.",
  },
  {
    title: "Fair, Transparent Pricing",
    body: "You'll know the cost before we start. No inflated quotes, no surprise add-ons.",
  },
  {
    title: "Problems Other Shops Won't Touch",
    body: "Tricky connectivity issues, smart systems, consoles — if it's electronic, we'll take a proper look.",
  },
  {
    title: "A Face You Can Trust",
    body: 'Our customers don\'t just recommend "the shop" — they ask for Sam by name. That\'s the standard every repair is held to.',
  },
];

const steps = [
  {
    num: "01",
    title: "Walk In or Book Ahead",
    body: "Bring your device by, or reach out to save your spot.",
  },
  {
    num: "02",
    title: "Free Diagnosis",
    body: "We identify the issue and give you a clear, honest quote.",
  },
  {
    num: "03",
    title: "Expert Repair",
    body: "Most repairs are completed same-day, often within the hour.",
  },
  {
    num: "04",
    title: "Walk Out Working",
    body: "Tested, checked, and handed back better than you expected.",
  },
];

const testimonials = [
  {
    quote:
      "Had issues with an intercom system not connecting to phone — these guys had it all sorted in 30 minutes. Great spot, highly recommend.",
    who: "Colm O'Reilly",
    when: "January 2024",
  },
  {
    quote:
      "Got a charging port fixed for a Nintendo Switch Lite. Sam was really friendly and sorted my issue with no hassle. Fully recommend.",
    who: "Colm O'Reilly",
    when: "January 2024",
  },
  {
    quote:
      "Sam is fantastic at his job. Excellent service, and doesn't charge you over the odds. Highly recommend.",
    who: "Dolores Collins",
    when: "September 2022",
  },
  {
    quote:
      "Dropped my phone today, smashed the screen. Took it in and it was repaired better than new within 1 hour! Fabulous service, thank you Sam.",
    who: "Mary Trant",
    when: "September 2021",
  },
];

const trustStats = [
  { value: "5.0", label: "Average Customer Rating" },
  { value: "30–60 min", label: "Typical Turnaround Time" },
  { value: "100%", label: "Honest, No-Overcharge Pricing" },
  { value: "All Ages", label: "Phones, Consoles & Smart Systems" },
];

const btnPrimary =
  "inline-flex items-center gap-2 rounded-full border border-transparent px-7 py-3.5 text-[15px] font-semibold text-primary-foreground [background:var(--gradient-brand)] [box-shadow:var(--shadow-brand)] transition-all duration-200 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-brand-lg)]";
const btnOutline =
  "inline-flex items-center gap-2 rounded-full border border-brand bg-transparent px-7 py-3.5 text-[15px] font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent";

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5 font-display text-[22px] font-bold tracking-[1px]">
            <img src={logo.url} alt="Clones Tech Repair logo" className="size-9" />
            CLONES<span className="text-brand">TECH</span>
          </a>

          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col gap-5 border-b border-border bg-surface p-6 text-[15px] font-medium md:static md:flex md:flex-row md:gap-9 md:border-0 md:bg-transparent md:p-0`}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground transition-colors hover:text-brand-dark"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className={`${btnOutline} hidden px-5 py-2.5 md:inline-flex`}>
              <Phone className="size-4" />
              Call Now
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden"
            >
              <Menu className="size-6 text-foreground" />
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero-glow relative flex min-h-screen items-center overflow-hidden px-0 pb-24 pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[10%] -top-[20%] size-[600px] rounded-full blur-[40px] [background:radial-gradient(circle,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_70%)]"
          />
          <div className="container relative z-10 mx-auto max-w-[1180px] px-6">
            <div className="max-w-[720px]">
              <span className="eyebrow mb-3.5">Clones' Trusted Repair Specialists</span>
              <h1 className="mb-5 text-[clamp(38px,5.5vw,64px)] font-bold leading-[1.1]">
                Precision Tech Repair, <br />
                <span className="brand-text">Restored to Perfection.</span>
              </h1>
              <p className="mb-9 max-w-[560px] text-lg text-muted-foreground">
                From smashed screens to smart intercom systems, Clones Tech Repair delivers premium,
                honest, same-day device care — done right the first time, every time.
              </p>
              <div className="mb-10 flex flex-wrap gap-4">
                <a href="#contact" className={btnPrimary}>
                  Book Your Repair
                </a>
                <a href="#contact" className={btnOutline}>
                  Call the Shop
                </a>
              </div>
              <div className="flex flex-wrap gap-7 text-sm text-muted-foreground">
                <p>
                  <strong className="font-semibold text-brand-dark">★★★★★</strong> 5-star rated
                  locally
                </p>
                <p>
                  Repairs from <strong className="font-semibold text-brand-dark">30 minutes</strong>
                </p>
                <p>Phones · Consoles · Smart Home Systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="border-y border-border bg-surface py-7">
          <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-5 px-6 text-center">
            {trustStats.map((s) => (
              <div key={s.label} className="min-w-[150px] flex-1">
                <strong className="mb-1 block font-display text-[26px] text-brand-dark">
                  {s.value}
                </strong>
                <span className="text-[13px] text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section id="services" className="py-24">
          <div className="mx-auto max-w-[1180px] px-6">
            <FadeIn className="mb-14 max-w-[640px]">
              <span className="eyebrow mb-3.5">What We Fix</span>
              <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold">
                One shop. Every device that matters.
              </h2>
              <p className="text-base text-muted-foreground">
                If it plugs in, connects, or lights up — we've probably already fixed one just like
                it.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <FadeIn key={s.title}>
                  <article className="h-full rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand">
                    <div className="mb-5 flex size-13 items-center justify-center rounded-full border border-brand [background:linear-gradient(135deg,color-mix(in_oklab,var(--brand)_20%,transparent),color-mix(in_oklab,var(--brand)_5%,transparent))]">
                      <s.icon className="size-6 text-brand-dark" />
                    </div>
                    <h3 className="mb-2.5 font-sans text-[19px] font-semibold">{s.title}</h3>
                    <p className="text-[14.5px] text-muted-foreground">{s.body}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why" className="bg-surface py-24">
          <div className="mx-auto max-w-[1180px] px-6">
            <FadeIn className="mb-14 max-w-[640px]">
              <span className="eyebrow mb-3.5">Why Clones Trusts Us</span>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold">
                Real skill. No nonsense. No overcharging.
              </h2>
            </FadeIn>

            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div className="flex flex-col gap-7">
                {pillars.map((p, i) => (
                  <FadeIn key={p.title}>
                    <div className="flex gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand font-display text-[22px] text-brand">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-[17px] font-semibold">{p.title}</h4>
                        <p className="text-[14.5px] text-muted-foreground">{p.body}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn>
                <figure className="relative rounded-lg border border-border bg-card p-10">
                  <span
                    aria-hidden
                    className="absolute left-6 top-2.5 font-display text-[80px] leading-none text-brand opacity-30"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative z-10 mb-6 text-[17px]">
                    "Sam is fantastic at his job. Excellent service, and doesn't charge you over the
                    odds."
                  </blockquote>
                  <figcaption className="text-sm font-semibold text-brand-dark">
                    Dolores Collins <span className="font-normal text-muted-foreground">— verified customer</span>
                  </figcaption>
                </figure>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24">
          <div className="mx-auto max-w-[1180px] px-6">
            <FadeIn className="mb-14 max-w-[640px]">
              <span className="eyebrow mb-3.5">How It Works</span>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold">
                Simple, honest, fast — from drop-off to fixed.
              </h2>
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <FadeIn key={s.num}>
                  <div>
                    <div className="mb-2.5 font-display text-[38px] text-brand opacity-50">
                      {s.num}
                    </div>
                    <h4 className="mb-2 text-[17px] font-semibold">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="bg-surface py-24">
          <div className="mx-auto max-w-[1180px] px-6">
            <FadeIn className="mb-14 max-w-[640px]">
              <span className="eyebrow mb-3.5">In Their Words</span>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold">What Clones is saying.</h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <FadeIn key={i}>
                  <figure className="h-full rounded-lg border border-border bg-card p-8">
                    <div className="mb-3.5 tracking-[2px] text-brand">★★★★★</div>
                    <blockquote className="mb-4.5 text-[15.5px]">"{t.quote}"</blockquote>
                    <figcaption className="text-[13.5px] text-muted-foreground">
                      <strong className="font-semibold text-foreground">{t.who}</strong> — {t.when}
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="pb-24">
          <div className="mx-auto max-w-[1180px] px-6">
            <FadeIn>
              <div className="cta-band flex flex-col items-center gap-6 rounded-lg border border-brand px-8 py-11 text-center md:flex-row md:justify-between md:px-12 md:py-15 md:text-left">
                <h3 className="max-w-[480px] text-[clamp(22px,3vw,30px)] font-bold">
                  Don't live with a broken screen. Get it fixed today.
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#contact" className={btnPrimary}>
                    <Phone className="size-4" />
                    Call the Shop
                  </a>
                  <a href="#contact" className={btnOutline}>
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border bg-surface pb-8 pt-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="mb-4 flex items-center gap-2.5 font-display text-[22px] font-bold tracking-[1px]">
                <img src={logo.url} alt="Clones Tech Repair logo" className="size-9" />
                CLONES<span className="text-brand">TECH</span>
              </p>
              <p className="text-[14.5px] text-muted-foreground">
                Premium, honest device repair in the heart of Clones. Phones, tablets, consoles and
                smart home systems — fixed fast, fixed right.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-[15px] font-semibold text-brand-dark">Visit / Contact</h4>
              <p className="mb-2.5 text-[14.5px] text-muted-foreground">
                The Diamond, Clones, Co. Monaghan, H23 W181, Ireland
              </p>
              <a
                href="tel:+353858734871"
                className="mb-2.5 block text-[14.5px] text-muted-foreground transition-colors hover:text-brand-dark"
              >
                +353 85 873 4871
              </a>
              <a
                href="mailto:clonestech@gmail.com"
                className="block text-[14.5px] text-muted-foreground transition-colors hover:text-brand-dark"
              >
                clonestech@gmail.com
              </a>
            </div>
            <div>
              <h4 className="mb-4 text-[15px] font-semibold text-brand-dark">Opening Hours</h4>
              <p className="mb-2.5 text-[14.5px] text-muted-foreground">Mon – Fri: 9:00 – 17:30</p>
              <p className="mb-2.5 text-[14.5px] text-muted-foreground">Saturday: 9:30 – 14:00</p>
              <p className="mb-2.5 text-[14.5px] text-muted-foreground">Sunday: Closed</p>
              <a
                href="https://facebook.com"
                className="block text-[14.5px] text-muted-foreground transition-colors hover:text-brand-dark"
              >
                Find Us on Facebook →
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 border-t border-border pt-6 text-[13px] text-muted-foreground">
            <p>© 2026 Clones Tech Repair. All rights reserved.</p>
            <p>Built on trust, one repair at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
