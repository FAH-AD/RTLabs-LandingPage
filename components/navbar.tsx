"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  sections: {
    name: string
    ref: React.RefObject<HTMLDivElement | null>
  }[]
  isComplete: boolean
}

export default function Navbar({ sections, isComplete }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    setMenuOpen(false)
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100) // slight delay to allow menu to close first
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-br from-gray-900 p-4 pb-0 to-black shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <span className="text-3xl font-bold text-white">
            RedThread<span className="">Labs</span>
          </span>
        </motion.div>

        {isComplete && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md focus:outline-none text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {isComplete && (
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black text-white shadow-lg"
            >
              <motion.ul
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                className="flex flex-col items-center space-y-4 py-6"
              >
                {sections.map((section, index) => (
                  <motion.li
                    key={section.name}
                    onClick={() => handleScrollTo(section.ref)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="text-lg font-medium cursor-pointer hover:text-main transition-colors"
                  >
                    {section.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  )
}