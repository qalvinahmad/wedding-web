'use client'
import { Heading2 } from '@/components/atoms/Typography'
import { AnimatedTestimonials } from '@/src/components/ui/animated-testimonials'
import { useState } from 'react'

export default function Wishes() {
  const [wish, setWish] = useState('')
  const [name, setName] = useState('')
  const [showForm, setShowForm] = useState(false)

  // Wedding wishes testimonials
  const weddingWishes = [
    {
      quote: "Semoga pernikahan kalian dipenuhi dengan cinta, kebahagiaan, dan berkah yang melimpah. Selamat menempuh hidup baru!",
      name: "Sarah & Ahmad",
      designation: "Sahabat Sejak Kuliah",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Bahagia sekali melihat kalian berdua akhirnya menikah. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
      name: "Keluarga Budi",
      designation: "Tetangga Dekat",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Pernikahan adalah awal dari petualangan indah. Semoga kalian selalu kompak dan saling mendukung dalam suka dan duka.",
      name: "Tim Kantor",
      designation: "Rekan Kerja",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Congratulations on your special day! Wishing you both a lifetime filled with love, laughter, and beautiful memories together.",
      name: "Maya & Dika",
      designation: "Teman SMA",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Dari keluarga besar kami, selamat menempuh hidup baru. Semoga Allah SWT memberikan yang terbaik untuk kalian berdua.",
      name: "Keluarga Hasan",
      designation: "Keluarga Besar",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle wish submission here
    console.log('Wish submitted:', { name, wish })
    setWish('')
    setName('')
    setShowForm(false)
    alert('Terima kasih atas ucapan dan doanya! ❤️')
  }

  return (
    <section className="py-20 primary-bg px-48">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Heading2 className="mb-8 tertiary-color font-lucy-rose">
            Wedding Wishes
          </Heading2>
        </div>

        <AnimatedTestimonials testimonials={weddingWishes} autoplay={true} />
      </div>
    </section>
  )
}

