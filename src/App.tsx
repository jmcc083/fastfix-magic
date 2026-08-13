import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  Clock3,
  DoorOpen,
  Gamepad2,
  HardDrive,
  Laptop,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Unlock,
  Wrench,
} from "lucide-react";
import logo from "@/assets/clones-tech-logo.png.asset.json";
import shopFront from "@/assets/clones-tech-shop.png.asset.json";
import p3 from "@/assets/product-3.png.asset.json";
import p4 from "@/assets/product-4.png.asset.json";
import p5 from "@/assets/product-5.png.asset.json";
import p6 from "@/assets/product-6.png.asset.json";
import p7 from "@/assets/product-7.png.asset.json";
import p8 from "@/assets/product-8.png.asset.json";
import p9 from "@/assets/product-9.png.asset.json";
import p10 from "@/assets/product-10.png.asset.json";
import p11 from "@/assets/product-11.png.asset.json";
import p12 from "@/assets/product-12.png.asset.json";

const PHONE = "+353858734871";
const PHONE_DISPLAY = "085 873 4871";
const LANDLINE_DISPLAY = "047 52594";
const FACEBOOK = "https://www.facebook.com/clonestech/";
const GOOGLE_MAPS = "https://www.google.com/maps/search/?api=1&query=The+Diamond%2C+Clones%2C+H23+W181";

const assetUrl = (asset: { url: string }) =>
  asset.url.startsWith("http") ? asset.url : `https://fastfix-magic.lovable.app${asset.url}`;

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
      { threshold: 0.12 },
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
  { label: "Repairs", href: "#services" },
  { label: "Why Clones Tech", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "In Store", href: "#shop" },
  { label: "Visit", href: "#visit" },
];

const services = [
  {
    icon: Smartphone,
    title: "Phone & Tablet Repair",
    body: "Cracked screens, damaged displays, buttons and everyday faults across phones, iPads and tablets.",
  },
  {
    icon: BatteryCharging,
    title: "Batteries & Charging Ports",
    body: "Device not charging, cable feeling loose or battery dying too fast? We’ll diagnose the cause first.",
  },
  {
    icon: Gamepad2,
    title: "Console & Gaming Repair",
    body: "Nintendo Switch, PlayStation and Xbox issues — including charging faults, ports and controller problems.",
  },
  {
    icon: Laptop,
    title: "Laptop & Computer Repair",
    body: "Slow systems, hardware faults, upgrades and troubleshooting for laptops and desktop computers.",
  },
  {
    icon: DoorOpen,
    title: "Smart Devices & Connectivity",
    body: "Intercoms and devices that refuse to connect properly. If it’s an unusual tech problem, bring it in.",
  },
  {
    icon: HardDrive,
    title: "Software & Data Transfer",
    body: "Software issues, setup, virus removal and help moving contacts, photos and files between devices.",
  },
  {
    icon: Unlock,
    title: "Unlocking, Phones & Accessories",
    body: "Unlocking, handsets, tablets, chargers, cables, cases and practical advice on the right product for you.",
  },
  {
    icon: Printer,
    title: "Printing & Document Services",
    body: "Walk-in printing, scanning, laminating and binding services from the shop in The Diamond.",
  },
];

const products = [
  { img: p3, name: "Laptop Power Adapters", detail: "Universal power options & connectors" },
  { img: p4, name: "USB-C & Display Cables", detail: "HDMI, charging & connectivity" },
  { img: p5, name: "Car Charging", detail: "Wireless holders & chargers" },
  { img: p6, name: "Webcams & Computer Gear", detail: "Useful everyday accessories" },
  { img: p7, name: "Portable Media", detail: "Players & compact devices" },
  { img: p8, name: "In-Car Tech", detail: "FM transmitters & fast charging" },
  { img: p9, name: "Phone Holders", detail: "Magnetic & dashboard mounting" },
  { img: p10, name: "Easy-Use Phones", detail: "Big-button handset options" },
  { img: p11, name: "Streaming Devices", detail: "TV & entertainment tech" },
  { img: p12, name: "Home Cameras", detail: "Wi-Fi security & smart-home gear" },
];

const reviews = [
  {
    quote:
      "Had issues with an intercom system not connecting to phone, these guys had it all sorted in 30mins. Great spot. Highly recommend.",
    who: "Local customer",
    meta: "Intercom connectivity repair",
  },
  {
    quote:
      "Got a charging port fixed for a Nintendo Switch Lite. Sam was really friendly and sorted my issue with no hassle. Fully recommend. Great service.",
    who: "Colm O’Reilly",
    meta: "Nintendo Switch Lite repair",
  },
  {
    quote: "Sam is fantastic at his job. Excellent service, and doesn't charge you over the odds. Highly recommend.",
    who: "Dolores Collins",
    meta: "Customer recommendation",
  },
  {
    quote:
      "Dropped my phone today, smashed the screen. Took it in and it was repaired better than new within 1 hour! Fabulous service, thank you Sam.",
    who: "Mary Trant",
    meta: "Phone screen repair",
  },
  {
    quote: "Really fast efficient service, very friendly staff too. Would definitely recommend.",
    who: "Teresa Stewart",
    meta: "Customer recommendation",
  },
];

