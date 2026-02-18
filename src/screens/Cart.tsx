import React, { useState, useEffect, useMemo } from 'react';
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
  RefreshControl,
  TextInput,
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
import CartItem from '../components/common/CartItem';
import PaymentSummary from '../components/common/PaymentSummary';
import CouponItem from '../components/common/CouponItem';
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
import RandomItem from '../components/common/RandomItem';
import fonts from '../theme/fonts';

const bag = require('../assets/icons/shopping-bag-flat.png');

const { height } = Dimensions.get('window');

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

const Cart: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  console.log('cartItems', cartItems);
  console.log('cartItems', cartItems);

  // const priceDetails = useMemo(() => {
  //   // Food price shown on platform (burger ₹199)
  //   const itemTotal = cartItems.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0,
  //   );

  //   // Platform commission (hidden from customer)
  //   const commission = itemTotal * COMMISSION_RATE; // 19.90

  //   // Restaurant payout
  //   const orderValue = itemTotal - commission; // 179.10

  //   // GST only on commission
  //   const gst = commission * GST_RATE; // 3.58

  //   const deliveryCharge = DELIVERY_CHARGE; // 40

  //   // Final amount customer pays
  //   const grandTotal = itemTotal + gst + deliveryCharge; // 242.48

  //   return {
  //     itemTotal, // 199 (Food price)
  //     commission, // 19.90 (Platform earns)
  //     orderValue, // 179.10 (Restaurant gets)
  //     gst, // 3.58
  //     deliveryCharge, // 40
  //     grandTotal, // 242.48
  //   };
  // }, [cartItems]);

  const DELIVERY_CHARGE = 40;
  const COMMISSION_RATE = 0.1; // 10%
  const GST_RATE = 0.18; // 18%

  const round2 = (num: number) => Math.round(num * 100) / 100;

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);



  const priceDetails = useMemo(() => {
    // 1️⃣ Total of all cart items
    const itemTotal = round2(
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    );

    // 2️⃣ Commission
    const commission = round2(itemTotal * COMMISSION_RATE); // 10% of itemTotal

    // 3️⃣ Restaurant earnings (after commission)
    const orderValue = round2(itemTotal - commission);

    // 4️⃣ GST on commission
    const gst = round2(commission * GST_RATE);

    // 5️⃣ Delivery charge
    const deliveryCharge = DELIVERY_CHARGE;

    // 6️⃣ Grand total (round AFTER summing properly)
    const grandTotal = round2(
      round2(itemTotal) + round2(gst) + round2(deliveryCharge) - round2(couponDiscount),
      // round2(itemTotal) + round2(gst) + round2(deliveryCharge),
    );

    return {
      itemTotal,
      commission,
      orderValue,
      gst,
      deliveryCharge,
      grandTotal,
    };
  }, [cartItems, couponDiscount]);

  console.log('itemTotal ', priceDetails.itemTotal);
  console.log('commission ', priceDetails.commission);
  // console.log('itemPrice ', priceDetails.itemPrice);
  console.log('gst ', priceDetails.gst);
  console.log('grandTotal ', priceDetails.grandTotal);
  // console.log('final price ', priceDetails.final);

  console.log('final orderValue ', priceDetails.orderValue);

  //

  const restaurantName = useAppSelector(selectRestaurantName);
  const cartItemCount = useAppSelector(selectCartItemCount);
  const randomItems = useAppSelector(selectRandomRestaurantItems);
  const restaurantId = useAppSelector(selectRestaurantId);
  const dispatch = useDispatch();
  const navigation = useNavigation<CartScreenNavigationProp>();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);


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

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh delay or refetch data
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Adjust delay as needed
  };

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) return;

    // Simulate coupon validation (in real app, this would be an API call)
    const validCoupons = {
      'SAVE10': 10,
      'WELCOME20': 20,
      'FIRST50': 50,
    };

    const discount = validCoupons[couponCode.toUpperCase() as keyof typeof validCoupons];

    if (discount) {
      setAppliedCoupon(couponCode.toUpperCase());
      setCouponDiscount(discount);
      setCouponCode('');
    } else {
      // Handle invalid coupon (could show an alert)
      console.log('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
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
            <View style={cartStyle.rightMenuContainer}>
              <Image
                source={bag}
                resizeMode="contain"
                style={cartStyle.bagIcon}
              />
              {cartItemCount >= 0 && (
                <View style={cartStyle.cartBadge}>
                  <Text style={cartStyle.cartBadgeText}>{cartItemCount}</Text>
                </View>
              )}
            </View>
          }
        />
      </SafeAreaView>

      <View style={cartStyle.mainContainer}>
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {loading ? (
              <CartSkeleton />
            ) : (
              <>
                {/* cart item */}
                <View style={cartStyle.container}>
                  <View style={cartStyle.productContainer}>
                    {cartItems.map((item, index) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                        isLast={index === cartItems.length - 1}
                      />
                    ))}
                  </View>
                </View>
              </>
            )}

            {/*  */}
            <View style={cartStyle.fullcontainer}>
              <View style={cartStyle.childfullcontainer}>
                <View style={{paddingHorizontal:15, paddingBottom:5}}>
                  <Text style={{fontFamily:fonts.family.medium}} >
                    {cartItems.length > 0
                      ? 'You Might Also Love These'
                      : 'Add products To cart'}
                  </Text>
                  <Text style={{fontFamily:fonts.family.regular, fontSize:fonts.size.sm}}>
                    add a little extra joy to your cart before you check out
                  </Text>
                </View>

                <FlatList
                  data={randomItems}
                  horizontal
                  contentContainerStyle={{
                    paddingVertical: 8,
                 
                    paddingHorizontal: 15,
                  }}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    const quantity = getItemQuantity(item.id);
                    return (
                      <RandomItem
                        item={item}
                        quantity={quantity}
                        onUpdateQuantity={handleUpdateQuantity}
                        onAddToCart={handleAddToCart}
                      />
                    );
                  }}
                />
              </View>
            </View>

            <PaymentSummary
              priceDetails={priceDetails}
              gstRate={GST_RATE}
              couponDiscount={couponDiscount}
            />

            {/* apply coupon fields */}
            <View style={cartStyle.couponContainer}>
              <Text style={cartStyle.couponTitle}>Have a coupon?</Text>

              {appliedCoupon ? (
                <View style={cartStyle.appliedCouponContainer}>
                  <View style={cartStyle.appliedCoupon}>
                    <Text style={cartStyle.appliedCouponText}>
                      🎉 {appliedCoupon} Applied
                    </Text>
                    <TouchableOpacity
                      onPress={handleRemoveCoupon}
                      style={cartStyle.removeCouponBtn}
                    >
                      <Text style={cartStyle.removeCouponText}>✕</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={cartStyle.discountText}>
                    You saved ₹{couponDiscount} on this order!
                  </Text>
                </View>
              ) : (
                <View style={cartStyle.couponInputContainer}>
                  <TextInput
                    style={cartStyle.couponInput}
                    placeholder="Enter coupon code"
                    placeholderTextColor={colors.textSecondary}
                    value={couponCode}
                    onChangeText={setCouponCode}
                    autoCapitalize="characters"
                    maxLength={20}
                  />
                  <TouchableOpacity
                    style={[
                      cartStyle.applyCouponBtn,
                      !couponCode.trim() && cartStyle.applyCouponBtnDisabled,
                    ]}
                    onPress={handleApplyCoupon}
                    disabled={!couponCode.trim()}
                  >
                    <Text
                      style={[
                        cartStyle.applyCouponBtnText,
                        !couponCode.trim() && cartStyle.applyCouponBtnTextDisabled,
                      ]}
                    >
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              <View style={cartStyle.availableCoupons}>
                <Text style={cartStyle.availableCouponsTitle}>Available Coupons</Text>
                <View style={cartStyle.couponList}>
                  <CouponItem
                    code="SAVE10"
                    description="Save ₹10 on orders above ₹200"
                    onPress={() => setCouponCode('SAVE10')}
                  />
                  <CouponItem
                    code="WELCOME20"
                    description="Save ₹20 on first order"
                    onPress={() => setCouponCode('WELCOME20')}
                  />
                  <CouponItem
                    code="FIRST50"
                    description="Save ₹50 on orders above ₹500"
                    onPress={() => setCouponCode('FIRST50')}
                  />
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
                <Text style={cartStyle.checkoutBtnText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Cart;
