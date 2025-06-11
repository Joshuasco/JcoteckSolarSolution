'use client'

import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-green-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">J</span>
            </div>
            <span className="text-xl font-bold">JCOTECK Solar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#features" 
                className="px-3 py-2 hover:bg-primary/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link href="#how-it-works" className="px-3 py-2 hover:bg-primary/10 rounded"
                onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="#testimonials" className="px-3 py-2 hover:bg-primary/10 rounded"
                onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="#contact" className="px-3 py-2 hover:bg-primary/10 rounded"
                onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
              {/* Repeat for other links */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}