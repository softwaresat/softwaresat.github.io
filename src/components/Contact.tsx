import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_60px_rgba(2,6,23,0.32)] backdrop-blur-xl lg:p-10">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-amber-400">Let&apos;s Build Something</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50 sm:text-4xl">Open to freelance builds, product work, and research engineering.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I&apos;m open to freelance builds, AI prototypes, full-stack apps, research engineering work, and internship
            opportunities.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:ag.satvik@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://github.com/softwaresat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.09]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/satvik-agarwal-563638273/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.09]"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</div>
            <div className="mt-2 text-lg text-slate-100">ag.satvik@gmail.com</div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
              <Phone size={14} />
              Phone
            </div>
            <div className="mt-2 text-lg text-slate-100">737-206-0796</div>
          </div>
        </div>
      </div>
    </section>
  );
}
