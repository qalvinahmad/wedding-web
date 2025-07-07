import Hero from '@/components/organisms/Hero';
import MusicPlayer from '../molecules/MusicPlayer';
import CoupleIntroduction from '../organisms/CoupleIntroduction';
import DressCode from '../organisms/DressCode';
import EventInfo from '../organisms/EventInfo';
import Gallery from '../organisms/Gallery';
import Header from '../organisms/Header';
import LoveStory from '../organisms/LoveStory';
import WeddingGift from '../organisms/WeddingGift';
import Wishes from '../organisms/Wishes';

interface GuestData {
  name: string;
  address?: string;
}

interface GuestInvitationProps {
  guestData?: GuestData;
}

export default function GuestInvitation({ guestData }: GuestInvitationProps) {
  return (
    <div className="min-h-screen">
      <MusicPlayer />
      <Header />
      
      {/* Hero outside container to be full width */}
      <div id="home">
        <Hero guestData={guestData} />
      </div>
      
      {/* Container with consistent padding for other sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-48 xl:px-20">
        <div id="love-story">
          <LoveStory />
        </div>
        <CoupleIntroduction />
        <div id="acara">
          <EventInfo />
        </div>
        <div id="dresscode">
          <DressCode />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <Wishes />
        <WeddingGift />
      </div>
    </div>
  );
}
