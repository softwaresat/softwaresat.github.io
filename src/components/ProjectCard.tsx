import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, Github } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl ${
        priority ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="h-full p-5 sm:p-6">
        <div className="flex h-full flex-col">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">{project.category}</div>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-50">{project.title}</h3>
              </div>
              {project.featured ? (
                <span className="shrink-0 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                  Featured
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-base leading-7 text-slate-100">{project.hook}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
          </div>

          {project.metrics?.length ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-sm font-medium leading-6 text-slate-200"
                >
                  {metric}
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-100 transition hover:bg-white/[0.09]"
              >
                <Github size={16} />
                View GitHub
              </a>
            ) : null}
            <button
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/[0.08]"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
            >
              Case Study
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
              Talk about a similar build
              <ArrowUpRight size={16} />
            </a>
          </div>

          {expanded ? (
            <div className="mt-6 space-y-3 rounded-[24px] border border-white/10 bg-slate-950/45 p-5">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-sm leading-7 text-slate-200">
                  <div className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
