import { Mail, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ContactForm } from '@/components/ContactForm'

const details: { label: string; value: string; icon: typeof Mail; href: string }[] = [
  { label: 'Email', value: 'vir.yadav92@gmail.com', icon: Mail, href: 'mailto:vir.yadav92@gmail.com' },
  { label: 'Mobile', value: '+91 90749 00032', icon: Phone, href: 'tel:+919074900032' },
]

export default function ContactPage() {
  return (
    <section className="px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Let?s Make Your Next Build Count" subtitle="I&apos;m open to opportunities, collaborations and interesting projects. Reach out to start the conversation." />
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 shadow-glow sm:p-5 lg:space-y-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">Work with Virendra</h2><p className="text-slate-400 leading-7">Laravel and CodeIgniter development, API integrations, and practical backend architecture.</p>{details.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-100 sm:gap-4 sm:px-4 lg:px-5 lg:py-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200 sm:h-12 sm:w-12 sm:rounded-3xl"><item.icon size={18} /></span>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/90 sm:text-xs">{item.label}</p>
                  <p className="mt-1 break-all text-sm text-slate-100 sm:mt-2 sm:text-base">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
