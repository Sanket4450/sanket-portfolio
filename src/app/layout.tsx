import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sankettalaviya.me'),

  title: {
    default: 'Sanket Talaviya | Full Stack Engineer',
    template: '%s | Sanket Talaviya',
  },

  description:
    'Full Stack Engineer building SaaS products, AI workflows, multi-tenant platforms, and data-intensive systems. I build and scale product systems that power business operations.',

  keywords: [
    'Sanket Talaviya',
    'Full Stack Engineer',
    'Software Engineer',
    'SaaS Engineer',
    'AI Engineer',
    'Node.js Developer',
    'TypeScript Developer',
    'NestJS',
    'Next.js',
    'Backend Engineer',
    'System Design',
    'PostgreSQL',
    'Product Engineer',
    'Multi-Tenant Systems',
    'AI Workflows',
  ],

  authors: [{ name: 'Sanket Talaviya' }],
  creator: 'Sanket Talaviya',
  publisher: 'Sanket Talaviya',

  openGraph: {
    title: 'Sanket Talaviya | Full Stack Engineer',
    description:
      'Full Stack Engineer building SaaS products, AI workflows, multi-tenant platforms, and data-intensive systems.',
    url: 'https://sankettalaviya.me',
    siteName: 'Sanket Talaviya',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sanket Talaviya | Full Stack Engineer',
    description:
      'Full Stack Engineer building SaaS products, AI workflows, multi-tenant platforms, and data-intensive systems.',
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
    canonical: 'https://sankettalaviya.me',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sanket Talaviya',
  givenName: 'Sanket',
  familyName: 'Talaviya',
  url: 'https://sankettalaviya.me',
  jobTitle: 'Full Stack Engineer',
  description:
    'Full Stack Engineer building SaaS products, AI workflows, multi-tenant platforms, and data-intensive systems.',
  sameAs: [
    'https://www.linkedin.com/in/sankettalaviya/',
    'https://github.com/Sanket4450/',
  ],
  knowsAbout: [
    'SaaS',
    'AI Workflows',
    'Multi-Tenant Architecture',
    'System Design',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Event-Driven Architecture',
    'Real-Time Systems',
    'Product Engineering',
  ],
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
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#FAFAFA]">
        {children}
      </body>
    </html>
  )
}