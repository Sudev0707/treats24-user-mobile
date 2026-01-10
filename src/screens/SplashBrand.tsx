import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  SplashBrand: undefined;
  UserPartnerSelection: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SplashBrand'>;

const SplashBrand: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('UserPartnerSelection');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" hidden={true} />
      <Text style={styles.brand}>treats24</Text>
      <Text style={styles.tagline}>Delivering happiness to your door</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontSize: 40,
    fontWeight: '800',
    color: '#F97316',
    letterSpacing: 2,
  },
  tagline: {
    marginTop: 12,
    fontSize: 14,
    color: '#E5E7EB',
  },
});

export default SplashBrand;


