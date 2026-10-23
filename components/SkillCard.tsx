'use client'

import { motion } from 'framer-motion'
import {
  Atom,
  Code,
  Cloud,
  Database,
  Feather,
  Github,
  GitBranch,
  Layers,
  Layout,
  Monitor,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react'

interface SkillCardProps {
  skill: string
  category: string
  description: string
  icon: string
  level?: number
  experienceYears?: string
  tags?: string[]
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Layout,
  Zap,
  Atom,
  Layers,
  Feather,
  Server,
  Cloud,
  Database,
  ShieldCheck,
  Smartphone,
  Rocket,
  GitBranch,
  Github,
  Monitor,
  Send,
}

const categoryStyles: Record<
  string,
  { iconBg: string; textAccent: string; border: string; badgeBg: string; barBg: string }
> = {
  Frontend: {
    iconBg: 'from-sky-500 to-cyan-400',
    textAccent: 'text-cyan-300',
    border: 'border-cyan-400/20 hover:border-cyan-400/40',
    badgeBg: 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/25',
    barBg: 'from-cyan-400 to-sky-500',
  },
  Backend: {
    iconBg: 'from-violet-500 to-indigo-600',
    textAccent: 'text-violet-300',
    border: 'border-violet-400/20 hover:border-violet-400/40',
    badgeBg: 'bg-violet-500/10 text-violet-300 border border-violet-400/25',
    barBg: 'from-violet-500 to-indigo-500',
  },
  Database: {
    iconBg: 'from-emerald-500 to-teal-600',
    textAccent: 'text-emerald-300',
    border: 'border-emerald-400/20 hover:border-emerald-400/40',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/25',
    barBg: 'from-emerald-400 to-teal-500',
  },
  Architecture: {
    iconBg: 'from-amber-500 to-orange-600',
    textAccent: 'text-amber-300',
    border: 'border-amber-400/20 hover:border-amber-400/40',
    badgeBg: 'bg-amber-500/10 text-amber-300 border border-amber-400/25',
    barBg: 'from-amber-400 to-orange-500',
  },
  Tools: {
    iconBg: 'from-fuchsia-500 to-pink-600',
    textAccent: 'text-fuchsia-300',
    border: 'border-fuchsia-400/20 hover:border-fuchsia-400/40',
    badgeBg: 'bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-400/25',
    barBg: 'from-fuchsia-500 to-pink-500',
  },
}

export function SkillCard({
  skill,
  category,
  description,
  icon,
  level = 90,
  experienceYears,
  tags = [],
}: SkillCardProps) {
  const Icon = iconMap[icon] ?? Code
  const style = categoryStyles[category] ?? categoryStyles.Backend

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border ${style.border} bg-slate-900/75 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.6)] backdrop-blur-sm transition-all duration-300`}
    >
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/[0.02] blur-xl group-hover:bg-white/[0.06] transition" />

      <div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${style.iconBg} text-white shadow-lg shadow-slate-950/40 transition group-hover:scale-105`}
            >
              <Icon size={24} />
            </span>
            <div>
              <h3 className="text-base font-bold text-white transition group-hover:text-cyan-200">
                {skill}
              </h3>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {category}
              </span>
            </div>
          </div>

          {experienceYears && (
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${style.badgeBg}`}>
              {experienceYears}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-slate-300/90">{description}</p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map(t => (
              <span
                key={t}
                className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.08]">
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-medium">Proficiency</span>
          <span className={`font-semibold ${style.textAccent}`}>{level}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/90">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`h-full rounded-full bg-gradient-to-r ${style.barBg}`}
          />
        </div>
      </div>
    </motion.div>
  )
}
