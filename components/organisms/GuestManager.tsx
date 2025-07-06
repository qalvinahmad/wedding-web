"use client";

import { autoFillAllLinks, generateRandomCode, getAllGuests } from '@/lib/googleSheets';
import { useEffect, useState } from 'react';

// Define types for guest data
interface GuestData {
  name: string;
  address?: string;
  phone?: string;
  link?: string;
  code?: string;
}

interface GuestWithLink extends GuestData {
  generatedLink: string;
  generatedCode: string;
}

export default function GuestManager() {
  const [guests, setGuests] = useState<GuestWithLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    async function fetchGuests() {
      const guestList = await getAllGuests();
      // Generate links and codes for each guest
      const guestsWithLinks = guestList.map((guest: GuestData) => ({
        ...guest,
        generatedCode: guest.code || generateRandomCode(8),
        generatedLink: generateGuestUrl(guest.code || generateRandomCode(8))
      }));
      setGuests(guestsWithLinks);
      setLoading(false);
    }
    fetchGuests();
  }, []);

  const generateGuestUrl = (code: string): string => {
    return `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/invite/${code}`;
  };

  const handleAutoFillLinks = async () => {
    setUpdating(true);
    try {
      const success = await autoFillAllLinks();
      if (success) {
        alert('Links and codes have been auto-filled in your Google Spreadsheet!');
        // Refresh the data
        const guestList = await getAllGuests();
        const guestsWithLinks = guestList.map((guest: GuestData) => ({
          ...guest,
          generatedCode: guest.code || generateRandomCode(8),
          generatedLink: generateGuestUrl(guest.code || generateRandomCode(8))
        }));
        setGuests(guestsWithLinks);
      } else {
        alert('Error updating spreadsheet. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating spreadsheet. Please try again.');
    }
    setUpdating(false);
  };

  if (loading) return <div>Loading guests...</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Personal Invitations with Random Codes</h2>
      <p className="text-gray-600 mb-4">Secure invitation links with random alphanumeric codes</p>
      
      {/* Instructions */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-blue-800 mb-2">How it works:</h3>
        <ol className="text-sm text-blue-700 list-decimal list-inside space-y-1">
          <li>Each guest gets a unique random code (e.g., A7kF9mP2)</li>
          <li>URLs look like: /invite/A7kF9mP2 instead of /nama</li>
          <li>More secure and private than using names</li>
          <li>Update your Google Spreadsheet with these secure links</li>
        </ol>
      </div>

      {/* Auto-fill button */}
      <div className="mb-6">
        <button
          onClick={handleAutoFillLinks}
          disabled={updating}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {updating ? 'Generating Codes & Links...' : 'Auto-Generate Secure Links'}
        </button>
        <p className="text-sm text-gray-500 mt-2">
          This will generate random codes and secure links for all guests
        </p>
      </div>

      <div className="grid gap-4">
        {guests.map((guest, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{guest.name}</h3>
                <p className="text-gray-600 text-sm">{guest.address}</p>
                {guest.phone && <p className="text-gray-500 text-xs">{guest.phone}</p>}
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500">Invite Code:</span>
                <p className="font-mono text-lg text-blue-600 font-bold">{guest.generatedCode}</p>
              </div>
            </div>
            
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Secure Invitation Link:
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={guest.generatedLink}
                  readOnly
                  className="flex-1 p-2 bg-gray-50 border rounded text-sm font-mono"
                />
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(guest.generatedLink);
                  }}
                  className="px-4 py-2 bg-[#a48e98] text-white rounded text-sm hover:bg-[#a48e98]/90 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Export section */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-4">Update Your Google Spreadsheet</h3>
        <p className="text-sm text-gray-600 mb-4">
          Add a new "Code" column (Column E) and copy these secure URLs:
        </p>
        <div className="bg-white p-4 rounded border max-h-60 overflow-y-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Nama</th>
                <th className="text-left p-2">Code</th>
                <th className="text-left p-2">Secure Link</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{guest.name}</td>
                  <td className="p-2 font-mono text-blue-600">{guest.generatedCode}</td>
                  <td className="p-2 font-mono text-xs">{guest.generatedLink}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
