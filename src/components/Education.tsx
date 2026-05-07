import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" className="px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl lg:p-8">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-[140px] flex-none items-center rounded-2xl border border-white/10 bg-white/[0.06] px-4">
                <img
                  src={education.logoUrl}
                  alt="The University of Texas at Austin logo"
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">Education</div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
                  Electrical and Computer Engineering at UT Austin.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{education.summary}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Degree</div>
                <div className="mt-2 text-lg font-semibold text-slate-100">{education.degree}</div>
                <div className="mt-2 text-sm text-slate-300">{education.school}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Timeline</div>
                <div className="mt-2 text-lg font-semibold text-slate-100">{education.graduation}</div>
                <div className="mt-2 text-sm text-slate-300">{education.location}</div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Academic Standing</div>
                <div className="mt-2 text-lg font-semibold text-slate-100">{education.classification}</div>
                <div className="mt-2 text-sm text-slate-300">First enrolled {education.firstSemester}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Research</div>
                <div className="mt-2 text-lg font-semibold text-slate-100">{education.researchRole}</div>
                <div className="mt-2 text-sm text-slate-300">Applied AI research in retinotopic mapping</div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-amber-500/20 bg-amber-500/[0.07] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl lg:p-8">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Coursework + Academic Focus</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-50">Coursework that maps cleanly to systems, software, and research.</h3>
            <p className="mt-4 text-base leading-8 text-slate-200">{education.courseworkNote}</p>

            <div className="mt-6 space-y-4">
              {education.courseworkGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-amber-300">{group.label}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
