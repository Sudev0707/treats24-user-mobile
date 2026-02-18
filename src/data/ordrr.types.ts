

// order.types.ts
// Order data model for a real-world Food Delivery App

/* ===================== ENUMS ===================== */
export type OrderStatus =
  | 'PLACED'
  | 'CONFIRMED'
  | 'PREPARING'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED';

export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';

/* ===================== ORDER ITEMS ===================== */
export interface OrderItem {
  id: string;
  restaurantId: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  isVeg: boolean;
}

/* ===================== PRICE BREAKUP ===================== */
export interface OrderPrice {
  itemTotal: number;
  tax: number;
  deliveryFee: number;
  platformFee: number;
  discount: number;
  grandTotal: number;
}

/* ===================== DELIVERY DETAILS ===================== */
export interface DeliveryDetails {
  addressId: string;
  partnerId?: string;
  estimatedTime: number; // in minutes
}

/* ===================== MAIN ORDER ===================== */
export interface OrderData {
  id: string;
  userId: string;
  restaurantId: string;

  items: OrderItem[];

  price: OrderPrice;

  delivery: DeliveryDetails;

  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: string;

  instructions?: string;

  createdAt: string;
  updatedAt: string;
}

/* ===================== SAMPLE ORDER ===================== */
export const orderData: OrderData = {
  id: 'ord_1001',
  userId: 'usr_001',
  restaurantId: 'res_12',

  items: [
    {
      id: 'item_1',
      restaurantId: 'res_12',
      name: 'Chicken Biryani',
      price: 220,
      quantity: 1,
      isVeg: false,
    },
  ],

  price: {
    itemTotal: 220,
    tax: 18,
    deliveryFee: 30,
    platformFee: 5,
    discount: 0,
    grandTotal: 273,
  },

  delivery: {
    addressId: 'addr_1',
    estimatedTime: 35,
  },

  status: 'OUT_FOR_DELIVERY',
  paymentStatus: 'SUCCESS',
  paymentMethod: 'UPI',

  instructions: 'Less spicy please',

  createdAt: '2026-01-04T11:00:00Z',
  updatedAt: '2026-01-04T11:25:00Z',
};
