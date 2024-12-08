
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lorenzo's Portfolio",
  script: [
    {
      src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",
      type: "module",
    },
    {
      src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js",
      type: "nomodule",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/Profil.webp"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
