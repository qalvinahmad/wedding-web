'use client'
import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      
      // Auto-play when component mounts
      const playAudio = async () => {
        try {
          await audioRef.current?.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Auto-play blocked by browser:', error)
          setIsPlaying(false)
        }
      }

      // Delay to ensure page is loaded
      setTimeout(playAudio, 1000)
    }
  }, [])

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.error('Error playing audio:', error)
        setHasError(true)
      }
    }
  }

  const handleError = () => {
    setHasError(true)
    console.error('Audio file not found or cannot be played')
  }

  if (hasError) {
    return null // Hide player if there's an error
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-[var(--tertiary-color)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--tertiary-color)]/90 transition-all duration-200 animate-pulse"
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onError={handleError}
        onCanPlay={() => setHasError(false)}
      >
        <source src="/music/redwims-sparkle.mp3" type="audio/mpeg" />
        <source src="/music/redwims-sparkle.mp4" type="audio/mp4" />
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
