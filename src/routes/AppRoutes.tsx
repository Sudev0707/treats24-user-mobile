import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Screens from './Screens';
import TabNavigator from './TabNavigator';
import { TabBarProvider } from '../context/TabBarContext';

export type RootStackParamList = {
  SplashBrand: undefined;
  UserPartnerSelection: undefined;
  PartnerSignIn: undefined;
  PartnerSignUp: { selectedBank?: string };
  BankSelection: undefined;
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

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <SafeAreaProvider>
      <TabBarProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SplashBrand"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="SplashBrand" component={Screens.SplashBrand} />
            <Stack.Screen name="UserPartnerSelection" component={Screens.UserPartnerSelection} />
            <Stack.Screen name="PartnerSignIn" component={Screens.PartnerSignIn} />
            <Stack.Screen name="PartnerSignUp">
              {(props) => <Screens.PartnerSignUp {...props} />}
            </Stack.Screen>
            <Stack.Screen name="BankSelection" component={Screens.BankSelection} />
            <Stack.Screen name="Auth" component={Screens.Auth} />
            <Stack.Screen
              name="OTPVerification"
              component={Screens.OTPVerification}
            />
            <Stack.Screen
              name="EmailOTPVerification"
              component={Screens.EmailOTPVerification}
            />
            {/*  */}
            <Stack.Screen
              name="SetLocation"
              component={Screens.SetLocation}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen name="Nearby" component={Screens.Nearby} />
            <Stack.Screen name="Favorites" component={Screens.Favorites} />
            <Stack.Screen name="Deals" component={Screens.Deals} />
            <Stack.Screen name="Cart" component={Screens.Cart} />
            <Stack.Screen name="Checkout" component={Screens.Checkout} />
            <Stack.Screen name="PaymentSuccess" component={Screens.PaymentSuccess} />
            <Stack.Screen name="Profile" component={Screens.Profile} />
            <Stack.Screen name="Search" component={Screens.Search} />
            <Stack.Screen
              name="RestaurantDetails"
              component={Screens.RestaurantDetail}
            />
            <Stack.Screen name="SnacksItems" component={Screens.SnacksItems} />
            <Stack.Screen name="TopRestaurants" component={Screens.TopRestaurants} />
            <Stack.Screen name="foodCategories" component={Screens.Categories} />

            <Stack.Screen name="MainTabs" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </TabBarProvider>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
