"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import CoreOffer from "@/components/core-offer"
import TheGap from "@/components/the-gap"
import CaseStudy from "@/components/case-study"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const socialProofRef = useRef<HTMLDivElement>(null)
  const coreOfferRef = useRef<HTMLDivElement>(null)
  const theGapRef = useRef<HTMLDivElement>(null)
  const caseStudyRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const sections = [
    { name: "Home", ref: heroRef },
    { name: "Clients", ref: socialProofRef },
    { name: "Services", ref: coreOfferRef },
    { name: "Our Impact", ref: theGapRef },
    { name: "Results", ref: caseStudyRef },
    { name: "Contact", ref: ctaRef },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar sections={sections} />

      <section ref={heroRef}>
        {/* hero section */}
        <div
      className="relative min-h-screen pt-6 flex items-center justify-center bg-gradient-to-br from-gray-900  to-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
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

      </section>




      <motion.section
        ref={socialProofRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
       {/* social proof section */}

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
                <p className="text-gray-600 text-sm">CMO, TechCorp</p>
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

      </motion.section>

      <motion.section
        ref={coreOfferRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CoreOffer />

        {/* coreOffer Section */}
        const services = [
    {
      icon: <Search className="w-10 h-10 text-convert" />,
      title: "Buyer Journey Audit",
      description:
        "We analyze every touchpoint in your funnel to identify conversion blockers and opportunities for improvement.",
    },
    {
      icon: <Video className="w-10 h-10 text-convert" />,
      title: "TOFU Video Ads & Trust Content",
      description: "Scroll-stopping creative that captures attention and builds trust with your target audience.",
    },
    {
      icon: <Layout className="w-10 h-10 text-convert" />,
      title: "Landing Page Revamps & Performance Hooks",
      description: "Conversion-focused design and copy that turns visitors into customers.",
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
              <motion.div whileHover={{ x: 5,   }} className="text-red-700 font-medium flex hover:cursor-pointer items-center gap-2">
                Learn more <ArrowRight size={16} />
              </motion.div>
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
        </motion.div>
      </div>
    </div>


      </motion.section>

      <motion.section
        ref={theGapRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* the gap */}
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

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 text-red-700 font-medium flex items-center gap-2"
            >
              Learn more about our process <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
 
      </motion.section>

      <motion.section
        ref={caseStudyRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
 
        {/* casd study section */}
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
                src="/placeholder.svg?height=400&width=600"
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
              Skincare Brand
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              "Red Thread's audit alone helped us cut our CPA by 21% in 3 weeks."
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
                  <p className="text-2xl font-bold text-convert">$33 CPA</p>
                </div>
              </div>
              <p className="text-gray-600">
                We identified key friction points in their funnel and boosted retention with sharper funnel content and trust-led creatives.
                Result? A  <span className="text-convert text-[17px] font-bold">35% lift in ROI</span>— all without touching ad spend.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-red-700 font-medium flex items-center gap-2"
            >
              Read the full case study <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>

      </motion.section>

      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* cta section */}
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-main text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-main transition-colors"
            >
              Book Call
              <ArrowRight size={18} />
            </motion.button>
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
              Get a detailed overview of our services, process, and pricing without scheduling a call.
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
              className="w-full px-6 py-3 bg-white text-main font-medium rounded-lg flex items-center justify-center gap-2 border border-main hover:bg-main transition-colors"
            >
              View Offer
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>

      </motion.section>

      <Footer />
    </main>
  )
}
