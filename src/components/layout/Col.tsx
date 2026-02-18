import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import RowColStyles from '../../theme/RowColStyles';

interface ColProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6; // only between 1–6
  style?: ViewStyle | ViewStyle[];
}

const Col: React.FC<ColProps> = ({ children, span = 1, style }) => {
  const colStyle = RowColStyles[`col${span}` as keyof typeof RowColStyles];

  return <View style={[colStyle, style]}>{children}</View>;
};

export default Col;
