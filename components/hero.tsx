"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div
      className="relative min-h-screen pt-6 flex items-center justify-center bg-gradient-to-br from-gray-900  to-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-convert text-white text-sm font-medium mb-6">
            Marketing That Converts
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Turn Scrollers Into <br />
          <span className="text-convert">Loyal Customers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          We create scroll-stopping creative, trust-building content, and conversion-focused funnels that transform your
          marketing performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{
             scale: 1.05,
              boxShadow: "0 4px 20px rgba(117, 218, 180, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative px-8 py-4 bg-main text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-100 overflow-hidden group"
          >
            <span className="z-10">Book a Strategy Call</span>
            <ArrowRight size={18} className="z-10" />

            {/* Hover background shine */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#75dab4] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg pointer-events-none" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 text-white font-medium rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            View Our Process
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
