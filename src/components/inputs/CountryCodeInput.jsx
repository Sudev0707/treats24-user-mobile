import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import CountryModal from '../modals/CountryModals';
import CountryFlag from 'react-native-country-flag';
import styles from '../../styles/components/CountryCodeStyles';
import colors from '../../theme/colors';

const CountryCodeInput = ({
  label,
  value,
  onChange,
  placeholder = 'Select Country',
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: value ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const countryLabel = {
    top: -10,
    fontSize: 12,
    left: 10,
  };

  const handleSelectCountry = (iso, code) => {
    onChange({ iso, code });
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => setIsModalVisible(true)}>
        <Animated.Text style={[styles.label, countryLabel]}>
          {label}
        </Animated.Text>
        <View style={{ borderWidth: 0, flexDirection: 'row', alignItems: 'center' }} >
          {value ? (
            <>
              <CountryFlag isoCode={value.iso} size={18} />
              <Text style={{ color: colors.textPrimary, marginLeft: 9 }}>
                {value.code}
              </Text>
            </>
          ) : (
            <Text style={{ color: '#A8A8A8' }}>
              {placeholder}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <CountryModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelect={handleSelectCountry}
      />
    </>
  );
};

export default CountryCodeInput;
