import Link from 'next/link'
import { profile as profileData } from '@/data/profile'
import { sitePath } from '@/data/site-path'
const profile = { ...profileData, resume: sitePath(profileData.resume) }
export function Footer() {
 return <footer className="border-t border-white/10 bg-slate-950/70 px-5 py-10 sm:px-8"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-8"><div><Link href="/" className="text-lg font-semibold">Virendra Yadav<span className="text-cyan-300">.</span></Link><p className="mt-3 text-sm text-slate-400">Senior Laravel Developer & Team Lead</p><p className="mt-2 text-sm text-slate-500">Indore, India · Laravel / PHP / MySQL</p></div><div className="flex flex-col gap-3 text-sm"><a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-cyan-300">{profile.email}</a><a href="tel:+919074900032" className="text-slate-400 hover:text-cyan-300">+91 90749 00032</a><a href={profile.resume} download className="text-cyan-300">Download CV</a></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Virendra Yadav. All rights reserved.</div></footer>
}
