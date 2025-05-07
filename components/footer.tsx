import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full bg-navy text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-coral" />
              <span className="font-bold text-xl text-white">Jump Start</span>
            </Link>
            <p className="text-white/70">
              Personalized tutoring services for students in grades K-12, specializing in reading, writing, math, and
              test preparation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-coral">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-coral">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-coral">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-coral">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-coral">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-coral">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-coral">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="text-white/70 hover:text-coral">
                  Our Tutors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-coral">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-coral">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#personalized" className="text-white/70 hover:text-coral">
                  One-on-One Tutoring
                </Link>
              </li>
              <li>
                <Link href="/services#test-prep" className="text-white/70 hover:text-coral">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link href="/services#group" className="text-white/70 hover:text-coral">
                  Small Group Instruction
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-coral">
                  Reading & Writing Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-coral">
                  Math Tutoring
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-coral">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 shrink-0 text-coral" />
                <a href="mailto:info@jumpstartadvancedacademics.com" className="text-white/70 hover:text-coral">
                  info@jumpstartadvancedacademics.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 shrink-0 text-coral" />
                <a href="tel:+17035551234" className="text-white/70 hover:text-coral">
                  (703) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-coral" />
                <span className="text-white/70">Northern Virginia (Fairfax County, Arlington County, Alexandria)</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="outline" className="w-full border-coral text-coral hover:bg-coral/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Jump Start with Us Advanced Academics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-white/70 hover:text-coral">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-coral">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
