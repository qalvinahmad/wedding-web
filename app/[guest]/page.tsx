import GuestInvitation from '@/components/templates/GuestInvitation';
import { getGuestData } from '@/lib/googleSheets';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    guest: string;
  };
}

export default async function GuestPage({ params }: PageProps) {
  // Decode and clean the guest name from URL
  const guestName = decodeURIComponent(params.guest).toLowerCase();
  const guestData = await getGuestData(guestName);
  
  if (!guestData) {
    notFound();
  }
  
  return <GuestInvitation guestData={guestData} />;
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
