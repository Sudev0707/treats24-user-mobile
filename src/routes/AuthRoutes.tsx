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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashBrand"
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
      <Stack.Screen
        name="UserPartnerSelection"
        component={Screens.UserPartnerSelection}
      />
      <Stack.Screen name="PartnerSignIn" component={Screens.PartnerSignIn} />
      <Stack.Screen name="PartnerSignUp">
        {props => <Screens.PartnerSignUp {...props} />}
      </Stack.Screen>
      <Stack.Screen name="BankSelection" component={Screens.BankSelection} />
      {/*  */}
    </Stack.Navigator>
  );
};

export default AuthRoutes;

const styles = StyleSheet.create({});
