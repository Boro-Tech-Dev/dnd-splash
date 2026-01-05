import AnimatedBackground from '@/components/AnimatedBackground'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main className="relative">
      {/* Animated Background Layer */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Footer */}
        <footer className="py-12 px-6 bg-space-navy/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logo/Brand */}
              <div className="text-center md:text-left">
                <p className="text-xl font-bold">
                  <span className="text-electric-cyan">Deploy</span>
                  <span className="text-white/50 mx-2">&</span>
                  <span className="text-vibrant-purple">Deliver</span>
                </p>
                <p className="text-white/50 text-sm mt-1">Coming Mid 2026</p>
              </div>


              {/* Copyright */}
              <div className="text-white/50 text-sm text-center md:text-right">
                <p>&copy; 2026 Deploy & Deliver</p>
                <p className="text-xs mt-1">Built with purpose</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

