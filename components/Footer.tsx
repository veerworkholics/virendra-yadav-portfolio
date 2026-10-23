'use client'

import Link from 'next/link'
import { profile as profileData } from '@/data/profile'
import { sitePath } from '@/data/site-path'
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
  FileText,
  ShieldCheck,
  Code2,
} from 'lucide-react'

const profile = { ...profileData, resume: sitePath(profileData.resume) }

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/90 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-3">
            <Link href="/" className="inline-block text-lg font-bold text-white">
              Virendra <span className="text-cyan-300">Yadav</span>
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Senior Laravel Developer & Team Lead
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              Developing reliable multi-tenant SaaS, REST APIs, high-volume database architectures, and leading development teams.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
              <MapPin size={13} className="text-cyan-400" />
              Indore, Madhya Pradesh, India
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition">
                  About & Career Timeline
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-cyan-300 transition">
                  Technical Skills & Stack
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-300 transition">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Expertise */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Focus</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <Code2 size={13} className="text-cyan-400" />
                <span>Laravel & CodeIgniter</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-cyan-400" />
                <span>REST APIs & JWT Security</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Code2 size={13} className="text-cyan-400" />
                <span>Multi-Tenant SaaS Systems</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-cyan-400" />
                <span>MySQL Query & Schema Optimization</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Code2 size={13} className="text-cyan-400" />
                <span>Payment & WhatsApp Gateways</span>
              </li>
            </ul>
          </div>

          {/* Contact & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Connect</h4>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition break-all"
              >
                <Mail size={14} className="shrink-0 text-cyan-400" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition"
              >
                <Phone size={14} className="shrink-0 text-cyan-400" />
                <span>{profile.phone}</span>
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition"
              >
                <MessageCircle size={14} className="shrink-0 text-emerald-400" />
                <span>WhatsApp Message</span>
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition pt-1 font-semibold"
              >
                <FileText size={14} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Virendra Yadav. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
