"use client"

import type React from "react"

import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Image from "next/image"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Link from "next/link";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    let recaptchaToken = "";
    if (executeRecaptcha) {
      try {
        recaptchaToken = await executeRecaptcha("contact_form");
      } catch (error) {
        console.warn("reCAPTCHA failed, proceeding without it:", error);
        recaptchaToken = "fallback-token";
      }
    } else {
      console.warn("reCAPTCHA not available, proceeding without it");
      recaptchaToken = "fallback-token";
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            budget: "",
            message: "",
            newsletter: false,
          })
          setSubmitStatus("idle")
        }, 3000)
      } else {
        setSubmitStatus("error")
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" passHref legacyBehavior>
                <Image
                  src="/bridge_logo.svg"
                  alt="Bridgeware Logo"
                  width={180}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>
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
              <a href="/contact" className="text-red-600 font-medium">
                Contact
              </a>
            </div>
            <Link href="/request-callback" passHref legacyBehavior>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Get In
              <br />
              <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and explore how we can help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Visit Us</h3>
                    <p className="text-gray-600">124 City Road</p>
                    <p className="text-gray-600">London, EC1V 2NX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <Card className="mt-8 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-black mb-2">Quick Response Promise</h3>
                  <p className="text-gray-600 text-sm">
                    We respond to all inquiries within 24 hours. For urgent matters, call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-black mb-2">Start Your Project</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">
                        Sorry, there was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-black font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={e => handleInputChange('firstName', e.target.value)}
                          className="mt-1 border-gray-300"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-black font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={e => handleInputChange('lastName', e.target.value)}
                          className="mt-1 border-gray-300"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-black font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          className="mt-1 border-gray-300"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-black font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={e => handleInputChange('phone', e.target.value)}
                          className="mt-1 border-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-black font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={e => handleInputChange('company', e.target.value)}
                        className="mt-1 border-gray-300"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service" className="text-black font-medium">
                          Service Needed *
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="mt-1 border-gray-300">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="brand-identity">Brand Identity</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="consulting">Digital Consulting</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                            <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-black font-medium">
                          Estimated Budget
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="mt-1 border-gray-300">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-plus">$50,000+</SelectItem>
                            <SelectItem value="discuss">Let's Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                      <Textarea
                      className="flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300"
                      placeholder="Your Message"
                      rows={4}
                        value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                        required
                      />
                    <Button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-red-600 hover:bg-red-700 text-white"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while complex applications can take 3-6 months.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "We work with businesses of all sizes, from startups to enterprise companies. We have packages designed specifically for small businesses.",
              },
              {
                question: "What's included in your pricing?",
                answer:
                  "Our pricing includes design, development, testing, and launch. We also provide training and 30 days of post-launch support at no extra cost.",
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer:
                  "Yes, we offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally.",
              },
              {
                question: "Can you help with existing websites?",
                answer:
                  "Definitely! We can redesign, optimize, or add new features to existing websites. We also provide audits and improvement recommendations.",
              },
              {
                question: "What if I need changes after launch?",
                answer:
                  "We include minor revisions in our packages and offer flexible maintenance plans for ongoing updates and changes.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prefer to Talk Directly?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation call to discuss your project in detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              View Our Work
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

export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}
