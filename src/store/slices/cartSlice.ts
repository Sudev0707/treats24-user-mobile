import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  image?: ImageSourcePropType;
  quantity: number;
}

interface CartState {
  restaurantId: string | null;
  restaurantName: string | null;
  items: CartItem[];
}

const initialState: CartState = {
  restaurantId: null,
  restaurantName: null,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ==============================================
    addToCart: (
      state,
      action: PayloadAction<{
        restaurantId: string;
        restaurantName: string;
        item: Omit<CartItem, 'quantity'>;
      }>,
    ) => {
      const { restaurantId, restaurantName, item } = action.payload;

      // 🔴 If different restaurant → clear cart
      if (state.restaurantId && state.restaurantId !== restaurantId) {
        state.items = [];
      }

      state.restaurantId = restaurantId;
      state.restaurantName = restaurantName;

      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // ==============================================
    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload);

      if (item) {
        item.quantity -= 1;

        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }

      // Clear restaurant if cart empty
      if (state.items.length === 0) {
        state.restaurantId = null;
        state.restaurantName = null;
      }
    },

    // ==================================================
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      if (state.items.length === 0) {
        state.restaurantId = null;
        state.restaurantName = null;
      }
    },
 
    // ==================================================
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    // ==================================================
    clearCart: state => {
      state.items = [];
      state.restaurantId = null;
      state.restaurantName = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
