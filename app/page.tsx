"use client";

import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SOURCE_STREAM = [
  "Reuters / central bank signals faster review",
  "AP / committee splits over exchange licensing",
  "FT / three funds pause exposure until ruling",
  "Bloomberg / regulator publishes consultation window",
  "CoinDesk / market makers contest policy read"
];

const CLAIMS = [
  {
    id: "01",
    label: "Breaking",
    claim: "Regulatory council opened review on exchange licensing framework",
    signal: "+18.4%",
    tone: "support"
  },
  {
    id: "02",
    label: "Contested",
    claim: "Institutional desks reduced exposure after consultation leak",
    signal: "51 / 49",
    tone: "split"
  },
  {
    id: "03",
    label: "Reversal",
    claim: "Policy delay probability flipped after second-source confirmation",
    signal: "-12.7%",
    tone: "reverse"
  }
];

const PIPELINE = [
  ["ingest", "trusted headlines land within seconds"],
  ["cluster", "duplicates collapse into one event hub"],
  ["canonize", "the event becomes an explicit triple"],
  ["signal", "support and opposition move in public"]
];

const FEEDS = ["Hot conviction", "Most contested", "Consensus reversing", "Fresh claims"];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.5
  });

  const apertureRotate = useTransform(smoothProgress, [0, 1], [0, 120]);
  const apertureScale = useTransform(smoothProgress, [0, 0.55, 1], [1, 1.12, 0.92]);
  const fieldY = useTransform(smoothProgress, [0, 1], [0, -180]);
  const scanX = useTransform(smoothProgress, [0, 1], ["-12%", "12%"]);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#ece2ce] text-[#11110e]">
      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-[#c7ff35]" style={{ scaleX: smoothProgress }} />

      <section className="hero-shell relative min-h-svh overflow-hidden px-5 py-5 sm:px-8 lg:px-10">
        <motion.div aria-hidden="true" className="signal-field" style={{ y: fieldY }}>
          <motion.div className="signal-aperture" style={{ rotate: apertureRotate, scale: apertureScale }}>
            <span />
            <span />
            <span />
            <span />
          </motion.div>
          <motion.div className="scan-blade" style={{ x: scanX }} />
        </motion.div>

        <header className="relative z-20 flex items-start justify-between gap-4">
          <a href="#" className="brand-lockup" aria-label="walrus home">
            <span>walrus</span>
            <i>news-to-claims engine</i>
          </a>
          <nav className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.18em] md:flex">
            {["engine", "signals", "access"].map((item) => (
              <a key={item} href={`#${item}`} className="nav-chip">
                {item}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 grid min-h-[calc(100svh-7rem)] items-end gap-10 pb-8 pt-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="kicker">Live conviction, not headline theater</p>
            <h1 className="hero-title">
              walrus turns breaking news into stake-readable claims.
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-end">
              <p className="max-w-md text-base leading-7 text-[#3c392f] sm:text-lg">
                It watches trusted sources, compresses messy coverage into canonical triples, and exposes where support,
                opposition, and reversals are moving.
              </p>
              <a href="#access" className="primary-action">
                request access
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="operator-panel"
          >
            <div className="panel-topline">
              <span>event hub / live</span>
              <span>09:47:18</span>
            </div>
            <div className="source-stream">
              {SOURCE_STREAM.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="claim-slab">
              <b>canonical claim</b>
              <p>Regulatory council {"->"} opened review on {"->"} exchange licensing framework</p>
            </div>
            <div className="signal-meter" aria-label="support 61 percent, oppose 39 percent">
              <span style={{ width: "61%" }}>support 61</span>
              <i style={{ width: "39%" }}>oppose 39</i>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="engine" className="relative border-y border-[#11110e] bg-[#11110e] text-[#ece2ce]">
        <div className="mx-auto grid w-[min(1180px,92vw)] gap-12 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            className="lg:sticky lg:top-16 lg:self-start"
          >
            <p className="kicker text-[#c7ff35]">the machine</p>
            <h2 className="section-title max-w-[9ch] text-[#f7edd9]">From noise to an accountable signal trail.</h2>
          </motion.div>

          <div className="pipeline-stack">
            {PIPELINE.map(([title, copy], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 42 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="pipeline-row"
              >
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="signals" className="signal-section relative px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto w-[min(1180px,92vw)]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <p className="kicker">signal surfaces</p>
            <h2 className="section-title max-w-4xl">No static feature grid. Just the live reads people open for.</h2>
          </motion.div>

          <div className="mt-12 divide-y divide-[#11110e] border-y border-[#11110e]">
            {CLAIMS.map((item) => (
              <motion.article key={item.id} className="claim-row" whileHover={{ x: 10 }}>
                <span className="claim-id">{item.id}</span>
                <div>
                  <p>{item.label}</p>
                  <h3>{item.claim}</h3>
                </div>
                <strong data-tone={item.tone}>{item.signal}</strong>
              </motion.article>
            ))}
          </div>

          <div className="feed-marquee mt-12" aria-label="Available feed types">
            <div>
              {[...FEEDS, ...FEEDS].map((feed, index) => (
                <span key={`${feed}-${index}`}>{feed}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="access-section border-t border-[#11110e] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <p className="kicker">early access</p>
            <h2 className="section-title max-w-3xl">Bring the scanner online before the public launch.</h2>
          </motion.div>

          <form
            className="access-form"
            onSubmit={(event) => {
              event.preventDefault();
              if (!email.trim()) {
                return;
              }
              setSubmitted(true);
              setEmail("");
            }}
          >
            <label htmlFor="email">work email</label>
            <div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@desk.com"
              />
              <button type="submit">{submitted ? "logged" : "join"}</button>
            </div>
            <p>Launch notes only. No digest sludge.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
