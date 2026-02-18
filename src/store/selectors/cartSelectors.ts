import { RootState } from '../store';
import { restaurantsData } from '../../data/foodData';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export const selectRestaurantName = (state: RootState) => state.cart.restaurantName;

export const selectRestaurantId = (state: RootState) => state.cart.restaurantId;

export const selectRandomRestaurantItems = (state: RootState) => {
  const restaurantId = state.cart.restaurantId;
  if (!restaurantId) return [];

  const restaurant = restaurantsData.find(r => r.id === restaurantId);
  if (!restaurant) return [];

  // Get all items from all categories
  const allItems = restaurant.foodCategories.flatMap(category => category.items);

  // Filter out items already in the cart
  const cartItemIds = state.cart.items.map(item => item.id);
  const availableItems = allItems.filter(item => !cartItemIds.includes(item.id));

  // Shuffle and pick 4 random items
  const shuffled = [...availableItems].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};
