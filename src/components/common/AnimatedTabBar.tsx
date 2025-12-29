import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { useTabBar } from '../../context/TabBarContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedTabBar: React.FC<BottomTabBarProps> = (props) => {
  const { isVisible } = useTabBar();
  const translateY = React.useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  
  
  useEffect(() => {
    Animated.spring(translateY, {
      toValue: isVisible ? 0 : 100,
      useNativeDriver: true,
      tension: 65,
      friction: 11,
    }).start();
  }, [isVisible, translateY]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <BottomTabBar {...props} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
});

export default AnimatedTabBar;

