"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"

export default function TheGap() {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-convert text-white text-sm font-medium mb-4">
            The Gap We're Fixing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Bounces to Conversions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We find what's broken in your funnel — then fix it with scroll-stopping creative, trust triggers, and
            story-led UX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800 p-8 rounded-xl relative">
              <h3 className="text-xl font-bold mb-4 text-red-400">Before</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Visitors scroll and bounce without engaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>High ad spend with low conversion rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Unclear messaging that fails to build trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Disjointed customer journey with friction points</span>
                </li>
              </ul>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <ArrowDown className="text-red-500" size={32} />
              </motion.div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-green-400">After</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Buyers engage, trust, and convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Lower acquisition costs with higher ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Clear, compelling messaging that resonates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Seamless customer journey that guides to conversion</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-convert/20 to-convert/20 p-8 rounded-xl border border-convert/60"
          >
            <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
            <p className="text-gray-300 mb-8">
              We don't just apply band-aid fixes. We analyze your entire funnel to identify the root causes of poor
              performance, then implement proven solutions that drive real results.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-convert/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Comprehensive Audit</h4>
                  <p className="text-gray-400">We analyze every touchpoint in your customer journey.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-convert/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Strategic Planning</h4>
                  <p className="text-gray-400">We develop a tailored strategy to address your specific challenges.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-convert/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Implementation & Optimization</h4>
                  <p className="text-gray-400">We execute the plan and continuously optimize for maximum results.</p>
                </div>
              </div>
            </div>
             <a
            href="Our-Process.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 text-red-700 font-medium flex items-center gap-2"
            >
              Learn more about our process <ArrowRight size={16} />
            </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
