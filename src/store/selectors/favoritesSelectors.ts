import type { RootState } from '../store';
import { FavoriteRestaurant, FavoriteFood } from '../slices/favoritesSlice';

export const selectFavoriteRestaurants = (state: RootState): FavoriteRestaurant[] => state.favorites.favoriteRestaurants;
export const selectFavoriteFoods = (state: RootState): FavoriteFood[] => state.favorites.favoriteFoods;
