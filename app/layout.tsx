import './globals.css'
import type { Metadata } from 'next'

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
      <body className="min-h-screen flex flex-col">
        <header>
          Header Nav
        </header>
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