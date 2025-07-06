"use client"

import { Heading2 } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EventInfo() {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)

  const events = [
    {
      id: 'akad',
      title: 'Akad Nikah',
      subtitle: 'The Sacred Ceremony',
      details: [
        { label: 'Tanggal', value: 'Minggu, 27 Juli 2025' },
        { label: 'Waktu', value: '08:00 - 10:00 WIB' },
        { label: 'Lokasi', value: 'Masjid [Nama Masjid]', address: 'Jl. [Alamat Lengkap]' }
      ]
    },
    {
      id: 'resepsi',
      title: 'Resepsi',
      subtitle: 'Celebration of Love',
      details: [
        { label: 'Tanggal', value: 'Minggu, 27 Juli 2025' },
        { label: 'Waktu', value: '11:00 - 15:00 WIB' },
        { label: 'Lokasi', value: 'Gedung [Nama Gedung]', address: 'Jl. [Alamat Lengkap]' }
      ]
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-[#F8F5F2]" />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Clean Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-[#C49A6C] w-32" />
            <span className="mx-6 text-[#C49A6C] font-cormorant text-sm tracking-[0.3em] uppercase">Save The Date</span>
            <div className="h-px bg-[#C49A6C] w-32" />
          </div>
          
          <Heading2 className="font-lucy-rose text-4xl md:text-5xl lg:text-6xl text-[#5B4B49] mb-6">
            Informasi Acara
          </Heading2>
          
          <p className="font-cormorant text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami dengan penuh sukacita mengundang Anda untuk berbagi kebahagiaan di hari istimewa kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="group"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
                
                {/* Simple Header */}
                <div className="relative text-center mb-10">
                  <div className="w-16 h-16 bg-[#C49A6C] rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">
                      {event.id === 'akad' ? '💍' : '🎉'}
                    </span>
                  </div>
                  
                  <h3 className="font-lucy-rose text-3xl lg:text-4xl font-normal text-[#5B4B49] mb-2">
                    {event.title}
                  </h3>
                  <p className="font-cormorant text-lg text-gray-600 italic">
                    {event.subtitle}
                  </p>
                  
                  <div className="w-16 h-1 bg-[#C49A6C] rounded-full mx-auto mt-4" />
                </div>
                
                {/* Event Details - Simplified */}
                <div className="space-y-6">
                  {event.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-gray-100 transition-all duration-300"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + detailIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center">
                        <p className="font-poppins text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                          {detail.label}
                        </p>
                        <p className="font-cormorant text-xl font-bold text-[#5B4B49] leading-tight">
                          {detail.value}
                        </p>
                        {detail.address && (
                          <p className="font-cormorant text-sm text-gray-500 mt-2">
                            {detail.address}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Simple Action Button */}
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <button 
                  onClick={() => window.open('https://www.google.com/maps/place/Kantor+Urusan+Agama+(KUA)+Kecamatan+Banjarnegara/@-7.39499,109.6889541,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7aa93d9f0921ef:0x2ea6ee151ed30e1a!8m2!3d-7.3949953!4d109.691529!16s%2Fg%2F11bc7qgcck?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D')}
                  className="bg-[#C49A6C] text-white font-poppins font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#B8885F] hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300">
                    Lihat Lokasi
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <p className="font-cormorant text-xl text-[#5B4B49] leading-relaxed">
              "Kehadiran dan doa restu Anda adalah kehormatan terbesar bagi kami"
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-12 h-1 bg-[#C49A6C] rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}