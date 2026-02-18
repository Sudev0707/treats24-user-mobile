import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const Anytime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>24 Hours</Text>
      <Text style={styles.subtitle}>Available anytime, anywhere</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    marginTop: 10,
  },
});

export default Anytime;
