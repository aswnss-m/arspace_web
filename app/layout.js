import { Quicksand } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import './common/globals.css'

const Quick = Quicksand({ subsets: ['latin'] })
export const metadata = {
  title: 'ArSpace',
  description: 'Create Ar experience with ease',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Quick.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
