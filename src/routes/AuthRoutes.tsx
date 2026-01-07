
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Screens from './Screens';

export type RootStackParamList = {
  SplashBrand: undefined;
  Auth: undefined;
  OTPVerification: { phone: string };
  EmailOTPVerification: { email: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashBrand"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SplashBrand" component={Screens.SplashBrand} />
          <Stack.Screen name="Auth" component={Screens.Auth} />
          <Stack.Screen name="OTPVerification" component={Screens.OTPVerification} />
          <Stack.Screen name="EmailOTPVerification" component={Screens.EmailOTPVerification} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AuthRoutes;

const styles = StyleSheet.create({});
