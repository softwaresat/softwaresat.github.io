import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#bf5700]">Technical Skills</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A stack built for product speed and ML depth.</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-slate-700">
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
