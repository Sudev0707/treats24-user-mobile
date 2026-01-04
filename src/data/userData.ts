// user.types.ts
// Complete user data model for a real-world Food Delivery App

/* ===================== ENUMS ===================== */
export type UserRole = 'USER' | 'DELIVERY_PARTNER' | 'RESTAURANT' | 'ADMIN';

export type Gender = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';

export type PaymentMethod = 'CARD' | 'UPI' | 'NET_BANKING' | 'COD' | 'WALLET';

/* ===================== ADDRESS ===================== */
export interface Address {
  id: string;
  label: 'HOME' | 'WORK' | 'OFFICE' | 'OTHER';
  name: string;
  mobile: string;
  street: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  latitude: number;
  longitude: number;
  isDefault: boolean;
}

/* ===================== PAYMENT ===================== */
export interface UserPayment {
  id: string;
  type: PaymentMethod;
  last4Digits?: string; // for cards
  upiId?: string; // for UPI
  isDefault: boolean;
}

/* ===================== PREFERENCES ===================== */
export interface UserPreferences {
  language: string;
  darkMode: boolean;
  notifications: {
    orderUpdates: boolean;
    offers: boolean;
    sms: boolean;
    email: boolean;
  };
}

/* ===================== USER STATS ===================== */
export interface UserStats {
  totalOrders: number;
  cancelledOrders: number;
  lastOrderAt?: string;
  walletBalance: number;
}

/* ===================== AUTH ===================== */
export interface UserAuth {
  isEmailVerified: boolean;
  isMobileVerified: boolean;
  lastLoginAt?: string;
  deviceIds: string[];
}

/* ===================== MAIN USER ===================== */
export interface UserData {
  id: string;

  // Basic Profile
  name: string;
  email: string;
  mobile: string;
  avatar: string;
  gender?: Gender;
  dateOfBirth?: string;

  // Role
  role: UserRole;

  // Addresses
  addresses: Address[];

  // Payments
  savedPayments: UserPayment[];

  // Preferences
  preferences: UserPreferences;

  // Stats
  stats: UserStats;

  // Auth
  auth: UserAuth;

  // Meta
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/* ===================== SAMPLE USER ===================== */
export const userData: UserData = {
  id: 'usr_001',
  name: 'Sudev Majhi',
  email: 'sudev@example.com',
  mobile: '7488854660',
  avatar: 'S',
  role: 'USER',

  addresses: [
    {
      id: 'addr_1',
      label: 'HOME',
      name: 'Sudev Majhi',
      mobile: '7488854660',
      street: 'MG Road',
      area: 'Salt Lake',
      city: 'Kolkata',
      state: 'West Bengal',
      pincode: '700091',
      latitude: 22.5726,
      longitude: 88.3639,
      isDefault: true,
    },
    {
      id: 'addr_2',
      label: 'OFFICE',
      name: 'Sudev Majhi',
      mobile: '7488854660',
      street: 'Sector V, Plot 12',
      area: 'Salt Lake',
      city: 'Kolkata',
      state: 'West Bengal',
      pincode: '700091',
      latitude: 22.5697,
      longitude: 88.4301,
      isDefault: false,
    },
    {
      id: 'addr_3',
      label: 'OTHER',
      name: 'Sudev Majhi',
      mobile: '7488854660',
      street: 'Flat 3B, Green Residency',
      area: 'New Town',
      city: 'Kolkata',
      state: 'West Bengal',
      pincode: '700156',
      latitude: 22.58,
      longitude: 88.46,
      isDefault: false,
    },
  ],

  savedPayments: [
    {
      id: 'pay_1',
      type: 'UPI',
      upiId: 'sudev@upi',
      isDefault: true,
    },
  ],

  preferences: {
    language: 'en',
    darkMode: false,
    notifications: {
      orderUpdates: true,
      offers: true,
      sms: true,
      email: false,
    },
  },

  stats: {
    totalOrders: 18,
    cancelledOrders: 1,
    lastOrderAt: '2026-01-01T10:30:00Z',
    walletBalance: 250,
  },

  auth: {
    isEmailVerified: true,
    isMobileVerified: true,
    lastLoginAt: '2026-01-04T09:15:00Z',
    deviceIds: ['android_12345'],
  },

  isActive: true,
  createdAt: '2025-08-24T12:00:00Z',
  updatedAt: '2026-01-04T10:00:00Z',
};
