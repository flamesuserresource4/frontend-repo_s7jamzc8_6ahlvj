import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2">
          <a href="#home" className="text-sm font-semibold tracking-tight text-white">PD — Portfolio</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#case-study" className="hover:text-white transition-colors">Case Study</a>
            <a href="mailto:hello@portfolio.design" className="ml-2 rounded-full bg-white text-slate-900 px-3 py-1.5 font-medium hover:bg-slate-100 transition">Contact</a>
          </nav>

          <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/90 p-2" aria-label="Toggle menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 space-y-2 text-sm text-white/80">
            <a href="#about" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg hover:bg-white/5">About</a>
            <a href="#work" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg hover:bg-white/5">Portfolio</a>
            <a href="#case-study" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg hover:bg-white/5">Case Study</a>
            <a href="mailto:hello@portfolio.design" className="block px-2 py-2 rounded-lg hover:bg-white/5">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
