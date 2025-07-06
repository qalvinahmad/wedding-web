import MusicPlayer from '@/components/molecules/MusicPlayer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
// ...existing imports...

interface GuestInvitationProps {
  guestData: any; // Replace 'any' with a more specific type if available
}

export default function GuestInvitation({ guestData }: GuestInvitationProps) {
  return (
    <div className="min-h-screen">
      <MusicPlayer />
      <Header />
      
      {/* Hero with personalized content */}
      <Hero guestData={guestData} />
      
      {/* Container with consistent padding for other sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-48 xl:px-20">
        {/* ...existing sections... */}
      </div>
    </div>
  );
}
