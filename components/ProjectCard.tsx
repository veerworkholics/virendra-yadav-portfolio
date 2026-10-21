'use client'

import { useState } from 'react'
import { sitePath } from '@/data/site-path'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  image: string
  liveUrl?: string
  repoUrl?: string
}

export function ProjectCard({ title, description, tech, image, liveUrl, repoUrl }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.article whileHover={{ y: -6 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow transition duration-300">
        <button type="button" onClick={() => setIsOpen(true)} className="mb-6 block w-full overflow-hidden rounded-3xl bg-slate-950/80 text-left" aria-label={`Open ${title} image`}>
          <div className="h-52 bg-slate-800 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
        </button>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
            <span className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">Featured</span>
          </div>
          <p className="text-sm leading-6 text-slate-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map(item => (
              <span key={item} className="rounded-2xl bg-slate-800/90 px-3 py-1 text-xs text-slate-300">{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {liveUrl ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110">
                View Details
              </a>
            ) : (
              <button disabled className="inline-flex items-center gap-2 rounded-full bg-slate-700/60 px-4 py-2 text-sm font-semibold text-slate-400" title="No live demo">
                View Details
              </button>
            )}

            {repoUrl ? (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-100">
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-[0_40px_80px_rgba(15,23,42,0.8)]"
              onClick={event => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close image preview"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-xl text-white transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                ×
              </button>
              <div className="max-h-[80vh] overflow-hidden bg-slate-950">
                <img src={sitePath(image)} alt={title} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
