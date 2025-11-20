import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[540px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">Product Designer • Creative Technologist</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white tracking-tight">
              Crafting minimal, modern digital products
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg">
              I design clean, intuitive interfaces that balance aesthetics with usability.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#work" className="rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-100 transition">View Work</a>
              <a href="#case-study" className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm text-white/90 hover:bg-white/20 transition">Case Study</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    </section>
  );
}
