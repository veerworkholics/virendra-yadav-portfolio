'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Maximize2, X, CheckCircle2, Building, Tag } from 'lucide-react'
import { sitePath } from '@/data/site-path'

export interface ProjectCardProps {
  id?: string
  title: string
  company: string
  category: string
  description: string
  longDescription?: string
  tech: string[]
  featured?: boolean
  image?: string
  links?: { label: string; url: string }[]
}

export function ProjectCard({
  title,
  company,
  category,
  description,
  longDescription,
  tech,
  featured,
  image = '/image2.png',
  links = [],
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close modal on Escape key and prevent body scrolling
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-glow backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]"
      >
        <div>
          {/* Card Header Media */}
          <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={sitePath(image)}
                alt={title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Badges on Image */}
            <div className="absolute left-3 top-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
                <Tag size={12} />
                {category}
              </span>
              {featured && (
                <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200 backdrop-blur-md">
                  ★ Landmark
                </span>
              )}
            </div>

            {/* Quick Zoom Trigger */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={`View full details of ${title}`}
              className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white shadow-lg backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-200"
            >
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Company & Category */}
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
            <Building size={14} className="text-cyan-400" />
            <span>{company}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight text-white transition group-hover:text-cyan-200">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-sm leading-relaxed text-slate-300/90">{description}</p>

          {/* Tech Stack Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tech.slice(0, 5).map(t => (
              <span
                key={t}
                className="rounded-lg border border-white/5 bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="rounded-lg bg-white/5 px-2 py-1 text-[11px] text-slate-400">
                +{tech.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-xs font-semibold text-slate-400 hover:text-cyan-300 transition"
          >
            Read Architecture Details →
          </button>

          {links.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {links.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition hover:brightness-110 shadow-sm"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          ) : (
            <span className="text-[11px] italic text-slate-500">Enterprise Internal Portal</span>
          )}
        </div>
      </motion.article>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/15 bg-slate-900 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.8)] sm:p-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Top-Right Prominent Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
                className="absolute right-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/95 text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              {/* Modal Image */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl border border-white/10 sm:h-72">
                <Image
                  src={sitePath(image)}
                  alt={title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              {/* Tags & Company */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                <span className="font-semibold text-cyan-300">{category}</span>
                <span>•</span>
                <span>{company}</span>
              </div>

              <h2 className="text-2xl font-black text-white sm:text-3xl">{title}</h2>

              {/* Overview */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                {longDescription || description}
              </p>

              {/* Tech Stack in Modal */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies & Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map(t => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200"
                    >
                      <CheckCircle2 size={13} className="text-cyan-400" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer with Actions and Close Button */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                <div className="flex flex-wrap gap-3">
                  {links.length > 0 ? (
                    links.map(link => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:brightness-110 shadow-lg shadow-cyan-500/20"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={16} />
                      </a>
                    ))
                  ) : (
                    <span className="text-xs italic text-slate-500">Enterprise Internal Portal</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-800/80 px-5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm transition hover:border-cyan-400/50 hover:bg-slate-700 hover:text-white"
                >
                  <X size={16} />
                  <span>Close</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
