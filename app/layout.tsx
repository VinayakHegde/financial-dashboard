import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import { SideBar, SidebarProvider } from '@/components/side-bar'
import { getProfile } from '@/services/get-profile'
import { UserProvider } from '@/components/user-context/user-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
  weight: '400'
})


export const metadata: Metadata = {
  title: 'Finance Dashboard',
  description: 'finance dashboard for personal finance',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userProfile = await getProfile();
  return (
    <html lang="en">
      <body className={`min-h-screen min-w-full flex flex-col bg-white desktop:bg-gray-100 ${inter.variable} ${lato.variable}`}>
        <UserProvider value={userProfile}>
          <SidebarProvider>
            <Header />
            <main className="flex flex-1">
              <SideBar />
              <div className="flex flex-col flex-1 desktop:px-8 desktop:ml-64 desktop:mt-[100px]">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </UserProvider>
      </body>
    </html>
  )
}