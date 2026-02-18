import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  Linking,
  RefreshControl,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';
import fonts from '../theme/fonts';
import { OrderData, OrderStatus, OrderItem } from '../data/ordrr.types';
import { RootStackParamList } from '../routes/types';
import LiveTrackOrderScreenStyles from '../styles/screens/LiveTrackOrderScreenStyles';
import vegIcon from '../assets/icons/veg-icon.png';
import nonVegIcon from '../assets/icons/non-veg-icon.png';

type LiveTrackOrderRouteProp = RouteProp<RootStackParamList, 'LiveTrackOrder'>;

// Restaurant names mapping
const restaurantNames: { [key: string]: string } = {
  res_12: 'Spice Garden',
  res_13: 'Tandoori Delight',
  res_14: 'Seafood Paradise',
  res_15: 'Veg Haven',
};

// Restaurant images
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
  vehicle: 'TVS Jupiter',
  vehicleNumber: 'KA 01 AB 1234',
};

const LiveTrackOrderScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<LiveTrackOrderRouteProp>();
  const { order } = route.params;

  const [refreshing, setRefreshing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>(order.status);
  const [estimatedTime, setEstimatedTime] = useState<number>(
    order.delivery.estimatedTime,
  );

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (estimatedTime > 0) {
        setEstimatedTime(prev => Math.max(0, prev - 1));
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [estimatedTime]);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh - in real app, fetch updated order status
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

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

  // Enhanced status steps with more details like real food delivery apps
  const getStatusSteps = (status: OrderStatus) => {
    const allSteps = [
      {
        status: 'PLACED',
        title: 'Order Placed',
        description: 'Your order has been received',
        icon: 'receipt',
        time: null,
      },
      {
        status: 'CONFIRMED',
        title: 'Confirmed',
        description: 'Restaurant has confirmed your order',
        icon: 'check-circle',
        time: null,
      },
      {
        status: 'PREPARING',
        title: 'Preparing',
        description: 'Your food is being prepared',
        icon: 'restaurant',
        time: null,
      },
      {
        status: 'OUT_FOR_DELIVERY',
        title: 'Out for Delivery',
        description: 'Your order is on the way',
        icon: 'local-shipping',
        time: null,
      },
      {
        status: 'DELIVERED',
        title: 'Delivered',
        description: 'Your order has been delivered',
        icon: 'done',
        time: null,
      },
    ];

    const statusOrder = ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED'];
    const currentIndex = statusOrder.indexOf(status);

    if (status === 'CANCELLED') {
      return [
        {
          status: 'PLACED',
          title: 'Order Placed',
          description: 'Your order was placed',
          icon: 'receipt',
          time: null,
        },
        {
          status: 'CANCELLED',
          title: 'Cancelled',
          description: 'Order has been cancelled',
          icon: 'cancel',
          time: null,
        },
      ];
    }

    if (currentIndex === -1) return [];

    return allSteps.slice(0, currentIndex + 1);
  };

  // Get current step index
  const getCurrentStepIndex = (status: OrderStatus): number => {
    const statusOrder = ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED'];
    return statusOrder.indexOf(status);
  };

  const restaurantName =
    restaurantNames[order.restaurantId] || order.restaurantId;
  const restaurantImage = restaurantImages[order.restaurantId];

  const isActive = [
    'PLACED',
    'CONFIRMED',
    'PREPARING',
    'OUT_FOR_DELIVERY',
  ].includes(currentStatus);

  const statusSteps = getStatusSteps(currentStatus);
  const currentStepIndex = statusSteps.length - 1;

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

  const handleViewOrderDetails = () => {
    navigation.navigate('OrderDetails', { order });
  };

  const formatTime = (minutes: number): string => {
    if (minutes <= 0) return 'Arriving now';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <SafeAreaView style={LiveTrackOrderScreenStyles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <View style={LiveTrackOrderScreenStyles.header}>
        <TouchableOpacity
          style={LiveTrackOrderScreenStyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/icons/iconsback.png')}
            style={{ width: 24, height: 24, borderRadius: 7 }}
          />
        </TouchableOpacity>
        <Text style={LiveTrackOrderScreenStyles.headerTitle}>
          Live Tracking
        </Text>
        <TouchableOpacity
          style={LiveTrackOrderScreenStyles.shareButton}
          onPress={() => Alert.alert('Share', 'Sharing will be available soon!')}
        >
          <Icon name="share" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={LiveTrackOrderScreenStyles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.brandPrimary]}
          />
        }
      >
        {/* Live Map Card */}
        <View style={LiveTrackOrderScreenStyles.mapCard}>
          <View style={LiveTrackOrderScreenStyles.mapPlaceholder}>
            {/* Grid lines for visual effect */}
            <View style={LiveTrackOrderScreenStyles.mapGridLines}>
              {[...Array(16)].map((_, i) => (
                <View key={i} style={LiveTrackOrderScreenStyles.mapGridLine} />
              ))}
            </View>

            {/* Live indicator */}
            <View style={LiveTrackOrderScreenStyles.liveIndicator}>
              <View style={LiveTrackOrderScreenStyles.liveDot} />
              <Text style={LiveTrackOrderScreenStyles.liveText}>LIVE</Text>
            </View>

            {/* Map placeholder content */}
            <Icon name="map" size={50} color={colors.brandPrimary} />
            <Text style={LiveTrackOrderScreenStyles.mapText}>
              {isActive ? 'Tracking your order' : 'Order Delivered'}
            </Text>
            <Text style={LiveTrackOrderScreenStyles.mapSubText}>
              {isActive
                ? 'Watch your order arrive in real-time'
                : 'Thank you for ordering with us!'}
            </Text>
          </View>

          {/* ETA Badge */}
          {isActive && (
            <View style={LiveTrackOrderScreenStyles.etaContainer}>
              <Text style={LiveTrackOrderScreenStyles.etaText}>
                Estimated Delivery
              </Text>
              <Text style={LiveTrackOrderScreenStyles.etaTimeText}>
                {formatTime(estimatedTime)}
              </Text>
            </View>
          )}
        </View>

        {/* Order Status Card */}
        <View style={LiveTrackOrderScreenStyles.statusCard}>
          <View style={LiveTrackOrderScreenStyles.statusHeader}>
            <View
              style={[
                LiveTrackOrderScreenStyles.statusBadge,
                { backgroundColor: getStatusColor(currentStatus) },
              ]}
            >
              <Icon
                name={getStatusIcon(currentStatus)}
                size={16}
                color="#FFF"
              />
              <Text style={LiveTrackOrderScreenStyles.statusText}>
                {currentStatus.replace('_', ' ')}
              </Text>
            </View>
            {isActive && (
              <Text style={LiveTrackOrderScreenStyles.estimatedTime}>
                ⏱️ {estimatedTime} mins
              </Text>
            )}
          </View>

          {/* Progress Tracker - Enhanced Real App Style */}
          <View style={LiveTrackOrderScreenStyles.trackerContainer}>
            {statusSteps.map((step: any, index: number) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isPending = index > currentStepIndex;
              
              return (
                <View key={index} style={LiveTrackOrderScreenStyles.trackerStep}>
                  {/* Timeline Dot */}
                  <View
                    style={[
                      LiveTrackOrderScreenStyles.trackerDot,
                      isCompleted && LiveTrackOrderScreenStyles.trackerDotCompleted,
                      isCurrent && LiveTrackOrderScreenStyles.trackerDotCurrent,
                      isPending && LiveTrackOrderScreenStyles.trackerDotPending,
                    ]}
                  >
                    {isCompleted ? (
                      <Icon name="check" size={14} color="#FFF" />
                    ) : isCurrent ? (
                      <Icon name={step.icon || getStatusIcon(currentStatus)} size={14} color="#FFF" />
                    ) : null}
                  </View>
                  
                  {/* Timeline Line */}
                  {index < statusSteps.length - 1 && (
                    <View
                      style={[
                        LiveTrackOrderScreenStyles.trackerLine,
                        { height: 50 },
                        isCompleted && LiveTrackOrderScreenStyles.trackerLineCompleted,
                        isPending && LiveTrackOrderScreenStyles.trackerLinePending,
                      ]}
                    />
                  )}
                  
                  {/* Step Content */}
                  <View style={LiveTrackOrderScreenStyles.trackerStepContent}>
                    <Text
                      style={[
                        LiveTrackOrderScreenStyles.trackerStepTitle,
                        isCompleted && LiveTrackOrderScreenStyles.trackerStepTitleCompleted,
                        isCurrent && LiveTrackOrderScreenStyles.trackerStepTitleCurrent,
                        isPending && LiveTrackOrderScreenStyles.trackerStepTitlePending,
                      ]}
                    >
                      {step.title}
                    </Text>
                    <Text style={LiveTrackOrderScreenStyles.trackerStepDescription}>
                      {step.description}
                    </Text>
                    {isCompleted && (
                      <Text style={[LiveTrackOrderScreenStyles.trackerStepTime, LiveTrackOrderScreenStyles.trackerStepTimeCompleted]}>
                        ✓ Completed
                      </Text>
                    )}
                    {isCurrent && (
                      <Text style={[LiveTrackOrderScreenStyles.trackerStepTime, { color: colors.brandPrimary }]}>
                        🔄 In Progress
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Delivery Partner Card - Only show when OUT_FOR_DELIVERY */}
        {currentStatus === 'OUT_FOR_DELIVERY' && (
          <View style={LiveTrackOrderScreenStyles.deliveryPartnerCard}>
            <Text style={LiveTrackOrderScreenStyles.sectionTitle}>
              Delivery Partner
            </Text>
            <View style={LiveTrackOrderScreenStyles.deliveryPartnerHeader}>
              <Image
                source={{ uri: deliveryPartner.photo }}
                style={LiveTrackOrderScreenStyles.deliveryPartnerPhoto}
              />
              <View
                style={LiveTrackOrderScreenStyles.deliveryPartnerInfo}
              >
                <Text
                  style={LiveTrackOrderScreenStyles.deliveryPartnerName}
                >
                  {deliveryPartner.name}
                </Text>
                <Text
                  style={LiveTrackOrderScreenStyles.deliveryPartnerSubtext}
                >
                  {deliveryPartner.vehicle} • {deliveryPartner.vehicleNumber}
                </Text>
                <View
                  style={LiveTrackOrderScreenStyles.ratingContainer}
                >
                  <Icon name="star" size={14} color="#FFD700" />
                  <Text
                    style={LiveTrackOrderScreenStyles.ratingText}
                  >
                    {deliveryPartner.rating}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={LiveTrackOrderScreenStyles.deliveryPartnerActions}
            >
              <TouchableOpacity
                style={LiveTrackOrderScreenStyles.actionIconButton}
                onPress={handleMessageDeliveryPartner}
              >
                <Icon name="chat" size={22} color={colors.brandPrimary} />
                <Text style={LiveTrackOrderScreenStyles.actionButtonText}>
                  Chat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={LiveTrackOrderScreenStyles.actionIconButton}
                onPress={handleCallDeliveryPartner}
              >
                <Icon name="phone" size={22} color={colors.brandPrimary} />
                <Text style={LiveTrackOrderScreenStyles.actionButtonText}>
                  Call
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Restaurant Info Card */}
        <View style={LiveTrackOrderScreenStyles.card}>
          <Text style={LiveTrackOrderScreenStyles.sectionTitle}>
            {currentStatus === 'OUT_FOR_DELIVERY'
              ? 'Picked from'
              : 'Ordered from'}
          </Text>
          <View style={LiveTrackOrderScreenStyles.restaurantHeader}>
            <Image
              source={{ uri: restaurantImage }}
              style={LiveTrackOrderScreenStyles.restaurantImage}
              defaultSource={require('../assets/brand/treatsLogo.png')}
            />
            <View style={LiveTrackOrderScreenStyles.restaurantInfo}>
              <Text style={LiveTrackOrderScreenStyles.restaurantName}>
                {restaurantName}
              </Text>
              <Text style={LiveTrackOrderScreenStyles.orderId}>
                Order #{order.id}
              </Text>
            </View>
          </View>
        </View>

        {/* Delivery Address Card */}
        <View style={LiveTrackOrderScreenStyles.card}>
          <Text style={LiveTrackOrderScreenStyles.sectionTitle}>
            Delivering to
          </Text>
          <View style={LiveTrackOrderScreenStyles.addressContainer}>
            <Icon name="location-on" size={24} color={colors.brandPrimary} />
            <View style={LiveTrackOrderScreenStyles.addressTextContainer}>
              <Text style={LiveTrackOrderScreenStyles.addressLabel}>
                Home
              </Text>
              <Text style={LiveTrackOrderScreenStyles.addressText}>
                123, Example Street, Apt 4B{'\n'}
                Near City Park{'\n'}
                Bangalore - 560001
              </Text>
            </View>
          </View>
        </View>

        {/* Order Items Card */}
        <View style={LiveTrackOrderScreenStyles.card}>
          <Text style={LiveTrackOrderScreenStyles.sectionTitle}>
            Order Summary
          </Text>
          {order.items.slice(0, 3).map((item: OrderItem, index: number) => (
            <View
              key={item.id}
              style={[
                LiveTrackOrderScreenStyles.itemRow,
                index < Math.min(order.items.length, 3) - 1 &&
                  LiveTrackOrderScreenStyles.itemRowBorder,
              ]}
            >
              <View style={LiveTrackOrderScreenStyles.itemLeft}>
                <Image
                  source={item.isVeg ? vegIcon : nonVegIcon}
                  width={14}
                  height={14}
                  style={LiveTrackOrderScreenStyles.itemTypeIcon}
                />
                <Text style={LiveTrackOrderScreenStyles.itemName}>
                  {item.name}
                </Text>
              </View>
              <View style={LiveTrackOrderScreenStyles.itemRight}>
                <Text style={LiveTrackOrderScreenStyles.itemQuantity}>
                  x{item.quantity}
                </Text>
                <Text style={LiveTrackOrderScreenStyles.itemPrice}>
                  ₹{item.price * item.quantity}
                </Text>
              </View>
            </View>
          ))}
          {order.items.length > 3 && (
            <TouchableOpacity onPress={handleViewOrderDetails}>
              <Text style={LiveTrackOrderScreenStyles.viewMoreText}>
                +{order.items.length - 3} more items
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Bottom Padding */}
        <View style={LiveTrackOrderScreenStyles.bottomPadding} />
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={LiveTrackOrderScreenStyles.bottomBar}>
        <View style={LiveTrackOrderScreenStyles.bottomBarLeft}>
          <Text style={LiveTrackOrderScreenStyles.bottomBarTotalLabel}>
            Total Amount
          </Text>
          <Text style={LiveTrackOrderScreenStyles.bottomBarTotal}>
            ₹{order.price.grandTotal}
          </Text>
        </View>
        <TouchableOpacity
          style={LiveTrackOrderScreenStyles.bottomBarButton}
          onPress={handleViewOrderDetails}
        >
          <Icon name="receipt" size={20} color="#FFF" />
          <Text style={LiveTrackOrderScreenStyles.bottomBarButtonText}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LiveTrackOrderScreen;
