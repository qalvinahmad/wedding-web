"use client"

import { Heading2 } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CoupleIntroduction() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5F2] via-white to-[#F8F5F2]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C49A6C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C49A6C]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Elegant Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#C49A6C] to-transparent w-24" />
            <span className="mx-6 text-[#C49A6C] font-cormorant text-sm tracking-[0.3em] uppercase">Our Story</span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#C49A6C] to-transparent w-24" />
          </div>
          
          <Heading2 className="font-lucy-rose text-4xl md:text-5xl lg:text-6xl text-[#5B4B49] mb-8 leading-tight">
            Together with families, we cordially invite you to celebrate our special day
          </Heading2>
          
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          {/* Bride Card */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredCard('bride')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-rose-100 to-transparent rounded-full opacity-30" />
              
              <div className="relative flex flex-col lg:flex-row items-center gap-12">
                {/* Photo */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 rounded-full opacity-20 group-hover:rotate-6 transition-transform duration-700" />
                    <div className="absolute -inset-2 bg-gradient-to-br from-white to-rose-50 rounded-full shadow-lg" />
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                      <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&crop=face" 
                        alt="Nafa" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
   
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="flex-1 text-center lg:text-left space-y-8">
                  <div>
                    <motion.h3 
                      className="font-lucy-rose text-4xl lg:text-5xl font-normal text-[#5B4B49] mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Nafa Ana Nur Maulidha
                    </motion.h3>
                    <div className="flex justify-center lg:justify-start">
                      <div className="h-1 w-32 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
                    <p className="font-cormorant text-xl text-[#5B4B49] mb-6 italic">
                      "The most beautiful flower in our garden"
                    </p>
                    <div className="space-y-4">
                      <p className="font-cormorant text-lg text-gray-700">Putri tercinta dari</p>
                      <div className="space-y-3">
                        <p className="font-cormorant text-xl font-semibold text-[#5B4B49]">
                          Bapak Arif Nurul Hudha
                        </p>
                        <div className="flex justify-center lg:justify-start">
                          <span className="font-lucy-rose text-2xl text-rose-400">&</span>
                        </div>
                        <p className="font-cormorant text-xl font-semibold text-[#5B4B49]">
                          Ibu Titik Aryati
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start">
                    <div className="bg-gradient-to-r from-rose-400 to-pink-400 px-8 py-3 rounded-full shadow-lg">
                      <span className="font-poppins text-white font-semibold tracking-wide">The Bride</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Elegant Divider */}
          <motion.div 
            className="flex justify-center py-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#C49A6C] to-[#B8885F] rounded-full shadow-2xl flex items-center justify-center">
                <span className="font-lucy-rose text-4xl text-white">&</span>
              </div>
              <div className="absolute -inset-3 bg-gradient-to-br from-[#C49A6C]/20 to-[#B8885F]/20 rounded-full animate-pulse" />
            </div>
          </motion.div>
          
          {/* Groom Card */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredCard('groom')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-blue-100 to-transparent rounded-full opacity-30" />
              
              <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12">
                {/* Photo */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-300 rounded-full opacity-20 group-hover:-rotate-6 transition-transform duration-700" />
                    <div className="absolute -inset-2 bg-gradient-to-br from-white to-blue-50 rounded-full shadow-lg" />
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face" 
                        alt="Ali" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
   
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="flex-1 text-center lg:text-right space-y-8">
                  <div>
                    <motion.h3 
                      className="font-lucy-rose text-4xl lg:text-5xl font-normal text-[#5B4B49] mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Ali Mursid
                    </motion.h3>
                    <div className="flex justify-center lg:justify-end">
                      <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                    <p className="font-cormorant text-xl text-[#5B4B49] mb-6 italic">
                      "A gentleman with a heart of gold"
                    </p>
                    <div className="space-y-4">
                      <p className="font-cormorant text-lg text-gray-700">Putra terkasih dari</p>
                      <div className="space-y-3">
                        <p className="font-cormorant text-xl font-semibold text-[#5B4B49]">
                          Bapak (Alm.) Drs. H. Icang Sudayat, M.M.Pd.
                        </p>
                        <div className="flex justify-center lg:justify-end">
                          <span className="font-lucy-rose text-2xl text-blue-400">&</span>
                        </div>
                        <p className="font-cormorant text-xl font-semibold text-[#5B4B49]">
                          Ibu (Alm.) Hj. Siti Nuraeni
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-end">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-400 px-8 py-3 rounded-full shadow-lg">
                      <span className="font-poppins text-white font-semibold tracking-wide">The Groom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}