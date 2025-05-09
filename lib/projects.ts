export interface Project {
    id: string
    title: string
    description: string
    shortDescription: string
    category: string
    image: string
    images: string[]
    problem: string
    solution: string
    technologies: string[]
    link?: string
  }
  
  export const projects: Project[] = [

    {
      id: "estatein",
      title: "EstateIn",
      description: "A comprehensive platform for real estate property management and investor engagement",
      shortDescription: "Real estate management and investor engagement platform",
      category: "Real Estate Platform",
      image: "/portfolio_images/estatein-main.png",
      images: [
        "/portfolio_images/estatein-1.png",
        "/portfolio_images/estatein-2.png",
        "/portfolio_images/estatein-3.png",
      ],
      problem: "EstateIn’s founder needed a centralized system to manage leases, automate rent tracking, and generate investor reports across multiple properties. Their existing tools were disconnected and manual processes were causing delays in operations and communications.",

      solution:
        "EstateIn streamlines property lifecycle management, from acquisition and lease administration to financial reporting and investor communications. The platform features automated rent tracking, maintenance workflows, investment dashboards, and tenant portals. Its robust analytics and modern UI significantly improve operational efficiency and enhance investor confidence.",
      technologies: ["React", "NestJS", "PostgreSQL", "AWS", "MapBox", "Stripe"],
    },
  
    // NEW PROJECT 2
    {
      id: "nexplus",
      title: "NextPlus",
      description:
        "NextPlus is a federal contracting partner offering IT and logistics solutions to government agencies and enterprises.",
      shortDescription: "IT and logistics solutions for federal contracts",
      category: "Enterprise Solutions",
      link: "https://nextplus.org",
      image: "/portfolio_images/np-main.png",
      images: [
        "/portfolio_images/np-1.png",
        "/portfolio_images/np-2.png",
        "/portfolio_images/np-main.png",
      ],
      problem: "The NextPlus team required a scalable portal to support their federal IT and logistics contracts. They needed real-time visibility into procurement, inventory, and SLA performance, while ensuring compliance with government standards.",

      solution:
        "NextPlus offers a robust digital infrastructure tailored for federal supply chains, integrating logistics tracking, inventory management, compliance automation, and service fulfillment. Our team built a scalable B2G portal with real-time visibility, procurement automation, and end-to-end SLA tracking — accelerating agency workflows while ensuring complete federal compliance.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Azure", "Jira API"],
    },
  
    // NEW PROJECT 3
    {
      id: "positivus",
      title: "Positivus",
      description:
        "A creative digital agency offering branding, UI/UX design, and performance marketing services.",
      shortDescription: "Digital agency for creative and growth-focused brands",
      category: "Creative Agency",
      image: "/portfolio_images/post-main.png",
      images: [
        "/portfolio_images/post-1.png",
        "/portfolio_images/post-2.png",
        "/portfolio_images/post-3.png",
      ],
      problem: "The Positivus agency wanted a fast, visually rich website to highlight their creative services and project outcomes. Their existing site lacked strategic messaging and failed to convert leads into clients effectively.",

      solution:
        "Positivus brings strategy, design, and performance marketing under one roof. We built a CMS-powered agency site highlighting impactful case studies, creative capabilities, and conversion-focused service pages. The result: increased client acquisition, brand visibility, and ROI-driven campaign performance across channels.",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "GSAP", "Google Analytics"],
    },
  
    // NEW PROJECT 4
    {
      id: "script-timer",
      title: "Script Timer",
      description:
        "A specialized app offering AI-powered tools to calculate and optimize voice-over script timing.",
      shortDescription: "AI script timing and voice-over planning tool",
      category: "Productivity Tool",
      link: "https://app.script-timer.com/",

      image: "/portfolio_images/st-main.png",
      images: [
        "/portfolio_images/st-1.png",
        "/portfolio_images/st-2.png",
        "/portfolio_images/st-3.png",
      ],
      problem: "The client behind Script Timer was spending excessive time manually estimating script durations for voice-over projects. They needed a tool that could automatically calculate timing and adapt to different speech styles to streamline their workflow.",

      solution:
        "Script Timer revolutionizes voice-over planning with AI-based script length estimators, adjustable speech pacing, and real-time feedback. The tool supports multiple voice styles and languages, enabling creators to tailor timing per project. Its export-ready timelines and seamless UX enhance productivity and reduce errors during production.",
      technologies: ["React", "Python", "FastAPI", "OpenAI API", "Tailwind CSS", "Firebase"],
    },
  
    {
      id: "beauty-players",
      title: "BeautyPlayers",
      description: "A freelance platform connecting beauticians with clients for at-home services",
      shortDescription: "Freelance platform for at-home beauty services",
      category: "Web Platform",
      image: "/portfolio_images/bp-main.png",
      images: [
        "/portfolio_images/bp-1.png",
        "/portfolio_images/bp-2.png",
        "/portfolio_images/bp-main.png",
      ],
      problem: "BeautyPlayers' founders wanted to build a freelance-style platform where beauticians could connect directly with clients for at-home services. They lacked a digital solution that offered secure bookings, verified profiles, and integrated payments.",

      solution:
        "Developed a comprehensive platform that connects beauticians with clients seeking at-home services. The platform features a robust booking system, service provider profiles with ratings and reviews, and a secure payment gateway. The mobile-responsive design ensures a seamless experience across all devices.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Google Maps API"],
    },
    
    
    {
      id: "krool-ai",
      title: "Kroolo AI",
      description: "An AI-powered platform offering various machine learning solutions",
      shortDescription: "AI solutions for business automation and insights",
      category: "AI Platform",
      link: "https://kroolo.com",
      image: "/portfolio_images/kroolo-main.png",
      images: [
        "/portfolio_images/kroolo-1.png",
        "/portfolio_images/kroolo-2.png",
        "/portfolio_images/kroolo-3.png",
      ],
      problem: "The Kroolo AI team aimed to create an accessible platform for businesses to adopt AI without deep technical expertise. Their clients needed a simple way to train, deploy, and use machine learning models across various use cases.",

      solution:
        "Created an intuitive AI platform that offers pre-built machine learning models for common business use cases. The platform features a user-friendly interface for data upload, model training, and result visualization. API integrations allow for seamless incorporation into existing business systems.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "AWS", "Docker"],
    },
    
    {
      id: "furniture-ca",
      title: "Furniture.com",
      description: "An e-commerce platform for furniture sales with AR visualization",
      shortDescription: "Furniture e-commerce with AR visualization",
      category: "E-commerce",
      image: "/portfolio_images/furn-main.png",
      link: "https://furniture.com",
      images: [
        "/portfolio_images/furn-1.png",
        "/portfolio_images/furn-2.png",
        "/portfolio_images/furn-3.png",
      ],
      problem: "The Furniture.com team was facing high return rates because customers couldn’t visualize how products would look or fit in their homes. They needed a solution that bridged the gap between online shopping and physical product experience to improve buyer confidence and reduce post-purchase dissatisfaction.",

      solution:
        "Built an innovative e-commerce platform featuring augmented reality (AR) visualization, allowing customers to see furniture in their space before purchasing. The platform includes detailed product information, customer reviews, and a user-friendly checkout process. The AR feature reduced return rates by 35%.",
      technologies: ["React", "Next.js", "Three.js", "AR.js", "Shopify API", "Stripe"],
    },
    {
      id: "landassets",
      title: "Landassets",
      description: "A land management platform for property owners and investors",
      shortDescription: "Property management and investment platform",
      category: "Management Platform",
      image: "/portfolio_images/la-main.png",
      images: [
        "/portfolio_images/la-2.png",
        "/portfolio_images/la-3.png",
        "/portfolio_images/la-1.png",
      ],
      problem: "The Landassets owner was managing multiple properties and investments through spreadsheets and disconnected tools. They needed a modern platform to visualize assets, track value changes, and store important documents in one place.",

      solution:
        "Developed a comprehensive land management platform with property tracking, value estimation, and investment analysis tools. The platform features interactive maps, document storage, and financial reporting. The dashboard provides at-a-glance insights into portfolio performance.",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Express", "Google Maps API", "Chart.js"],
    },
    {
      id: "pesaport",
      title: "Pesaport",
      description: "An investment platform offering various financial products and services",
      shortDescription: "Investment platform with diverse financial products",
      category: "Financial Platform",
      image: "/portfolio_images/pesa-main.png",
      images: [
        "/portfolio_images/pesa-2.png",
        "/portfolio_images/pesa-3.png",
        "/portfolio_images/pesa-1.png",
      ],
      problem: "Pesaport’s founders wanted to offer a simplified investment experience for both new and experienced users. They needed a platform that presented financial products clearly, assessed risk, and tracked portfolio performance without overwhelming the user.",

      solution:
        "Created an accessible investment platform with a range of financial products, educational resources, and portfolio management tools. The platform features risk assessment, investment recommendations, and performance tracking. The user-friendly interface makes investing approachable for beginners while offering advanced features for experienced investors.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Plaid API", "Chart.js"],
    },
    
  ]
  
  export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.id === slug)
  }
  
  export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.id)
  }
  