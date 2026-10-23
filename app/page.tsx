'use client'

import Image from 'next/image'
import Link from 'next/link'
import { sitePath } from '@/data/site-path'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap'
import {
  ArrowRight,
  Code2,
  Database,
  Users,
  ShieldCheck,
  Server,
  Zap,
  ExternalLink,
  MessageCircle,
  Download,
  CheckCircle2,
  Sparkles,
  Layers,
  Award,
  ChevronRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'
import { profile } from '@/data/profile'

const stats = [
  { label: 'Years Experience', value: 7, suffix: '+' },
  { label: 'Projects Delivered', value: 20, suffix: '+' },
  { label: 'APIs & Services', value: 100, suffix: '+' },
  { label: 'Uptime & Reliability', value: 99, suffix: '.9%' },
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

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

function MagneticButton({
  href,
  children,
  className,
  target,
  rel,
  download,
}: {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  download?: boolean | string
}) {
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
      target={target}
      rel={rel}
      download={download}
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

  // Featured landmark projects with authentic live screenshots
  const featuredProjects = [
    projects.find(p => p.id === 'webmittra')!,
    projects.find(p => p.id === 'fretbox-saas')!,
    projects.find(p => p.id === 'sbgbt-jobjatra')!,
    projects.find(p => p.id === 'davv-flash-exam')!,
    projects.find(p => p.id === 'shubhlagans')!,
    projects.find(p => p.id === 'smvpst')!,
  ].filter(Boolean)

  return (
    <div className="relative overflow-hidden bg-[#07081c] text-white">
      {/* Background Ambience */}
      <div className="aurora-shell pointer-events-none absolute inset-0 opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-56 w-56 rounded-full border border-violet-400/20 shadow-[0_0_80px_rgba(124,58,237,0.38)]" />
      <div className="pointer-events-none absolute left-28 bottom-20 h-40 w-40 rounded-full border border-cyan-300/20 shadow-[0_0_70px_rgba(56,189,248,0.28)]" />
      <ParticleField />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Status Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.24em] text-violet-200 sm:text-xs">
                  <Sparkles size={13} className="text-cyan-300" />
                  Senior Laravel Developer &amp; Team Lead
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Indore, India
                </span>
              </div>

              {/* Title & Headings */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-300/80 sm:text-sm">
                  Hi, I&apos;m
                </p>
                <h1 className="text-4xl font-black leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="hero-word block">Virendra</span>
                  <span className="hero-word block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                    Yadav
                  </span>
                </h1>
              </div>

              {/* Bio Summary */}
              <p className="hero-copy max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Senior Software Developer &amp; Technical Lead with <strong>7+ years</strong> of experience
                building high-performance SaaS, ERP, Point-of-Sale (POS), and enterprise web applications
                using <strong>Laravel, CodeIgniter, PHP 8, and MySQL</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="hero-copy flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <MagneticButton
                  href="/Virendra_Yadav_CV.pdf"
                  download="Virendra_Yadav_CV.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3.5 text-xs font-bold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.22)] transition duration-300 hover:brightness-110 sm:px-6 sm:py-4 sm:text-sm"
                >
                  <Download size={16} />
                  Download Resume
                </MagneticButton>

                <MagneticButton
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-5 py-3.5 text-xs font-bold text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.25)] transition duration-300 hover:bg-emerald-500/25 sm:px-6 sm:py-4 sm:text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp Direct
                </MagneticButton>

                <MagneticButton
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3.5 text-xs font-semibold text-slate-100 transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/95 sm:px-6 sm:py-4 sm:text-sm"
                >
                  Explore Projects <ArrowRight size={16} />
                </MagneticButton>
              </div>

              {/* Stats Counters Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 shadow-glow sm:p-5"
                  >
                    <p className="text-2xl font-black text-cyan-300 sm:text-3xl">
                      <CountUp value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 3D Neon Portrait Visual */}
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
                className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.45)] sm:rounded-[2.5rem]"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  style={{ transform: imageTransform }}
                  className="relative h-[340px] w-full sm:h-[430px] lg:h-[540px]"
                >
                  <Image
                    src={sitePath('/virendra-yadav-neon-hero.png')}
                    alt="Virendra Yadav, Senior Laravel Developer & Team Lead"
                    fill
                    priority
                    className="object-contain object-top rounded-[2rem] sm:rounded-[2.5rem]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 75vw, 760px"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE DEVELOPMENT PILLARS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Strengths"
            title="Clean Code. Scalable Architecture. Lasting Impact."
            subtitle="I connect complex commercial needs with maintainable backend architecture, resilient APIs, and disciplined technical leadership."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Resilient Architecture & SaaS',
                text: 'Architecting multi-tenant SaaS, ERPs, and POS systems with isolated schema designs, queues, and clean MVC separation.',
                icon: Code2,
                color: 'from-cyan-500/20 to-blue-500/20 text-cyan-300',
              },
              {
                title: 'High-Concurrency APIs & MySQL',
                text: 'Stateless REST APIs, JWT authentication, query profiling, index optimization, and sub-second transaction processing.',
                icon: Database,
                color: 'from-violet-500/20 to-indigo-500/20 text-violet-300',
              },
              {
                title: 'Technical Leadership & Mentoring',
                text: 'Directing agile delivery, conducting rigorous code reviews, mentoring junior developers, and liaising with stakeholders.',
                icon: Users,
                color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(124,58,237,0.12)] transition duration-300 hover:border-cyan-300/30 hover:bg-slate-900/90"
                >
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURED LANDMARK PROJECTS SECTION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-10">
            <div>
              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                Landmark Builds
              </span>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                Featured Work &amp; Live Systems
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Selected production platforms powering restaurant POS operations, residential SaaS properties, and community portals.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900 px-5 py-2.5 text-xs font-bold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              <span>View All {projects.length} Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map(project => (
              <ProjectCard
                key={project.id || project.title}
                id={project.id}
                title={project.title}
                company={project.company}
                category={project.category}
                description={project.description}
                longDescription={project.longDescription}
                tech={project.tech}
                featured={project.featured}
                image={project.image}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL STACK HIGHLIGHT STRIP */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-8 shadow-glow sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Technical Arsenal
                </span>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Built on 7+ Years of Enterprise PHP Mastery
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  From multi-tenant database normalization to mission-critical payment gateways and WhatsApp Cloud API bots, I deliver end-to-end backends ready for production scale.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/skills"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:brightness-110"
                  >
                    <span>View All Technical Skills</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-5 py-2.5 text-xs font-semibold text-slate-300 transition hover:text-white"
                  >
                    <span>Career Timeline</span>
                  </Link>
                </div>
              </div>

              {/* Quick Tech Badges Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { name: 'Laravel', level: '96%', tag: 'Primary Framework' },
                  { name: 'PHP 8.x', level: '95%', tag: 'Object-Oriented' },
                  { name: 'MySQL', level: '92%', tag: 'Query Optimization' },
                  { name: 'REST APIs', level: '94%', tag: 'JWT & OAuth2' },
                  { name: 'SaaS Tenancy', level: '92%', tag: 'Multi-Tenant' },
                  { name: 'Integrations', level: '93%', tag: 'Razorpay / WhatsApp' },
                ].map(item => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/30"
                  >
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-cyan-400">{item.level}</p>
                    <p className="mt-1 text-[10px] text-slate-400">{item.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/30 bg-gradient-to-br from-violet-950/40 via-slate-900/80 to-cyan-950/40 p-8 shadow-[0_20px_80px_rgba(34,211,238,0.15)] backdrop-blur-md sm:p-14">
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Let&apos;s Build Together
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Ready to Scale Your Next Web Application?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Whether you need senior architecture leadership for a complex SaaS, high-speed API development, or full-stack Laravel delivery, I am available to help you succeed.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg transition hover:brightness-110 sm:text-sm"
              >
                <span>Start a Project Discussion</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-6 py-3.5 text-xs font-bold text-emerald-200 transition hover:bg-emerald-500/25 sm:text-sm"
              >
                <MessageCircle size={16} />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
