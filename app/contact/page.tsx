'use client'

import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Copy, Check, Clock, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ContactForm } from '@/components/ContactForm'
import { profile } from '@/data/profile'

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2500)
  }

  return (
    <div className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 top-60 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Make Your Next Build Count"
          subtitle="Looking for a Senior Laravel Developer or Team Lead to architect resilient SaaS platforms, optimize complex databases, or lead technical execution? Let's connect."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* Direct Channels */}
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6 shadow-glow backdrop-blur-md sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Senior Roles & High-Impact Projects
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white">Direct Communication Channels</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Reach out via email, phone, or instant WhatsApp messaging for quick responses regarding project scopes, architecture consultations, or full-time opportunities.
              </p>

              <div className="mt-6 space-y-3.5">
                {/* WhatsApp Direct Card */}
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 transition duration-300 hover:border-emerald-400 hover:bg-emerald-900/40"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 transition group-hover:scale-105">
                      <MessageCircle size={22} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                        Fastest Response
                      </p>
                      <p className="font-bold text-white">Chat directly on WhatsApp</p>
                      <p className="text-xs text-slate-400">+91 90749 00032</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Open Chat →
                  </span>
                </a>

                {/* Email Card with Copy button */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/30">
                  <div className="flex items-center gap-3.5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Mail size={22} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="font-semibold text-white hover:text-cyan-300 transition break-all"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(profile.email, 'email')}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone Card with Copy button */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/30">
                  <div className="flex items-center gap-3.5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                      <Phone size={22} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-300">
                        Mobile Calling
                      </p>
                      <a
                        href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                        className="font-semibold text-white hover:text-violet-300 transition"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    aria-label="Copy phone number"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Timezone info */}
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-400" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-cyan-400" />
                  IST (UTC +5:30)
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
