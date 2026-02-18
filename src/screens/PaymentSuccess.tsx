import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../routes/types';
import colors from '../theme/colors';
import { PaymentStatus } from '../data/ordrr.types';
import { savedAddress } from '../data/savedAddress';
import styles from '../styles/screens/PaymentSuccessStyles';
import { useAppSelector } from '../hooks/useAppSelector';
import {
  selectCartItems,
  selectRestaurantName,
} from '../store/selectors/cartSelectors';

type PaymentSuccessScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PaymentSuccess'
>;

type PaymentSuccessScreenRouteProp = RouteProp<
  RootStackParamList,
  'PaymentSuccess'
>;

const PaymentSuccess: React.FC = () => {
  const navigation = useNavigation<PaymentSuccessScreenNavigationProp>();
  const route = useRoute<PaymentSuccessScreenRouteProp>();
  const [paymentStatus] = useState<PaymentStatus>('SUCCESS');

  const { selectedPaymentMethod } = route.params;

  const cartItems = useAppSelector(selectCartItems);
  const restaurantName = useAppSelector(selectRestaurantName);

  const DELIVERY_CHARGE = 40;
  const COMMISSION_RATE = 0.1; // 10%
  const GST_RATE = 0.18; // 18%

  const round2 = (num: number) => Math.round(num * 100) / 100;

  const priceDetails = useMemo(() => {
    const itemTotal = round2(
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    );

    const commission = round2(itemTotal * COMMISSION_RATE);
    const gst = round2(commission * GST_RATE);
    const deliveryCharge = DELIVERY_CHARGE;
    const grandTotal = round2(
      round2(itemTotal) + round2(gst) + round2(deliveryCharge),
    );

    return {
      itemTotal,
      commission,
      gst,
      deliveryCharge,
      grandTotal,
    };
  }, [cartItems]);

  const orderId = `ORD${Date.now().toString().slice(-8)}`;
  const createdAt = new Date().toISOString();

  const handleContinue = () => {
    navigation.navigate('MainTabs');
  };

  const handleTrackOrder = () => {
    // Navigate to track order - for now navigate to MainTabs
    // In a full implementation, this would navigate to LiveTrackOrder with order data
    navigation.navigate('MainTabs');
  };

  // Get delivery address (use first address as default)
  const deliveryAddress = savedAddress[0];

  const isSuccess = paymentStatus === 'SUCCESS';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Header */}
        <View style={styles.header}>
          <View style={styles.successContainer}>
            <View style={styles.statusIconOuter}>
              <View style={styles.statusIcon}>
                <Icon
                  name={isSuccess ? 'checkmark-circle' : 'close-circle'}
                  size={56}
                  color={isSuccess ? colors.success : colors.danger}
                />
              </View>
            </View>
            <Text style={styles.title}>
              {isSuccess ? 'Order Confirmed!' : 'Payment Failed'}
            </Text>
            <Text style={styles.message}>
              {isSuccess
                ? 'Your delicious food is being prepared and will be delivered soon!'
                : 'Your payment could not be processed. Please try again or contact support.'}
            </Text>
          </View>
        </View>

        <View style={styles.orderInfoContent}>
          {/* Restaurant Info Card */}
          <View style={styles.restaurantCard}>
            <View style={styles.restaurantImage}>
              <Text style={styles.restaurantImageText}>
                {restaurantName ? restaurantName.charAt(0).toUpperCase() : 'F'}
              </Text>
            </View>
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>
                {restaurantName || 'Food Restaurant'}
              </Text>
              <Text style={styles.restaurantOrderId}>Order #{orderId}</Text>
              <View style={styles.orderIdChip}>
                <Text style={styles.orderIdText}>
                  {new Date(createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Text>
              </View>
            </View>
          </View>

          {/* Order Timeline */}
          <View style={styles.timelineContainer}>
            <Text style={styles.timelineTitle}>Track Your Order</Text>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDot}>
                <Icon name="checkmark" size={14} color={colors.textWhite} />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineLabelCompleted}>Order Placed</Text>
                <Text style={styles.timelineSubLabel}>Payment successful</Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View
                style={[
                  styles.timelineDotInactive,
                  { backgroundColor: colors.brandPrimarySoft },
                ]}
              >
                <Icon name="restaurant" size={12} color={colors.brandPrimary} />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineLabel}>Preparing</Text>
                <Text style={styles.timelineSubLabel}>
                  Restaurant is preparing your food
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDotInactive}>
                <Icon name="bicycle" size={12} color={colors.textSecondary} />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineLabel}>On the Way</Text>
                <Text style={styles.timelineSubLabel}>
                  Delivery partner will pick up soon
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineDotInactive}>
                <Icon name="location" size={12} color={colors.textSecondary} />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineLabel}>Delivered</Text>
                <Text style={styles.timelineSubLabel}>
                  Expected by 35-45 mins
                </Text>
              </View>
            </View>
          </View>

          {/* Order Items */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Summary</Text>
            <View style={styles.orderItemsCard}>
              {cartItems.map((item, index) => (
                <View
                  key={item.id}
                  style={[
                    styles.itemRow,
                    index === cartItems.length - 1 && { borderBottomWidth: 0 },
                  ]}
                >
                  <View style={styles.itemInfo}>
                    {item.isVeg ? (
                      <View style={styles.vegIndicator}>
                        <View style={styles.vegIndicatorInner} />
                      </View>
                    ) : (
                      <View style={styles.nonVegIndicator}>
                        <View style={styles.nonVegIndicatorInner} />
                      </View>
                    )}
                    <View>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemQuantity}>
                        Qty: {item.quantity}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.itemPrice}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Delivery Address */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Delivery Address</Text>
            <View style={styles.addressCard}>
              <View style={styles.addressHeader}>
                <View style={styles.addressIconContainer}>
                  <Icon name="location" size={20} color={colors.brandPrimary} />
                </View>
                <View style={styles.addressInfo}>
                  <Text style={styles.addressTitle}>
                    {deliveryAddress?.title || 'Home'}
                  </Text>
                  <Text style={styles.addressType}>Delivery</Text>
                </View>
              </View>
              <Text style={styles.addressText}>
                {deliveryAddress?.address || 'Address not available'}
              </Text>

              <View style={styles.deliveryTime}>
                <View style={styles.deliveryTimeIcon}>
                  <Icon name="time" size={18} color={colors.success} />
                </View>
                <View>
                  <Text style={styles.deliveryTimeText}>35-45 mins</Text>
                  <Text style={styles.deliveryTimeSubText}>
                    Estimated delivery time
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Price Breakdown */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Bill Details</Text>
            <View style={styles.priceBreakdown}>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Item Total</Text>
                <Text style={styles.priceValue}>₹{priceDetails.itemTotal}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Tax & Charges</Text>
                <Text style={styles.priceValue}>₹{priceDetails.gst}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Delivery Fee</Text>
                <Text style={styles.priceValue}>
                  ₹{priceDetails.deliveryCharge}
                </Text>
              </View>
              <View style={[styles.priceRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total Paid</Text>
                <Text style={styles.totalValue}>
                  ₹{priceDetails.grandTotal}
                </Text>
              </View>
            </View>
          </View>

          {/* Payment Method */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment</Text>
            <View style={styles.paymentCard}>
              <View style={styles.paymentIconContainer}>
                <Icon name="card" size={22} color={colors.brandPrimary} />
              </View>
              <Text style={styles.paymentText}>
                {selectedPaymentMethod || 'Online Payment'}
              </Text>
              <View
                style={[
                  styles.paymentStatus,
                  {
                    backgroundColor: isSuccess ? colors.success : colors.danger,
                  },
                ]}
              >
                <Text style={styles.paymentStatusText}>
                  {isSuccess ? 'Paid' : 'Failed'}
                </Text>
              </View>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleTrackOrder}
              activeOpacity={0.8}
            >
              <Icon
                name="navigate"
                size={18}
                color={colors.textWhite}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.primaryButtonText}>Track Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleContinue}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentSuccess;
