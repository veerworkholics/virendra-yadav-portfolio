'use client'

import Image from 'next/image'
import { sitePath } from '@/data/site-path'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, Code2, Database, Users } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ScrollToTop } from '@/components/ScrollToTop'

const stats = [
  { label: 'Years Experience', value: 7, suffix: '+' },
  { label: 'Primary Framework', value: 0, suffix: 'Laravel' },
  { label: 'Specialization', value: 0, suffix: 'SaaS' },
]

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start: number | null = null
    const duration = 1400

    const tick = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <span>{value ? display : null}{suffix}</span>
}

function MagneticButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 })

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.35)
    y.set(offsetY * 0.35)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={sitePath(href)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseEnter={handleMove}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

function ParticleField() {
  const particles = Array.from({ length: 18 }, (_, index) => ({
    left: (index * 17 + 7) % 100,
    top: (index * 23 + 11) % 100,
    size: (index % 4) + 2,
    delay: index * 0.2,
    duration: 3.5 + (index % 5) * 0.7,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: '0 0 20px rgba(255,255,255,0.35)',
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -18, 0], x: [0, index % 2 === 0 ? 10 : -10, 0] }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
        />
      ))}
    </div>
  )
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 140, damping: 16 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 140, damping: 16 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textLines = gsap.utils.toArray<HTMLElement>('.hero-word')
      gsap.fromTo(
        textLines,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out' }
      )

      gsap.fromTo(
        '.hero-badge',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' }
      )

      gsap.fromTo(
        '.hero-copy',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.35, ease: 'power3.out' }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x * 18)
    mouseY.set(y * 18)
    rotateY.set(x * 10)
    rotateX.set(y * -10)
  }

  const handlePointerLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  const imageTransform = useMotionTemplate`translate(${mouseX}px, ${mouseY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  return (
    <div className="relative overflow-hidden bg-[#07081c] text-white">
      <div className="aurora-shell pointer-events-none absolute inset-0 opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-56 w-56 rounded-full border border-violet-400/20 shadow-[0_0_80px_rgba(124,58,237,0.38)]" />
      <div className="pointer-events-none absolute left-28 bottom-20 h-40 w-40 rounded-full border border-cyan-300/20 shadow-[0_0_70px_rgba(56,189,248,0.28)]" />
      <ParticleField />

      <section ref={heroRef} className="relative px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className="space-y-6 sm:space-y-8">
              <p className="hero-badge inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-violet-200 sm:px-4 sm:text-xs">Senior Laravel Developer &amp; Team Lead</p>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-300/80 sm:text-sm">Hi, I&apos;m</p>
                <h1 className="text-4xl font-black leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="hero-word block">Virendra</span>
                  <span className="hero-word block bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Yadav</span>
                </h1>
              </div>
              <p className="hero-copy max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl">I build dependable SaaS and business applications with Laravel, CodeIgniter, PHP, and MySQL. With 7+ years of experience, I bring application architecture, REST API development, database optimization, and team leadership to every project.</p>

              <div className="hero-copy flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <MagneticButton href="/Virendra_Yadav_CV.pdf" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.18)] transition duration-300 hover:brightness-110 sm:px-6 sm:py-4">
                  Download Resume
                </MagneticButton>
                <MagneticButton href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-slate-100 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.55),0_20px_60px_rgba(124,58,237,0.18)] transition duration-300 hover:brightness-105 sm:px-6 sm:py-4 animate-[pulse_2.8s_ease-in-out_infinite]">
                  Let&apos;s Talk Code <ArrowRight size={18} />
                </MagneticButton>
                <MagneticButton href="/projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/95 sm:px-6 sm:py-4">
                  View Projects
                </MagneticButton>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.08 }}
                    whileHover={{ rotateX: 8, rotateY: -8, y: -6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/85 p-5 shadow-glow sm:rounded-[2rem] sm:p-6"
                  >
                    <p className="text-xl font-semibold text-white sm:text-2xl">
                      <CountUp value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-2 text-xs text-slate-400 sm:text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              onMouseMove={handlePointerMove}
              onMouseLeave={handlePointerLeave}
              className="relative mx-auto w-full max-w-[760px]"
            >
              <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-violet-100/10 blur-3xl" />
              <div className="absolute -right-10 bottom-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
              <motion.div
                style={{ x: mouseX, y: mouseY, rotateX, rotateY }}
                className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_120px_rgba(15,23,42,0.35)] sm:rounded-[2.5rem]"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  style={{ transform: imageTransform }}
                  className="relative h-[320px] w-full sm:h-[420px] lg:h-[560px]"
                >
                  <Image
                    src={sitePath('/virendra-yadav-neon-hero.png')}
                    alt="Virendra Yadav, Senior Laravel Developer, at a blue and violet workstation"
                    fill
                    className="object-contain rounded-[2rem] object-top sm:rounded-[2.5rem]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 75vw, 760px"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Quick Intro" title="Clean Code. Lasting Impact." subtitle="I connect business needs with maintainable PHP applications, reliable integrations, and thoughtful technical leadership." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Reliable Architecture', text: 'Laravel and CodeIgniter applications for multi-tenant SaaS, ERP, and business workflows.', icon: Code2 },
              { title: 'APIs & Database Design', text: 'REST APIs, JWT authentication, MySQL optimization, and payment and messaging integrations.', icon: Database },
              { title: 'Technical Leadership', text: 'End-to-end delivery, code reviews, developer mentoring, and stakeholder collaboration.', icon: Users },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(124,58,237,0.12)] transition duration-300 hover:border-violet-300/20 hover:bg-slate-900/90"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-cyan-200 shadow-lg shadow-cyan-500/10"><Icon size={24} /></div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{feature.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}