const reasons = [
  {
    icon: Clock3,
    title: "Fast when it matters",
    body: "Customer reviews mention fixes completed in as little as 30–60 minutes. Turnaround depends on the fault and parts required.",
  },
  {
    icon: ShieldCheck,
    title: "Fair, straight answers",
    body: "The reputation is built around helpful service and sensible pricing — not pushing people into replacing devices unnecessarily.",
  },
  {
    icon: Wrench,
    title: "More than phone screens",
    body: "Consoles, laptops, intercoms, accessories and awkward connectivity issues make Clones Tech a proper local tech problem-solver.",
  },
  {
    icon: MapPin,
    title: "Local and easy to reach",
    body: "Based right in The Diamond, Clones — somewhere customers can walk into and speak to a real person about the problem.",
  },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-7 py-3.5 text-[15px] font-semibold text-primary-foreground [background:var(--gradient-brand)] [box-shadow:var(--shadow-brand)] transition-all duration-200 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-brand-lg)]";
const btnDark =
  "inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-foreground px-7 py-3.5 text-[15px] font-semibold text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand-dark";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3.5 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-display text-[20px] font-bold tracking-[.04em]">
            <img src={assetUrl(logo)} alt="Clones Tech Repair logo" className="size-9 rounded-md object-contain" />
            <span>CLONES<span className="text-brand">TECH</span></span>
          </a>

          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col gap-5 border-b border-border bg-background p-6 text-[14px] font-medium md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          >
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE}`} className={`${btnPrimary} hidden px-5 py-2.5 md:inline-flex`}>
              <Phone className="size-4" /> Call now
            </a>
            <button type="button" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)} className="md:hidden">
              <Menu className="size-6" />
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero-glow relative overflow-hidden pb-18 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-accent px-3 py-1.5 text-[12px] font-semibold text-brand-dark">
                <Sparkles className="size-3.5" /> Local tech repair in The Diamond, Clones
              </div>
              <h1 className="mb-6 text-[clamp(44px,6.5vw,78px)] font-bold leading-[.98] tracking-[-.035em]">
                Broken tech?<br />
                <span className="brand-text">Bring it to Sam.</span>
              </h1>
              <p className="mb-8 max-w-[610px] text-[17px] leading-7 text-muted-foreground sm:text-lg">
                Phone smashed? Switch not charging? Intercom won’t connect? Clones Tech is the local place for fast, friendly repairs and straight answers — without the hassle.
              </p>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${PHONE}`} className={btnPrimary}>
                  <Phone className="size-4" /> Call for a repair
                </a>
                <a href={FACEBOOK} target="_blank" rel="noreferrer" className={btnDark}>
                  <MessageCircle className="size-4" /> Message on Facebook
                </a>
              </div>
              <div className="grid max-w-[650px] grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                {["Fair local pricing", "Fast turnaround where possible", "Phones · consoles · laptops + more"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-brand-dark"><Check className="size-3" /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-5 -z-10 rounded-[38px] bg-accent/80 blur-2xl" />
                <figure className="hero-photo overflow-hidden rounded-[30px] border border-border bg-card p-2 shadow-[0_28px_80px_rgba(25,20,20,.16)]">
                  <img src={assetUrl(shopFront)} alt="Clones Tech Repair shop in The Diamond, Clones" className="aspect-[4/4.7] w-full rounded-[24px] object-cover" />
                </figure>
                <div className="absolute -bottom-5 -left-3 max-w-[250px] rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:-left-8">
                  <div className="mb-1 flex gap-0.5 text-brand">{[1,2,3,4,5].map((n) => <Star key={n} className="size-4 fill-current" />)}</div>
                  <p className="text-sm font-semibold">“Excellent service, and doesn’t charge you over the odds.”</p>
                  <p className="mt-1 text-xs text-muted-foreground">— Dolores Collins</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="border-y border-border bg-ink py-7 text-white">
          <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-5 text-center sm:px-6 lg:grid-cols-4">
            <div><strong className="block font-display text-2xl">Since 2019</strong><span className="text-xs text-white/65">Serving Clones</span></div>
            <div><strong className="block font-display text-2xl">Fast fixes</strong><span className="text-xs text-white/65">When the repair allows</span></div>
            <div><strong className="block font-display text-2xl">Fair prices</strong><span className="text-xs text-white/65">Praised by customers</span></div>
            <div><strong className="block font-display text-2xl">Real people</strong><span className="text-xs text-white/65">Local, friendly service</span></div>
          </div>
        </section>

        <section id="services" className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
            <FadeIn className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-[690px]">
                <span className="eyebrow mb-3">Repairs & tech help</span>
                <h2 className="text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] tracking-[-.025em]">More than a phone repair shop.</h2>
              </div>
              <p className="max-w-[390px] text-muted-foreground">If it charges, connects, displays, stores data or refuses to work the way it should, it’s worth asking Clones Tech.</p>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <FadeIn key={s.title}>
                  <article className="service-card group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/45 hover:shadow-lg">
                    <div className="mb-7 flex size-11 items-center justify-center rounded-xl bg-accent text-brand-dark transition-transform group-hover:scale-105">
                      <s.icon className="size-5" />
                    </div>
                    <h3 className="mb-2 font-sans text-[17px] font-semibold">{s.title}</h3>
                    <p className="text-[14px] leading-6 text-muted-foreground">{s.body}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
            <FadeIn className="mb-12 max-w-[720px]">
              <span className="eyebrow mb-3">Why Clones Tech</span>
              <h2 className="mb-4 text-[clamp(34px,4vw,52px)] font-bold leading-[1.05] tracking-[-.025em]">Fast. Fair. Local. That’s the whole idea.</h2>
              <p className="text-lg text-muted-foreground">No call centre. No confusing repair process. Just bring the problem in and get a straight answer from someone who knows the work.</p>
            </FadeIn>

            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((r) => (
                <FadeIn key={r.title}>
                  <article className="flex h-full gap-5 rounded-2xl border border-border bg-background p-6 sm:p-7">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-background"><r.icon className="size-5" /></div>
                    <div><h3 className="mb-2 font-sans text-lg font-semibold">{r.title}</h3><p className="text-sm leading-6 text-muted-foreground">{r.body}</p></div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
              <FadeIn>
                <span className="eyebrow mb-3">How it works</span>
                <h2 className="mb-4 text-[clamp(34px,4vw,50px)] font-bold leading-[1.05]">From broken to sorted.</h2>
                <p className="mb-7 text-muted-foreground">The website should make contacting the shop feel as easy as the service itself.</p>
                <a href={`tel:${PHONE}`} className={btnPrimary}>Call {PHONE_DISPLAY}<ArrowRight className="size-4" /></a>
              </FadeIn>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["01", "Bring it in", "Walk into the shop or call first if you want to explain the issue."],
                  ["02", "Get it checked", "The problem is diagnosed before you’re pushed towards any repair."],
                  ["03", "Know the options", "Get a clear explanation of what can be done and what makes sense."],
                  ["04", "Get back connected", "Once repaired, the device is checked and ready to get back into your hands."],
                ].map(([num,title,body]) => (
                  <FadeIn key={num}>
                    <div className="rounded-2xl border border-border p-6"><span className="mb-5 block font-display text-4xl text-brand/45">{num}</span><h3 className="mb-2 font-sans text-lg font-semibold">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{body}</p></div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-ink py-20 text-white sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
            <FadeIn className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><span className="mb-3 block text-xs font-semibold uppercase tracking-[.2em] text-brand-soft">Customer reviews</span><h2 className="text-[clamp(34px,4vw,52px)] font-bold leading-[1.05]">Don’t take the website’s word for it.</h2></div>
              <p className="max-w-[410px] text-white/62">Speed, friendliness, fair pricing and unusual fixes come up again and again in local recommendations.</p>
            </FadeIn>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              {reviews.map((r, i) => (
                <FadeIn key={r.who + i} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                  <figure className="h-full rounded-2xl border border-white/10 bg-white/[.045] p-6 sm:p-7">
                    <div className="mb-4 flex gap-0.5 text-brand-soft">{[1,2,3,4,5].map((n)=><Star key={n} className="size-4 fill-current" />)}</div>
                    <blockquote className="mb-6 text-[15.5px] leading-7 text-white/90">“{r.quote}”</blockquote>
                    <figcaption><strong className="block text-sm">{r.who}</strong><span className="text-xs text-white/48">{r.meta}</span></figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
            <FadeIn className="mb-11 max-w-[700px]">
              <span className="eyebrow mb-3">Also in store</span>
              <h2 className="mb-4 text-[clamp(34px,4vw,50px)] font-bold leading-[1.05]">Useful tech, without ordering blind online.</h2>
              <p className="text-muted-foreground">Chargers, cables, phones, car accessories, cameras and everyday gadgets — with someone there to help you choose the right one.</p>
            </FadeIn>
            <div className="flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
              {products.map((p) => (
                <figure key={p.name} className="group min-w-[210px] snap-start overflow-hidden rounded-2xl border border-border bg-card lg:min-w-0">
                  <img src={assetUrl(p.img)} alt={p.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  <figcaption className="p-4"><strong className="block text-sm font-semibold">{p.name}</strong><span className="mt-1 block text-xs text-muted-foreground">{p.detail}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="bg-surface py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-5 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
            <FadeIn>
              <figure className="overflow-hidden rounded-[26px] border border-border bg-card p-2 shadow-sm">
                <img src={assetUrl(shopFront)} alt="Clones Tech Repair storefront" className="aspect-[16/11] w-full rounded-[20px] object-cover" loading="lazy" />
              </figure>
            </FadeIn>
            <FadeIn>
              <span className="eyebrow mb-3">Visit Clones Tech</span>
              <h2 className="mb-5 text-[clamp(34px,4vw,50px)] font-bold leading-[1.05]">Right in the heart of Clones.</h2>
              <p className="mb-7 text-muted-foreground">The Diamond, Clones, Co. Monaghan, H23 W181. Call ahead for a repair query, or drop into the shop and show the team what’s happening.</p>
              <div className="mb-7 space-y-3 text-sm">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 font-semibold hover:text-brand-dark"><span className="flex size-9 items-center justify-center rounded-full bg-background"><Phone className="size-4" /></span>{PHONE_DISPLAY} <span className="font-normal text-muted-foreground">· {LANDLINE_DISPLAY}</span></a>
                <a href="mailto:clonestech@gmail.com" className="flex items-center gap-3 hover:text-brand-dark"><span className="flex size-9 items-center justify-center rounded-full bg-background">@</span>clonestech@gmail.com</a>
                <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-full bg-background"><MapPin className="size-4" /></span>The Diamond, Clones, H23 W181</div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row"><a href={`tel:${PHONE}`} className={btnPrimary}>Call the shop</a><a href={FACEBOOK} target="_blank" rel="noreferrer" className={btnOutline}>Facebook <ArrowRight className="size-4" /></a></div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
            <FadeIn>
              <div className="conversion-card relative overflow-hidden rounded-[28px] border border-brand/20 px-6 py-12 sm:px-12 sm:py-14 lg:flex lg:items-end lg:justify-between lg:gap-10">
                <div className="max-w-[700px]"><span className="eyebrow mb-3">Before you replace it</span><h2 className="mb-4 text-[clamp(36px,5vw,60px)] font-bold leading-[1] tracking-[-.03em]">See if Clones Tech can fix it first.</h2><p className="max-w-[600px] text-muted-foreground">A quick repair may save you the price and hassle of replacing a device you already know.</p></div>
                <div className="mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col"><a href={`tel:${PHONE}`} className={btnPrimary}><Phone className="size-4"/>Call {PHONE_DISPLAY}</a><a href={FACEBOOK} target="_blank" rel="noreferrer" className={btnDark}><MessageCircle className="size-4"/>Message on Facebook</a></div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface pb-24 pt-12 md:pb-8">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr]">
            <div><div className="mb-4 flex items-center gap-2.5 font-display text-xl font-bold"><img src={assetUrl(logo)} alt="Clones Tech Repair" className="size-9 rounded-md"/>CLONES<span className="text-brand">TECH</span></div><p className="max-w-[420px] text-sm leading-6 text-muted-foreground">Local tech repair, device sales and accessories in The Diamond, Clones. Friendly help for the tech you rely on every day.</p></div>
            <div><h3 className="mb-4 font-sans text-sm font-semibold">Contact</h3><a href={`tel:${PHONE}`} className="mb-2 block text-sm text-muted-foreground hover:text-brand-dark">{PHONE_DISPLAY}</a><p className="mb-2 text-sm text-muted-foreground">{LANDLINE_DISPLAY}</p><a href="mailto:clonestech@gmail.com" className="block text-sm text-muted-foreground hover:text-brand-dark">clonestech@gmail.com</a></div>
            <div><h3 className="mb-4 font-sans text-sm font-semibold">Find us</h3><p className="mb-3 text-sm leading-6 text-muted-foreground">The Diamond<br/>Clones, Co. Monaghan<br/>H23 W181</p><a href={FACEBOOK} target="_blank" rel="noreferrer" className="text-sm font-semibold text-brand-dark">Facebook →</a></div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground"><p>© 2026 Clones Tech Repair.</p><p>Fast. Fair. Local.</p></div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-2xl backdrop-blur md:hidden">
        <a href={`tel:${PHONE}`} className={`${btnPrimary} flex-1 px-4 py-3`}><Phone className="size-4"/>Call</a>
        <a href={FACEBOOK} target="_blank" rel="noreferrer" className={`${btnDark} flex-1 px-4 py-3`}><MessageCircle className="size-4"/>Message</a>
      </div>
    </div>
  );
}
