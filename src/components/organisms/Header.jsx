'use client'
import NavigationItem from '@/components/molecules/NavigationItem'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/couple', label: 'Our Story' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/rsvp', label: 'RSVP' },
  ]

  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-rose-500">
            B & G
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigationItems.map((item) => (
              <NavigationItem key={item.href} href={item.href}>
                {item.label}
              </NavigationItem>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-full h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <NavigationItem key={item.href} href={item.href}>
                  {item.label}
                </NavigationItem>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
