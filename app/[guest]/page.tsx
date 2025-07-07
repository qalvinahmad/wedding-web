import Hero from "@/components/organisms/Hero";
import MusicPlayer from "../../components/molecules/MusicPlayer";
import CoupleIntroduction from "../../components/organisms/CoupleIntroduction";
import DressCode from "../../components/organisms/DressCode";
import EventInfo from "../../components/organisms/EventInfo";
import Gallery from "../../components/organisms/Gallery";
import Header from "../../components/organisms/Header";
import LoveStory from "../../components/organisms/LoveStory";
import WeddingGift from "../../components/organisms/WeddingGift";
import Wishes from "../../components/organisms/Wishes";

interface PageProps {
  params: Promise<{ guest: string }>;
}

export default async function GuestPage({ params }: PageProps) {
  const { guest } = await params;
  
  // Decode the guest parameter and create guest data
  const guestData = {
    name: decodeURIComponent(guest.replace(/\+/g, ' ')),
    // You can add more guest-specific data as needed
  };

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

// Optional: Generate static paths for better performance
export async function generateStaticParams() {
  // You can uncomment this if you want to pre-generate all guest pages
  // const { getAllGuests } = await import('@/lib/googleSheets');
  // const guests = await getAllGuests();
  // return guests.map((guest) => ({
  //   guest: guest.name.replace(/\s+/g, '').toLowerCase(),
  // }));
  return [];
}
}
