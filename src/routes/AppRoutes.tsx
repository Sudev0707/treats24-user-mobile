import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Screens from './Screens';
import TabNavigator from './TabNavigator';
import { TabBarProvider } from '../context/TabBarContext';
import { Address } from '../data/userData';
import { OrderData } from '../data/ordrr.types';

export type RootStackParamList = {
  SplashBrand: undefined;
  UserPartnerSelection: undefined;
  PartnerSignIn: undefined;
  PartnerSignUp: { selectedBank?: string };
  BankSelection: undefined;
  PartnerDashBoard: {
    name: string;
    addressOne: string;
    addressTwo: string;
    city: string;
    district: string;
    pinCode: string;
    email: string;
    contact: string;
    businessLicense: string;
    hasFssaiLicense: boolean | null;
    fssaiLicenseNumber: string;
    bankName: string;
    ifscCode: string;
    accountNo: string;
    accountHolder: string;
  };
  Auth: undefined;
  OTPVerification: undefined;
  EmailOTPVerification: { email: string };
  SetLocation: undefined;
  Profile: undefined;
  Nearby: undefined;
  Favorites: undefined;
  Deals: undefined;
  Cart: undefined;
  Checkout: undefined;
  PaymentSuccess: undefined;
  MainTabs: undefined;
  foodCategories: undefined;
  Search: undefined;
  RestaurantDetails: { restaurantId: string };
  SnacksItems: { itemType: string };
  TopRestaurants: undefined;
  NinetyNineStore: undefined;
  AddAddressScreen: {
    editingAddress?: Address;
    callbackKey?: string;
  };
  OrderDetails: { order: OrderData };
  LiveTrackOrder: { order: OrderData };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <TabBarProvider>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Nearby" component={Screens.Nearby} />
        <Stack.Screen name="Favorites" component={Screens.Favorites} />
        <Stack.Screen name="Deals" component={Screens.Deals} />
        <Stack.Screen name="Cart" component={Screens.Cart} />
        <Stack.Screen name="Checkout" component={Screens.Checkout} />
        <Stack.Screen
          name="PaymentSuccess"
          component={Screens.PaymentSuccess}
        />
        <Stack.Screen name="Profile" component={Screens.Profile} />
        <Stack.Screen name="Search" component={Screens.Search} />
        <Stack.Screen
          name="RestaurantDetails"
          component={Screens.RestaurantDetail}
        />
        <Stack.Screen name="SnacksItems" component={Screens.SnacksItems} />
        <Stack.Screen
          name="TopRestaurants"
          component={Screens.TopRestaurants}
        />
        <Stack.Screen name="foodCategories" component={Screens.Categories} />
        <Stack.Screen
          name="NinetyNineStore"
          component={Screens.NinetyNineStore}
        />
        <Stack.Screen
          name="AddAddressScreen"
          component={Screens.AddAddressScreen}
        />
        <Stack.Screen
          name="OrderDetails"
          component={Screens.OrderDetailsScreen}
        />
        <Stack.Screen
          name="LiveTrackOrder"
          component={Screens.LiveTrackOrderScreen}
        />

        <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
    </TabBarProvider>
  );
};

export default AppRoutes;
