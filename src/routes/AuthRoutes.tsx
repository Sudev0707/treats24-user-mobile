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
  SetLocation: undefined;

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

interface AuthRoutesProps {
  isLoggedOut?: boolean;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ isLoggedOut = false }) => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashBrand'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashBrand" component={Screens.SplashBrand} />
      <Stack.Screen name="Auth" component={Screens.Auth} />
      <Stack.Screen
        name="OTPVerification"
        component={Screens.OTPVerification}
      />
      <Stack.Screen
        name="EmailOTPVerification"
        component={Screens.EmailOTPVerification}
      />
      <Stack.Screen
        name="SetLocation"
        component={Screens.SetLocation}
        options={{ presentation: 'modal' }}
      />
      {/*  */}
    </Stack.Navigator>
  );
};

export default AuthRoutes;

const styles = StyleSheet.create({});
