import { ArrowRight, ArrowUpRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <TabsTrigger value="ai-automation">AI Automation</TabsTrigger>
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

            <TabsContent value="ai-automation" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "AI Automation")
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
                  <span className="text-white text-4xl font-bold">AI</span>
                </div>
                <p className="text-white text-lg">PulseLogic Automation</p>
              </div>
            </div>
            <div>
              <Badge className="bg-red-600 hover:bg-red-700 mb-4">AI Automation</Badge>
              <h3 className="text-3xl font-bold text-black mb-4">PulseLogic End-to-End Automation</h3>
              <p className="text-lg text-gray-600 mb-6">
                PulseLogic, a fast-growing SaaS company, engaged us to eliminate the manual bottlenecks slowing their
                operations. Our challenge was to design and deploy a fully automated pipeline covering lead capture,
                onboarding, and customer support — without disrupting their existing systems.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-bold text-black">The Challenge</h4>
                  <p className="text-gray-600">
                    Replace a fragmented stack of manual processes and disconnected tools with a unified, intelligent
                    automation system that could scale with rapid business growth.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black">Our Approach</h4>
                  <p className="text-gray-600">
                    We mapped every manual touchpoint across their sales and operations teams, then built custom
                    automation workflows and an AI chatbot integrated directly into their CRM and helpdesk platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black">The Results</h4>
                  <p className="text-gray-600">
                    The automation suite reduced manual workload by 70%, cut customer response times from 6 hours to
                    under 4 minutes, and generated a 35% uplift in qualified leads within the first two months.
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
                  "BRIDGEWARE. automated our entire lead nurturing process and built us an AI assistant that handles 80% of customer queries without human intervention. The efficiency gains have been extraordinary.",
                author: "Michael Chen",
                position: "Operations Director, PulseLogic",
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
    </div>
  )
}

type Project = {
  title: string
  category: string
  description: string
  color: string
}

function ProjectCard({ project }: { project: Project }) {
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
            project.category === "AI Automation" ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-gray-800"
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

const projects: Project[] = [
  {
    title: "PulseLogic Automation",
    category: "AI Automation",
    description:
      "End-to-end automation suite for a fast-growing SaaS company, covering lead capture, onboarding workflows, and AI-powered customer support.",
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
    title: "ClarityOps AI",
    category: "AI Automation",
    description:
      "Custom AI automation platform for a professional services firm, streamlining client reporting, document processing, and internal approvals.",
    color: "bg-red-200",
  },
]
