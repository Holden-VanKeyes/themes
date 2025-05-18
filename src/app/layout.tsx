import type { Metadata } from 'next'
import {
  Inter,
  Spectral,
  Libre_Baskerville,
  Source_Serif_4,
  JetBrains_Mono,
} from 'next/font/google'
import './globals.scss'
import '@mantine/core/styles.css'
import {
  createTheme,
  MantineProvider,
  MantineColorScheme,
  ColorSchemeScript,
} from '@mantine/core'
import { Analytics } from '@vercel/analytics/react'
import { useLocalStorage } from '@mantine/hooks'
import ThemeProvider from './globalHelpers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })
const spectral = Spectral({ subsets: ['latin'], weight: ['400', '700'] })
const libre = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'] })
const jet = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })
const source = Source_Serif_4({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Themantics',
  description: 'A word game with a twist',
  openGraph: {
    title: 'Themantics',
    description: 'A word game with a twist',
    url: 'https://themeantics.vercel.app/',
    siteName: 'Themeantics',
    images: [
      {
        url: 'https://themeantics.vercel.app/themantics.jpg',
        width: 1200,
        height: 630,
        alt: 'Your App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Themantics',
    description: 'A word game with a twist',
    images: ['https://themeantics.vercel.app/themantics.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
