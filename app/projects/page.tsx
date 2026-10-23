'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Layers, XCircle, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

const categories = [
  'All',
  'SaaS',
  'Restaurant & POS',
  'Community',
  'Education',
  'Commerce',
  'Business Operations',
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.company.toLowerCase().includes(query) ||
        project.tech.some(t => t.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-28 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-28 top-72 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio & Systems"
          title="Software for Real-World Workflows"
          subtitle="Explore enterprise SaaS, high-volume POS systems, multi-tenant databases, e-commerce, and education portals delivered across my career."
        />

        {/* Search & Filter Toolbar */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2" aria-label="Filter projects">
            {categories.map(category => {
              const isSelected = activeCategory === category
              const count =
                category === 'All'
                  ? projects.length
                  : projects.filter(p => p.category === category).length

              return (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isSelected}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isSelected
                      ? 'border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-violet-600/20 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                      : 'border border-white/10 bg-slate-950/70 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                      isSelected ? 'bg-cyan-400/20 text-cyan-200' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by tech, name, keyword..."
              className="w-full rounded-full border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-9 text-xs text-slate-200 placeholder-slate-400 outline-none backdrop-blur-md transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-400">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of{' '}
            <strong className="text-white">{projects.length}</strong> projects
          </span>
          {activeCategory !== 'All' || searchQuery ? (
            <button
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
              className="text-cyan-400 hover:underline"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map(project => (
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
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-12 text-center backdrop-blur-md">
            <Layers size={40} className="mx-auto mb-4 text-slate-500" />
            <h3 className="text-lg font-bold text-white">No matching projects found</h3>
            <p className="mt-2 text-sm text-slate-400">
              Try adjusting your search query or switching categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
              className="mt-5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
