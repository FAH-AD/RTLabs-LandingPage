"use client"

import { motion } from "framer-motion"
import { ArrowRight, Search, Video, Layout } from "lucide-react"

export default function CoreOffer() {
  const services = [
    {
      icon: <Search className="w-10 h-10 text-convert" />,
      title: "Buyer Journey Audit",
      description:
        "We analyze every touchpoint in your funnel to identify conversion blockers and opportunities for improvement.",
        link:"/FunnelAudit.pdf"
    },
    {
      icon: <Video className="w-10 h-10 text-convert" />,
      title: "TOFU Video Ads & Trust Content",
      description: "Scroll-stopping creative that captures attention and builds trust with your target audience.",
       link:"https://drive.google.com/drive/folders/1YPo6eKeUhgi7Y00pW8kmrRtbxA4fNPRP?usp=sharing"
    },
    {
      icon: <Layout className="w-10 h-10 text-convert" />,
      title: "Landing Page Revamps & Performance Hooks",
      description: "Conversion-focused design and copy that turns visitors into customers.",
       link:"/portfolio"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solutions to fix your marketing funnel and drive real business results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
              href={service.link}
              target={index < 2 ? "_blank" : ""}
              rel={index < 2 ? "noopener noreferrer" : ""}
            >
              <motion.div whileHover={{ x: 5,   }} className="text-red-700 font-medium flex hover:cursor-pointer items-center gap-2">
                Learn more <ArrowRight size={16} />
              </motion.div>

              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
           href="Our-Process.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
          <motion.button
            whileHover={{
              scale: 1.05,
               boxShadow: "0 4px 20px rgba(117, 218, 180, 0.3)",
             }}
             whileTap={{ scale: 0.95 }}
             transition={{ type: "spring", stiffness: 300 }}
            className="px-8 py-4 bg-main text-white font-medium rounded-lg inline-flex items-center gap-2  transition-all duration-100"
          >
            See Full Process
            <ArrowRight size={18} />
          </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
