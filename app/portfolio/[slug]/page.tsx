"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Code, Lightbulb, Wrench, Globe, ChevronRight } from "lucide-react"
import { getProjectBySlug, getAllProjectSlugs, type Project } from "@/lib/projects"
import Footer from "@/components/footer"

// Define the params type
type Params = {
  slug: string
}

// In Next.js 15, params is a Promise
export default function ProjectPage({ params }: { params: Promise<Params> }) {
  // Use the params with React.use()
  const { slug } = React.use(params)

  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLinkHovered, setIsLinkHovered] = useState(false)

  useEffect(() => {
    const projectData = getProjectBySlug(slug)
    if (projectData) {
      setProject(projectData)
    } else {
      router.push("/portfolio")
    }
    setLoading(false)
  }, [slug, router])

  if (loading || !project) {
    return (
      <div className="min-h-screen bg-[#0c1220] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#0a9db8] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const allSlugs = getAllProjectSlugs()
  const currentIndex = allSlugs.indexOf(slug)
  const prevProject = currentIndex > 0 ? getProjectBySlug(allSlugs[currentIndex - 1]) : null
  const nextProject = currentIndex < allSlugs.length - 1 ? getProjectBySlug(allSlugs[currentIndex + 1]) : null

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  // Extract domain from URL for display
  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace("www.", "")
      return domain
    } catch (e) {
      return url
    }
  }

  return (
    <div className="min-h-screen bg-[#0c1220] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] pt-16">
        <div className="absolute inset-0">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1220]/70 via-[#0c1220]/60 to-[#0c1220]" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-bold text-gray-300 hover:text-main mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>

          

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{project.title}</h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-6">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Website Link Section - Only shown if link exists */}
      {project.link && (
        <div className="relative -mt-8 z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onMouseEnter={() => setIsLinkHovered(true)}
              onMouseLeave={() => setIsLinkHovered(false)}
            >
              <motion.div
                className="bg-gradient-to-r from-[#131c2e] to-[#0a9db8]/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#0a9db8]/20 overflow-hidden relative"
                whileHover={{
                  boxShadow: "0 0 25px rgba(10, 157, 184, 0.2)",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-[#0a9db8] rounded-full p-2 mr-4">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#0a9db8] font-medium mb-1">Visit Website</div>
                      <div className="text-lg font-bold flex items-center">
                        {getDomainFromUrl(project.link)}
                        <motion.div animate={{ x: isLinkHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight className="ml-2 h-5 w-5 text-[#0a9db8]" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center">
                    <span className="text-sm text-gray-400 mr-2">Explore the live project</span>
                    <div className="bg-[#0a9db8]/20 rounded-full p-2">
                      <ExternalLink className="h-4 w-4 text-[#0a9db8]" />
                    </div>
                  </div>
                </div>

                {/* Animated background element */}
                <motion.div
                  className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[#0a9db8]/10 blur-3xl"
                  animate={{
                    scale: isLinkHovered ? 1.5 : 1,
                    opacity: isLinkHovered ? 0.3 : 0.1,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </a>
          </motion.div>
        </div>
      )}

      {/* Project Details */}
      <section className={`py-20 px-4 md:px-6 lg:px-8 ${project.link ? "pt-12" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="mr-3 h-5 w-5 text-[#0a9db8]" /> Technologies
              </h2>

              <div className="flex flex-wrap gap-2 mb-12">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#131c2e] text-gray-300 px-3 py-1 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Navigation */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-300">Other Projects</h3>

                <div className="space-y-4">
                  {prevProject && (
                    <Link
                      href={`/portfolio/${prevProject.id}`}
                      className="flex items-center p-4 bg-[#131c2e] rounded-lg hover:bg-[#131c2e]/80 transition-colors"
                    >
                      <ArrowLeft className="mr-3 h-4 w-4 text-[#0a9db8]" />
                      <div>
                        <div className="text-xs text-gray-400">Previous</div>
                        <div className="font-medium">{prevProject.title}</div>
                      </div>
                    </Link>
                  )}

                  {nextProject && (
                    <Link
                      href={`/portfolio/${nextProject.id}`}
                      className="flex items-center justify-between p-4 bg-[#131c2e] rounded-lg hover:bg-[#131c2e]/80 transition-colors"
                    >
                      <div>
                        <div className="text-xs text-gray-400">Next</div>
                        <div className="font-medium">{nextProject.title}</div>
                      </div>
                      <ArrowRight className="ml-3 h-4 w-4 text-[#0a9db8]" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Problem & Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Image Gallery */}
              <div className="relative overflow-hidden rounded-xl aspect-[1]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={project.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    onClick={handlePrevImage}
                    className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-md text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>

              {/* Problem */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Lightbulb className="mr-3 h-5 w-5 text-[#0a9db8]" /> The Challenge
                </h2>
                <p className="text-gray-300 leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Wrench className="mr-3 h-5 w-5 text-[#0a9db8]" /> Our Solution
                </h2>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#131c2e]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block bg-[#0a9db8] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Start Your Project
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your <span className="text-[#0a9db8]">Success Story</span>?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
            href="https://calendly.com/ash-theredthreadlabs/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(117, 218, 180, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative px-8 py-4 w-full bg-main text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-100 overflow-hidden group"
            >
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </a>
              <a
           href="Our-Process.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 text-white font-medium rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
                View Our Process
              </motion.button>
            </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
