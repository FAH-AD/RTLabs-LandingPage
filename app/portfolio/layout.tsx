import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | RedThreadLabs",
  description: "Explore our portfolio of digital projects across various industries",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
