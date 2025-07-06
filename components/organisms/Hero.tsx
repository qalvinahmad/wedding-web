"use client";

import BlurText from "@/src/components/ui/blur-text";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

type GuestData = {
  name: string;
  address?: string;
};

interface HeroProps {
  guestData?: GuestData | null;
}

export default function Hero({ guestData = null }: HeroProps) {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Wedding date: 27 Juli 2025
  const weddingDate = useMemo(() => new Date('2025-07-27T00:00:00'), []);

  // Generate deterministic particle positions
  const particlePositions = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      left: (i * 37.5) % 100, // Deterministic positioning based on index
      top: ((i * 23.7) + (i % 3) * 31.3) % 100,
      delay: i * 0.2,
      duration: 3 + (i % 3)
    }));
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Real-time countdown with useCallback to prevent infinite re-renders
  const updateCountdown = useCallback(() => {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      // Wedding day has passed
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [weddingDate]);

  useEffect(() => {
    if (!isClient) return;

    // Update immediately
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [isClient, updateCountdown]);

  useEffect(() => {
    if (!isClient) return;
    
    // Elegant confetti animation - updated colors
    const triggerConfetti = () => {
      const scalar = 2;
      const heart = confetti.shapeFromPath({
        path: "M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z",
      });
      const rose = confetti.shapeFromPath({
        path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
      });

      const luxuryColors = ["#F8F5F2", "#C49A6C", "#B8885F", "#A67752", "#5B4B49"];

      // Multiple confetti bursts from different positions
      const positions = [
        { x: 0.1, y: 0.1 }, // Top left
        { x: 0.3, y: 0.05 }, // Left center
        { x: 0.5, y: 0.08 }, // Top center
        { x: 0.7, y: 0.05 }, // Right center
        { x: 0.9, y: 0.1 }, // Top right
      ];

      positions.forEach((pos, index) => {
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 90,
            spread: 70,
            startVelocity: 30,
            origin: { x: pos.x, y: pos.y },
            shapes: [heart, rose],
            colors: luxuryColors,
            scalar: scalar,
            gravity: 0.4,
            drift: 0.2,
            ticks: 900 // 3 seconds duration (60fps * 3s = 180, increased for safety)
          });
        }, index * 150); // Stagger each burst by 150ms
      });
    };

    const timer = setTimeout(triggerConfetti, 1000);
    return () => clearTimeout(timer);
  }, [isClient]);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    
    // Luxury celebration effect - updated colors
    const celebrate = () => {
      const colors = ["#C49A6C", "#F8F5F2", "#B8885F", "#A67752"];
      
      // Left side burst
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 60,
        origin: { x: 0.15, y: 0.6 },
        colors: colors,
        ticks: 300 // 3 seconds duration
      });
      
      // Right side burst
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 60,
        origin: { x: 0.85, y: 0.6 },
        colors: colors,
        ticks: 300 // 3 seconds duration
      });
      
      // Center top burst
      confetti({
        particleCount: 100,
        angle: 90,
        spread: 80,
        origin: { x: 0.5, y: 0.3 },
        colors: colors,
        ticks: 300 // 3 seconds duration
      });
    };

    celebrate();
    setTimeout(() => {
      // Scroll to next section
      const nextSection = document.querySelector('#love-story');
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  const getPersonalizedGreeting = () => {
    if (!guestData) return "Distinguished Guests";
    return guestData.name;
  };

  const getGuestAddress = () => {
    if (!guestData || !guestData.address) return "";
    return guestData.address;
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with elegant overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(196, 154, 108, 0.1) 0%, rgba(248, 245, 242, 0.2) 100%), url("/images/hero-bg.jpg")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        {/* Animated particles - updated colors */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {particlePositions.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-[#C49A6C] to-[#B8885F] rounded-full opacity-60"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0.6, 1, 0.6],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Elegant border frame */}
          <motion.div 
            className="relative p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Decorative corners - updated colors */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#C49A6C]/60" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#C49A6C]/60" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#C49A6C]/60" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#C49A6C]/60" />

            {/* Wedding Announcement */}
            <motion.div 
              className="mb-8 pt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-[#C49A6C] to-transparent w-32" />
                <span className="font-cormorant text-[#C49A6C] mx-4 text-sm tracking-[0.3em] uppercase">
                  Wedding Invitation
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-[#C49A6C] to-transparent w-32" />
              </div>

            </motion.div>

            {/* Couple Names - Main Focus */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <BlurText 
                text="Nafa & Ali"
                className="font-lucy-rose text-5xl sm:text-6xl md:text-8xl font-normal text-white drop-shadow-2xl tracking-wide"
                delay={150}
                animateBy="words"
                direction="top" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}              />
              
              {/* Elegant flourish - updated colors */}
              <motion.div 
                className="flex justify-center mt-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <svg width="200" height="40" viewBox="0 0 200 40" className="text-[#C49A6C]">
                  <path 
                    d="M10 20 Q50 5 100 20 Q150 35 190 20" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    fill="none"
                    className="opacity-80"
                  />
                  <circle cx="100" cy="20" r="3" fill="currentColor" className="opacity-90" />
                  <circle cx="30" cy="15" r="1.5" fill="currentColor" className="opacity-70" />
                  <circle cx="170" cy="25" r="1.5" fill="currentColor" className="opacity-70" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Date & Time */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <BlurText 
                text="Sunday, July 27th, 2025"
                className="font-cormorant text-white/90 text-xl md:text-2xl font-light tracking-wider mb-4"
                delay={200}
                animateBy="words"
                direction="top" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}              />
              
              {/* Real-time Countdown Timer */}
              {isClient && (
                <motion.div 
                  className="flex justify-center space-x-4 md:space-x-6 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  {[
                    { label: "Hari", value: timeLeft.days },
                    { label: "Jam", value: timeLeft.hours },
                    { label: "Menit", value: timeLeft.minutes },
                    { label: "Detik", value: timeLeft.seconds }
                  ].map((time, index) => (
                    <motion.div 
                      key={time.label}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
                        <div className="font-lucy-rose text-2xl md:text-3xl text-white font-normal">
                          {time.value.toString().padStart(2, '0')}
                        </div>
                        <div className="font-cormorant text-xs md:text-sm text-white/80 tracking-wide">
                          {time.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Invitation Card */}
            <AnimatePresence>
              {!isInvitationOpen ? (
                <motion.div 
                  className="max-w-md mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                >
                  <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl">
                    <div className="text-center mb-6">
                      <p className="font-cormorant text-gray-800 text-base md:text-lg mb-2 tracking-wide">
                        To our beloved
                      </p>
                      <BlurText 
                        text={getPersonalizedGreeting()}
                        className="font-lucy-rose text-gray-800 text-xl md:text-2xl font-normal mb-2"
                        delay={3000}
                        animateBy="words"
                        direction="top" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}                      />
                      {guestData && guestData.address && (
                        <BlurText 
                          text={getGuestAddress()}
                          className="font-cormorant text-gray-600 text-sm md:text-base"
                          delay={3500}
                          animateBy="words"
                          direction="top" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}                        />
                      )}
                    </div>
                    
                    <div className="text-center mb-6">
                      <p className="font-cormorant text-gray-700 text-sm md:text-base leading-relaxed">
                        We joyfully invite you to celebrate our union and witness our vows of eternal love
                      </p>
                    </div>

                    <motion.button 
                      onClick={handleOpenInvitation}
                      className="w-full bg-gradient-to-r from-[#C49A6C] via-[#B8885F] to-[#C49A6C] text-white font-poppins font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 border border-[#C49A6C]/20"
                      whileHover={{ 
                        boxShadow: "0 20px 40px rgba(196, 154, 108, 0.3)",
                        y: -2 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Open Our Invitation</span>
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          initial={{ x: 0 }}
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </motion.svg>
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="max-w-lg mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-gradient-to-br from-emerald-50/95 to-green-50/85 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-emerald-200/50 shadow-2xl">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <h3 className="font-lucy-rose text-2xl text-gray-800 mb-2">Thank You!</h3>
                      <p className="font-cormorant text-gray-700 text-base mb-4">
                        Your presence will make our day complete
                      </p>
                      <motion.p 
                        className="font-cormorant text-gray-600 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        Continue scrolling to discover our story...
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Elegant bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>



      {/* Elegant bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


