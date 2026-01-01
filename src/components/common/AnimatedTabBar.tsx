import React, { useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useTabBar } from '../../context/TabBarContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import type { CartItem } from '../../store/slices/cartSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectCartItemCount,
  selectCartTotal,
  selectRestaurantName,
} from '../../store/selectors/cartSelectors';

const AnimatedTabBar: React.FC<BottomTabBarProps> = props => {
  const { navigation } = props;
  const { isVisible } = useTabBar();
  const translateY = React.useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const cartItems = useAppSelector(state => (state.cart as any).cartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const restaurantName = useAppSelector(selectRestaurantName);
  const cartItemCount = useAppSelector(selectCartItemCount);
  const cartCount = cartItems?.length || null;
  const totalAmount = cartItems?.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: isVisible ? 0 : 70,
      useNativeDriver: true,
      tension: 65,
      friction: 11,
    }).start();
  }, [isVisible, translateY]);

  useEffect(() => {}, []);

  return (
    <View style={styles.wrapper}>
      {cartItemCount > 0 && (
        <Animated.View
          style={[
            styles.topContainer,
            {
              transform: [{ translateY }],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.cartItemBotm}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Cart") }
          >
            <Text style={styles.title}>
              {restaurantName} • {cartItemCount} items • ₹{cartTotal}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}

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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    overflow: 'hidden',
  },
  topContainer: {
    height: 40,
    backgroundColor: '#1faa59',
    // borderTopWidth: 1,
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    minWidth: '40%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: '#ffffffff',
  },
  cartItemBotm: {
    padding: 8,
    paddingHorizontal: 15,
  },
});

export default AnimatedTabBar;
