import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  Linking,
  Share,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
import { OrderData, OrderStatus, OrderItem } from '../data/ordrr.types';
import { RootStackParamList } from '../routes/types';
import OrderDetailsScreenStyles from '../styles/screens/OrderDetailsScreenStyles';
import vegIcon from '../assets/icons/veg-icon.png';
import nonVegIcon from '../assets/icons/non-veg-icon.png';

// Restaurant names mapping (same as Orders.tsx)
const restaurantNames: { [key: string]: string } = {
  res_12: 'Spice Garden',
  res_13: 'Tandoori Delight',
  res_14: 'Seafood Paradise',
  res_15: 'Veg Haven',
};

// Restaurant images (placeholder URLs)
const restaurantImages: { [key: string]: string } = {
  res_12: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200',
  res_13: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200',
  res_14: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200',
  res_15: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200',
};

// Dummy delivery partner data
const deliveryPartner = {
  name: 'Rajesh Kumar',
  phone: '+91 98765 43210',
  photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  rating: 4.8,
};

type OrderDetailsRouteProp = RouteProp<RootStackParamList, 'OrderDetails'>;

const OrderDetailsScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<OrderDetailsRouteProp>();
  const { order } = route.params;
  const [rating, setRating] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [showPaymentOptions, setShowPaymentOptions] = useState<boolean>(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<
    string | null
  >(null);

  // Check if order is COD and not paid
  const isCODUnpaid =
    (order.paymentMethod === 'COD' ||
      order.paymentMethod === 'CASH_ON_DELIVERY' ||
      order.paymentMethod.toLowerCase().includes('cod') ||
      order.paymentMethod.toLowerCase().includes('cash')) &&
    order.paymentStatus !== 'SUCCESS';

  const paymentOptions = [
    { id: 'card', name: 'Card', icon: 'credit-card' },
    { id: 'upi', name: 'UPI', icon: 'account-balance-wallet' },
    { id: 'wallet', name: 'Wallet', icon: 'account-balance' },
  ];

  const handlePayNow = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentOptionSelect = (optionId: string) => {
    setSelectedPaymentOption(optionId);
  };

  const handleConfirmPayment = () => {
    if (!selectedPaymentOption) {
      Alert.alert('Error', 'Please select a payment method');
      return;
    }

    // In a real app, you would call the payment API here
    const selectedOption = paymentOptions.find(
      opt => opt.id === selectedPaymentOption,
    );
    Alert.alert(
      'Payment Successful',
      `Your payment of ₹${order.price.grandTotal} via ${selectedOption?.name} was successful!`,
      [
        {
          text: 'OK',
          onPress: () => {
            setShowPaymentOptions(false);
            setSelectedPaymentOption(null);
            // In a real app, you would update the order status here
          },
        },
      ],
    );
  };

  const restaurantName =
    restaurantNames[order.restaurantId] || order.restaurantId;
  const restaurantImage = restaurantImages[order.restaurantId];

  const getStatusColor = (status: OrderStatus): string => {
    switch (status) {
      case 'PLACED':
      case 'CONFIRMED':
      case 'PREPARING':
        return '#FFA500'; // Orange
      case 'OUT_FOR_DELIVERY':
        return '#FF4500'; // Red-Orange
      case 'DELIVERED':
        return '#32CD32'; // Lime Green
      case 'CANCELLED':
        return '#DC143C'; // Crimson
      default:
        return '#808080'; // Gray
    }
  };

  const getStatusIcon = (status: OrderStatus): string => {
    switch (status) {
      case 'PLACED':
        return 'receipt';
      case 'CONFIRMED':
        return 'check-circle';
      case 'PREPARING':
        return 'restaurant';
      case 'OUT_FOR_DELIVERY':
        return 'local-shipping';
      case 'DELIVERED':
        return 'done';
      case 'CANCELLED':
        return 'cancel';
      default:
        return 'help';
    }
  };

  const getStatusSteps = (status: OrderStatus): string[] => {
    switch (status) {
      case 'PLACED':
        return ['Order Placed'];
      case 'CONFIRMED':
        return ['Order Placed', 'Confirmed'];
      case 'PREPARING':
        return ['Order Placed', 'Confirmed', 'Preparing'];
      case 'OUT_FOR_DELIVERY':
        return ['Order Placed', 'Confirmed', 'Preparing', 'Out for Delivery'];
      case 'DELIVERED':
        return [
          'Order Placed',
          'Confirmed',
          'Preparing',
          'Out for Delivery',
          'Delivered',
        ];
      case 'CANCELLED':
        return ['Order Placed', 'Cancelled'];
      default:
        return [];
    }
  };

  const isActive = [
    'PLACED',
    'CONFIRMED',
    'PREPARING',
    'OUT_FOR_DELIVERY',
  ].includes(order.status);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleCallDeliveryPartner = () => {
    Alert.alert(
      'Call Delivery Partner',
      `Call ${deliveryPartner.name} at ${deliveryPartner.phone}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call',
          onPress: () => Linking.openURL(`tel:${deliveryPartner.phone}`),
        },
      ],
    );
  };

  const handleMessageDeliveryPartner = () => {
    Alert.alert(
      'Message Delivery Partner',
      `Message ${deliveryPartner.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Message',
          onPress: () =>
            Alert.alert(
              'Coming Soon',
              'Messaging feature will be available soon!',
            ),
        },
      ],
    );
  };

  const handleShareOrder = async () => {
    try {
      await Share.share({
        message: `Check out my order from ${restaurantName}!\n\nOrder ID: ${
          order.id
        }\nItems: ${order.items
          .map(item => `${item.name} x${item.quantity}`)
          .join(', ')}\nTotal: ₹${
          order.price.grandTotal
        }\n\nOrdered via Treats24 App`,
        title: 'My Order',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleDownloadInvoice = () => {
    Alert.alert('Download Invoice', 'Invoice download will be available soon!');
  };

  const handleRateOrder = (selectedRating: number) => {
    setRating(selectedRating);
    Alert.alert('Thank You!', `You rated this order ${selectedRating} stars.`);
  };

  const handleTip = (amount: number) => {
    setTipAmount(amount);
    Alert.alert('Tip Added', `You added ₹${amount} as tip.`);
  };

  const statusSteps = getStatusSteps(order.status);

  // Calculate active index based on current order status
  const getActiveIndex = (): number => {
    const statusMap: { [key: string]: number } = {
      'PLACED': 0,
      'Order Placed': 0,
      'CONFIRMED': 1,
      'Confirmed': 1,
      'PREPARING': 2,
      'Preparing': 2,
      'OUT_FOR_DELIVERY': 3,
      'Out for Delivery': 3,
      'DELIVERED': 4,
      'Delivered': 4,
      'CANCELLED': 1,
      'Cancelled': 1,
    };
    return statusMap[order.status] ?? -1;
  };

  const activeIndex = getActiveIndex();


  return (
    <SafeAreaView style={OrderDetailsScreenStyles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <View style={OrderDetailsScreenStyles.header}>
        <TouchableOpacity
          style={OrderDetailsScreenStyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/icons/iconsback.png')}
            style={{ width: 24, height: 24, borderRadius: 7 }}
          />

          {/* <Icon name="arrow-back" size={24} color={colors.textPrimary} /> */}
        </TouchableOpacity>
        <Text style={OrderDetailsScreenStyles.headerTitle}>Order Details</Text>
        <TouchableOpacity
          style={OrderDetailsScreenStyles.shareButton}
          onPress={handleShareOrder}
        >
          <Icon name="share" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={OrderDetailsScreenStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Order Status Card - Swiggy/Zomato Style */}
        <View style={OrderDetailsScreenStyles.statusCard}>
          <View style={OrderDetailsScreenStyles.statusHeader}>
            <View
              style={[
                OrderDetailsScreenStyles.statusBadge,
                { backgroundColor: getStatusColor(order.status) },
              ]}
            >
              <Icon name={getStatusIcon(order.status)} size={16} color="#FFF" />
              <Text style={OrderDetailsScreenStyles.statusText}>
                {order.status.replace('_', ' ')}
              </Text>
            </View>
            {isActive && (
              <Text style={OrderDetailsScreenStyles.estimatedTime}>
                ⏱️ {order.delivery.estimatedTime} mins
              </Text>
            )}
          </View>

          <View style={{ paddingHorizontal: 8 }}>
            {/* Progress Tracker - Swiggy/Zomato Style */}
            <View style={OrderDetailsScreenStyles.trackerContainer}>
              {statusSteps.map((step, index) => (
                <View key={index} style={OrderDetailsScreenStyles.trackerStep}>
                  <View
                    style={[
                      OrderDetailsScreenStyles.trackerDot,
                      index <=
                        statusSteps.indexOf(order.status.replace('_', ' ')) ||
                      index < statusSteps.length - 1
                        ? OrderDetailsScreenStyles.trackerDotActive
                        : {},
                    ]}
                  >
                    {index < statusSteps.length - 1 &&
                    index <
                      statusSteps.indexOf(order.status.replace('_', ' ')) +
                        1 ? (
                      <Icon name="check" size={12} color="#FFF" />
                    ) : index ===
                        statusSteps.indexOf(order.status.replace('_', ' ')) ||
                      (order.status === 'DELIVERED' &&
                        index === statusSteps.length - 1) ? (
                      <Icon
                        name={getStatusIcon(order.status)}
                        size={12}
                        color="#FFF"
                      />
                    ) : null}
                  </View>
              
                  {index < statusSteps.length - 1 && (
                    <View
                      style={[
                        OrderDetailsScreenStyles.trackerLine,
                        index < activeIndex
                          ? OrderDetailsScreenStyles.trackerLineActive
                          : null,
                      ]}
                    />
                  )}
                </View>
              ))}
            </View>

            

            <View style={OrderDetailsScreenStyles.trackerLabelsContainer}>
              {statusSteps.map((step, index) => (
                <Text
                  key={index}
                  style={[
                    OrderDetailsScreenStyles.trackerText,
                    index <=
                      statusSteps.indexOf(order.status.replace('_', ' ')) &&
                      OrderDetailsScreenStyles.trackerTextActive,
                  ]}
                  numberOfLines={1}
                >
                  {step}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Live Tracking Map Placeholder - Swiggy/Zomato Style */}
        {isActive && order.status === 'OUT_FOR_DELIVERY' && (
          <View style={OrderDetailsScreenStyles.mapCard}>
            <View style={OrderDetailsScreenStyles.mapPlaceholder}>
              <Icon name="map" size={40} color={colors.brandPrimary} />
              <Text style={OrderDetailsScreenStyles.mapText}>
                Live Tracking
              </Text>
              <Text style={OrderDetailsScreenStyles.mapSubText}>
                Your order is on the way!
              </Text>
            </View>

            {/* Delivery Partner Info */}
            <View style={OrderDetailsScreenStyles.deliveryPartnerContainer}>
              <Image
                source={{ uri: deliveryPartner.photo }}
                style={OrderDetailsScreenStyles.deliveryPartnerPhoto}
              />
              <View style={OrderDetailsScreenStyles.deliveryPartnerInfo}>
                <Text style={OrderDetailsScreenStyles.deliveryPartnerName}>
                  {deliveryPartner.name}
                </Text>
                <View style={OrderDetailsScreenStyles.ratingContainer}>
                  <Icon name="star" size={14} color="#FFD700" />
                  <Text style={OrderDetailsScreenStyles.ratingText}>
                    {deliveryPartner.rating}
                  </Text>
                </View>
              </View>
              <View style={OrderDetailsScreenStyles.deliveryPartnerActions}>
                <TouchableOpacity
                  style={OrderDetailsScreenStyles.actionIconButton}
                  onPress={handleMessageDeliveryPartner}
                >
                  <Icon name="chat" size={20} color={colors.brandPrimary} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={OrderDetailsScreenStyles.actionIconButton}
                  onPress={handleCallDeliveryPartner}
                >
                  <Icon name="phone" size={20} color={colors.brandPrimary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Restaurant Info - Enhanced with Image */}
        <View style={OrderDetailsScreenStyles.card}>
          <View style={OrderDetailsScreenStyles.restaurantHeader}>
            <Image
              source={{ uri: restaurantImage }}
              style={OrderDetailsScreenStyles.restaurantImage}
              defaultSource={require('../assets/brand/treatsLogo.png')}
            />
            <View style={OrderDetailsScreenStyles.restaurantInfo}>
              <Text style={OrderDetailsScreenStyles.restaurantName}>
                {restaurantName}
              </Text>
              <Text style={OrderDetailsScreenStyles.orderId}>
                Order #{order.id}
              </Text>
              <View style={OrderDetailsScreenStyles.orderMeta}>
                <Text style={OrderDetailsScreenStyles.orderMetaText}>
                  {order.items.length} item{order.items.length > 1 ? 's' : ''} •
                  ₹{order.price.grandTotal}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Order Items - Swiggy/Zomato Style */}
        <View style={OrderDetailsScreenStyles.card}>
          <Text style={OrderDetailsScreenStyles.sectionTitle}>Order Items</Text>
          {order.items.map((item: OrderItem, index: number) => (
            <View
              key={item.id}
              style={[
                OrderDetailsScreenStyles.itemRow,
                index < order.items.length - 1 &&
                  OrderDetailsScreenStyles.itemRowBorder,
              ]}
            >
              <View style={OrderDetailsScreenStyles.itemLeft}>
                <Image
                  source={item.isVeg ? vegIcon : nonVegIcon}
                  width={15}
                  height={15}
                  style={OrderDetailsScreenStyles.itemTypeIcon}
                />
                {/* <View
                  style={[
                    OrderDetailsScreenStyles.vegIndicator,
                    { backgroundColor: item.isVeg ? '#32CD32' : '#DC143C' },
                  ]}
                >
                  <View
                    style={[
                      OrderDetailsScreenStyles.vegDot,
                      { backgroundColor: item.isVeg ? '#32CD32' : '#DC143C' },
                    ]}
                  />
                </View> */}
                <Text style={OrderDetailsScreenStyles.itemName}>
                  {item.name}
                </Text>
              </View>
              <View style={OrderDetailsScreenStyles.itemRight}>
                <Text style={OrderDetailsScreenStyles.itemQuantity}>
                  x{item.quantity}
                </Text>
                <Text style={OrderDetailsScreenStyles.itemPrice}>
                  ₹{item.price * item.quantity}
                </Text>
              </View>
            </View>
          ))}

          {/* Instructions */}
          {order.instructions && (
            <View style={OrderDetailsScreenStyles.specialInstructions}>
              <Icon name="info-outline" size={16} color={colors.brandPrimary} />
              <Text style={OrderDetailsScreenStyles.instructionsText}>
                {order.instructions}
              </Text>
            </View>
          )}
        </View>

        {/* Price Details - Swiggy/Zomato Style */}
        <View style={OrderDetailsScreenStyles.card}>
          <Text style={OrderDetailsScreenStyles.sectionTitle}>
            Bill Details
          </Text>
          <View style={OrderDetailsScreenStyles.priceRow}>
            <Text style={OrderDetailsScreenStyles.priceLabel}>Item Total</Text>
            <Text style={OrderDetailsScreenStyles.priceValue}>
              ₹{order.price.itemTotal}
            </Text>
          </View>
          <View style={OrderDetailsScreenStyles.priceRow}>
            <Text style={OrderDetailsScreenStyles.priceLabel}>Tax</Text>
            <Text style={OrderDetailsScreenStyles.priceValue}>
              ₹{order.price.tax}
            </Text>
          </View>
          <View style={OrderDetailsScreenStyles.priceRow}>
            <Text style={OrderDetailsScreenStyles.priceLabel}>
              Delivery Fee
            </Text>
            <Text style={OrderDetailsScreenStyles.priceValue}>
              ₹{order.price.deliveryFee}
            </Text>
          </View>
          <View style={OrderDetailsScreenStyles.priceRow}>
            <Text style={OrderDetailsScreenStyles.priceLabel}>
              Platform Fee
            </Text>
            <Text style={OrderDetailsScreenStyles.priceValue}>
              ₹{order.price.platformFee}
            </Text>
          </View>
          {order.price.discount > 0 && (
            <View style={OrderDetailsScreenStyles.priceRow}>
              <Text
                style={[
                  OrderDetailsScreenStyles.priceLabel,
                  { color: '#32CD32' },
                ]}
              >
                Discount
              </Text>
              <Text
                style={[
                  OrderDetailsScreenStyles.priceValue,
                  { color: '#32CD32' },
                ]}
              >
                -₹{order.price.discount}
              </Text>
            </View>
          )}
          <View
            style={[
              OrderDetailsScreenStyles.priceRow,
              OrderDetailsScreenStyles.totalRow,
            ]}
          >
            <Text style={OrderDetailsScreenStyles.totalLabel}>Total</Text>
            <Text style={OrderDetailsScreenStyles.totalValue}>
              ₹{order.price.grandTotal}
            </Text>
          </View>
        </View>

        {/* Delivery Address - Swiggy/Zomato Style */}
        <View style={OrderDetailsScreenStyles.card}>
          <Text style={OrderDetailsScreenStyles.sectionTitle}>
            Delivery Address
          </Text>
          <View style={OrderDetailsScreenStyles.addressContainer}>
            <Icon name="location-on" size={24} color={colors.brandPrimary} />
            <View style={OrderDetailsScreenStyles.addressTextContainer}>
              <Text style={OrderDetailsScreenStyles.addressLabel}>Home</Text>
              <Text style={OrderDetailsScreenStyles.addressText}>
                123, Example Street, Apt 4B{'\n'}
                Near City Park{'\n'}
                Bangalore - 560001
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Method - Swiggy/Zomato Style */}
        <View style={OrderDetailsScreenStyles.card}>
          <Text style={OrderDetailsScreenStyles.sectionTitle}>Payment</Text>
          <View style={OrderDetailsScreenStyles.paymentContainer}>
            <View style={OrderDetailsScreenStyles.paymentLeft}>
              <Icon
                name={
                  order.paymentMethod === 'CARD'
                    ? 'credit-card'
                    : order.paymentMethod === 'UPI'
                    ? 'account-balance-wallet'
                    : 'money'
                }
                size={24}
                color={colors.brandPrimary}
              />
              <View style={OrderDetailsScreenStyles.paymentTextContainer}>
                <Text style={OrderDetailsScreenStyles.paymentMethod}>
                  {order.paymentMethod === 'CARD'
                    ? 'Card'
                    : order.paymentMethod === 'UPI'
                    ? 'UPI'
                    : 'Cash on Delivery'}
                </Text>
                <Text style={OrderDetailsScreenStyles.paymentStatus}>
                  {order.paymentStatus === 'SUCCESS'
                    ? 'Paid'
                    : order.paymentStatus === 'PENDING'
                    ? 'Pending'
                    : 'Refunded'}
                </Text>
              </View>
            </View>
            <Text style={OrderDetailsScreenStyles.paymentAmount}>
              ₹{order.price.grandTotal}
            </Text>
          </View>

          {/* Pay Now Button - Only for COD Unpaid Orders */}
          {isCODUnpaid && !showPaymentOptions && (
            <TouchableOpacity
              style={OrderDetailsScreenStyles.payNowButton}
              onPress={handlePayNow}
            >
              <Icon name="payment" size={20} color="#FFF" />
              <Text style={OrderDetailsScreenStyles.payNowButtonText}>
                Pay Now
              </Text>
            </TouchableOpacity>
          )}

          {/* Payment Options - Only for COD Unpaid Orders */}
          {isCODUnpaid && showPaymentOptions && (
            <View style={OrderDetailsScreenStyles.paymentOptionsContainer}>
              <Text style={OrderDetailsScreenStyles.paymentOptionsTitle}>
                Select Payment Method
              </Text>
              <View style={OrderDetailsScreenStyles.paymentOptionsRow}>
                {paymentOptions.map(option => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      OrderDetailsScreenStyles.paymentOptionButton,
                      selectedPaymentOption === option.id &&
                        OrderDetailsScreenStyles.paymentOptionButtonSelected,
                    ]}
                    onPress={() => handlePaymentOptionSelect(option.id)}
                  >
                    <Icon
                      name={option.icon}
                      size={20}
                      color={
                        selectedPaymentOption === option.id
                          ? '#FFF'
                          : colors.brandPrimary
                      }
                    />
                    <Text
                      style={[
                        OrderDetailsScreenStyles.paymentOptionText,
                        selectedPaymentOption === option.id &&
                          OrderDetailsScreenStyles.paymentOptionTextSelected,
                      ]}
                    >
                      {option.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Confirm Payment Button */}
              <TouchableOpacity
                style={[
                  OrderDetailsScreenStyles.payNowButton,
                  !selectedPaymentOption && { opacity: 0.6 },
                ]}
                onPress={handleConfirmPayment}
                disabled={!selectedPaymentOption}
              >
                <Icon name="check-circle" size={20} color="#FFF" />
                <Text style={OrderDetailsScreenStyles.payNowButtonText}>
                  Confirm Payment
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Order Info - Swiggy/Zomato Style */}
        <View style={OrderDetailsScreenStyles.card}>
          <Text style={OrderDetailsScreenStyles.sectionTitle}>Order Info</Text>
          <View style={OrderDetailsScreenStyles.infoRow}>
            <Text style={OrderDetailsScreenStyles.infoLabel}>Order ID</Text>
            <Text style={OrderDetailsScreenStyles.infoValue}>{order.id}</Text>
          </View>
          <View style={OrderDetailsScreenStyles.infoRow}>
            <Text style={OrderDetailsScreenStyles.infoLabel}>Order Date</Text>
            <Text style={OrderDetailsScreenStyles.infoValue}>
              {formatDate(order.createdAt)}
            </Text>
          </View>
          <View style={OrderDetailsScreenStyles.infoRow}>
            <Text style={OrderDetailsScreenStyles.infoLabel}>Last Updated</Text>
            <Text style={OrderDetailsScreenStyles.infoValue}>
              {formatDate(order.updatedAt)}
            </Text>
          </View>
        </View>

        {/* Rating Section - Only for Delivered Orders */}
        {order.status === 'DELIVERED' && (
          <View style={OrderDetailsScreenStyles.card}>
            <Text style={OrderDetailsScreenStyles.sectionTitle}>
              Rate Your Order
            </Text>
            <View style={OrderDetailsScreenStyles.ratingContainer}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleRateOrder(star)}
                  style={OrderDetailsScreenStyles.ratingStar}
                >
                  <Icon
                    name={star <= rating ? 'star' : 'star-border'}
                    size={30}
                    color={star <= rating ? '#FFD700' : '#ccc'}
                  />
                </TouchableOpacity>
              ))}
            </View>
            {rating > 0 && (
              <Text style={OrderDetailsScreenStyles.ratingThankYou}>
                Thanks for rating!
              </Text>
            )}
          </View>
        )}

        {/* Tip Section - Only for Active Orders */}
        {isActive && order.status === 'OUT_FOR_DELIVERY' && (
          <View style={OrderDetailsScreenStyles.card}>
            <Text style={OrderDetailsScreenStyles.sectionTitle}>
              Tip the Delivery Partner
            </Text>
            <View style={OrderDetailsScreenStyles.tipContainer}>
              {[20, 50, 100].map(amount => (
                <TouchableOpacity
                  key={amount}
                  style={[
                    OrderDetailsScreenStyles.tipButton,
                    tipAmount === amount &&
                      OrderDetailsScreenStyles.tipButtonActive,
                  ]}
                  onPress={() => handleTip(amount)}
                >
                  <Text
                    style={[
                      OrderDetailsScreenStyles.tipButtonText,
                      tipAmount === amount &&
                        OrderDetailsScreenStyles.tipButtonTextActive,
                    ]}
                  >
                    ₹{amount}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {tipAmount > 0 && (
              <Text style={OrderDetailsScreenStyles.tipThankYou}>
                Thanks for the tip!
              </Text>
            )}
          </View>
        )}

        {/* Action Buttons */}
        <View style={OrderDetailsScreenStyles.actionButtonsContainer}>
          <TouchableOpacity
            style={OrderDetailsScreenStyles.downloadButton}
            onPress={handleDownloadInvoice}
          >
            <Icon name="receipt" size={20} color={colors.brandPrimary} />
            <Text style={OrderDetailsScreenStyles.downloadButtonText}>
              Download Invoice
            </Text>
          </TouchableOpacity>

          {order.status === 'DELIVERED' && (
            <TouchableOpacity
              style={OrderDetailsScreenStyles.reorderButton}
              onPress={() =>
                Alert.alert('Re-order', 'Re-order functionality coming soon!')
              }
            >
              <Icon name="refresh" size={20} color="#FFF" />
              <Text style={OrderDetailsScreenStyles.reorderButtonText}>
                Re-order
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Help Section */}
        <View style={OrderDetailsScreenStyles.helpSection}>
          <TouchableOpacity
            style={OrderDetailsScreenStyles.helpButton}
            activeOpacity={0.7}
          >
            <Icon name="help-outline" size={20} color={colors.brandPrimary} />
            <Text style={OrderDetailsScreenStyles.helpButtonText}>
              Need help with this order?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Padding */}
        <View style={OrderDetailsScreenStyles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;
