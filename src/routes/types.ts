export type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: { restaurantId: string }; // pass restaurant id
  SnacksItems: { itemType: string };
  TopRestaurants: undefined;
};
