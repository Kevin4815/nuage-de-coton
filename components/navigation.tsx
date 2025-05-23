"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full bg-sky-100 py-4 px-4 md:px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold text-teal-600 title-font">Nuage de coton</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-teal-600",
                pathname === item.href ? "text-teal-600" : "text-gray-600",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-black font-bold rounded-full"
          >
            Pré-inscription
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-sky-200"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sky-100 p-4 shadow-md z-50">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-teal-600 p-2",
                  pathname === item.href ? "text-teal-600 bg-sky-200 rounded-md" : "text-gray-600",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-black font-bold rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Pré-inscription
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
