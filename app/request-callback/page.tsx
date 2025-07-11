"use client"

import type React from "react"

import { ArrowRight, Phone, Clock, CheckCircle, Calendar, User, MessageSquare } from "lucide-react"
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

function RequestCallbackForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    callTime: "",
    preferredDate: "",
    urgency: "",
    projectDescription: "",
    budget: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    let recaptchaToken = "";
    if (executeRecaptcha) {
      recaptchaToken = await executeRecaptcha("request_callback_form");
    } else {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch('/api/request-callback', {
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
            phone: "",
            company: "",
            service: "",
            callTime: "",
            preferredDate: "",
            urgency: "",
            projectDescription: "",
            budget: "",
            newsletter: false,
          });
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <a href="/contact" className="text-black hover:text-red-600 transition-colors">
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
              Request a
              <br />
              <span className="text-red-600">Callback</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to start your project? Schedule a free consultation call with our experts. We'll discuss your goals,
              timeline, and how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to get your project started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "1. Fill Out the Form",
                description: "Tell us about your project and when you'd like us to call you back.",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "2. We Call You",
                description: "Our expert will call you at your preferred time to discuss your project in detail.",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "3. Get Your Proposal",
                description: "Receive a customized proposal with timeline, pricing, and next steps within 24 hours.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Callback Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black mb-2">Schedule Your Free Consultation</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll call you back within 2 business hours.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-green-800 mb-2">Callback Request Submitted!</h3>
                  <p className="text-green-700">
                    Thank you! We've received your callback request and will contact you at{" "}
                    <strong>{formData.phone}</strong> within 2 business hours.
                  </p>
                  <p className="text-green-600 text-sm mt-2">Check your email for a confirmation with next steps.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-black font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1 border-gray-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-black font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1 border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-black font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1 border-gray-300"
                       /* placeholder="+44 (555) 123-4567" */
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="company" className="text-black font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1 border-gray-300"
                    />
                  </div>
                </div>

                {/* Callback Preferences */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Callback Preferences</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="callTime" className="text-black font-medium">
                        Best Time to Call *
                      </Label>
                      <Select value={formData.callTime} onValueChange={(value) => handleInputChange("callTime", value)}>
                        <SelectTrigger className="mt-1 border-gray-300">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                          <SelectItem value="anytime">Anytime during business hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredDate" className="text-black font-medium">
                        Preferred Date
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        className="mt-1 border-gray-300"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Project Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
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
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency" className="text-black font-medium">
                        Project Urgency
                      </Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger className="mt-1 border-gray-300">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (Within 1 month)</SelectItem>
                          <SelectItem value="soon">Soon (1-3 months)</SelectItem>
                          <SelectItem value="planning">Planning (3-6 months)</SelectItem>
                          <SelectItem value="exploring">Just Exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mb-4">
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
                  <div>
                    <Label htmlFor="projectDescription" className="text-black font-medium">
                      Brief Project Description *
                    </Label>
                    <Textarea
                      id="projectDescription"
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                      rows={4}
                      className="mt-1 border-gray-300"
                      placeholder="Tell us about your project goals, current challenges, and what you hope to achieve..."
                      required
                    />
                  </div>
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                  />
                  <Label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter for digital marketing tips and industry insights
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      Request Callback
                      <Phone className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600">Here's what happens after you submit your callback request</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Quick Response</h3>
                    <p className="text-gray-600">
                      We'll call you back within 2 business hours, or at your preferred time if specified.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Expert Consultation</h3>
                    <p className="text-gray-600">
                      Speak directly with one of our senior consultants who specializes in your project type.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Detailed Discussion</h3>
                    <p className="text-gray-600">
                      We'll discuss your goals, timeline, budget, and answer any questions you have about the process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Custom Proposal</h3>
                    <p className="text-gray-600">
                      Receive a detailed proposal with pricing, timeline, and project roadmap within 24 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
       {/*  <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Prefer to Contact Us Directly?</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you'd rather reach out immediately, here are other ways to get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Call Us: +1 (555) 123-4567
              <Phone className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Send Email Instead
              <ArrowRight className="ml-2 h-4 w-4" />
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

export default function RequestCallbackPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <RequestCallbackForm />
    </GoogleReCaptchaProvider>
  );
}
