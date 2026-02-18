import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import DOBModal from '../modals/DOBModal';
import styles from '../../styles/components/InputFieldStyles';
import colors from '../../theme/colors';

const DOBInput = ({
  label,
  value,
  onChange,
  placeholder = 'Select Date of Birth',
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

  // const labelStyle = {
  //   position: 'absolute',
  //   left: 13,
  //   backgroundColor: '#FFF',
  //   paddingHorizontal: 6,
  //   zIndex: 10,
  //   top: animatedLabel.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [18, -10],
  //   }),
  //   fontSize: animatedLabel.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [14, 12],
  //   }),
  //   color: animatedLabel.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: ['#8b8b8b', colors.brandPrimary],
  //   }),
  //   fontWeight: value ? '900' : '400',
  // };
  const dobLabel = {
    // borderWidth: 1,
    top: -10,
    fontSize: 12,
    left: 10,
  }

  const handleSelectDate = (date) => {
    onChange(date);
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => setIsModalVisible(true)}>
        <Animated.Text style={[styles.label, dobLabel]}>
          {label}
        </Animated.Text>
        <View style={{ borderWidth: 0 }} >
          <Text style={{ color: value ? colors.textPrimary : '#A8A8A8' }}>
            {value || placeholder}
          </Text>
        </View>
      </TouchableOpacity>
      <DOBModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectDate={handleSelectDate}
        initialDate={value}
      />
    </>
  );
};

export default DOBInput;


