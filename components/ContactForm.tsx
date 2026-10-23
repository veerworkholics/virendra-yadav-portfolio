'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react'
import { profile } from '@/data/profile'

const topics = [
  'Full-Time / Lead Role',
  'SaaS Architecture',
  'REST APIs & JWT',
  'MySQL Optimization',
  'Consulting / Freelance',
]

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Full-Time / Lead Role',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    const finalSubject = form.subject
      ? `[${form.topic}] ${form.subject}`
      : `[${form.topic}] Inquiry from ${form.name}`

    const body = `Hi Virendra,\n\nName: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}\n\n---\nSent via portfolio contact form`

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(body)}`

    setStatus('ready')
  }

  const handleWhatsAppDirect = () => {
    const text = `Hi Virendra, my name is ${form.name || 'there'}. I am reaching out regarding *${form.topic}*.\n\nMessage: ${form.message || 'I would like to discuss a project with you.'}`
    window.open(`https://wa.me/919074900032?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6 shadow-glow backdrop-blur-md sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
        <p className="mt-1 text-xs text-slate-400">
          Fill out the details below to generate an instant email draft or dispatch via WhatsApp.
        </p>
      </div>

      {/* Topic selection chips */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Discussion Topic
        </label>
        <div className="flex flex-wrap gap-2">
          {topics.map(t => (
            <button
              type="button"
              key={t}
              onClick={() => setForm({ ...form, topic: t })}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                form.topic === t
                  ? 'border border-cyan-400/40 bg-cyan-400/15 text-cyan-200'
                  : 'border border-white/10 bg-slate-950/60 text-slate-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 text-xs font-medium text-slate-300">
          <span>Your Name *</span>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="e.g. Rahul Sharma"
          />
        </label>

        <label className="block space-y-1.5 text-xs font-medium text-slate-300">
          <span>Your Email *</span>
          <input
            name="email"
            required
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="rahul@company.com"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-1.5 text-xs font-medium text-slate-300">
        <span>Subject (Optional)</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          placeholder="e.g. Scalable Multi-tenant SaaS Architecture"
        />
      </label>

      <label className="mt-4 block space-y-1.5 text-xs font-medium text-slate-300">
        <span>Project or Role Scope *</span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          placeholder="Briefly describe your requirements, timeline, or position details..."
        />
      </label>

      {/* Submit Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-md transition hover:brightness-110"
        >
          <Send size={15} />
          Draft in Email App
        </button>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-xs font-bold text-emerald-200 transition hover:bg-emerald-500/20"
        >
          <MessageCircle size={15} />
          Send via WhatsApp
        </button>
      </div>

      {status === 'ready' && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-xs text-cyan-200">
          <CheckCircle2 size={16} className="shrink-0 text-cyan-400" />
          <span>Email draft initiated. Simply hit &quot;Send&quot; in your mail client!</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-400/20 bg-rose-400/10 p-3 text-xs text-rose-200">
          <AlertCircle size={16} className="shrink-0 text-rose-400" />
          <span>Please fill in your name, email, and message before submitting.</span>
        </div>
      )}
    </motion.form>
  )
}
