import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-amber-400">Technical Skills</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50 sm:text-4xl">A stack built for product speed and ML depth.</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
