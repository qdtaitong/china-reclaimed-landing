import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "China Reclaimed Red Brick Supplier | TAITONE BRICK - Premium Heritage Building Materials",
  description:
    "Leading China reclaimed red brick supplier TAITONE BRICK offers authentic old red recycled bricks, antique red brick, and heritage building materials from historical Chinese buildings. Fast global shipping, competitive wholesale prices.",
  keywords:
    "china reclaimed brick, reclaimed red brick, recycled red brick, used brick, antique red brick, china heritage brick, china brick supplier, taitone brick, handmade brick, china reclaimed red brick supplier, heritage building materials, authentic chinese brick, old red brick, vintage brick china, reclaimed building materials china, antique building brick, traditional chinese brick, weathered red brick, historical brick china, sustainable brick materials",
  openGraph: {
    title: "TAITONE BRICK - Premium China Reclaimed Red Brick & Handmade Heritage Brick Supplier",
    description:
      "Authentic reclaimed red brick, recycled red brick, and handmade antique red brick from China heritage buildings. Leading china brick supplier for premium construction and restoration projects.",
    type: "website",
    locale: "en_US",
    siteName: "TAITONE BRICK",
    images: [
      {
        url: "https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350984.jpg",
        width: 1200,
        height: 630,
        alt: "China reclaimed red brick and heritage building materials by TAITONE BRICK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Reclaimed Red Brick | TAITONE BRICK - Handmade Heritage Brick Supplier",
    description:
      "Premium reclaimed red brick, recycled red brick, and handmade antique red brick from China heritage buildings. Authentic used brick for restoration projects worldwide.",
    images: ["https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350984.jpg"],
  },
  alternates: {
    canonical: "https://www.chinareclaimedbrick.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "CN-SD",
    "geo.placename": "Tai'an, Shandong, China",
    "geo.position": "36.1943;117.1208",
    ICBM: "36.1943, 117.1208",
  },
}

export default function Page() {
  return (
    <>
      <ClientPage />
    </>
  )
}
