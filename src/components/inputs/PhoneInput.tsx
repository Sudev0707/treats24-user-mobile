import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CountryFlag from 'react-native-country-flag';
import styles from '../../styles/components/PhoneInputStyles';
import Feather from 'react-native-vector-icons/Feather';

interface PhoneInputProps {
  label?: string;
  country?: string;
  countryCode?: string;
  value: string;
  onChange: (text: string) => void;
  onCountryPress?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  error?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  country = 'IN',
  countryCode = '+91',
  value,
  onChange,
  onCountryPress,
  onBlur,
  onFocus,
  placeholder = 'Enter phone number',
  error,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.inputWrapper, error && styles.errorBorder]}>
        {/* Country Selector */}
        <TouchableOpacity
          onPress={onCountryPress}
          style={styles.countrySelector}
        >
          <CountryFlag isoCode={country} size={15} />
          <Text style={styles.countryCode}>{countryCode}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          keyboardType="phone-pad"
          maxLength={10}
          placeholder={placeholder}
          placeholderTextColor="#999"
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {value.length > 0 && (
          <TouchableOpacity
            onPress={() => onChange('')}
            style={styles.clearIcon}
          >
            <Feather name="x-circle" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default PhoneInput;
