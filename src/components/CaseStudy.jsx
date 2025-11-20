export default function CaseStudy(){
  return (
    <section id="case-study" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Case Study: Lens App</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              A photography-focused mobile app designed to simplify manual controls for enthusiasts. The goal was to make pro-level features approachable while retaining a clean, modern feel.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>— Research: interviews, journey maps</li>
              <li>— Design: flows, wireframes, high-fidelity UI</li>
              <li>— Delivery: design system and dev handoff</li>
            </ul>
            <a href="#home" className="inline-block mt-8 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-100 transition">Get in touch</a>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNlJTIwc3R1ZHl8ZW58MHwwfHx8MTc2MzY0NTUzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Case study" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
