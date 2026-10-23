import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  themeColor: '#07081c',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Virendra Yadav | Senior Laravel Developer & Technical Team Lead',
  description:
    'Senior Software Developer & Team Lead with 7+ years of experience in PHP, Laravel, CodeIgniter, multi-tenant SaaS architecture, REST APIs, and high-volume MySQL databases in Indore, India.',
  keywords: [
    'Virendra Yadav',
    'Senior Laravel Developer',
    'Technical Team Lead',
    'PHP 8 Developer',
    'CodeIgniter Developer',
    'Multi-tenant SaaS Architecture',
    'REST APIs',
    'JWT Authentication',
    'MySQL Database Optimization',
    'Indore PHP Developer',
  ],
  authors: [{ name: 'Virendra Yadav' }],
  creator: 'Virendra Yadav',
  openGraph: {
    title: 'Virendra Yadav | Senior Laravel Developer & Technical Team Lead',
    description:
      '7+ years architecting SaaS, ERP, restaurant POS, and high-concurrency PHP applications with Laravel and MySQL.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Virendra Yadav Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virendra Yadav | Senior Laravel Developer & Team Lead',
    description:
      'Senior Laravel Developer & Technical Team Lead with 7+ years delivering scalable SaaS, REST APIs, and database architectures.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_18%),radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_16%),#07081c] text-slate-100 antialiased selection:bg-cyan-400/30 selection:text-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
