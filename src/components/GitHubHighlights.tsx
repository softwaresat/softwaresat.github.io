const repos = [
  {
    name: 'GreenCompass',
    link: 'https://github.com/softwaresat/GreenCompass',
    summary: 'AI dietary navigation agent with autonomous menu analysis.',
  },
  {
    name: 'StageNextDoor',
    link: 'https://github.com/softwaresat/StageNextDoor',
    summary: 'Geo-spatial mobile product for local artist and event discovery.',
  },
  {
    name: 'SkillParse-Engine',
    link: 'https://github.com/softwaresat/SkillParse-Engine',
    summary: 'Fine-tuned LLM system for structured skill extraction.',
  },
  {
    name: 'Polara',
    link: 'https://github.com/softwaresat/Polara',
    summary: 'Full-stack benefits dashboard with accessibility-aware product design.',
  },
  {
    name: 'Peggle-Dash',
    link: 'https://github.com/softwaresat/Peggle-Dash',
    summary: 'Interactive browser game with motion, state, and gameplay logic.',
  },
];

export function GitHubHighlights() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#bf5700]">GitHub / Open Source Highlights</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Selected repositories from softwaresat.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-[26px] border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:bg-stone-50"
            >
              <div className="text-lg font-semibold text-slate-900">{repo.name}</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">{repo.summary}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
