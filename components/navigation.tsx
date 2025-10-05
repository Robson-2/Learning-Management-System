"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
    setIsMenuOpen(false)
  }

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/newsletters", label: "NEWSLETTERS" },
    { href: "/vacancies", label: "VACANCIES" },
    { href: "/training", label: "TRAINING" },
    { href: "/contact", label: "CONTACT US" },
  ]

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="https://amasiko.co.za/assets/img/logo.png"
              alt="Amasiko Group Logo"
              width={140}
              height={45}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gray-900 px-2 py-1 rounded ${
                  pathname === item.href ? "text-[#27586B] font-semibold bg-blue-50" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Link
              href="/signin"
              className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded transition-colors"
            >
              Sign In
            </Link>
            <Link href="/get-started">
              <Button style={{ backgroundColor: "#27586B" }} className="text-white hover:opacity-90 px-6 py-2">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 px-3 py-2 rounded ${
                    pathname === item.href ? "text-[#27586B] font-semibold bg-blue-50" : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/signin"
                  className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                  <Button style={{ backgroundColor: "#27586B" }} className="text-white hover:opacity-90 w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
