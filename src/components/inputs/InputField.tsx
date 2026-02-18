import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import { TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/components/InputFieldStyles';
import colors from '../../theme/colors';
import { validateInput, InputType } from '../../utils/validation';

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  type?: 'text' | 'password' | 'number' | 'email';
  validateType?: InputType;
  keyboardType?: KeyboardTypeOptions;
  variant?: 'floating' | 'standard';
  priority?: 'required' | 'none';
}

const InputField: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = 'text',
  validateType,
  keyboardType,
  variant = 'floating',
  priority = 'none',
}) => {
  const [focused, setFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(type === 'password');
  const [error, setError] = useState('');
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;
  const isPassword = type === 'password';

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: focused || value ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [focused, value]);

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: focused || value ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    });
  }, [focused, value]);

  // Run validation on blur
  const handleBlur = () => {
    setFocused(false);
    if (validateType) {
      const result = validateInput(value, validateType);
      setError(result.value ? '' : result.error || '');
    }
  };

  const labelStyle: Animated.AnimatedProps<TextStyle> = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10],
    }) as unknown as number, // TypeScript sometimes requires this
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }) as unknown as number,
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: ['#8b8b8b', colors.brandPrimary],
    }) as unknown as string,
    fontWeight: focused ? '900' : '800',
    position: 'absolute',
    left: 10,
    // borderWidth: 1
  };

  return (
    <>
      {variant === 'standard' && (
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.staticLabel}>{label}</Text>
          {priority === 'required' && (
            <Icon
              name="star"
              size={6}
              color={colors.required}
              style={{ marginLeft: 4, top: 4 }}
            />
          )}
        </View>
      )}

      <View style={[styles.container, focused && styles.active]}>
        {variant === 'floating' && (
          <>
            <Animated.Text style={[styles.label, labelStyle]}>
              {label}
            </Animated.Text>
          </>
        )}
        <TextInput
          style={styles.input}
          // placeholder={!focused ? placeholder : ''}
          placeholder={
            variant === 'standard' ? placeholder : (focused || value) ? '' : placeholder
          }
          placeholderTextColor="#A8A8A8"
          secureTextEntry={isPassword && hidePassword}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          keyboardType={keyboardType}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Icon
              name={hidePassword ? 'eye-off' : 'eye'}
              size={20}
              color="#8E8E8E"
            />
          </TouchableOpacity>
        )}
        {/* {error !== '' && <Text style={styles.errorText}>{error}</Text>} */}
      </View>
    </>
  );
};

export default InputField;
