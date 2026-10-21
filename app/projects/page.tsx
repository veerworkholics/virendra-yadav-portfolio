'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { projects } from '@/data/projects'

const categories = ['All', 'SaaS', 'Restaurant & POS', 'Business Operations', 'Community', 'Education', 'Commerce']

function isWebsiteUrl(url: string) {
  try {
    return ['https:', 'http:'].includes(new URL(url).protocol)
  } catch {
    return false
  }
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Project Portfolio"
        title="Software for real-world workflows."
        subtitle="Selected applications from my work at Chalo Online and Workholics Infocorp, spanning SaaS, business operations, education, and commerce."
      />
      <div className="mb-9 flex flex-wrap gap-2" aria-label="Filter projects">
        {categories.map(category => (
          <button
            type="button"
            key={category}
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-lg border px-4 py-2 text-sm ${active === category ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-200' : 'border-white/10 text-slate-400 hover:text-white'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.filter(p => active === 'All' || p.category === active).map(project => (
          <article key={project.title} className="professional-card flex flex-col">
            <p className="eyebrow">{project.category}</p>
            <h2 className="mt-5 text-xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-auto pt-7">
              <p className="border-t border-white/10 pt-4 text-xs text-slate-500">{project.company}</p>
              {project.links?.some(link => isWebsiteUrl(link.url)) && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.filter(link => isWebsiteUrl(link.url)).map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label}: ${project.title} (opens in a new tab)`}
                      className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-4 py-2.5 text-sm font-medium text-cyan-200 hover:border-cyan-300/60 hover:bg-cyan-300/20"
                    >
                      {link.label} <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
