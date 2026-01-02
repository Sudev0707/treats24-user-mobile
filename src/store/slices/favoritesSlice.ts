import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';

export interface FavoriteRestaurant {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  time: string;
  price: string;
  delivery: string;
  isOpen: boolean;
  image: ImageSourcePropType;
  foodCategories: any[];
}

export interface FavoriteFood {
  id: string;
  name: string;
  price: number;
  rating: number;
  isVeg: boolean;
  image?: ImageSourcePropType;
  restaurantId: string;
  restaurantName: string;
}

interface FavoritesState {
  favoriteRestaurants: FavoriteRestaurant[];
  favoriteFoods: FavoriteFood[];
}

const initialState: FavoritesState = {
  favoriteRestaurants: [],
  favoriteFoods: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // ==============================================
    toggleFavoriteRestaurant: (state, action: PayloadAction<FavoriteRestaurant>) => {
      const restaurant = action.payload;
      const existingIndex = state.favoriteRestaurants.findIndex(r => r.id === restaurant.id);

      if (existingIndex >= 0) {
        // Remove from favorites
        state.favoriteRestaurants.splice(existingIndex, 1);
      } else {
        // Add to favorites
        state.favoriteRestaurants.push(restaurant);
      }
    },

    // ==============================================
    toggleFavoriteFood: (state, action: PayloadAction<FavoriteFood>) => {
      const food = action.payload;
      const existingIndex = state.favoriteFoods.findIndex(f => f.id === food.id);

      if (existingIndex >= 0) {
        // Remove from favorites
        state.favoriteFoods.splice(existingIndex, 1);
      } else {
        // Add to favorites
        state.favoriteFoods.push(food);
      }
    },

    // ==============================================
    removeFavoriteRestaurant: (state, action: PayloadAction<string>) => {
      state.favoriteRestaurants = state.favoriteRestaurants.filter(r => r.id !== action.payload);
    },

    // ==============================================
    removeFavoriteFood: (state, action: PayloadAction<string>) => {
      state.favoriteFoods = state.favoriteFoods.filter(f => f.id !== action.payload);
    },

    // ==============================================
    clearAllFavorites: (state) => {
      state.favoriteRestaurants = [];
      state.favoriteFoods = [];
    },
  },
});

export const {
  toggleFavoriteRestaurant,
  toggleFavoriteFood,
  removeFavoriteRestaurant,
  removeFavoriteFood,
  clearAllFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
