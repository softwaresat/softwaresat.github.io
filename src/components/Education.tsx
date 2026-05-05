import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" className="px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm lg:p-8">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-[140px] flex-none items-center rounded-2xl border border-stone-200 bg-white px-4">
                <img
                  src={education.logoUrl}
                  alt="The University of Texas at Austin logo"
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#bf5700]">Education</div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Electrical and Computer Engineering at UT Austin.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{education.summary}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Degree</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{education.degree}</div>
                <div className="mt-2 text-sm text-slate-600">{education.school}</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Timeline</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{education.graduation}</div>
                <div className="mt-2 text-sm text-slate-600">{education.location}</div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Academic Standing</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{education.classification}</div>
                <div className="mt-2 text-sm text-slate-600">First enrolled {education.firstSemester}</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Research</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{education.researchRole}</div>
                <div className="mt-2 text-sm text-slate-600">Applied AI research in retinotopic mapping</div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-stone-200 bg-[#fff8f3] p-6 shadow-sm lg:p-8">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#bf5700]">Coursework + Academic Focus</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Coursework that maps cleanly to systems, software, and research.</h3>
            <p className="mt-4 text-base leading-8 text-slate-700">{education.courseworkNote}</p>

            <div className="mt-6 space-y-4">
              {education.courseworkGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-[#f0d7c3] bg-white/80 p-4">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#bf5700]">{group.label}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-stone-200 bg-white px-3 py-2 text-sm text-slate-700"
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
