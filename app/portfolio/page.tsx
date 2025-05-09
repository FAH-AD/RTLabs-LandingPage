"use client"

import { useState,useEffect } from "react"
import { AnimatePresence } from "framer-motion"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { projects } from "@/lib/projects"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [filter, setFilter] = useState<string>("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = ["all", ...Array.from(new Set(projects.map((project) => project.category)))]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)
 useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 10)
     }
 
     window.addEventListener("scroll", handleScroll)
     return () => window.removeEventListener("scroll", handleScroll)
   }, [])
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }


  return (

    
    <div className="min-h-screen bg-[#0c1220] text-white">
      <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled
                ? "bg-gradient-to-br from-gray-900 p-4 pb-0 to-black shadow-md"
                : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
              >
                <Link href='/'>
                <span className="text-3xl font-bold text-white">
                  RedThread<span className="">Labs</span>
                </span>
                </Link>
               
              </motion.div>
      
             
            </div>
      
            
          </motion.header>
      {/* Hero Section */}

      
      
      <section className="py-20 px-4 pt-[5rem] md:pt-[12rem] md:px-6 lg:px-8 ">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-white mb-4 text-sm font-[500] md:font-bold md:mb-0 hover:text-main transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </motion.button>
          </Link>
          </motion.div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#0a9db8] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming <span className="text-[#0a9db8]">Digital Experiences</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We create innovative digital solutions that drive real business results. Explore our latest projects
              across various industries.
            </p>
          </motion.div>

          {/* Filter */}
          

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Link href={`/portfolio/${project.id}`} className="block">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-5">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-[#0a9db8] text-[white] text-xs font-medium px-2 py-1 rounded-md inline-block">
                      {project.category}
                    </div>

                    {/* Overlay Gradient - Only for hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220]/90 via-[#0c1220]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content that appears on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* View Project Button */}
                            <motion.div
                              className="bg-main text-white text-sm font-medium px-4 py-2 rounded-md inline-flex items-center mb-4"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              View Project <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>

                            {/* Project Description */}
                            <p className="text-sm text-white/90 leading-relaxed">{project.shortDescription}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* Project Info - Below the image */}
                  <div className="relative">
                    {/* Creative Title with Underline Animation */}
                    <div className="overflow-hidden">
                      <motion.h3
                        className="text-xl font-bold mb-2 inline-block relative"
                        initial={{ y: 0 }}
                        whileHover={{ y: -2 }}
                      >
                        {project.title}
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0a9db8]"
                          initial={{ scaleX: 0, originX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.h3>
                    </div>

                    
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA/>
      {/* Footer */}
      <Footer />
    </div>
  )
}
