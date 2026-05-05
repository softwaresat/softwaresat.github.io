import { motion, useReducedMotion } from 'framer-motion';

const metrics = [
  '30% memory reduction',
  '15% better OOD performance',
  '2 baselines',
  '3 benchmark tasks',
  'Multiple random seeds',
];

const pipeline = [
  'MRI surface data',
  'Preprocessing',
  'fsLR transformation',
  'Neural model',
  'Retinotopic prediction',
  'Evaluation',
];

export function ResearchSpotlight() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="research" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-stone-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#bf5700]">
              Research That Transfers Into Real Engineering
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Machine learning, neuroscience, and systems thinking in the same pipeline.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Retinotopic mapping, cortical geometry, PyTorch pipelines, reproducible benchmarking, and model evaluation.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Satvik works in a real research lab environment at the intersection of machine learning, vision science,
              and engineering systems. The work spans data transformation between native MRI space and fsLR space,
              geometric-aware model development, benchmarking across baselines and tasks, and reproducible evaluation
              through Docker, Python workflows, and careful random seed control.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-slate-800">
                  {metric}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute left-12 top-10 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute right-8 bottom-12 h-48 w-48 rounded-full bg-orange-100 blur-3xl" />
            <div className="relative rounded-[30px] border border-stone-200 bg-stone-50 p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Pipeline View</div>
              <div className="mt-6 space-y-4">
                {pipeline.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#f0d7c3] bg-[#fff8f3] text-sm font-medium text-[#bf5700]">
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-slate-800">{step}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-stone-200 bg-white p-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-slate-900">Research Context</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">
                      Retinotopic mapping models how visual field locations map onto cortical surface areas.
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Collaborators</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">
                      Junbeom Kwon and Franco Pestilli, Pestilli Lab, UT Austin.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
