'use client'

import { useEffect, useRef, useState } from 'react'

interface TeaserCard {
  icon: JSX.Element
  title: string
  description: string
  color: 'cyan' | 'purple' | 'orange' | 'gradient'
}

const teasers: TeaserCard[] = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Built for Everyone',
    description: 'Our platform is truly designed for everyone. Whether you are looking for a side-hustle or to hustle faster - you are in the right place.',
    color: 'orange',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Learn on the Fly',
    description: 'No prior tech knowledge to get started, for real. We can take you from zero knowledge to launching a website in under an hour! All skill levels are welcome here!',
    color: 'orange',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'We offer over 100 built in self-hosted web applications to help build your business. From simple websites to AI driven applications, we have a service to cover it.',
    color: 'orange',
  },
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200)
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const getColorClasses = (color: TeaserCard['color']) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'border-electric-cyan/20 hover:border-electric-cyan/50',
          bg: 'bg-electric-cyan/5',
          text: 'text-electric-cyan',
          glow: 'group-hover:shadow-electric-cyan/20',
        }
      case 'purple':
        return {
          border: 'border-vibrant-purple/20 hover:border-vibrant-purple/50',
          bg: 'bg-vibrant-purple/5',
          text: 'text-vibrant-purple',
          glow: 'group-hover:shadow-vibrant-purple/20',
        }
      case 'orange':
        return {
          border: 'border-vibrant-orange/20 hover:border-vibrant-orange/50',
          bg: 'bg-vibrant-orange/5',
          text: 'text-vibrant-orange',
          glow: 'group-hover:shadow-vibrant-orange/20',
        }
      case 'gradient':
        return {
          border: 'border-white/10 hover:border-white/30',
          bg: 'bg-gradient-to-br from-electric-cyan/5 to-vibrant-purple/5',
          text: 'gradient-text',
          glow: 'group-hover:shadow-white/10',
        }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Mobile Background */}
      <div className="absolute inset-0 bg-space-navy md:hidden opacity-75"></div>
      
      {/* Split Background */}
      <div className="absolute inset-0 flex hidden md:flex">
        {/* Left Side - DEPLOY (Darker) */}
        <div className="w-1/2 bg-gradient-to-br from-deploy-dark via-space-navy to-deep-purple relative opacity-75">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-cyan rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-electric-cyan/50 rounded-full blur-3xl" />
          </div>
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 229, 255, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0, 229, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Right Side - DELIVER (Lighter) */}
        <div className="w-1/2 bg-gradient-to-bl from-deliver-light via-space-navy to-deep-purple relative opacity-75">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-vibrant-purple rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-vibrant-purple/50 rounded-full blur-3xl" />
          </div>
          {/* Flowing lines */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="flowing" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 0 50 Q 25 25, 50 50 T 100 50" stroke="rgba(176, 38, 255, 0.5)" fill="none" strokeWidth="2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#flowing)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 opacity-95">
        <div className="max-w-6xl mx-auto">
          {/* Main Logo/Title */}
          <div
            className={`text-center mb-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-6">
              {/* DEPLOY */}
              <div className="text-right">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-electric-cyan text-shadow tracking-tight">
                  DEPLOY
                </h1>
                <p className="text-sm md:text-base text-white/70 mt-2 uppercase tracking-widest">
                  Build • Create • Launch
                </p>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-electric-cyan via-white to-vibrant-purple" />
              <div className="lg:hidden w-32 h-px bg-gradient-to-r from-electric-cyan via-white to-vibrant-purple" />

              {/* DELIVER */}
              <div className="text-left">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-vibrant-purple text-shadow tracking-tight">
                  DELIVER
                </h1>
                <p className="text-sm md:text-base text-white/70 mt-2 uppercase tracking-widest">
                  Results • Impact • Success
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p
              className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              A New Way to Build Digital Excellence. We're not just building another tool.<br className="hidden md:block" />
              We're reimagining <span className="gradient-text font-semibold">the entire process</span>.
            </p>

            {/* Launch Date */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-10">
              <div
                className={`inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-base md:text-lg font-semibold gradient-text">
                  Launching Late 2025
                </p>
              </div>
            </div>
          </div>

          {/* Teaser Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teasers.map((teaser, index) => {
              const colors = getColorClasses(teaser.color)
              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el
                  }}
                  className={`group p-4 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl ${colors.glow} ${
                    visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${colors.text} transform group-hover:scale-110 transition-transform duration-300`}>
                      {teaser.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.text}`}>
                      {teaser.title}
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {teaser.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

