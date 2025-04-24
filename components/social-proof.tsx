"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

export default function SocialProof() {
  const clients = [
    { name: "TechCorp", logo: "/logo (1).jpg" },
    { name: "FashionBrand", logo: "/logo (1).png" },
    { name: "HealthCare", logo: "/logo (2).png" },
    { name: "FinanceApp", logo: "/logo (3).png" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped companies across industries transform their digital marketing performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16"
        >
         
            <motion.div
              
              variants={itemVariants}
              className=" transition-all duration-300"
            >
              <Image
                src="/logo (1).jpg"
                alt="BondiBoost"
                width={210}
                height={80}
                className=" object-contain"
              />
            </motion.div>
            <motion.div
              
              variants={itemVariants}
              className=" transition-all duration-300"
            >
              <Image
                src="/logo (1).png"
                alt="BondiBoost"
                width={150}
                height={80}
                className=" object-contain"
              />
            </motion.div>
            <motion.div
              
              variants={itemVariants}
              className=" transition-all duration-300"
            >
              <Image
                src="/logo (2).png"
                alt="Asus"
                width={210}
                height={80}
                className=" object-contain"
              />
            </motion.div>
            <motion.div
              
              variants={itemVariants}
              className=" transition-all duration-300"
            >
              <Image
                src="/logo (3).png"
                alt="BondiBoost"
                width={150}
                height={80}
                className=" object-contain"
              />
            </motion.div>
         
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
              ))}
            </div>
            <p className="text-gray-700 text-lg italic mb-6">
              "RedThreadLabs completely transformed our marketing funnel. Their creative approach and data-driven
              strategy increased our conversion rate by 43% in just two months."
            </p>
            <div className="flex gap-2 items-center">
            <Image
                src="/bondiboost cmo.jpeg"
                alt="BondiBoost"
                width={40}
                height={40}
                className=" w-10 h-10 rounded-full "
              />
              <div>
                <p className="font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">CMO, WPALive</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Results That Speak For Themselves</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-convert text-3xl font-bold mb-2">43%</p>
                <p className="text-gray-700">Average Conversion Rate Increase</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-convert text-3xl font-bold mb-2">67%</p>
                <p className="text-gray-700">Engagement Improvement</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-convert text-3xl font-bold mb-2">31%</p>
                <p className="text-gray-700">Lower Cost Per Acquisition</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-convert text-3xl font-bold mb-2">50+</p>
                <p className="text-gray-700">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
