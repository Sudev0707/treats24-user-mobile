import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/AppRoutes';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import SavedAddressCard from '../components/common/SavedAddressCard';
import CustomAlert from '../components/common/CustomAlert';
import { savedAddress } from '../data/savedAddress';
import { checkoutStyle } from '../styles/screens/CheckoutStyles';
import SectionHeader from '../components/common/SectionHeader';

type CheckoutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Checkout'
>;

const Checkout: React.FC = () => {
  const navigation = useNavigation<CheckoutScreenNavigationProp>();
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const { height } = Dimensions.get('window');

  const paymentOptions = [
    { id: 'cod', name: 'Cash on Delivery', description: 'Pay when you receive' },
    // { id: 'card', name: 'Credit/Debit Card', description: 'Pay with card' },
    // { id: 'upi', name: 'UPI', description: 'Pay with UPI' },
    // { id: 'wallet', name: 'Wallet', description: 'Pay with wallet' },
  ];

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      setAlertTitle('Error');
      // setAlertMessage('Please select a delivery address');
      setAlertVisible(true);
      return;
    }
    if (!selectedPayment) {
      setAlertTitle('Error');
      setAlertMessage('Please select a payment method');
      setAlertVisible(true);
      return;
    }
    // Here you would typically process the order
    setAlertTitle('Success');
    setAlertMessage('Order placed successfully!');
    setAlertVisible(true);
    // Navigate back or to order confirmation
    navigation.goBack();
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
          paddingBottom: 250,
          // paddingHorizontal: 20,
        }}
      >
        {/* Delivery Address Section */}
        {/* <View style={checkoutStyle.section}>
          {savedAddress.map((address) => (
            <TouchableOpacity activeOpacity={0.7}
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
                distance={address.distance}
                icon={address.icon}
              />
              {selectedAddress === address.id && (
                <View style={checkoutStyle.checkmark}>
                  <Text style={checkoutStyle.checkmarkText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View> */}

        {/* Payment Options Section */}
        <View style={checkoutStyle.section}>
          <SectionHeader title='Payment Method'/>
          {paymentOptions.map((option) => (
            <TouchableOpacity activeOpacity={0.8}
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
