"use client"

import type React from "react"

import { ArrowRight, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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
                            <SelectItem value="ai-automation">AI Automation</SelectItem>
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
                      className="border-gray-300"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      required
                    />

                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
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
