import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { useInternetConnection } from '../../hooks/useInternetConnection';
import colors from '../../theme/colors';

const InternetConnectionNotifier: React.FC = () => {
  const isConnected = useInternetConnection();
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState('');

  const slideAnim = useRef(new Animated.Value(100)).current;
  const isFirstRender = useRef(true);
  const hasShownInitialNotification = useRef(false);

  useEffect(() => {
    // Skip first render entirely to not show notification on app start
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // If internet is available on first render, don't show notification
      if (isConnected === true) {
        hasShownInitialNotification.current = true;
      }
      return;
    }

    // 🔴 Internet lost
    if (isConnected === false) {
      setMessage('No internet connection');
      setShowNotification(true);

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    // 🟢 Internet restored
    if (isConnected === true) {
      // Only show restoration message if we previously showed a disconnection message
      if (hasShownInitialNotification.current) {
        setMessage('Internet connection restored');
        setShowNotification(true);

        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();

        setTimeout(() => {
          Animated.timing(slideAnim, {
            toValue: 100,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setShowNotification(false));
        }, 3000);
      }
    }
  }, [isConnected]);

  if (!showNotification) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }],
          backgroundColor: isConnected ? colors.success : colors.danger,
        },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: 0,
    bottom:0,
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 1000,
  },
  text: {
    color: colors.textOnBrand,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default InternetConnectionNotifier;
