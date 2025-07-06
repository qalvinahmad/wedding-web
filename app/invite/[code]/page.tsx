import GuestInvitation from '@/components/templates/GuestInvitation';
import { getGuestByCode } from '@/lib/googleSheets';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    code: string;
  };
}

export default async function InvitePage({ params }: PageProps) {
  const inviteCode = params.code;
  const guestData = await getGuestByCode(inviteCode);
  
  if (!guestData) {
    notFound();
  }
  
  return <GuestInvitation guestData={guestData} />;
}

export async function generateStaticParams() {
  // Optional: Generate static paths for better performance
  return [];
}
