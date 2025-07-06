import GuestManager from '@/components/organisms/GuestManager';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Wedding Invitation Admin</h1>
        <GuestManager />
      </div>
    </div>
  );
}
