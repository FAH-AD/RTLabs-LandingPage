"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0c1220]/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl">
            RedThreadLabs
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="/process" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Our Process
            </Link>
            <Link
              href="/contact"
              className="bg-[#0a9db8] hover:bg-[#0a9db8]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#0c1220] absolute top-full left-0 right-0 border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="block text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/process"
              className="block text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link
              href="/contact"
              className="block bg-[#0a9db8] hover:bg-[#0a9db8]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
