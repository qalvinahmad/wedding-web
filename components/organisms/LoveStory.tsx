"use client"

import { Timeline } from '@/src/components/ui/timeline';
import ScrollReveal from '../../src/components/ui/scroll-reveal';

export default function LoveStory() {
  const timelineData = [
    {
      title: "2020",
      content: (
        <div>
          <ScrollReveal 
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={5}
            blurStrength={15}
            scrollContainerRef="window"
            textClassName="font-lucy-rose text-2xl md:text-3xl"
          >
            Pertemuan Pertama
          </ScrollReveal>
          <div className="mb-8">
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Takdir mempertemukan kami di tempat yang tak terduga
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Dari percakapan ringan hingga mengenal satu sama lain
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Dimulai dari persahabatan yang tulus
            </ScrollReveal>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <ScrollReveal containerClassName="mb-4" scrollContainerRef={null}>
            Mendalami Hubungan
          </ScrollReveal>
          <div className="mb-8">
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Perasaan mulai tumbuh di antara kami
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Belajar saling memahami dan mendukung
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Komunikasi yang semakin intens dan bermakna
            </ScrollReveal>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <ScrollReveal containerClassName="mb-4" scrollContainerRef={null}>
            Komitmen Serius
          </ScrollReveal>
          <div className="mb-8">
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Memutuskan untuk menjalin hubungan yang serius
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Mengenalkan keluarga masing-masing
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Mendapat dukungan penuh dari kedua keluarga
            </ScrollReveal>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <ScrollReveal containerClassName="mb-4" scrollContainerRef={null}>
            Merencanakan Masa Depan
          </ScrollReveal>
          <div className="mb-8">
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Mulai merencanakan kehidupan bersama
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Mempersiapkan rencana pernikahan
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Yakin bahwa kami adalah pasangan yang tepat
            </ScrollReveal>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <ScrollReveal containerClassName="mb-4" scrollContainerRef={null}>
            Lamaran & Persiapan
          </ScrollReveal>
          <div className="mb-8">
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Moment lamaran yang penuh kebahagiaan
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Persiapan detail untuk hari pernikahan
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Menanti hari yang paling dinanti
            </ScrollReveal>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <ScrollReveal containerClassName="mb-4" scrollContainerRef={null}>
            Hari Bahagia Kami
          </ScrollReveal>
          <div className="mb-8">
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              27 Juli 2025 - Hari pernikahan kami
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
              Memulai babak baru sebagai suami istri
            </ScrollReveal>
            <ScrollReveal containerClassName="mb-2" textClassName="font-cormorant text-sm md:text-base" scrollContainerRef={null}>
            Bersama membangun keluarga yang bahagia
            </ScrollReveal>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 primary-bg px-48">
      <div className="max-w-7xl mx-auto">
        <Timeline data={timelineData} />
      </div>
    </section>
  )
}

