import { Heading2 } from '@/components/atoms/Typography'

export default function GroomFamily() {
  return (
    <section className="py-20 section-padding secondary-bg">
      <div className="max-w-4xl mx-auto text-center">
        <Heading2 className="mb-12 tertiary-color">
          Keluarga Pengantin Putra
        </Heading2>
        
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="mb-8">
            <img 
              src="/groom-family.jpg" 
              alt="Keluarga Ali" 
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 tertiary-color">Ali</h3>
          <p className="text-lg text-gray-700 mb-4">
            Putra dari
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Bapak [Nama Ayah Ali]
          </p>
          <p className="text-lg text-gray-600 mb-4">&</p>
          <p className="text-xl font-semibold text-gray-800">
            Ibu [Nama Ibu Ali]
          </p>
        </div>
      </div>
    </section>
  )
}
