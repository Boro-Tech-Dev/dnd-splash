import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Deploy & Deliver - Coming Soon',
  description: 'Something new is on the horizon. A fresh approach to building, deploying, and delivering digital excellence. Launching Late 2025.',
  keywords: ['deploy', 'deliver', 'digital agency', 'web services', 'coming soon'],
  authors: [{ name: 'Deploy & Deliver' }],
  openGraph: {
    title: 'Deploy & Deliver - Coming Soon',
    description: 'A new way to build and deliver digital excellence. Launching Late 2025.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deploy & Deliver - Coming Soon',
    description: 'A new way to build and deliver digital excellence. Launching LEarly 2026.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-9MHYN8R28W"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9MHYN8R28W');
          `}
        </Script>
        {/* Matomo Tag Manager */}
        <Script id="matomo-tag-manager" strategy="afterInteractive">
          {`
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://mmamamtatto.srv1044249.hstgr.cloud/js/container_epZnp881.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}

