import { useRef } from "react";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { useTabBar } from "../context/TabBarContext";

export const useHideTabOnScroll = () => {
  const lastOffset = useRef(0);
  const { showTabBar, hideTabBar } = useTabBar();

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = e.nativeEvent.contentOffset.y;
    const diff = currentOffset - lastOffset.current;

    if (Math.abs(diff) < 2) return; // ⚠ small movement still counts but avoids jitter

    if (diff > 0) {
      // scrolling down → hide
      hideTabBar();
    } else {
      // scrolling up → show
      showTabBar();
    }

    lastOffset.current = currentOffset;
  };

  return { onScroll };
};
