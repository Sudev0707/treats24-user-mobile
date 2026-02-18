import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface RowProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Row: React.FC<RowProps> = ({ children, style }) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Row;
