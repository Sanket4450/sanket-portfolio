import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import { expertise, metaKeywords, personal } from '@/utils/data'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(personal.website),

  title: {
    default: `${personal.name} | ${personal.designation}`,
    template: '%s | %s',
  },

  description: personal.headline,

  keywords: metaKeywords,

  authors: [{ name: personal.name }],
  creator: personal.name,
  publisher: personal.name,

  openGraph: {
    title: `${personal.name} | ${personal.designation}`,
    description: personal.headline,
    url: personal.website,
    siteName: personal.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: personal.metaDataImage,
        width: 512,
        height: 512,
        alt: `${personal.name} - ${personal.designation}`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} | ${personal.designation}`,
    description: personal.headline,
    images: [personal.metaDataImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: personal.website,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personal.name,
  givenName: personal.nickName,
  familyName: personal.lastName,
  url: personal.website,
  image: personal.metaDataImage,
  jobTitle: personal.designation,
  description: personal.headline,
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: expertise,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}