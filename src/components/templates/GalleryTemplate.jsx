import { Heading2 } from '@/components/atoms/Typography'
import Header from '@/components/organisms/Header'

export default function GalleryTemplate() {
  // Placeholder for gallery images
  const images = Array(12).fill(null).map((_, index) => ({
    id: index,
    alt: `Gallery image ${index + 1}`
  }))

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <Heading2 className="text-center mb-12">
            Our Memories
          </Heading2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div 
                key={image.id}
                className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <span className="text-gray-500 text-sm">Photo {image.id + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
