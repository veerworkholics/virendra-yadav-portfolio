'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

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
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${scrollY > 15 ? 'bg-slate-950/65 shadow-[0_30px_100px_rgba(15,23,42,0.35)] backdrop-blur-2xl' : 'bg-slate-950/40 backdrop-blur-xl'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(34,211,238,0.18)] transition hover:border-cyan-400/30 hover:text-cyan-100">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-slate-900 text-lg font-black text-white shadow-[0_25px_80px_rgba(34,211,238,0.2)] transition group-hover:scale-[1.03]">
            VY
          </span>
          <span className="hidden text-sm font-semibold text-slate-100 sm:inline">
            Virendra <span className="text-cyan-300">Yadav</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
                <span className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/30 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(34,211,238,0.16)] transition hover:bg-cyan-500/10 hover:text-cyan-100 md:inline-flex">
            Let&apos;s Connect
            <ArrowRight size={16} />
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-100 md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-slate-950/95 py-4 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base font-medium text-slate-100 transition hover:border-cyan-400/30 hover:text-cyan-100"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(34,211,238,0.16)] transition hover:bg-cyan-500/10 hover:text-cyan-100"
              >
                Let&apos;s Connect
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
