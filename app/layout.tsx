import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Deploy & Deliver - Arriving Mid 2026',
  description: 'Something new is on the horizon. A fresh approach to building, deploying, and delivering digital excellence. Launching Early 2026.',
  keywords: ['deploy', 'deliver', 'digital agency', 'web services', 'coming soon'],
  authors: [{ name: 'Deploy & Deliver' }],
  openGraph: {
    title: 'Deploy & Deliver - Arriving Mid 2026',
    description: 'A new way to build and deliver digital excellence. Launching Mid 2026.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deploy & Deliver - Coming Soon',
    description: 'A new way to build and deliver digital excellence. Launching Mid 2026.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MHYN8R28W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9MHYN8R28W');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}

