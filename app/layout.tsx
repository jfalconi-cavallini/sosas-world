import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Sosa's World Smoke Shop",
  description: "Your out-of-this-world smoke shop — glass pipes, vapes, cigars & accessories.",
  keywords: "smoke shop, glass pipes, vapes, cigars, accessories, Sosa's World",
  openGraph: {
    title: "Sosa's World Smoke Shop",
    description: "Your out-of-this-world smoke shop.",
    type: 'website',
    url: 'https://sosas-world.vercel.app',
    images: [
      {
        url: "https://sosas-world.vercel.app/images/sosa-logo.PNG",
        width: 1200,
        height: 630,
        alt: "Sosa's Smoke Shop",
      }
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#04001a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}