"use client";

import { useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  GlassCard,
  Pill,
  PrimaryButton,
  SecondaryButton,
  SectionTitle
} from "@/components/ui";
import { ParticleField } from "@/components/particle-field";

const PRODUCT_NAME = "walrus";
const TAGLINE = "A real-time signal layer for breaking news.";

const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#feeds", label: "Feeds" },
  { href: "#event-hubs", label: "Event hubs" },
  { href: "#waitlist", label: "Waitlist" }
];

const feedCards = [
  {
    title: "Breaking",
    copy: "Freshly structured claims from new headlines, ranked by recency and source quality."
  },
  {
    title: "Hot",
    copy: "Claims with accelerating support activity and high momentum in the last few hours."
  },
  {
    title: "Contested",
    copy: "Events where support and opposition remain close, signaling unresolved narratives."
  },
  {
    title: "Reversal",
    copy: "Claims that flipped from net support to net opposition, or the opposite, in real time."
  }
];

const timelineEntries = [
  {
    time: "09:02",
    event: "Headline cluster created",
    note: "6 trusted sources merged into one event hub."
  },
  {
    time: "09:08",
    event: "Canonical claim generated",
    note: "Subject, predicate, and object mapped for onchain signaling."
  },
  {
    time: "09:21",
    event: "Signal surge detected",
    note: "Support stake climbed 42% in 13 minutes."
  },
  {
    time: "09:47",
    event: "Contestation alert",
    note: "Opposition accelerated and net conviction narrowed."
  }
];

const valueProps = [
  {
    title: "Not truth. Signal.",
    copy: "The system exposes conviction dynamics, not final verdicts."
  },
  {
    title: "See contestation early.",
    copy: "Surface uncertainty while narratives are still forming."
  },
  {
    title: "Track reversals in real time.",
    copy: "Detect when consensus direction starts to flip."
  }
];

