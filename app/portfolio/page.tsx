import { ArrowRight, ArrowUpRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/bridge_logo.svg"
                alt="Bridgeware Logo"
                width={180}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-black hover:text-red-600 transition-colors">
                Home
              </a>
              <a href="/services" className="text-black hover:text-red-600 transition-colors">
                Services
              </a>
              <a href="/about" className="text-black hover:text-red-600 transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-red-600 font-medium">
                Portfolio
              </a>
              <a href="/contact" className="text-black hover:text-red-600 transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Our
              <br />
              <span className="text-red-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our collection of award-winning work across various industries and disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "Web Development")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="branding" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "Brand Identity")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "Mobile App")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "Digital Marketing")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "E-commerce")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Featured Case Study</h2>
            <p className="text-xl text-gray-600">A closer look at one of our most impactful projects</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-black rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">NX</span>
                </div>
                <p className="text-white text-lg">NexaTech Rebrand</p>
              </div>
            </div>
            <div>
              <Badge className="bg-red-600 hover:bg-red-700 mb-4">Brand Identity</Badge>
              <h3 className="text-3xl font-bold text-black mb-4">NexaTech Complete Rebrand</h3>
              <p className="text-lg text-gray-600 mb-6">
                NexaTech, a leading tech company, approached us to reimagine their brand identity as they expanded into
                new markets. Our challenge was to create a modern, versatile identity that would resonate with their
                global audience while maintaining their core values.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-bold text-black">The Challenge</h4>
                  <p className="text-gray-600">
                    Transform a dated brand into a modern identity that appeals to both enterprise clients and
                    tech-savvy consumers.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black">Our Approach</h4>
                  <p className="text-gray-600">
                    We conducted extensive market research, stakeholder interviews, and competitive analysis to develop
                    a comprehensive brand strategy.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black">The Results</h4>
                  <p className="text-gray-600">
                    The rebrand led to a 40% increase in brand recognition and helped secure three major enterprise
                    clients within the first quarter.
                  </p>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about our work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "BRIDGEWARE. transformed our online presence completely. Their strategic approach and attention to detail resulted in a website that not only looks stunning but also drives real business results.",
                author: "Sarah Johnson",
                position: "CEO, TechVision",
                rating: 5,
              },
              {
                quote:
                  "Working with the team at BRIDGEWARE. was a game-changer for our brand. They understood our vision perfectly and delivered a brand identity that truly represents who we are.",
                author: "Michael Chen",
                position: "Marketing Director, Elevate",
                rating: 5,
              },
              {
                quote:
                  "The e-commerce platform BRIDGEWARE. built for us increased our online sales by 200% in the first six months. Their expertise and dedication to our project was exceptional.",
                author: "Emily Rodriguez",
                position: "Founder, Artisan Goods",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-red-600 fill-red-600" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-black">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "45+", label: "Happy Clients" },
              { number: "12", label: "Industry Awards" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                BRIDGEWARE<span className="text-red-600">.</span>
              </div>
              <p className="text-gray-400">Creating digital excellence through innovative design and development.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Brand Identity</li>
                <li>Digital Marketing</li>
                <li>E-commerce</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Dribbble</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BRIDGEWARE Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group overflow-hidden">
      <div className={`h-56 ${project.color} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
        <span
          className={`text-3xl font-bold ${
            project.color.includes("black") || project.color.includes("red-6") ? "text-white" : "text-black"
          }`}
        >
          {project.title
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </span>
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
            View Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <Badge
          className={`mb-2 ${
            project.category === "Brand Identity" ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-gray-800"
          }`}
        >
          {project.category}
        </Badge>
        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.description}</p>
      </CardContent>
    </Card>
  )
}

// Project Data
const projects = [
  {
    title: "NexaTech Rebrand",
    category: "Brand Identity",
    description:
      "Complete brand identity redesign for a leading technology company, including logo, visual system, and brand guidelines.",
    color: "bg-red-600",
  },
  {
    title: "Eco Store",
    category: "E-commerce",
    description:
      "Custom e-commerce platform for a sustainable products retailer, featuring seamless checkout and inventory management.",
    color: "bg-black",
  },
  {
    title: "Fitness App",
    category: "Mobile App",
    description:
      "Mobile application for fitness enthusiasts with workout tracking, nutrition planning, and community features.",
    color: "bg-red-500",
  },
  {
    title: "Finance Dashboard",
    category: "Web Development",
    description:
      "Responsive web application for financial analytics with real-time data visualization and reporting tools.",
    color: "bg-gray-800",
  },
  {
    title: "Luxury Brand Campaign",
    category: "Digital Marketing",
    description:
      "Comprehensive digital marketing campaign for a luxury fashion brand, resulting in 200% increase in online engagement.",
    color: "bg-red-100",
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    description:
      "Modern, responsive website for a high-end restaurant with online reservation system and menu management.",
    color: "bg-black",
  },
  {
    title: "Travel Platform",
    category: "E-commerce",
    description:
      "Travel booking platform with personalized recommendations, secure payment processing, and user reviews.",
    color: "bg-red-600",
  },
  {
    title: "Healthcare Portal",
    category: "Web Development",
    description:
      "Secure patient portal for a healthcare provider, featuring appointment scheduling and medical record access.",
    color: "bg-gray-800",
  },
  {
    title: "Artisan Goods",
    category: "Brand Identity",
    description:
      "Brand identity and packaging design for a handcrafted goods company, emphasizing authenticity and craftsmanship.",
    color: "bg-red-200",
  },
]
