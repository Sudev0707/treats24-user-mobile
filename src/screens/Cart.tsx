import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/AppRoutes';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import { useAppSelector } from '../hooks/useAppSelector';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import CartSkeleton from '../components/common/CartSkeleton';
import {
  selectCartItems,
  selectCartTotal,
  selectRestaurantName,
  selectCartItemCount,
  selectRandomRestaurantItems,
  selectRestaurantId,
} from '../store/selectors/cartSelectors';
import {
  addToCart,
  removeItem,
  updateQuantity,
} from '../store/slices/cartSlice';
import { cartStyle } from '../styles/screens/CartStyles';
import SectionHeader from '../components/common/SectionHeader';

const { height } = Dimensions.get('window');

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

const Cart: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const deleiveryFee = 30;
  const serviceFee = 10;
  const totalAmount = cartTotal + deleiveryFee + serviceFee;

  const restaurantName = useAppSelector(selectRestaurantName);
  const cartItemCount = useAppSelector(selectCartItemCount);
  const randomItems = useAppSelector(selectRandomRestaurantItems);
  const restaurantId = useAppSelector(selectRestaurantId);
  const dispatch = useDispatch();
  const navigation = useNavigation<CartScreenNavigationProp>();
  const [loading, setLoading] = useState(true);

  console.log('cartItems.length', cartItems.length);

  useEffect(() => {
    // Simulate loading delay or wait for data readiness
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      dispatch(removeItem(id));
    }
  };

  const handleAddToCart = (item: any) => {
    if (!restaurantId) return;
    dispatch(
      addToCart({
        restaurantId,
        restaurantName: restaurantName || '',
        item: {
          id: item.id,
          name: item.name,
          price: item.price,
          isVeg: item.isVeg,
          image: item.image,
        },
      }),
    );
  };

  const getItemQuantity = (itemId: string) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle="dark-content"
      />
      <SafeAreaView edges={['top']} style={cartStyle.headerWrapper}>
        <Header
          title={restaurantName || 'Cart'}
          showBackButton={true}
          rightMenu={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18 }}>🛒</Text>
              {cartItemCount > 0 && (
                <View
                  style={{
                    backgroundColor: colors.brandPrimary,
                    borderRadius: 10,
                    minWidth: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}
                  >
                    {cartItemCount}
                  </Text>
                </View>
              )}
            </View>
          }
        />
      </SafeAreaView>

      <View style={{ flex: 1, backgroundColor: colors.backgroundLight }}>
        {cartItems.length === 0 && !loading ? (
          <View style={cartStyle.emptyCart}>
            <Text style={cartStyle.emptyCartText}>Your cart is empty</Text>
          </View>
        ) : (
          <ScrollView
            {...scrollProps}
            contentContainerStyle={{
              marginTop: height * 0.12,
              paddingBottom: 250,
              //  paddingHorizontal: 20,
            }}
            showsVerticalScrollIndicator={false}
          >
            {loading ? (
              <CartSkeleton />
            ) : (
              <>
                <View style={cartStyle.container}>
                  <View style={cartStyle.productContainer}>
                    {cartItems.map((item, index) => (
                      <>
                        <View key={item.id} style={cartStyle.cartItem}>
                          <View style={cartStyle.foodImageBox}>
                            <Image
                              resizeMode="contain"
                              source={
                                item.image ||
                                require('../assets/images/foods/dummy food.png')
                              }
                              style={
                                item.image
                                  ? cartStyle.itemImage
                                  : cartStyle.dummyItemImage
                              }
                            />
                          </View>
                          <View style={cartStyle.itemDetails}>
                            <View style={cartStyle.titleRow}>
                              <Text style={cartStyle.itemName}>
                                {item.name}
                              </Text>
                              <View style={cartStyle.quantityControls}>
                                <TouchableOpacity
                                  onPress={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.quantity - 1,
                                    )
                                  }
                                  style={cartStyle.quantityBtn}
                                >
                                  <Text style={cartStyle.quantityBtnText}>
                                    -
                                  </Text>
                                </TouchableOpacity>
                                <Text style={cartStyle.quantityText}>
                                  {item.quantity}
                                </Text>
                                <TouchableOpacity
                                  onPress={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.quantity + 1,
                                    )
                                  }
                                  style={cartStyle.quantityBtn}
                                >
                                  <Text style={cartStyle.quantityBtnText}>
                                    +
                                  </Text>
                                </TouchableOpacity>
                              </View>
                              {/* <TouchableOpacity
                                onPress={() => handleRemoveItem(item.id)}
                                style={cartStyle.removeBtn}
                              >
                                <Text style={cartStyle.removeBtnText}>X</Text>
                              </TouchableOpacity> */}
                            </View>

                            <View style={cartStyle.priceRow}>
                              <Text style={cartStyle.itemPrice}>
                                ₹{item.price}
                              </Text>
                            </View>
                          </View>
                        </View>

                        {/* Dashed Separator */}
                        {index !== cartItems.length - 1 && (
                          <View style={cartStyle.separator} />
                        )}
                      </>
                    ))}
                  </View>
                </View>
              </>
            )}

            {/*  */}
            <View style={cartStyle.fullcontainer}>
              <SectionHeader
                title={
                  cartItems.length > 0
                    ? 'You Might Also Love These'
                    : 'Add products To cart'
                }
              />
              <Text>
                add a little extra joy to your cart before you check out
              </Text>
              <FlatList
                data={randomItems}
                horizontal
                contentContainerStyle={{ paddingTop: 9 }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  const quantity = getItemQuantity(item.id);
                  return (
                    <View style={cartStyle.randomItemContainer}>
                      <View style={cartStyle.randomItemImage}>
                        <Image
                          source={
                            item.image ||
                            require('../assets/images/foods/dummy food.png')
                          }
                          style={{ width: '60%', height: '60%' }}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={cartStyle.randomItemName} numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text style={cartStyle.randomItemType}>
                        {item.isVeg ? 'Veg' : ' Non-Veg'}
                      </Text>
                      <Text style={cartStyle.randomItemPrice}>
                        ₹{item.price}
                      </Text>
                      <View style={cartStyle.randomItemControls}>
                        {quantity > 0 ? (
                          <>
                            <TouchableOpacity
                              onPress={() =>
                                handleUpdateQuantity(item.id, quantity - 1)
                              }
                              style={cartStyle.quantityButton}
                            >
                              <Text style={cartStyle.quantityButtonText}>
                                -
                              </Text>
                            </TouchableOpacity>
                            <Text style={cartStyle.quantityDisplay}>
                              {quantity}
                            </Text>
                            <TouchableOpacity
                              onPress={() =>
                                handleUpdateQuantity(item.id, quantity + 1)
                              }
                              style={cartStyle.quantityButton}
                            >
                              <Text style={cartStyle.quantityButtonText}>
                                +
                              </Text>
                            </TouchableOpacity>
                          </>
                        ) : (
                          <TouchableOpacity
                            onPress={() => handleAddToCart(item)}
                            style={cartStyle.addButton}
                          >
                            <Text style={cartStyle.addButtonText}>Add</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  );
                }}
              />
            </View>

            {/*  */}
            <View style={cartStyle.paymentSummary}>
              <View style={cartStyle.productinfo}>
                <SectionHeader title="Payment Summary" />
                <View style={cartStyle.paymentRow}>
                  <Text>Cart Total</Text>
                  <Text>₹{cartTotal}</Text>
                </View>
                <View style={cartStyle.paymentRow}>
                  <Text>Deleivery Fee</Text>
                  <Text>₹{deleiveryFee}</Text>
                </View>
                <View style={cartStyle.paymentRow}>
                  <Text>Service fee</Text>
                  <Text>₹{serviceFee}</Text>
                </View>
                <View style={cartStyle.separator} />
                <View style={cartStyle.paymentRow}>
                  <Text>Total Amount</Text>
                  <Text>₹{totalAmount}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
        {cartItems.length > 0 && (
          <>
            <View style={cartStyle.totalContainer}>
              {/* <Text style={cartStyle.totalText}>Total: ₹{cartTotal}</Text> */}
              <TouchableOpacity
                activeOpacity={0.6}
                style={cartStyle.checkoutBtn}
                onPress={() => navigation.navigate('Checkout')}
              >
                <Text style={cartStyle.checkoutBtnText}>
                  Select Addres To Pay
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Cart;
