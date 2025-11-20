export default function About(){
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">About</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I'm a product designer focused on creating minimal, modern interfaces for web and mobile. I combine user research, interaction design, and visual design to craft experiences that feel effortless.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-4xl font-semibold text-white">8+</p>
                <p className="mt-1 text-xs text-white/60">Years experience</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-4xl font-semibold text-white">40+</p>
                <p className="mt-1 text-xs text-white/60">Projects shipped</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-4xl font-semibold text-white">12</p>
                <p className="mt-1 text-xs text-white/60">Case studies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
