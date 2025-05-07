"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-coral" />
          <span className="font-bold text-xl text-navy">Jump Start</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-coral",
              pathname === "/" ? "text-coral" : "text-navy",
            )}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={cn(
              "text-sm font-medium transition-colors hover:text-coral",
              pathname === "/services" ? "text-coral" : "text-navy",
            )}
          >
            Services
          </Link>
          <Link
            href="/tutors"
            className={cn(
              "text-sm font-medium transition-colors hover:text-coral",
              pathname === "/tutors" ? "text-coral" : "text-navy",
            )}
          >
            Our Tutors
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-coral",
              pathname === "/contact" ? "text-coral" : "text-navy",
            )}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/contact">
            <Button className="bg-coral hover:bg-coral/90 text-white">Get Started</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-50 grid h-[calc(100vh-5rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-white",
          isMenuOpen ? "slide-in-from-top-80" : "hidden",
        )}
      >
        <div className="flex flex-col space-y-6">
          <Link href="/" className="text-lg font-medium text-navy hover:text-coral">
            Home
          </Link>
          <Link href="/services" className="text-lg font-medium text-navy hover:text-coral">
            Services
          </Link>
          <Link href="/tutors" className="text-lg font-medium text-navy hover:text-coral">
            Our Tutors
          </Link>
          <Link href="/contact" className="text-lg font-medium text-navy hover:text-coral">
            Contact
          </Link>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="w-full bg-coral hover:bg-coral/90 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
