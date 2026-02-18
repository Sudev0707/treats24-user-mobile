import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  Alert,
  Dimensions,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import { RootStackParamList, BillDetails } from '../routes/types';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectCartItems } from '../store/selectors/cartSelectors';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import SavedAddressCard from '../components/common/SavedAddressCard';
import CustomAlert from '../components/common/CustomAlert';
import AddressSelectionModal from '../components/modals/AddressSelectionModal';
import { savedAddress } from '../data/savedAddress';
import { checkoutStyle } from '../styles/screens/CheckoutStyles';
import SectionHeader from '../components/common/SectionHeader';
import fonts from '../theme/fonts';

type CheckoutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Checkout'
>;

const DELIVERY_CHARGE = 40;
const COMMISSION_RATE = 0.1; // 10%
const GST_RATE = 0.18; // 18%

const round2 = (num: number) => Math.round(num * 100) / 100;

const Checkout: React.FC = () => {
  const navigation = useNavigation<CheckoutScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Checkout'>>();
  const { billDetails } = route.params || {};
  
  // Get cart items from Redux store
  const cartItems = useAppSelector(selectCartItems);
  
  const [selectedAddress, setSelectedAddress] = useState<string | null>(
    savedAddress.length > 0 ? savedAddress[0].id : null,
  );
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [selectedTip, setSelectedTip] = useState<string | null>(null);
  const [customTip, setCustomTip] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const { height } = Dimensions.get('window');

  // Calculate price details from cart using same logic as Cart.tsx
  const itemTotal = billDetails?.itemTotal ?? round2(
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
  const commission = billDetails?.commission ?? round2(itemTotal * COMMISSION_RATE);
  const gst = billDetails?.gst ?? (commission * GST_RATE);
  // const gst = billDetails?.gst ?? round2(commission * GST_RATE);
  const deliveryCharge = billDetails?.deliveryCharge ?? DELIVERY_CHARGE;
  
  const couponDiscount =
    appliedCoupon === 'SAVE50'
      ? 50
      : appliedCoupon === 'FIRST20'
      ? Math.round(itemTotal * 0.2)
      : 0;
  const tipAmount = selectedTip
    ? parseInt(selectedTip)
    : customTip
    ? parseInt(customTip)
    : 0;
  // Use grandTotal from billDetails if available (includes coupon discount), otherwise calculate
  const baseGrandTotal = billDetails?.grandTotal ?? round2(
    round2(itemTotal) + round2(gst) + round2(deliveryCharge) - round2(couponDiscount),
  );
  const grandTotal = baseGrandTotal + tipAmount;

  const tipOptions = [
    { id: '20', amount: '₹20', label: 'Great' },
    { id: '50', amount: '₹50', label: 'Awesome' },
    { id: '100', amount: '₹100', label: 'Super' },
  ];

  const paymentOptions = [
    {
      id: 'upi',
      name: 'UPI',
      description: 'Pay with UPI ID or QR',
      icon: 'smartphone',
    },
    {
      id: 'card',
      name: 'Credit / Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: 'credit-card',
    },
    {
      id: 'wallet',
      name: 'Wallets',
      description: 'Paytm, Amazon Pay, etc.',
      icon: 'folder',
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      description: 'All major banks supported',
      icon: 'globe',
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when you receive',
      icon: 'money',
    },
  ];

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setAlertTitle('Error');
      setAlertMessage('Please enter a coupon code');
      setAlertVisible(true);
      return;
    }
    if (
      couponCode.toUpperCase() === 'SAVE50' ||
      couponCode.toUpperCase() === 'FIRST20'
    ) {
      setAppliedCoupon(couponCode.toUpperCase());
      setAlertTitle('Success');
      setAlertMessage(
        `Coupon ${couponCode.toUpperCase()} applied successfully!`,
      );
      setAlertVisible(true);
    } else {
      setAlertTitle('Invalid Coupon');
      setAlertMessage('The coupon code entered is not valid');
      setAlertVisible(true);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      setAlertTitle('Error');
      setAlertMessage('Please select a delivery address');
      setAlertVisible(true);
      return;
    }
    if (!selectedPayment) {
      setAlertTitle('Error');
      setAlertMessage('Please select a payment method');
      setAlertVisible(true);
      return;
    }

    // Simulate payment processing for demo
    if (selectedPayment !== 'cod') {
      console.log('Processing payment for:', selectedPayment);
    }

    // Navigate to payment success screen
    const selectedPaymentOption = paymentOptions.find(
      option => option.id === selectedPayment,
    );
    navigation.navigate('PaymentSuccess', {
      selectedPaymentMethod: selectedPaymentOption?.name || 'UPI',
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle="dark-content"
      />
      <SafeAreaView edges={['top']} style={checkoutStyle.headerWrapper}>
        <Header title="Checkout" showBackButton={true} />
      </SafeAreaView>

      <ScrollView
        style={checkoutStyle.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: height * 0.12,
          paddingBottom: 120,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Delivery Address Section */}
        <View style={checkoutStyle.section}>
          <SectionHeader title="Delivery Address" />

          {savedAddress.map(address => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={address.id}
              onPress={() => setAddressModalVisible(true)}
              style={[
                checkoutStyle.addressItem,
                selectedAddress === address.id &&
                  checkoutStyle.addressItemActive,
              ]}
            >
              <View style={checkoutStyle.leftSection}>
                <View style={checkoutStyle.iconCircle}>
                  <Feather
                    name="map-pin"
                    size={18}
                    color={colors.brandPrimary}
                  />
                </View>

                <View style={checkoutStyle.textSection}>
                  <Text style={checkoutStyle.mainText}>{address.title}</Text>
                  <Text style={checkoutStyle.subText} numberOfLines={2} ellipsizeMode="tail" >{address.address}</Text>
                </View>
              </View>

              <Feather name="chevron-right" size={22} color="#000" />
            </TouchableOpacity>
          ))}

          {/* <TouchableOpacity style={checkoutStyle.addAddressBtn}>
            <Feather name="plus-circle" size={20} color={colors.brandPrimary} />
            <Text style={checkoutStyle.addAddressText}>Add New Address</Text>
          </TouchableOpacity> */}
        </View>

        {/* Tip Section */}
        <View style={[checkoutStyle.section, checkoutStyle.tipSection]}>
          <SectionHeader title="Tip the Delivery Partner" />
          <Text style={checkoutStyle.sectionSubtitle}>
            Good food deserves a good tip!
          </Text>

          <View style={checkoutStyle.tipOptions}>
            {tipOptions.map(tip => (
              <TouchableOpacity
                key={tip.id}
                style={[
                  checkoutStyle.tipButton,
                  selectedTip === tip.id && checkoutStyle.tipButtonSelected,
                ]}
                onPress={() => {
                  setSelectedTip(tip.id);
                  setCustomTip('');
                }}
              >
                <Text style={checkoutStyle.tipAmount}>{tip.amount}</Text>
                <Text style={checkoutStyle.tipLabel}>{tip.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={checkoutStyle.customTipInput}>
            <TextInput
              style={checkoutStyle.customTipField}
              placeholder="Enter custom tip amount"
              placeholderTextColor={colors.textMuted}
              value={customTip}
              onChangeText={text => {
                setCustomTip(text.replace(/[^0-9]/g, ''));
                setSelectedTip(null);
              }}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Payment Options Section */}
        <View style={checkoutStyle.section}>
          <SectionHeader title="Payment Method" />
          {paymentOptions.map(option => (
            <TouchableOpacity activeOpacity={0.7}
              key={option.id}
              onPress={() => setSelectedPayment(option.id)}
              style={[
                checkoutStyle.paymentOption,
                selectedPayment === option.id && checkoutStyle.selectedPayment,
              ]}
            >
              <View style={[
                checkoutStyle.paymentIconContainer,
                selectedPayment === option.id && checkoutStyle.paymentIconContainerSelected
              ]}>
                <Feather
                  name={option.icon}
                   size={18}
                  color={colors.brandPrimary}
                />
              </View>
              <View style={checkoutStyle.paymentContent}>
                <Text style={checkoutStyle.paymentName}>{option.name}</Text>
                <Text style={checkoutStyle.paymentDescription}>
                  {option.description}
                </Text>
              </View>
              {selectedPayment === option.id && (
                <View style={checkoutStyle.checkmark}>
                  <Text style={checkoutStyle.checkmarkText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Price Breakdown Section */}
        <View style={[checkoutStyle.section, checkoutStyle.priceBreakdown]}>
          <SectionHeader title="Bill Details" />

          <View style={checkoutStyle.priceRow}>
            <Text style={checkoutStyle.priceLabel}>Item Total</Text>
            <Text style={checkoutStyle.priceValue}>
              ₹{itemTotal}
            </Text>
          </View>

          <View style={checkoutStyle.priceRow}>
            <Text style={checkoutStyle.priceLabel}>GST (5%)</Text>
            <Text style={checkoutStyle.priceValue}>₹{gst}</Text>
          </View>

          <View style={checkoutStyle.priceRow}>
            <Text style={checkoutStyle.priceLabel}>Delivery Fee</Text>
            <Text style={checkoutStyle.priceValue}>₹{deliveryCharge}</Text>
          </View>

          {couponDiscount > 0 && (
            <View style={checkoutStyle.priceRow}>
              <Text
                style={[checkoutStyle.priceLabel, checkoutStyle.discountPrice]}
              >
                Discount
              </Text>
              <Text
                style={[checkoutStyle.priceValue, checkoutStyle.discountPrice]}
              >
                -₹{couponDiscount}
              </Text>
            </View>
          )}

          {tipAmount > 0 && (
            <View style={checkoutStyle.priceRow}>
              <Text style={checkoutStyle.priceLabel}>Tip</Text>
              <Text style={checkoutStyle.priceValue}>
                ₹{tipAmount}
              </Text>
            </View>
          )}

          <View style={checkoutStyle.separator} />

          <View style={checkoutStyle.totalRow}>
            <Text style={checkoutStyle.totalLabel}>Total to Pay</Text>
            <Text style={checkoutStyle.totalValue}>
              ₹{grandTotal}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer with Place Order Button */}
      <View style={checkoutStyle.footer}>
        <View style={checkoutStyle.footerContent}>
          <View style={checkoutStyle.footerLeft}>
            <Text style={checkoutStyle.footerItemCount}>
              {cartItems.length} items
            </Text>
            <Text style={checkoutStyle.footerTotal}>
              {/* ₹{grandTotal.toFixed(0)} */}
                ₹{grandTotal}
            </Text>
          </View>
          <TouchableOpacity
            style={checkoutStyle.placeOrderBtn}
            onPress={handlePlaceOrder}
          >
            <Text style={checkoutStyle.placeOrderBtnText}>Place Order</Text>
            <Feather
              name="arrow-right"
              size={20}
              color={colors.textWhite}
              style={checkoutStyle.footerArrow}
            />
          </TouchableOpacity>
        </View>
      </View>

      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />

      <AddressSelectionModal
        visible={addressModalVisible}
        onClose={() => setAddressModalVisible(false)}
        onSelect={(addressId: string) => setSelectedAddress(addressId)}
        onAddNewAddress={() => {
          setAddressModalVisible(false);
          navigation.navigate('AddAddressScreen');
        }}
        addresses={savedAddress}
        selectedAddressId={selectedAddress}
      />
    </>
  );
};

export default Checkout;
