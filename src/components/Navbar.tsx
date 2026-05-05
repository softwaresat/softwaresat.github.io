import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-stone-200 bg-[#f8f7f4]/90 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button className="text-left" onClick={() => handleNavClick('#top')} aria-label="Go to top of page">
          <div className="text-sm font-semibold tracking-[0.04em] text-slate-900">Satvik Agarwal</div>
          <div className="text-sm text-slate-600">AI + Full-Stack Engineer</div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="text-sm text-slate-600 transition hover:text-slate-950"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700 transition hover:bg-stone-50 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-stone-200 bg-[#f8f7f4]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-left text-sm text-slate-700"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
