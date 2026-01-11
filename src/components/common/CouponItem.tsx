import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { couponItemStyles } from '../../styles/components/CouponItemStyles';

interface CouponItemProps {
  code: string;
  description: string;
  onPress: () => void;
}

const CouponItem: React.FC<CouponItemProps> = ({ code, description, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={couponItemStyles.couponItem}
      onPress={onPress}
    >
      <View style={couponItemStyles.couponItemLeft}>
        <Text style={couponItemStyles.couponItemCode}>{code}</Text>
        <Text style={couponItemStyles.couponItemDesc}>{description}</Text>
      </View>
      <Text style={couponItemStyles.couponItemApply}>Tap to apply</Text>
    </TouchableOpacity>
  );
};

export default CouponItem;
