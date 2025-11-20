export default function Work(){
  const items = [
    { title: 'Lens App', tag: 'Mobile • UX/UI', img: 'https://images.unsplash.com/photo-1548254253-3d6d8f1f2615?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Arc Studio', tag: 'Web • SaaS', img: 'https://images.unsplash.com/photo-1542759564-4a8da0e3e1d4?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Frame Kit', tag: 'Design System', img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop' },
  ];
  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Selected Work</h2>
          <a href="#case-study" className="text-sm text-white/70 hover:text-white">See case study</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href="#case-study" className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-white font-medium">{p.title}</p>
                <p className="text-xs text-white/60 mt-1">{p.tag}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
