import Link from 'next/link'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
              <span className="text-sm font-bold">J</span>
            </div>
            JCOTECK Solar
          </h3>
          <p className="text-gray-300 mb-4">
            Providing reliable solar solutions for Nigerian homes and businesses.
          </p>
          <p className="text-gray-400 text-sm">
            © {currentYear} JCOTECK Solar Solutions. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-gray-300 hover:text-primary transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaWhatsapp className="text-primary mr-2" />
              <a href="https://wa.me/234YOURNUMBER" className="hover:text-primary transition-colors">
                +234 812 345 6789
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-primary mr-2" />
              <a href="mailto:jcoteck@gmail.com" className="hover:text-primary transition-colors">
                jcoteck@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}