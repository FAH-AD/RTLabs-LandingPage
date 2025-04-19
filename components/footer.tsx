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
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Buyer Journey Audit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Video Ads & Content
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Landing Page Revamps
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Full Funnel Strategy
                </Link>
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
                  hello@redthreadlabs.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-convert" />
                <Link href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {currentYear} RedThreadLabs. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
