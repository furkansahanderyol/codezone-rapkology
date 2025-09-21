import type { Metadata } from "next"
import { Saira, Saira_Condensed } from "next/font/google"
import "./globals.css"
import Providers from "@/provider"
import Navbar from "@/components/Navbar"
import Footer from "@/composite/Footer"
import DataLoader from "@/components/DataLoader"
import Menu from "@/composite/Menu"
import { IconEye } from "@/assets/IconEye"
import ShowPagination from "@/components/ShowPagination"

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
})

const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Rapkology",
  description:
    "Rapkology, rap müziğin derinliklerine dalın. Rap sanatçıları, sözler ve şarkılar hakkında kapsamlı bilgiler, analizler ve daha fazlası. Rap dünyasının incelikleri burada!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="en">
        <DataLoader />
        <body className={`${saira.variable} ${sairaCondensed.variable}`}>
          <ShowPagination />
          <Navbar />
          <Menu />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
