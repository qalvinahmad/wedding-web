'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navigationItems = [
    { href: '#home', label: 'Home', description: 'Welcome to our wedding' },
    { href: '#love-story', label: 'Our Story', description: 'How we met and fell in love' },
    { href: '#gallery', label: 'Gallery', description: 'Beautiful moments together' },
    { href: '#dresscode', label: 'Dresscode', description: 'What to wear' },
    { href: '#acara', label: 'Acara', description: 'Wedding ceremony details' },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.replace('#', ''))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  

  const mobileMenuVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  }

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F8F5F2]/95 backdrop-blur-xl shadow-2xl border-b border-[#C49A6C]/20' 
          : 'bg-gradient-to-r from-[#F8F5F2]/80 via-[#F8F5F2]/85 to-[#F8F5F2]/80 backdrop-blur-md'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Elegant top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C49A6C] to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-48 xl:px-48">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Luxury Logo */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
   
              <div className="absolute inset-0 rounded-full border-2 border-[#C49A6C]/30 animate-pulse" />
            </div>
            
            <div className="flex flex-col">
              <motion.span 
                className="font-lucy-rose text-2xl lg:text-3xl font-normal bg-gradient-to-r from-[#C49A6C] via-[#B8885F] to-[#5B4B49] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Nafa & Ali
              </motion.span>
              <motion.span 
                className="font-cormorant text-xs lg:text-sm text-[#5B4B49] font-medium tracking-wider"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ahad, 27 JULI 2025
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <motion.a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
className="relative px-6 py-3 rounded-2xl transition-all duration-300 cursor-pointer font-poppins font-medium text-[#5B4B49]"

                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center space-x-2 relative z-10">

                    <span className="text-sm">{item.label}</span>
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-8 h-1 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full shadow-sm"
                      layoutId="activeIndicator"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      style={{ x: '-50%' }}
                    />
                  )}
                  
                  {/* Hover tooltip
                  <motion.div
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  > */}
{/* 
                  </motion.div> */}
                </motion.a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center space-y-1">
              <motion.span 
                className="block w-6 h-0.5 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full"
                animate={isMenuOpen ? { rotate: 45, y: 6, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-5 h-0.5 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full"
                animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-6 h-0.5 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full"
                animate={isMenuOpen ? { rotate: -45, y: -6, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Elegant divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#C49A6C]/50 to-transparent my-4" />
              
              <motion.nav 
                className="pb-6 space-y-3"
                variants={mobileMenuVariants}
              >
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    // variants={mobileItemVariants}
                    className={`
                      flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 font-poppins font-medium
                      ${activeSection === item.href.replace('#', '') 
                        ? 'text-[#5B4B49] bg-gradient-to-r from-[#C49A6C]/20 to-[#B8885F]/20 border-l-4 border-[#C49A6C] shadow-md' 
                        : 'text-[#5B4B49] hover:text-[#C49A6C] hover:bg-gradient-to-r hover:from-[#C49A6C]/10 hover:to-[#B8885F]/10'
                      }
                    `}
                    whileTap={{ scale: 0.98 }}
                  >

          
                    {activeSection === item.href.replace('#', '') && (
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                    )}
                  </motion.a>
                ))}
              </motion.nav>
              
              {/* Mobile decorative element */}
              <div className="flex justify-center pb-4">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Elegant bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C49A6C]/30 to-transparent" />
    </motion.header>
  )
}
