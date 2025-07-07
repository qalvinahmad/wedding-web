import GuestInvitation from '@/components/templates/GuestInvitation';

interface PageProps {
  params: Promise<{ code: string }>;
}

export default async function InvitePage({ params }: PageProps) {
  const { code } = await params;
  
  // You can use the code to fetch guest data from a database
  // For now, we'll decode it as a simple name
  const guestData = {
    name: decodeURIComponent(code.replace(/\+/g, ' ')),
    // Add more guest-specific data as needed
  };

  return <GuestInvitation guestData={guestData} />;
}


export async function generateStaticParams() {
  // Optional: Generate static paths for better performance
  return [];
}
