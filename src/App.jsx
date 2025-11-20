import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import CaseStudy from './components/CaseStudy'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <CaseStudy />
      <footer className="py-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Product Designer</p>
          <div className="text-xs text-white/60">Built with care</div>
        </div>
      </footer>
    </div>
  )
}

export default App