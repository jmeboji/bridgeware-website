import { ArrowRight, Award, Users, Target, Heart, Lightbulb, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";

export default function AboutPage() {
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
              <a href="/about" className="text-red-600 font-medium">
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
              About
              <br />
              <span className="text-red-600">BRIDGEWARE.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're a passionate team of digital innovators, designers, and developers dedicated to creating exceptional
              digital experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, BRIDGEWARE. began as a small team of creatives with a big vision: to help businesses thrive
                in the digital age through innovative design and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a passion project in a small studio has grown into a full-service digital agency that
                has helped over 150 businesses transform their online presence and achieve their goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we continue to push boundaries, embrace new technologies, and deliver exceptional results for our
                clients across various industries.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">2014</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="bg-black h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">D.</span>
                </div>
                <p className="text-white text-lg">Our journey continues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation",
                description:
                  "We constantly explore new technologies and creative solutions to stay ahead of the curve and deliver cutting-edge results.",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Passion",
                description:
                  "We love what we do, and it shows in every project. Our enthusiasm drives us to exceed expectations and create exceptional work.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Integrity",
                description:
                  "We believe in honest communication, transparent processes, and building long-term relationships based on trust and reliability.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results-Driven",
                description:
                  "Every decision we make is focused on achieving measurable results that contribute to our clients' success and growth.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description:
                  "We work closely with our clients as partners, combining our expertise with their vision to create something extraordinary.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description:
                  "We set high standards for ourselves and strive for perfection in every aspect of our work, from design to delivery.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="text-red-600 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2014",
                title: "Digital. Founded",
                description: "Started as a small design studio with 3 passionate creatives in a shared workspace.",
              },
              {
                year: "2016",
                title: "First Major Client",
                description: "Landed our first enterprise client and expanded our team to 8 members.",
              },
              {
                year: "2018",
                title: "Award Recognition",
                description: "Won 'Best Digital Agency' award and opened our first dedicated office space.",
              },
              {
                year: "2020",
                title: "Remote-First Transition",
                description:
                  "Successfully transitioned to remote-first operations, expanding our talent pool globally.",
              },
              {
                year: "2022",
                title: "100+ Projects Milestone",
                description: "Celebrated completing over 100 successful projects across various industries.",
              },
              {
                year: "2024",
                title: "Continued Growth",
                description: "Now serving clients worldwide with a team of 25+ digital experts.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-black mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Industry recognition for our exceptional work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Best Digital Agency 2023", "Top Web Design Firm", "Excellence in Innovation", "Client Choice Award"].map(
              (award, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-black">{award}</h3>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="/request-callback" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Schedule a Call
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
