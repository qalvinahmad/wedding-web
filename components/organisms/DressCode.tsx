"use client"

import { Heading2 } from '@/components/atoms/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DressCode() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const colorPalette = [
    { name: 'Champagne', hex: '#f7e7ce', description: 'Soft and romantic' },
    { name: 'Dusty Rose', hex: '#d4a5a5', description: 'Delicate and feminine' }
  ]

  const dressCodeGuidelines = [
    {
      category: 'Men',
      items: ['Formal suit or blazer', 'Dress shirt with tie', 'Dress shoes', 'Avoid casual wear']
    },
    {
      category: 'Women',
      items: ['Modest elegant dress', 'Formal blouse with skirt', 'Dress shoes or heels', 'Avoid white attire']
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
            <span className="mx-6 text-[#C49A6C] font-cormorant text-sm tracking-[0.3em] uppercase">Attire Guidelines</span>
            <div className="h-px bg-[#C49A6C] w-32" />
          </div>
          
          <Heading2 className="font-lucy-rose text-4xl md:text-5xl lg:text-6xl text-[#5B4B49] mb-6">
            Dress Code
          </Heading2>
          
          <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To create a harmonious and elegant atmosphere, we kindly request our guests to follow these attire guidelines
          </p>
        </motion.div>

        {/* Color Palette Section - Simplified */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="font-lucy-rose text-3xl lg:text-4xl text-[#5B4B49] mb-4">
                Recommended Color Palette
              </h3>
              <p className="font-cormorant text-lg text-gray-600">
                Choose from these beautiful colors to complement our wedding theme
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={color.name}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
                >
                  <div className={`relative rounded-2xl p-6 transition-all duration-300 ${
                    selectedColor === color.name 
                      ? 'bg-gray-100 shadow-xl border-2 border-[#C49A6C]' 
                      : 'bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl border border-gray-200'
                  }`}>
                    <div 
                      className="w-20 h-20 mx-auto mb-4 rounded-full shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300" 
                      style={{ backgroundColor: color.hex }}
                    />
                    <h4 className="font-poppins text-lg font-semibold text-[#5B4B49] text-center mb-2">
                      {color.name}
                    </h4>
                    <p className="font-cormorant text-sm text-gray-600 text-center">
                      {color.description}
                    </p>
                    
                    {selectedColor === color.name && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-[#C49A6C] rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dress Code Guidelines - Simplified */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {dressCodeGuidelines.map((guide, index) => (
            <motion.div
              key={guide.category}
              className="group"
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                {/* Simple Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#C49A6C] rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">
                      {guide.category === 'Men' ? '🤵' : '👗'}
                    </span>
                  </div>
                  
                  <h3 className="font-lucy-rose text-3xl font-normal text-[#5B4B49] mb-2">
                    {guide.category}
                  </h3>
                  <div className="w-16 h-1 bg-[#C49A6C] rounded-full mx-auto" />
                </div>
                
                {/* Guidelines List - Simplified */}
                <div className="space-y-4">
                  {guide.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-gray-100 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#C49A6C] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <p className="font-cormorant text-lg text-[#5B4B49]">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice - Simplified */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-red-50 rounded-3xl p-8 lg:p-10 border-2 border-red-200 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl">⚠️</span>
              <h3 className="font-lucy-rose text-2xl lg:text-3xl font-normal text-red-700">
                Important Notice
              </h3>
            </div>
            <p className="font-cormorant text-xl text-red-600 font-semibold leading-relaxed">
              Please kindly avoid wearing white, cream, or ivory as these colors are reserved for the bride. 
              Your cooperation helps us create beautiful wedding photos and memories.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}