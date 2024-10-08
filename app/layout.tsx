import { CATEGORIES } from '@/app/_constants/categories'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export async function generateStaticParams() {
  return Object.entries(CATEGORIES).map((category) => category)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`mx-auto w-[93%] antialiased sm:w-[89%] md:w-[65%] ${notoSansJP.className}`}
      >
        {children}
      </body>
    </html>
  )
}
