import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "China Reclaimed Red Brick Supplier | TAITONE BRICK - Premium Heritage Building Materials",
  description:
    "Leading China reclaimed red brick supplier TAITONE BRICK offers authentic old red recycled bricks, antique red brick, and heritage building materials from historical Chinese buildings. Fast global shipping, competitive wholesale prices.",
  keywords:
    "china reclaimed brick, reclaimed red brick, recycled red brick, used brick, antique red brick, china heritage brick, china brick supplier, taitone brick, handmade brick, china reclaimed red brick supplier, heritage building materials, authentic chinese brick, old red brick, vintage brick china, reclaimed building materials china, antique building brick, traditional chinese brick, weathered red brick, historical brick china, sustainable brick materials, wholesale brick supplier, brick export china",
  authors: [{ name: "TAITONE BRICK" }],
  creator: "TAITONE BRICK",
  publisher: "TAITONE BRICK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    title: "TAITONE BRICK - Premium China Reclaimed Red Brick & Heritage Building Materials Supplier",
    description:
      "Authentic reclaimed red brick, recycled red brick, and handmade antique red brick from China heritage buildings. Leading china brick supplier for premium construction and restoration projects worldwide.",
    type: "website",
    locale: "en_US",
    url: "https://www.chinareclaimedbrick.com",
    siteName: "TAITONE BRICK - China Reclaimed Brick Supplier",
    images: [
      {
        url: "https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350984.jpg",
        width: 1200,
        height: 630,
        alt: "Premium China reclaimed red brick and heritage building materials by TAITONE BRICK - authentic weathered bricks from historical Chinese buildings",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@taitonebrick",
    creator: "@taitonebrick",
    title: "China Reclaimed Red Brick | TAITONE BRICK - Premium Heritage Brick Supplier",
    description:
      "Premium reclaimed red brick, recycled red brick, and handmade antique red brick from China heritage buildings. Authentic used brick for restoration projects worldwide with fast shipping.",
    images: {
      url: "https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350984.jpg",
      alt: "China reclaimed red brick collection from TAITONE BRICK supplier",
    },
  },
  alternates: {
    canonical: "https://www.chinareclaimedbrick.com",
    languages: {
      "en-US": "https://www.chinareclaimedbrick.com",
      "zh-CN": "https://www.chinareclaimedbrick.com/zh",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Building Materials",
  classification: "Business",
  other: {
    "geo.region": "CN-SD",
    "geo.placename": "Tai'an, Shandong, China",
    "geo.position": "36.1943;117.1208",
    ICBM: "36.1943, 117.1208",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="apple-mobile-web-app-title" content="TAITONE BRICK" />
        <meta name="application-name" content="TAITONE BRICK" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="//raw.githubusercontent.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
