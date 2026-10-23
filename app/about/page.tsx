import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/SectionHeading'
import { profile as profileData, experience, education } from '@/data/profile'
import { sitePath } from '@/data/site-path'
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle2,
  Download,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  Users,
  Code2,
  Layers,
} from 'lucide-react'

const profile = { ...profileData, resume: sitePath(profileData.resume) }

export const metadata = {
  title: 'About Virendra Yadav | Senior Laravel Developer & Team Lead',
  description:
    'Career background, development philosophy, professional experience, and academic credentials of Virendra Yadav, Senior Laravel Developer and Team Lead in Indore, India.',
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-80 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Profile & Background"
          title="Architecting Systems. Leading Developers."
          subtitle="A 7+ year journey building dependable SaaS architectures, optimizing high-concurrency databases, and translating complex business requirements into maintainable software."
        />

        {/* Top Profile Summary Card */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-glow backdrop-blur-md sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                <Sparkles size={14} />
                Senior Laravel Developer & Technical Team Lead
              </div>

              <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                Virendra JI <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">Yadav</span>
              </h2>

              <p className="text-base leading-relaxed text-slate-300">
                {profile.summary}
              </p>

              <p className="text-sm leading-relaxed text-slate-400">
                {profile.aboutLong}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5">
                  <MapPin size={14} className="text-cyan-400" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5">
                  <Calendar size={14} className="text-cyan-400" />
                  7+ Years Industry Experience
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:brightness-110"
                >
                  <Download size={15} />
                  Download Complete CV
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-5 py-2.5 text-xs font-bold text-emerald-200 transition hover:bg-emerald-500/25"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Metrics & Pillars */}
            <div className="grid grid-cols-2 gap-4">
              {profile.metrics.map(metric => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-center shadow-sm"
                >
                  <p className="text-3xl font-black text-cyan-300">
                    {metric.value}
                    {metric.suffix}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <Briefcase size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Professional Experience</h2>
              <p className="text-xs text-slate-400">Track record of technical leadership and application delivery</p>
            </div>
          </div>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6 shadow-glow backdrop-blur-md transition hover:border-cyan-400/30 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-200">
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-cyan-400">
                      {item.company} <span className="text-slate-500 font-normal">· {item.location}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.details}</p>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Highlights & Impact:
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-1">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.technologies && (
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                    {item.technologies.map(t => (
                      <span
                        key={t}
                        className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Education & Credentials */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
              <GraduationCap size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Education & Academic Foundation</h2>
              <p className="text-xs text-slate-400">Blending technical computing with organizational & business administration</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {education.map(edu => (
              <div
                key={edu.degree}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition hover:border-violet-400/30"
              >
                <div>
                  <span className="inline-block rounded-full bg-violet-400/10 px-2.5 py-1 text-[11px] font-bold text-violet-300">
                    {edu.year}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white transition group-hover:text-cyan-200">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-cyan-400">{edu.field}</p>
                  {edu.institution && (
                    <p className="mt-0.5 text-xs text-slate-400">{edu.institution}</p>
                  )}
                  {edu.description && (
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Philosophy Cards */}
        <div>
          <h2 className="mb-8 text-xl font-bold text-white sm:text-2xl">Development & Leadership Philosophy</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Layers size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Pragmatic Architecture</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Building codebases that remain maintainable over years. Prioritizing modular service layers, clear database relationships, and strict API contracts over trend-chasing.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                <Users size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Mentorship & Code Quality</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Elevating teams through constructive peer reviews, pair programming, documentation, and coaching junior developers to build dependable habits.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Code2 size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Business Alignment</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Understanding the real commercial objective behind every feature—whether it is reducing billing friction, accelerating report speeds, or ensuring zero downtime during peak loads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
