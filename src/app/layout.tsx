import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Orbit.ai - AI-Powered SaaS Solutions',
  description: 'Transform your business with cutting-edge artificial intelligence solutions from Orbit.ai. Drive innovation, automation, and efficiency across industries.',
  keywords: ['AI', 'SaaS', 'Machine Learning', 'Artificial Intelligence', 'Business Automation', 'Digital Transformation'],
  authors: [{ name: 'Orbit.ai' }],
  openGraph: {
    title: 'Orbit.ai - AI-Powered SaaS Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence solutions from Orbit.ai.',
    url: 'https://orbit.ai',
    siteName: 'Orbit.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orbit.ai - AI-Powered SaaS Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbit.ai - AI-Powered SaaS Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence solutions from Orbit.ai.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 