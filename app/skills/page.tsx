'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillCard } from '@/components/SkillCard'
import { skills } from '@/data/skills'

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

export default function SkillsPage() {
  const [active, setActive] = useState('All')
  const visibleSkills = skills.filter(skill => active === 'All' || skill.category === active)
  return (
    <section className="relative overflow-hidden px-5 py-20 lg:px-8">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="PHP, Laravel & CodeIgniter" title="Expertise Across the Stack" subtitle="The tools behind my work: PHP frameworks, relational data, JWT authentication, payment integrations, and responsive interfaces." />

        <div className="mb-12 flex flex-wrap items-center gap-3">
          {categories.map(category => (
            <button key={category} onClick={() => setActive(category)} aria-pressed={active === category} className="rounded-full border border-white/10 bg-slate-900/80 px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300">
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {visibleSkills.map(skill => (
              <SkillCard key={skill.skill} skill={skill.skill} category={skill.category} description={skill.description} icon={skill.icon} level={skill.level} />
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
