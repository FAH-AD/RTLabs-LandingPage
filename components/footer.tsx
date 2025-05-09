"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-2xl font-bold text-white">
                RedThreadLabs
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              We help brands transform their marketing funnels with scroll-stopping creative, trust-building content,
              and conversion-focused design.
            </p>
            <div className="flex space-x-4">
              
              <Link href="https://www.linkedin.com/company/redthreadlabs"
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 transition-colors">
               
                  Buyer Journey Audit
              </li>
              <li className="text-gray-400 transition-colors">
                  Video Ads & Content
              </li>
              <li className="text-gray-400 transition-colors">
                  Landing Page Revamps
              </li>
              <li className="text-gray-400 transition-colors">
                  Full Funnel Strategy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-convert" />
                <Link
                  href="mailto:hello@redthreadlabs.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ash@theredthreadlabs.store
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-convert" />
                <Link href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (+32) 471 31 35 54
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex  md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm text-center mb-4 md:mb-0">&copy; {currentYear} RedThreadLabs. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  )
}
