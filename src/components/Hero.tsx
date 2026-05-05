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
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-28 w-28 flex-none items-center justify-center overflow-hidden rounded-[24px] border border-dashed border-[#bf5700]/35 bg-white shadow-sm">
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#f7f4ef] text-center">
                <div className="h-12 w-12 rounded-full border border-stone-300 bg-stone-100" />
                <div className="mt-3 px-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">Headshot</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 shadow-sm">
                Portfolio
              </div>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Satvik Agarwal
              </h1>
            </div>
          </div>
          <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            AI &amp; Full-Stack Engineer Building Agents, Apps, and Research Systems.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            I&apos;m an Electrical and Computer Engineering student at The University of Texas at Austin and an
            Undergraduate Research Assistant at Pestilli Lab, interested in building AI agents, neural networks,
            research pipelines, and full-stack systems that move from concept to working product.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#f8f7f4]"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 focus:ring-offset-[#f8f7f4]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:ag.satvik@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-stone-50"
            >
              <Mail size={16} />
              ag.satvik@gmail.com
            </a>
            <a
              href="https://github.com/softwaresat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-stone-50"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/satvik-agarwal-563638273/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-stone-50"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {summaryPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-stone-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm">
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, x: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -left-16 top-16 h-44 w-44 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-orange-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="relative">
              <div className="rounded-[24px] border border-stone-200 bg-stone-50 p-6">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">At a glance</div>
                <div className="mt-6 grid gap-4">
                  {[
                    ['School', 'The University of Texas at Austin'],
                    ['Major', 'B.S. Electrical and Computer Engineering'],
                    ['Location', 'Austin, TX'],
                    ['Focus', 'AI agents, neural networks, and product-minded engineering'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1 rounded-2xl border border-stone-200 bg-white p-4">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</div>
                      <div className="text-sm font-medium leading-6 text-slate-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-[#f0d7c3] bg-[#fff8f3] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-[#bf5700]">Current Work</div>
                <div className="mt-3 space-y-3">
                  {[
                    'Undergraduate Research Assistant building retinotopic mapping systems at Pestilli Lab',
                    'Interested in AI agents, neural networks, and rigorous model evaluation',
                    'Builds full-stack apps, mobile products, and technical MVPs end to end',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-[#f0d7c3] bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
