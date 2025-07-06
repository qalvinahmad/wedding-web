"use client"

import { Heading2 } from '@/components/atoms/Typography'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pre-Wedding Shoot",
      description: "Capturing beautiful moments before our big day",
      category: "pre-wedding"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Engagement Session",
      description: "The moment we said yes to forever",
      category: "engagement"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Golden Hour",
      description: "Love shining bright in golden light",
      category: "portrait"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Together Forever",
      description: "Walking hand in hand into our future",
      category: "couple"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sweet Moments",
      description: "Candid shots of our love story",
      category: "candid"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nature's Blessing",
      description: "Love blooming in nature's embrace",
      category: "outdoor"
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F5F2] to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-[#C49A6C]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-[#C49A6C]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Elegant Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#C49A6C] to-transparent w-32" />
            <span className="mx-6 text-[#C49A6C] font-cormorant text-sm tracking-[0.3em] uppercase">Our Memories</span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#C49A6C] to-transparent w-32" />
          </div>
          
          <Heading2 className="font-lucy-rose text-4xl md:text-5xl lg:text-6xl text-[#5B4B49] mb-6">
            Gallery
          </Heading2>
          
          <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of precious moments from our journey together, capturing the love story that led us to this beautiful day
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <h3 className="font-lucy-rose text-2xl font-normal mb-2">
                        {image.title}
                      </h3>
                      <p className="font-cormorant text-sm opacity-90">
                        {image.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-poppins text-xs font-medium text-[#5B4B49] capitalize">
                      {image.category}
                    </span>
                  </div>
                  
                  {/* Hover Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <span className="text-white text-2xl">🔍</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Content */}
                <div className="p-6 bg-gradient-to-br from-white to-[#F8F5F2]">
                  <h3 className="font-lucy-rose text-xl font-normal text-[#5B4B49] mb-2">
                    {image.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
            <p className="font-cormorant text-2xl text-[#5B4B49] leading-relaxed mb-6">
              "Every picture tells a story, every moment is a treasure. These memories have brought us to where we are today, 
              and we can't wait to create new ones with all of you."
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
