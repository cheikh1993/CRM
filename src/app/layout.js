import { SideBar } from '@/components/sideBar/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { TopBar } from '@/components/topbar/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RCM APP',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='containerMain'>
          <SideBar />
          <div className='mainc'>
            <TopBar />
           {children}
          </div>

        </div>
       
        </body>
    </html>
  )
}
