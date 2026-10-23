'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillCard } from '@/components/SkillCard'
import { skills } from '@/data/skills'
import { Layers, ShieldCheck, Database, Zap, Cpu } from 'lucide-react'

const categories = ['All', 'Backend', 'Architecture', 'Database', 'Frontend', 'Tools']

const competencies = [
  {
    icon: Layers,
    title: 'Laravel & MVC Architecture',
    text: '7+ years crafting scalable enterprise systems, queues, scheduled tasks, and robust multi-tenant architectures.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure REST APIs & JWT',
    text: 'Authored 100+ endpoints with stateless JWT authentication, role-based ACLs, and resilient webhook handlers.',
  },
  {
    icon: Database,
    title: 'High-Volume MySQL Tuning',
    text: 'Advanced query profiling (EXPLAIN), schema normalization, indexing, and optimizing sub-second query execution.',
  },
  {
    icon: Cpu,
    title: '3rd-Party Integrations',
    text: 'Smooth integrations with payment gateways (Razorpay, Stripe), SMS (MSG91), and WhatsApp Cloud API notification bots.',
  },
]

export default function SkillsPage() {
  const [active, setActive] = useState('All')
  const visibleSkills = skills.filter(skill => active === 'All' || skill.category === active)

  return (
    <div className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-60 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Core Competencies & Stack"
          title="Developed for Performance & Reliability"
          subtitle="A comprehensive breakdown of my 7+ years across backend architecture, database optimization, third-party integrations, and team tooling."
        />

        {/* Competencies Highlights */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((comp, idx) => {
            const Icon = comp.icon
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-glow backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-slate-900/80"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                  <Icon size={24} />
                </div>
                <h2 className="text-base font-bold text-white transition group-hover:text-cyan-200">
                  {comp.title}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{comp.text}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Category Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5">
          {categories.map(category => {
            const isSelected = active === category
            const count =
              category === 'All'
                ? skills.length
                : skills.filter(s => s.category === category).length

            return (
              <button
                type="button"
                key={category}
                onClick={() => setActive(category)}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isSelected
                    ? 'border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-violet-600/20 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                    : 'border border-white/10 bg-slate-950/70 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isSelected ? 'bg-cyan-400/20 text-cyan-200' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map(skill => (
            <SkillCard
              key={skill.skill}
              skill={skill.skill}
              category={skill.category}
              description={skill.description}
              icon={skill.icon}
              level={skill.level}
              experienceYears={skill.experienceYears}
              tags={skill.tags}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
