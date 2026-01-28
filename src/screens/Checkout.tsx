import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Dimensions,
  RefreshControl,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import SavedAddressCard from '../components/common/SavedAddressCard';
import CustomAlert from '../components/common/CustomAlert';
import { savedAddress as initialSavedAddress } from '../data/savedAddress';
import { checkoutStyle } from '../styles/screens/CheckoutStyles';
import SectionHeader from '../components/common/SectionHeader';
import { callbackRegistry } from '../utils/callbackRegistry';
import { Address } from '../data/userData';

type CheckoutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Checkout'
>;

const Checkout: React.FC = () => {
  const navigation = useNavigation<CheckoutScreenNavigationProp>();
  const [savedAddress, setSavedAddress] = useState(initialSavedAddress);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const { height } = Dimensions.get('window');

  // Dummy order data for demo
  const orderItems = [
    { id: '1', name: 'Margherita Pizza', quantity: 2, price: 250 },
    { id: '2', name: 'Chicken Burger', quantity: 1, price: 150 },
    { id: '3', name: 'French Fries', quantity: 1, price: 80 },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = Math.round(subtotal * 0.18);
  const deliveryFee = 40;
  const total = subtotal + tax + deliveryFee;

  const paymentOptions = [
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when you receive',
    },
    { id: 'card', name: 'Credit/Debit Card', description: 'Pay with card' },
    { id: 'upi', name: 'UPI', description: 'Pay with UPI' },
    { id: 'wallet', name: 'Wallet', description: 'Pay with wallet' },
  ];

  const handlePlaceOrder = async () => {
    if (!selectedPayment) {
      setAlertTitle('Error');
      setAlertMessage('Please select a payment method');
      setAlertVisible(true);
      return;
    }
    // Simulate payment processing for demo
    if (selectedPayment !== 'cod') {
      // For demo, assume payment succeeds
      // In real app, call payment API here
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
    // Simulate refresh delay or refetch data
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Adjust delay as needed
  };

  const handleChangeAddress = () => {
    if (!selectedAddress) {
      setAlertTitle('Error');
      setAlertMessage('Please select an address to change');
      setAlertVisible(true);
      return;
    }
    const addressToEdit = savedAddress.find(addr => addr.id === selectedAddress);
    if (!addressToEdit) return;
    const callbackKey = `checkout_edit_${Date.now()}`;
    callbackRegistry.set(callbackKey, (updatedAddress: Address) => {
      const formattedAddress = {
        id: updatedAddress.id,
        title: updatedAddress.label.charAt(0) + updatedAddress.label.slice(1).toLowerCase(),
        address: `${updatedAddress.street}, ${updatedAddress.area}, ${updatedAddress.city}, ${updatedAddress.state} ${updatedAddress.pincode}`,
        icon: updatedAddress.label === 'HOME' ? 'home' : updatedAddress.label === 'WORK' ? 'briefcase' : 'map-pin',
        isDefault: updatedAddress.isDefault,
      };
      setSavedAddress(prev => {
        const existingIndex = prev.findIndex(addr => addr.id === formattedAddress.id);
        if (existingIndex !== -1) {
          const updated = [...prev];
          updated[existingIndex] = formattedAddress;
          return updated;
        } else {
          return [...prev, formattedAddress];
        }
      });
    });
    navigation.navigate('AddAddressScreen', { editingAddress: addressToEdit, callbackKey });
  };

  return (
    <>
      <StatusBar
        // translucent={false}
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
          paddingBottom: 250,
          // paddingHorizontal: 20,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Delivery Instructions Section */}
        <View style={checkoutStyle.section}>
          <SectionHeader title="Delivery Instructions" />
          <View style={checkoutStyle.deliveryInstructionsCard}>
            <TextInput
              style={checkoutStyle.deliveryInstructionsInput}
              placeholder="Add delivery instructions (optional)"
              placeholderTextColor={colors.textSecondary}
              value={deliveryInstructions}
              onChangeText={setDeliveryInstructions}
              multiline
              maxLength={200}
            />
          </View>
        </View>

        {/* Delivery Address Section, user cna chnage  */}
        <View style={checkoutStyle.section}>
          <SectionHeader title="Delivery Address" />
          {savedAddress.map(address => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={address.id}
              onPress={() => setSelectedAddress(address.id)}
              style={[
                checkoutStyle.addressContainer,
                selectedAddress === address.id && checkoutStyle.selectedAddress,
              ]}
            >
              <SavedAddressCard
                title={address.title}
                address={address.address}
                icon={address.icon}
                distance={address.distance}
              />
              {selectedAddress === address.id && (
                <View style={checkoutStyle.checkmark}>
                  <Text style={checkoutStyle.checkmarkText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleChangeAddress}
            style={checkoutStyle.addAddressButton}
          >
            <Text style={checkoutStyle.addAddressText}>Change Address</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Options Section */}
        <View style={checkoutStyle.section}>
          <SectionHeader title="Payment Method" />
          {paymentOptions.map(option => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={option.id}
              onPress={() => setSelectedPayment(option.id)}
              style={[
                checkoutStyle.paymentOption,
                selectedPayment === option.id && checkoutStyle.selectedPayment,
              ]}
            >
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
      </ScrollView>

      {/* Place Order Button */}
      <View style={checkoutStyle.footer}>
        <TouchableOpacity
          style={checkoutStyle.placeOrderBtn}
          onPress={handlePlaceOrder}
        >
          <Text style={checkoutStyle.placeOrderBtnText}>Place Order</Text>
        </TouchableOpacity>
      </View>

      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
    </>
  );
};

export default Checkout;
