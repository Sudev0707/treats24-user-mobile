import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../routes/AppRoutes';
import colors from '../theme/colors';
import { orderData, OrderData, PaymentStatus } from '../data/ordrr.types';
import { savedAddress } from '../data/savedAddress';
import styles from '../styles/screens/PaymentSuccessStyles';

type PaymentSuccessScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PaymentSuccess'
>;

const PaymentSuccess: React.FC = () => {
  const navigation = useNavigation<PaymentSuccessScreenNavigationProp>();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('SUCCESS');

  const handleContinue = () => {
    // Navigate back to home or main tabs
    navigation.navigate('MainTabs');
  };

  // Get delivery address
  const deliveryAddress = savedAddress.find(addr => addr.id === orderData.delivery.addressId);

  const isSuccess = paymentStatus === 'SUCCESS';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with Status */}
        <View style={styles.header}>
          <View style={[styles.statusIcon, { backgroundColor: isSuccess ? colors.successSoft : colors.danger + '20' }]}>
            <Icon
              name={isSuccess ? 'checkmark-circle' : 'close-circle'}
              size={60}
              color={isSuccess ? colors.success : colors.danger}
            />
          </View>
          <Text style={[styles.title, { color: isSuccess ? colors.success : colors.danger }]}>
            {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
          </Text>
          <Text style={styles.message}>
            {isSuccess
              ? 'Your order has been placed successfully. You will receive a confirmation email shortly.'
              : 'Your payment could not be processed. Please try again or contact support.'
            }
          </Text>
        </View>

        {/* Order Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Details</Text>
          <View style={styles.orderCard}>
            <Text style={styles.orderId}>Order ID: {orderData.id}</Text>
            <Text style={styles.orderDate}>
              Placed on: {new Date(orderData.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </Text>
          </View>
        </View>

        {/* Order Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          {orderData.items.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <View style={styles.itemInfo}>
                <View style={[styles.vegIndicator, { backgroundColor: item.isVeg ? colors.vegGreen : colors.nonVegRed }]} />
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
                </View>
              </View>
              <Text style={styles.itemPrice}>₹{item.price * item.quantity}</Text>
            </View>
          ))}
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.addressCard}>
            <Icon name={deliveryAddress?.icon || 'map-pin'} size={20} color={colors.brandPrimary} />
            <View style={styles.addressInfo}>
              <Text style={styles.addressTitle}>{deliveryAddress?.title}</Text>
              <Text style={styles.addressText}>{deliveryAddress?.address}</Text>
            </View>
          </View>
          <View style={styles.deliveryTime}>
            <Icon name="time-outline" size={16} color={colors.textSecondary} />
            <Text style={styles.deliveryTimeText}>
              Estimated delivery: {orderData.delivery.estimatedTime} mins
            </Text>
          </View>
        </View>

        {/* Price Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Details</Text>
          <View style={styles.priceBreakdown}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Item Total</Text>
              <Text style={styles.priceValue}>₹{orderData.price.itemTotal}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Tax</Text>
              <Text style={styles.priceValue}>₹{orderData.price.tax}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Delivery Fee</Text>
              <Text style={styles.priceValue}>₹{orderData.price.deliveryFee}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Platform Fee</Text>
              <Text style={styles.priceValue}>₹{orderData.price.platformFee}</Text>
            </View>
            {orderData.price.discount > 0 && (
              <View style={styles.priceRow}>
                <Text style={[styles.priceLabel, { color: colors.success }]}>Discount</Text>
                <Text style={[styles.priceValue, { color: colors.success }]}>-₹{orderData.price.discount}</Text>
              </View>
            )}
            <View style={[styles.priceRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Grand Total</Text>
              <Text style={styles.totalValue}>₹{orderData.price.grandTotal}</Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentCard}>
            <Icon name="card-outline" size={20} color={colors.brandPrimary} />
            <Text style={styles.paymentText}>{orderData.paymentMethod}</Text>
            <View style={[styles.paymentStatus, { backgroundColor: isSuccess ? colors.success : colors.danger }]}>
              <Text style={styles.paymentStatusText}>{paymentStatus}</Text>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: isSuccess ? colors.success : colors.danger }]} onPress={handleContinue}>
          <Text style={styles.buttonText}>
            {isSuccess ? 'Continue Shopping' : 'Try Again'}
          </Text>
        </TouchableOpacity>
      </ScrollView>w 
    </SafeAreaView>
  );
};

export default PaymentSuccess;
