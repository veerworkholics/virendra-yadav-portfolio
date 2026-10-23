'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, MessageCircle, FileText } from 'lucide-react'
import { profile } from '@/data/profile'
import { sitePath } from '@/data/site-path'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrollY > 15
          ? 'bg-slate-950/80 shadow-[0_30px_100px_rgba(15,23,42,0.5)] backdrop-blur-2xl'
          : 'bg-slate-950/50 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-900/60 px-3.5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(34,211,238,0.12)] transition hover:border-cyan-400/40"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 text-sm font-black text-slate-950 shadow-md transition group-hover:scale-105">
            VY
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-tight text-white sm:text-sm">
              Virendra <span className="text-cyan-300">Yadav</span>
            </span>
            <span className="text-[10px] font-medium leading-tight text-slate-400">
              Senior Laravel Lead
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs font-semibold uppercase tracking-wider transition ${
                  isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick WhatsApp Link */}
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="hidden items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-emerald-300 transition hover:bg-emerald-500/20 lg:inline-flex"
          >
            <MessageCircle size={17} />
          </a>

          {/* Download CV */}
          <a
            href={sitePath(profile.resume)}
            download
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200 sm:inline-flex"
          >
            <FileText size={14} className="text-cyan-400" />
            <span>Resume</span>
          </a>

          {/* Let's Connect */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.25)] transition hover:brightness-110"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/30 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 px-4 py-5 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map(item => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'border border-cyan-400/30 bg-cyan-400/10 text-cyan-200'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-200"
                >
                  <MessageCircle size={15} />
                  WhatsApp Direct Chat
                </a>
                <a
                  href={sitePath(profile.resume)}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300"
                >
                  <FileText size={15} />
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
