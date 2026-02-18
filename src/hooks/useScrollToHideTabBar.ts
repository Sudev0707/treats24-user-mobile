import { useRef, useCallback } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useTabBar } from '../context/TabBarContext';

interface ScrollToHideOptions {
  threshold?: number; // Minimum scroll distance before hiding
  scrollDownThreshold?: number; // Minimum scroll down distance to show
}

export const useScrollToHideTabBar = (options: ScrollToHideOptions = {}) => {
  const { hideTabBar, showTabBar } = useTabBar();
  const { threshold = 2, scrollDownThreshold = 2 } = options;
  const lastScrollY = useRef(0);
  const scrollAccumulator = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentScrollY = event.nativeEvent.contentOffset.y;
      const scrollDifference = currentScrollY - lastScrollY.current;

      // Ignore very tiny movements to avoid jitter
      if (Math.abs(scrollDifference) < 0.3) {
        return;
      }

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Always show tab bar at the very top
      if (currentScrollY <= 5) {
        showTabBar();
        scrollAccumulator.current = 0;
        lastScrollY.current = currentScrollY;
        return;
      }

      // Accumulate scroll in the same direction
      if (scrollDifference > 0) {
        // Scrolling down
        scrollAccumulator.current = Math.max(0, scrollAccumulator.current) + Math.abs(scrollDifference);
      } else {
        // Scrolling up
        scrollAccumulator.current = Math.min(0, scrollAccumulator.current) - Math.abs(scrollDifference);
      }

      // Hide tab bar when scrolling down (works with slow scrolling)
      if (scrollAccumulator.current >= threshold) {
        hideTabBar();
      }
      // Show tab bar when scrolling up
      else if (scrollAccumulator.current <= -scrollDownThreshold) {
        showTabBar();
      }

      lastScrollY.current = currentScrollY;

      // Reset accumulator after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        scrollAccumulator.current = 0;
      }, 100);
    },
    [hideTabBar, showTabBar, threshold, scrollDownThreshold]
  );

  // Show tab bar when screen is focused
  useFocusEffect(
    useCallback(() => {
      showTabBar();
      lastScrollY.current = 0;
      return () => {
        // Cleanup if needed
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }, [showTabBar])
  );

  return {
    onScroll: handleScroll,
    scrollEventThrottle: 16,
  };
};

