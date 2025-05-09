'use client'

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
      <Navbar sections={sections} isComplete={true} />

      <section ref={heroRef}>
        <Hero />
      </section>

      <motion.section
        ref={socialProofRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SocialProof />
      </motion.section>

      <motion.section
        ref={coreOfferRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CoreOffer />
      </motion.section>

      <motion.section
        ref={theGapRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <TheGap />
      </motion.section>

      <motion.section
        ref={caseStudyRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CaseStudy />
      </motion.section>

      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CTA />
      </motion.section>

      <Footer />
    </main>
  )
}
