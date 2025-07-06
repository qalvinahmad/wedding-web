// Type definitions for TypeScript (if you want to convert to .ts)
/**
 * @typedef {Object} GuestData
 * @property {string} name
 * @property {string} [address]
 * @property {string} [phone]
 * @property {string} [link]
 */

/**
 * Get guest data by name
 * @param {string} guestName 
 * @returns {Promise<GuestData|null>}
 */
export async function getGuestData(guestName) {
  try {
    const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const RANGE = 'Sheet1!A:D'; // Nama, Alamat, Nomor, Link
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.values) return null;
    
    // Find guest by name (case insensitive, remove spaces)
    const guest = data.values.find(row => 
      row[0] && row[0].toLowerCase().replace(/\s+/g, '') === guestName.toLowerCase().replace(/\s+/g, '')
    );
    
    return guest ? {
      name: guest[0],
      address: guest[1] || '',
      phone: guest[2] || '',
      link: guest[3] || ''
    } : null;
    
  } catch (error) {
    console.error('Error fetching guest data:', error);
    return null;
  }
}

/**
 * Generate a random alphanumeric code
 * @param {number} length - Length of the code
 * @returns {string}
 */
export function generateRandomCode(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Get guest data by invitation code
 * @param {string} inviteCode 
 * @returns {Promise<GuestData|null>}
 */
export async function getGuestByCode(inviteCode) {
  try {
    const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const RANGE = 'Sheet1!A:E'; // Nama, Alamat, Nomor, Link, Code
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.values) return null;
    
    // Find guest by invite code (case insensitive)
    const guest = data.values.find(row => 
      row[4] && row[4].toLowerCase() === inviteCode.toLowerCase()
    );
    
    return guest ? {
      name: guest[0],
      address: guest[1] || '',
      phone: guest[2] || '',
      link: guest[3] || '',
      code: guest[4] || ''
    } : null;
    
  } catch (error) {
    console.error('Error fetching guest data by code:', error);
    return null;
  }
}

/**
 * Get all guests data with codes
 * @returns {Promise<GuestData[]>}
 */
export async function getAllGuests() {
  try {
    const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const RANGE = 'Sheet1!A:E'; // Include code column
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.values) return [];
    
    // Skip header row, return all guest data
    return data.values.slice(1).map(row => ({
      name: row[0],
      address: row[1] || '',
      phone: row[2] || '',
      link: row[3] || '',
      code: row[4] || ''
    }));
    
  } catch (error) {
    console.error('Error fetching all guests:', error);
    return [];
  }
}

/**
 * Update a specific cell in the spreadsheet
 * @param {string} range - The range to update (e.g., "D2")
 * @param {string} value - The value to set
 * @returns {Promise<boolean>}
 */
export async function updateSheetCell(range, value) {
  try {
    const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?valueInputOption=USER_ENTERED&key=${API_KEY}`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[value]]
      })
    });
    
    return response.ok;
    
  } catch (error) {
    console.error('Error updating sheet:', error);
    return false;
  }
}

/**
 * Auto-fill links and codes for all guests
 * @returns {Promise<boolean>}
 */
export async function autoFillAllLinks() {
  try {
    const guests = await getAllGuests();
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com';
    
    for (let i = 0; i < guests.length; i++) {
      const guest = guests[i];
      
      // Check if guest has name, address, phone but no link or code
      if (guest.name && guest.address && guest.phone && (!guest.link || !guest.code)) {
        // Generate random code if not exists
        const inviteCode = guest.code || generateRandomCode(8);
        const personalLink = `${baseUrl}/invite/${inviteCode}`;
        
        // Update the Link column (D column) and Code column (E column)
        const linkRange = `D${i + 2}`;
        const codeRange = `E${i + 2}`;
        
        await updateSheetCell(linkRange, personalLink);
        await updateSheetCell(codeRange, inviteCode);
      }
    }
    
    return true;
    
  } catch (error) {
    console.error('Error auto-filling links:', error);
    return false;
  }
}
