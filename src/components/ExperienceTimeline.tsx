import { motion, useReducedMotion } from 'framer-motion';
import { experience } from '../data/experience';

export function ExperienceTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#bf5700]">Experience</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Research, product work, and engineering reps.</h2>
        </div>

        <div className="mt-10">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.06 }}
              className="grid gap-6 border-l border-stone-200 pl-6 md:grid-cols-[220px_1fr] md:pl-10"
            >
              <div className="relative pb-10 md:pb-14">
                <div className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border border-[#f0d7c3] bg-[#bf5700] md:-left-[49px]" />
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.period}</div>
              </div>
              <div className="pb-10 md:pb-14">
                <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                  <div className="mt-2 text-sm text-[#bf5700]">{item.company}</div>
                  <div className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600">
                        <div className="mt-2 h-2 w-2 rounded-full bg-[#bf5700]" />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
