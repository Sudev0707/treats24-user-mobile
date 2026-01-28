import { userData } from './userData';

export const savedAddress: Array<{
  id: string;
  title: string;
  address: string;
  distance?: string;
  icon?: string;
  isDefault: boolean;
}> = userData.addresses.map((addr) => ({
  id: addr.id,
  title: addr.label.charAt(0) + addr.label.slice(1).toLowerCase(), // Capitalize first letter
  address: `${addr.street}, ${addr.area}, ${addr.city}, ${addr.state} ${addr.pincode}`,
  icon: addr.label === 'HOME' ? 'home' : addr.label === 'WORK' ? 'briefcase' : 'map-pin',
  isDefault: addr.isDefault,
}));
