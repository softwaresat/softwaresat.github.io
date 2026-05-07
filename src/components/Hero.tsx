import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const summaryPoints = [
  'Electrical and Computer Engineering at UT Austin',
  'Undergraduate Research Assistant at Pestilli Lab',
  'Interested in AI agents, neural networks, and full-stack systems',
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-18 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_58%,#111827_100%)]" />
      <div className="absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-[0.07]" />
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0.35, scale: 0.92 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="pointer-events-none absolute left-[8%] top-[14%] h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
      />
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0.3, scale: 0.9 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
        className="pointer-events-none absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-violet-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mb-7 flex h-32 w-32 items-center justify-center overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_0_50px_rgba(59,130,246,0.18)] backdrop-blur"
          >
            <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
              <div className="h-14 w-14 rounded-full border border-white/20 bg-white/10" />
              <div className="mt-3 px-3 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">Headshot</div>
            </div>
          </motion.div>

          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
            Portfolio
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Satvik Agarwal
          </h1>
          <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
            AI &amp; Full-Stack Engineer Building Agents, Apps, and Research Systems.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m an Electrical and Computer Engineering student at The University of Texas at Austin and an
            Undergraduate Research Assistant at Pestilli Lab, interested in building AI agents, neural networks,
            research pipelines, and full-stack systems that move from concept to working product.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:ag.satvik@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <Mail size={16} />
              ag.satvik@gmail.com
            </a>
            <a
              href="https://github.com/softwaresat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/satvik-agarwal-563638273/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 grid w-full gap-3 sm:grid-cols-3">
            {summaryPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.2 + index * 0.08, ease: 'easeOut' }}
                className="rounded-2xl border border-white/12 bg-white/6 px-4 py-4 text-sm leading-7 text-slate-200 shadow-[0_18px_40px_rgba(2,6,23,0.24)] backdrop-blur"
              >
                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
