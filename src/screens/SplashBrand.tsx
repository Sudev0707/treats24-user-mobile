import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

type RootStackParamList = {
  SplashBrand: undefined;
  Auth:undefined
};

type Props = NativeStackScreenProps<RootStackParamList, 'SplashBrand'>;

const SplashBrand: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Auth');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.brandPrimary} hidden={true} />
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
    fontSize: fonts.size['3xl'],
    fontFamily:fonts.family.medium,
    color: colors.brandPrimary,
    letterSpacing: 2,
  },
  tagline: {
    marginTop: 12,
    fontSize: fonts.size.md,
    color: colors.textWhite,
  },
});

export default SplashBrand;


