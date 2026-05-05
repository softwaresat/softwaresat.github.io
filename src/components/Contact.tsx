import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm lg:p-10">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#bf5700]">Let&apos;s Build Something</div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Open to freelance builds, product work, and research engineering.</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            I&apos;m open to freelance builds, AI prototypes, full-stack apps, research engineering work, and internship
            opportunities.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:ag.satvik@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://github.com/softwaresat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-stone-50 px-6 py-3 text-sm font-medium text-slate-800 transition hover:bg-stone-100"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/satvik-agarwal-563638273/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-stone-50 px-6 py-3 text-sm font-medium text-slate-800 transition hover:bg-stone-100"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-stone-200 bg-stone-50 p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Email</div>
            <div className="mt-2 text-lg text-slate-900">ag.satvik@gmail.com</div>
          </div>
          <div className="rounded-[24px] border border-stone-200 bg-stone-50 p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
              <Phone size={14} />
              Phone
            </div>
            <div className="mt-2 text-lg text-slate-900">737-206-0796</div>
          </div>
        </div>
      </div>
    </section>
  );
}
