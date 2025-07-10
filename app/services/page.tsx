import { ArrowRight, CheckCircle, Zap, Clock, BarChart, Users, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ServicesPage() {
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
              <a href="/services" className="text-red-600 font-medium">
                Services
              </a>
              <a href="/about" className="text-black hover:text-red-600 transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-black hover:text-red-600 transition-colors">
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
              <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. From web development to brand identity,
              we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Explore our range of specialized services</p>
          </div>

          <Tabs defaultValue="web-development" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-12">
              <TabsTrigger value="web-development">Web Dev</TabsTrigger>
              <TabsTrigger value="brand-identity">Branding</TabsTrigger>
              <TabsTrigger value="digital-marketing">Marketing</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
            </TabsList>

            <TabsContent value="web-development" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">Web Development</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We build custom, high-performance websites and web applications that deliver exceptional user
                    experiences and drive business results.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Custom website development",
                      "Web application development",
                      "Progressive Web Apps (PWAs)",
                      "Content Management Systems",
                      "API development and integration",
                      "Performance optimization",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-black rounded-lg p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">Our Web Development Process</h4>
                  <ol className="space-y-6">
                    {[
                      { step: "Discovery", desc: "Understanding your business goals and requirements" },
                      { step: "Planning", desc: "Creating a roadmap and technical specifications" },
                      { step: "Design", desc: "Crafting the visual and interactive elements" },
                      { step: "Development", desc: "Building your website or application" },
                      { step: "Testing", desc: "Ensuring quality and performance" },
                      { step: "Launch", desc: "Deploying and monitoring your project" },
                    ].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="font-bold">{step.step}</h5>
                          <p className="text-gray-300 text-sm">{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="brand-identity" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">Brand Identity</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We create distinctive brand identities that resonate with your audience and set you apart from the
                    competition.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Logo design and development",
                      "Brand strategy and positioning",
                      "Visual identity systems",
                      "Brand guidelines and documentation",
                      "Brand messaging and voice",
                      "Brand collateral design",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-600 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Brand Strategy</h4>
                    <p className="text-sm">Defining your unique position in the market</p>
                  </div>
                  <div className="bg-black rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Visual Identity</h4>
                    <p className="text-sm">Creating your distinctive visual language</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Brand Voice</h4>
                    <p className="text-sm">Crafting your unique communication style</p>
                  </div>
                  <div className="bg-red-500 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Brand Experience</h4>
                    <p className="text-sm">Designing memorable customer interactions</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital-marketing" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">Digital Marketing</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We develop data-driven marketing strategies that increase visibility, drive traffic, and convert
                    visitors into customers.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Search Engine Optimization (SEO)",
                      "Pay-Per-Click (PPC) advertising",
                      "Social media marketing",
                      "Content marketing strategy",
                      "Email marketing campaigns",
                      "Analytics and performance tracking",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-6 text-black">Our Marketing Approach</h4>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mr-4">
                        <BarChart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-black">Data-Driven</h5>
                        <p className="text-gray-600 text-sm">Making decisions based on analytics and insights</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-black">Audience-Focused</h5>
                        <p className="text-gray-600 text-sm">Targeting the right people with the right message</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mr-4">
                        <Layers className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-black">Multi-Channel</h5>
                        <p className="text-gray-600 text-sm">Leveraging multiple platforms for maximum reach</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">E-commerce Solutions</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We build powerful online stores that provide seamless shopping experiences and drive sales.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Custom e-commerce development",
                      "Shopping cart and checkout optimization",
                      "Payment gateway integration",
                      "Inventory management systems",
                      "Mobile commerce solutions",
                      "E-commerce SEO and marketing",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-black rounded-lg p-8 text-white">
                  <h4 className="text-xl font-bold mb-6">E-commerce Platforms We Work With</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Solutions", "Headless Commerce"].map(
                      (platform, index) => (
                        <div key={index} className="bg-gray-800 rounded p-4 text-center">
                          {platform}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ui-ux" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">UI/UX Design</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We create intuitive, user-centered designs that enhance user satisfaction and drive engagement.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "User research and testing",
                      "Information architecture",
                      "Wireframing and prototyping",
                      "Visual design and UI systems",
                      "Interaction design",
                      "Usability testing and optimization",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-red-600 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Our Design Process</h4>
                    <ol className="space-y-2 ml-6 list-decimal">
                      <li>Discover user needs and business goals</li>
                      <li>Define the problem and solution requirements</li>
                      <li>Design wireframes and prototypes</li>
                      <li>Develop high-fidelity designs</li>
                      <li>Test with real users and iterate</li>
                    </ol>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-2 text-black">Design Principles</h4>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-black mx-auto flex items-center justify-center mb-2">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">User-Centered</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 mx-auto flex items-center justify-center mb-2">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Intuitive</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-black mx-auto flex items-center justify-center mb-2">
                          <Layers className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Consistent</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 mx-auto flex items-center justify-center mb-2">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">Efficient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consulting" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">Digital Consulting</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We provide strategic guidance to help businesses navigate the digital landscape and achieve their
                    goals.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Digital transformation strategy",
                      "Technology assessment and recommendations",
                      "Process optimization",
                      "Digital roadmap development",
                      "Competitive analysis",
                      "Growth strategy and planning",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-6 text-black">Consulting Services</h4>
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5 className="font-bold text-black mb-2">Digital Strategy Workshop</h5>
                      <p className="text-gray-600 text-sm">
                        A collaborative session to define your digital vision and create an actionable roadmap.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5 className="font-bold text-black mb-2">Technical Audit</h5>
                      <p className="text-gray-600 text-sm">
                        A comprehensive review of your current digital assets and technology stack.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5 className="font-bold text-black mb-2">Growth Acceleration</h5>
                      <p className="text-gray-600 text-sm">
                        Strategic planning to identify and capitalize on growth opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">What sets our services apart from the rest</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Results-Driven Approach",
                description:
                  "We focus on delivering measurable results that directly contribute to your business goals and ROI.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Expert Team",
                description:
                  "Our team consists of industry experts with years of experience in their respective fields.",
              },
              {
                icon: <Layers className="h-10 w-10" />,
                title: "End-to-End Solutions",
                description:
                  "We provide comprehensive services from strategy and planning to execution and ongoing support.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-red-600 mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Pricing</h2>
            <p className="text-xl text-gray-600">Flexible options to suit your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "£1,499",
                description: "Perfect for small businesses and startups",
                features: [
                  "Professional website design",
                  "Mobile responsive",
                  "Basic SEO setup",
                  "Contact form",
                  "Social media integration",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Professional",
                price: "£3,499",
                description: "Ideal for growing businesses",
                features: [
                  "Everything in Basic",
                  "Custom design & branding",
                  "Content management system",
                  "Advanced SEO package",
                  "E-commerce functionality",
                  "Email marketing setup",
                ],
                cta: "Get Started",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For established businesses with complex needs",
                features: [
                  "Everything in Professional",
                  "Custom web application",
                  "Third-party integrations",
                  "Advanced analytics",
                  "Dedicated support",
                  "Ongoing maintenance",
                ],
                cta: "Contact Us",
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border-0 ${
                  plan.popular ? "shadow-xl ring-2 ring-red-600" : "shadow-lg"
                } hover:shadow-xl transition-shadow`}
              >
                {plan.popular && (
                  <div className="bg-red-600 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-black mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-white border border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-600">
            <p>Need a custom solution? Contact us for a personalized quote.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="/request-callback" className="flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              View Our Portfolio
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
