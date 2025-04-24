"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, FileText } from "lucide-react"

export default function CTA() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-convert text-white text-sm font-medium mb-4">
            Let's Work Together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Map Your Funnel Fix</h2>
          <p className="text-gray-600 text-lg">
            Book a quick strategy call or just grab the breakdown. No fluff, no pressure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-convert rounded-full flex items-center justify-center mb-6">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Book a Strategy Call</h3>
            <p className="text-gray-600 mb-6">
              Schedule a 30-minute call with our team to discuss your specific challenges and how we can help.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">Personalized funnel analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">Custom strategy recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">No obligation consultation</span>
              </li>
            </ul>

            <a
              href="https://calendly.com/ash-theredthreadlabs/30min"
              target="_blank"
              rel="noopener noreferrer"
            > 
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-main text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-main transition-colors"
              >
                Book Call
                <ArrowRight size={18} />
              </motion.button>
            </a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-convert rounded-full flex items-center justify-center mb-6">
              <FileText className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">View Offer Breakdown</h3>
            <p className="text-gray-600 mb-6">
              Get a detailed overview of our services, process, and pricing without scheduling a call.(No Obligation)
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">Complete service descriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">Transparent pricing information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700">Case studies and results</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-white text-main font-medium rounded-lg flex items-center justify-center gap-2 border border-main hover:bg-main hover:text-white transition-colors"
            >
              View Offer
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
