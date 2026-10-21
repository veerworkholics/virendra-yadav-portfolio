'use client'

import { motion } from 'framer-motion'
import { Atom, Code, Cloud, Database, Feather, Github, GitBranch, Layers, Layout, Monitor, Rocket, Send, Server, ShieldCheck, Smartphone, Zap } from 'lucide-react'

interface SkillCardProps {
  skill: string
  category: string
  description: string
  icon: string
  level?: number
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
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

const categoryStyles: Record<string, { iconBg: string; iconText: string; border: string; badge: string }> = {
  Frontend: {
    iconBg: 'from-sky-500 to-cyan-400',
    iconText: 'text-sky-300',
    border: 'border-sky-400/10',
    badge: 'text-sky-300',
  },
  Backend: {
    iconBg: 'from-violet-500 to-cyan-500',
    iconText: 'text-cyan-300',
    border: 'border-violet-400/10',
    badge: 'text-cyan-300',
  },
  Database: {
    iconBg: 'from-cyan-500 to-cyan-400',
    iconText: 'text-cyan-300',
    border: 'border-cyan-400/10',
    badge: 'text-cyan-300',
  },
  Mobile: {
    iconBg: 'from-cyan-500 to-slate-400',
    iconText: 'text-cyan-300',
    border: 'border-cyan-400/10',
    badge: 'text-cyan-300',
  },
  Tools: {
    iconBg: 'from-violet-500 to-cyan-400',
    iconText: 'text-violet-300',
    border: 'border-violet-400/10',
    badge: 'text-violet-300',
  },
}

export function SkillCard({ skill, category, description, icon, level }: SkillCardProps) {
  const Icon = iconMap[icon] ?? Code
  const style = categoryStyles[category] ?? categoryStyles.Frontend

  return (
    <motion.div whileHover={{ y: -4 }} className={`group overflow-hidden rounded-2xl border ${style.border} bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.45)] transition duration-300 hover:border-white/20`}>
      <div className="mb-5">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-3">
            <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${style.iconBg} text-white shadow-lg shadow-slate-950/20`}>
              <Icon size={28} />
            </span>
            <div>
              <p className="text-base font-semibold text-white">{skill}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{category}</p>
            </div>
          </div>
          {level ? <span className={`rounded-full bg-white/5 px-3 py-1 text-xs font-semibold ${style.badge}`}>{level}%</span> : null}
        </div>
      </div>
      <p className="mb-6 text-sm leading-7 text-slate-400">{description}</p>
      <div hidden={!level} className="h-3 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full bg-gradient-to-r ${style.iconBg}`} style={{ width: `${level ?? 80}%` }} />
      </div>
    </motion.div>
  )
}

