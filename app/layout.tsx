import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: '400'
})


export const metadata: Metadata = {
  title: 'Finance Dashboard',
  description: 'finance dashboard for personal finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${inter.variable} ${lato.variable}`}>
        <Header />
        <main className="flex flex-1">
          <aside>
            side bar
          </aside>
          <div className="flex flex-col flex-1 px-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}