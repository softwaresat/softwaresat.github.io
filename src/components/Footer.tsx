export function Footer() {
  return (
    <footer className="border-t border-stone-200 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>Satvik Agarwal</div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:ag.satvik@gmail.com" className="transition hover:text-slate-900">
            ag.satvik@gmail.com
          </a>
          <a href="https://github.com/softwaresat" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/satvik-agarwal-563638273/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
