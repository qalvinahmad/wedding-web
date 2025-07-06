import Button from '@/components/atoms/Button'
import { Heading1, Paragraph } from '@/components/atoms/Typography'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center wedding-gradient">
      <div className="text-center text-white section-padding">
        <div className="max-w-4xl mx-auto">
          <Heading1 className="text-white mb-4">
            Bride & Groom
          </Heading1>
          <Paragraph className="text-white/90 text-xl mb-8">
            We're getting married and we want you to celebrate with us!
          </Paragraph>
          <div className="text-white/90 mb-8">
            <p className="text-lg">📅 December 25, 2024</p>
            <p className="text-lg">📍 Beautiful Venue, City</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Our Story
            </Button>
            <Button variant="ghost" size="lg" className="bg-white/20 text-white hover:bg-white/30">
              RSVP Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
