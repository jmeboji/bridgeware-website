"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
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

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href
                    ? "text-red-600 font-medium"
                    : "text-black hover:text-red-600 transition-colors"
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white" asChild>
              <Link href="/request-callback">Get Started</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white p-0">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                {/* Sheet header */}
                <div className="flex items-center px-6 h-16 border-b border-gray-100">
                  <Link href="/">
                    <Image
                      src="/bridge_logo.svg"
                      alt="Bridgeware Logo"
                      width={140}
                      height={48}
                      className="object-contain"
                      priority
                    />
                  </Link>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col px-6 py-6 gap-1">
                  {navLinks.map(({ href, label }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className={`text-lg py-3 border-b border-gray-100 transition-colors ${
                          pathname === href
                            ? "text-red-600 font-medium"
                            : "text-black hover:text-red-600"
                        }`}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* CTA button */}
                <div className="px-6 pt-2">
                  <SheetClose asChild>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                      <Link href="/request-callback">Get Started</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
