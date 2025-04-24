"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function CaseStudy() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-convert text-white text-sm font-medium mb-4">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results for Real Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See how we've helped our clients achieve remarkable growth.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-lg z-0"></div>
              <Image
                src="/testimonial.jpg"
                alt="Case Study"
                width={600}
                height={400}
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-100 rounded-lg z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-convert text-white text-sm font-medium rounded-md">
              BondiBoost
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              "Red Thread's audit alone helped us cut our CPA by 33%."
            </h3>
            <p className="text-gray-700">— BondiBoost, Hair Care Brand</p>
            <div className="pt-4">
              <div className="flex items-center gap-8 mb-4">
                <div>
                  <p className="text-gray-600 text-sm">Before</p>
                  <p className="text-2xl font-bold text-gray-900">$42 CPA</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">After</p>
                  <p className="text-2xl font-bold text-convert">$28 CPA</p>
                </div>
              </div>
              <p className="text-gray-600">
                We identified key friction points in their funnel and boosted retention with sharper funnel content and trust-led creatives.
                Result? A  <span className="text-convert text-[17px] font-bold">35% lift in ROI</span>— all without touching ad spend.
              </p>
            </div>
            <a
              href="/BondiBoost_CaseStudy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-red-700 font-medium flex items-center gap-2"
              >
                Read the full case study <ArrowRight size={16} />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
