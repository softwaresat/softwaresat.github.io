import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-amber-400">Selected Builds</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50 sm:text-4xl">From Idea to MVP</h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Products, agents, and systems that move from architecture to shipped behavior. The emphasis is on practical
            AI, real deployment, and interfaces that make complex workflows usable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
