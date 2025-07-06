import { Heading2, Paragraph } from '@/components/atoms/Typography'
import Header from '@/components/organisms/Header'

export default function CoupleTemplate() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <Heading2 className="text-center mb-12">
            Our Love Story
          </Heading2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">How We Met</h3>
                <Paragraph>
                  Our love story began in the most unexpected way...
                  [Add your story here]
                </Paragraph>
              </div>
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Photo placeholder</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center order-2 md:order-1">
                <span className="text-gray-500">Photo placeholder</span>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4">The Proposal</h3>
                <Paragraph>
                  The moment that changed everything...
                  [Add your proposal story here]
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
