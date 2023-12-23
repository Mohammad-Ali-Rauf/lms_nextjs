import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Roboto({ subsets: ['latin'], weight: ["400", "500", "700"], style: "normal" })

export const metadata: Metadata = {
  title: 'Admin Dashboard | LMS Portal',
  description: 'Created, published, and designed by Mohammad Ali',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
