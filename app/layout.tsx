import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Virendra Yadav | Senior Laravel Developer',
  description: 'Virendra Yadav, Senior Laravel Developer and Team Lead in Indore with 7+ years of experience in PHP, multi-tenant SaaS, REST APIs, and MySQL.',
  openGraph: {
    title: 'Virendra Yadav | Senior Laravel Developer',
    description: 'Virendra Yadav, Senior Laravel Developer and Team Lead in Indore with 7+ years of experience in PHP, multi-tenant SaaS, REST APIs, and MySQL.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_18%),radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_16%),#07081c] text-slate-100">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
