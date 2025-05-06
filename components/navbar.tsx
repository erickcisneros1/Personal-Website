"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Shield, Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-6 w-6 text-primary" />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm -z-10"></div>
            </div>
            <span className="font-bold text-xl">Erick Cisneros</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors animated-underline">
              About
            </Link>
            <Link
              href="#experience"
              className="text-foreground/80 hover:text-primary transition-colors animated-underline"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-foreground/80 hover:text-primary transition-colors animated-underline"
            >
              Projects
            </Link>
            <Link href="#skills" className="text-foreground/80 hover:text-primary transition-colors animated-underline">
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors animated-underline"
            >
              Contact
            </Link>
            <Button asChild variant="outline" size="sm" className="ml-4 rounded-full">
              <a href="/Erick_Cisneros_Resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Resume
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu" className="rounded-full">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 glass mt-4 rounded-xl p-4">
            <Link
              href="#about"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Button asChild variant="outline" size="sm" className="w-full mt-2 rounded-full">
              <a href="/Erick_Cisneros_Resume.pdf" download className="flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" />
                Resume
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
