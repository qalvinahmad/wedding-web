'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        // Auto-play after first user interaction
        audio.play().catch(console.log)
        setIsPlaying(true)
      }
    }

    // Listen for any user interaction
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('keydown', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('scroll', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
    }
  }, [hasInteracted])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().catch(console.log)
      setIsPlaying(true)
    }
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.button
        onClick={togglePlay}
        className="w-14 h-14 bg-[#C49A6C] text-white rounded-full shadow-lg hover:bg-[#B8885F] transition-colors duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </motion.button>
      
      <audio
        ref={audioRef}
        loop
        preload="metadata"
      >
        <source src="/audio/wedding-music.mp3" type="audio/mpeg" />
        <source src="/audio/wedding-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </motion.div>
  )
}
  )
}
