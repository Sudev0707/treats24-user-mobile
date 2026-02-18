import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import ButtonStyles from '../../styles/components/ButtonStyles';
import colors from '../../theme/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: 'filled' | 'outlined';
  style?: any;
  isPhoneValid: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant,
  style,
  isPhoneValid,
  loading = false,
}) => {
  const buttonStyle = [
    ButtonStyles.base,
    variant === 'filled' ? isPhoneValid  ? ButtonStyles.filled : ButtonStyles.filledDisabled : ButtonStyles.outlined,
    style,
  ];

  const textStyle =
    variant === 'filled'
      ? isPhoneValid && !loading
        ? ButtonStyles.filledText
        : ButtonStyles.textDisabled
      : ButtonStyles.outlinedText;

  return (
    <TouchableOpacity
      disabled={!isPhoneValid || loading}
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.6}
    >
      {loading ? (
        <ActivityIndicator size="small" color={variant === 'filled' ? '#fff' : colors.brandPrimary} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
