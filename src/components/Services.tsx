import { Bot, DatabaseZap, Layers3, Smartphone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const services = [
  {
    icon: Bot,
    title: 'AI Agents & LLM Apps',
    items: [
      'AI agents for web research, classification, and decision workflows',
      'LLM integrations, fine-tuned models, and embedding search',
      'Document, menu, and content analysis systems',
      'Chatbots, assistants, and automation pipelines',
    ],
  },
  {
    icon: Layers3,
    title: 'Full-Stack Web Apps',
    items: [
      'React dashboards and polished product interfaces',
      'Node.js or FastAPI backends',
      'Authentication, database design, and admin panels',
      'Deployment-ready application architecture',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    items: [
      'React Native apps with polished mobile UI',
      'Maps and location-aware product flows',
      'Firebase or Supabase backends',
      'API integrations and workflow design',
    ],
  },
  {
    icon: DatabaseZap,
    title: 'Data + Automation Systems',
    items: [
      'Scraping pipelines and ETL workflows',
      'Python automation and internal tools',
      'Dockerized workflows for reproducibility',
      'Cloud deployment and maintenance paths',
    ],
  },
];

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#bf5700]">Systems I Can Build</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">What I Can Build For You</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            AI prototypes, full-stack products, mobile apps, and automation systems - built with the speed of a
            freelancer and the structure of an engineer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.05 }}
                className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f0d7c3] bg-[#fff8f3] text-[#bf5700]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                <div className="mt-5 space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#bf5700]" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