function FloatingCard({
  className,
  delay,
  children
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 220,
    damping: 20,
    mass: 0.7
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 220,
    damping: 20,
    mass: 0.7
  });

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6.8, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { scrollY } = useScroll();
  const bgSlowY = useTransform(scrollY, [0, 1600], [0, 220]);
  const bgFastY = useTransform(scrollY, [0, 1600], [0, -180]);
  const cardsParallaxY = useTransform(scrollY, [0, 1000], [0, 120]);

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <div className="relative overflow-x-clip pb-14">
      <ParticleField className="pointer-events-none fixed inset-0 -z-10 opacity-40" />

      <motion.div
        style={{ y: bgFastY }}
        className="pointer-events-none absolute left-[-12rem] top-24 -z-[1] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
      />
      <motion.div
        style={{ y: bgSlowY }}
        className="pointer-events-none absolute right-[-10rem] top-[30rem] -z-[1] h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
      />

      <header className="sticky top-4 z-40 mx-auto mt-4 w-[min(1120px,94vw)] rounded-2xl border border-white/15 bg-[#060f20]/70 px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2.5">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/[0.03]">
              <span className="h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-glow to-emerald-300" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">{PRODUCT_NAME}</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-mist md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <PrimaryButton href="#waitlist" className="px-4 py-2.5 text-xs sm:text-sm">
            Join waitlist
          </PrimaryButton>
        </div>
      </header>

      <main>
        <section className="relative mx-auto grid w-[min(1120px,94vw)] items-center gap-14 pb-20 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            className="relative z-10"
          >
            <Pill className="mb-5">Intuition-powered signal discovery</Pill>
            <h1 className="max-w-[12ch] text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
              <span className="text-gradient">{TAGLINE}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist/90 sm:text-lg">
              {PRODUCT_NAME} transforms trusted headlines into structured claims and reveals where community conviction
              is strengthening, contested, or reversing.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href="#waitlist">Join waitlist</PrimaryButton>
              <SecondaryButton href="#how">See how it works</SecondaryButton>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm">
              <GlassCard className="p-4">
                <p className="text-2xl font-semibold text-white">4</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mist">Core Feeds</p>
              </GlassCard>
              <GlassCard className="p-4">
                <p className="text-2xl font-semibold text-white">Live</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mist">Signal Layer</p>
              </GlassCard>
              <GlassCard className="p-4">
                <p className="text-2xl font-semibold text-white">Fast</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mist">Event Mapping</p>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div style={{ y: cardsParallaxY }} className="relative mx-auto h-[470px] w-full max-w-[540px] [perspective:1400px]">
            <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-tr from-cyan-300/15 via-transparent to-blue-300/10 blur-2xl" />

            <FloatingCard
              delay={0.1}
              className="glass surface-glow absolute left-0 top-12 w-[72%] rounded-2xl p-5 will-change-transform"
            >
              <Pill className="mb-3">Headline ingestion</Pill>
              <p className="text-sm text-white/95">Global wire reports regulatory hearing update from three regions.</p>
              <div className="mt-4 flex gap-2 text-[11px] text-mist">
                <span className="rounded-full border border-white/15 px-2 py-1">Reuters</span>
                <span className="rounded-full border border-white/15 px-2 py-1">Bloomberg</span>
                <span className="rounded-full border border-white/15 px-2 py-1">WSJ</span>
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.35}
              className="glass surface-glow absolute right-0 top-40 w-[70%] rounded-2xl p-5 will-change-transform"
            >
              <Pill className="mb-3">Canonical claim</Pill>
              <p className="text-sm text-white/95">Subject: Regulatory body</p>
              <p className="text-sm text-white/95">Predicate: launched review on</p>
              <p className="text-sm text-white/95">Object: cross-border exchange activity</p>
            </FloatingCard>

            <FloatingCard
              delay={0.6}
              className="glass surface-glow absolute bottom-2 left-10 w-[74%] rounded-2xl p-5 will-change-transform"
            >
              <Pill className="mb-3">Support vs oppose</Pill>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-mist">
                    <span>Support</span>
                    <span>63%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[63%] rounded-full bg-gradient-to-r from-emerald-300 to-glow" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-mist">
                    <span>Oppose</span>
                    <span>37%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[37%] rounded-full bg-gradient-to-r from-rose-400 to-orange-300" />
                  </div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </section>

        <motion.section
          id="how"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="mx-auto mt-6 w-[min(1120px,94vw)]"
        >
          <GlassCard>
            <SectionTitle
              eyebrow="How it works"
              title="A simple flow built for speed and clarity"
              description="From ingestion to conviction, the pipeline keeps every event machine-readable and economically interpretable."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Ingest",
                  copy: "Trusted sources stream in continuously with source-level quality controls."
                },
                {
                  title: "Structure",
                  copy: "Headlines are clustered into event hubs and converted into canonical graph claims."
                },
                {
                  title: "Signal",
                  copy: "Community stakes support or opposition, exposing narrative momentum in real time."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <Pill className="mb-4">Step 0{index + 1}</Pill>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/90">{step.copy}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        <motion.section
          id="feeds"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="mx-auto mt-6 w-[min(1120px,94vw)]"
        >
          <GlassCard>
            <SectionTitle
              eyebrow="Feeds"
              title="Four lenses for narrative discovery"
              description="Scan what is new, what is accelerating, what is contested, and what is reversing."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {feedCards.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/90">{item.copy}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        <motion.section
          id="event-hubs"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="relative mx-auto mt-6 w-[min(1120px,94vw)]"
        >
          <motion.div
            style={{ y: bgSlowY }}
            className="pointer-events-none absolute right-10 top-4 -z-[1] h-44 w-44 rounded-full bg-cyan-300/10 blur-2xl"
          />

          <GlassCard>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
              <SectionTitle
                eyebrow="Event hubs"
                title="Clustered stories with timeline context"
                description="Each hub groups related reporting into one event surface with a timeline and signal history."
              />

              <div className="rounded-2xl border border-white/10 bg-[#071226]/80 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white">Hub Timeline</h3>
                  <Pill>Live updates</Pill>
                </div>
                <ol className="relative space-y-4 pl-4">
                  <span className="pointer-events-none absolute bottom-1 left-[5px] top-1 w-px bg-gradient-to-b from-glow/60 via-white/20 to-transparent" />
                  {timelineEntries.map((entry) => (
                    <li key={`${entry.time}-${entry.event}`} className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-glow shadow-[0_0_20px_rgba(98,255,210,0.7)]" />
                      <p className="text-xs uppercase tracking-[0.16em] text-mist">{entry.time}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{entry.event}</p>
                      <p className="mt-1 text-sm text-mist/90">{entry.note}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="mx-auto mt-6 w-[min(1120px,94vw)]"
        >
          <GlassCard>
            <SectionTitle
              eyebrow="Why it matters"
              title="Designed for informed interpretation"
              description="Signals reveal how confidence changes over time when news is still unfolding."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {valueProps.map((prop) => (
                <div key={prop.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-white">{prop.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/90">{prop.copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm text-mist/80">
              Signals represent community conviction, not absolute truth.
            </p>
          </GlassCard>
        </motion.section>

        <motion.section
          id="waitlist"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mx-auto mt-6 w-[min(1120px,94vw)]"
        >
          <GlassCard className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-glow/60 to-transparent" />
            <SectionTitle
              eyebrow="Waitlist"
              title="Get launch access"
              description="Join the early cohort for product updates and first-release invites."
            />

            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                if (!email.trim()) {
                  return;
                }
                setSubmitted(true);
                setEmail("");
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-white/20 bg-white/[0.03] px-4 text-white placeholder:text-mist/70 focus:border-glow/70 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 rounded-xl bg-gradient-to-r from-glow to-emerald-300 px-6 text-sm font-bold text-slate-900 transition hover:brightness-105"
              >
                {submitted ? "You're in" : "Join waitlist"}
              </button>
            </form>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                "Atlas Labs",
                "Northstar",
                "Signal Collective",
                "Chainframe"
              ].map((logo) => (
                <span
                  key={logo}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.14em] text-mist"
                >
                  {logo}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm text-mist/85">Launch updates only, no spam.</p>
          </GlassCard>
        </motion.section>
      </main>

      <footer className="mx-auto mt-8 flex w-[min(1120px,94vw)] flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-mist">
        <p>{PRODUCT_NAME} (c) {new Date().getFullYear()}</p>
        <div className="flex flex-wrap items-center gap-5">
          {[
            { label: "Docs", href: "#" },
            { label: "X", href: "#" },
            { label: "Discord", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" }
          ].map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
