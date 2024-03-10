import './globals.css';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export const metadata = {
  title: 'Murali Singh',
  description: 'Portfolio Website of Murali Singh created with Next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
