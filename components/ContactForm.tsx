'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error')
      return
    }

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:vir.yadav92@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    setStatus('ready')
  }

  return (
    <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} onSubmit={handleSubmit} className="w-full rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 shadow-glow sm:p-6 lg:p-8">
      <p className="mb-6 text-sm text-slate-400">Write your message below to open a draft in your email app.</p><div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300 sm:space-y-3">
          <span>Name</span>
          <input name="name" required value={form.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm text-slate-300 sm:space-y-3">
          <span>Email</span>
          <input name="email" required type="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="your@mail.com" />
        </label>
      </div>

      <label className="mt-5 block space-y-2 text-sm text-slate-300 sm:space-y-3">
        <span>Subject</span>
        <input name="subject" required value={form.subject} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="Project scope" />
      </label>

      <label className="mt-5 block space-y-2 text-sm text-slate-300 sm:space-y-3">
        <span>Message</span>
        <textarea name="message" required value={form.message} onChange={handleChange} rows={6} className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="Tell me about your project..."></textarea>
      </label>

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 sm:w-auto">
        Open Email Draft
      </button>

      {status === 'ready' && <p className="mt-4 text-sm text-cyan-300">Email draft requested. Send it from your email app to complete your inquiry.</p>}
      {status === 'error' && <p className="mt-4 text-sm text-rose-300">Please complete every field before sending.</p>}
    </motion.form>
  )
}
