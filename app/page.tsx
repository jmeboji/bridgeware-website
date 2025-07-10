'use client'

import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import './globals.css'
import { useState } from "react"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function HomePage() {

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
              <a href="/portfolio" className="text-black hover:text-red-600 transition-colors">
                Portfolio
              </a>
              <a href="/contact" className="text-black hover:text-red-600 transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <a href="/request-callback">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              We Create
              <br />
              <span className="text-red-600">Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your business with cutting-edge digital solutions. We craft exceptional websites, brands, and
              digital experiences that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="/request-callback" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices.",
                features: ["Responsive Design", "Performance Optimized", "SEO Ready"],
              },
              {
                title: "Brand Identity",
                description: "Complete brand identity design including logos, guidelines, and visual systems.",
                features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
              },
              {
                title: "Digital Marketing",
                description: "Strategic digital marketing campaigns that drive traffic and convert visitors.",
                features: ["SEO Optimization", "Social Media", "Content Strategy"],
              },
              {
                title: "E-commerce",
                description: "Powerful online stores that provide seamless shopping experiences.",
                features: ["Payment Integration", "Inventory Management", "Mobile Optimized"],
              },
              {
                title: "UI/UX Design",
                description: "User-centered design that creates intuitive and engaging digital experiences.",
                features: ["User Research", "Wireframing", "Prototyping"],
              },
              {
                title: "Consulting",
                description: "Strategic digital consulting to help your business grow and succeed online.",
                features: ["Strategy Planning", "Technical Audit", "Growth Optimization"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-red-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">We're a team of digital innovators</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over a decade of experience in digital design and development, we've helped hundreds of businesses
                transform their online presence and achieve their goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our approach combines strategic thinking with creative execution, ensuring every project delivers both
                beautiful design and measurable results.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">150+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/success_icon.svg"
                alt="Success"
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Recent Work</h2>
            <p className="text-xl text-gray-600">A selection of our latest projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Platform", category: "Web Development", color: "bg-red-100" },
              { title: "Brand Identity", category: "Design", color: "bg-black" },
              { title: "Mobile App", category: "Development", color: "bg-red-600" },
              { title: "Marketing Campaign", category: "Digital Marketing", color: "bg-gray-800" },
              { title: "Corporate Website", category: "Web Design", color: "bg-red-200" },
              { title: "SaaS Platform", category: "Full Stack", color: "bg-black" },
            ].map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                {project.title === "E-commerce Platform" ? (
                  <div className="h-48 relative rounded-t-lg overflow-hidden">
                    <Image
                      src="/e-com_icon.svg"
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : project.title === "Brand Identity" ? (
                  <div className="h-48 relative rounded-t-lg overflow-hidden">
                    <Image
                      src="/brand_icon.svg"
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : project.title === "Mobile App" ? (
                  <div className="h-48 relative rounded-t-lg overflow-hidden">
                    <Image
                      src="/mobile_icon.svg"
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : project.title === "SaaS Platform" ? (
                  <div className="h-48 relative rounded-t-lg overflow-hidden">
                    <Image
                      src="/saas_icon.svg"
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : project.title === "Marketing Campaign" ? (
                  <div className="h-48 relative rounded-t-lg overflow-hidden">
                    <Image
                      src="/marketing_icon.svg"
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : project.title === "Corporate Website" ? (
                  <div className="h-48 relative rounded-t-lg overflow-hidden">
                    <Image
                      src="/website_icon.svg"
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className={`h-48 ${project.color} rounded-t-lg flex items-center justify-center`}>
                    <span
                      className={`text-2xl font-bold ${project.color.includes("black") || project.color.includes("red-6") ? "text-white" : "text-black"}`}
                    >
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600">Ready to start your next project? Get in touch with us.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <p className="text-xl text-gray-600">
                  We're here to help you with your digital needs. Whether you're looking to build a new website, improve
                  your online presence, or grow your business, we're here to help.
                </p>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
                  <HomeContactForm />
                </GoogleReCaptchaProvider>
              </CardContent>
            </Card>
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

function HomeContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    let recaptchaToken = "";
    if (executeRecaptcha) {
      recaptchaToken = await executeRecaptcha("contact_form");
    } else {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            service: "",
            message: "",
          });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <Input placeholder="First Name" className="border-gray-300" value={formData.firstName} onChange={e => handleInputChange('firstName', e.target.value)} required />
        <Input placeholder="Last Name" className="border-gray-300" value={formData.lastName} onChange={e => handleInputChange('lastName', e.target.value)} required />
      </div>
      <Input placeholder="Email Address" type="email" className="border-gray-300" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required />
      <Input placeholder="Subject" className="border-gray-300" value={formData.service} onChange={e => handleInputChange('service', e.target.value)} required />
      <Textarea placeholder="Your Message" rows={4} className="border-gray-300" value={formData.message} onChange={e => handleInputChange('message', e.target.value)} required />
      <Button className="w-full bg-red-600 hover:bg-red-700 text-white" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</Button>
      {submitStatus === "success" && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-800 text-center">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-center">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}


