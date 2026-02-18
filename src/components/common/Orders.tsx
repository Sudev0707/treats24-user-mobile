import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../../styles/components/OrderDetailsStyle';
import { OrderData, OrderStatus } from '../../data/ordrr.types';
import { RootStackParamList } from '../../routes/types';
import OrderItem from './OrderItem';

// Dummy restaurant names mapping
const restaurantNames: { [key: string]: string } = {
  'res_12': 'Spice Garden',
  'res_13': 'Tandoori Delight',
  'res_14': 'Seafood Paradise',
  'res_15': 'Veg Haven',
};

// Dummy orders data
const initialOrders: OrderData[] = [
  {
    id: 'ord_1001',
    userId: 'usr_001',
    restaurantId: 'res_12',
    items: [
      {
        id: 'item_1',
        restaurantId: 'res_12',
        name: 'Chicken Biryani',
        price: 220,
        quantity: 1,
        isVeg: false,
      },
    ],
    price: {
      itemTotal: 220,
      tax: 18,
      deliveryFee: 30,
      platformFee: 5,
      discount: 0,
      grandTotal: 273,
    },
    delivery: {
      addressId: 'addr_1',
      estimatedTime: 35,
    },
    status: 'PLACED',
    paymentStatus: 'SUCCESS',
    paymentMethod: 'UPI',
    instructions: 'Less spicy please',
    createdAt: '2026-01-04T11:00:00Z',
    updatedAt: '2026-01-04T11:25:00Z',
  },
  {
    id: 'ord_1002',
    userId: 'usr_001',
    restaurantId: 'res_13',
    items: [
      {
        id: 'item_2',
        restaurantId: 'res_13',
        name: 'Paneer Tikka',
        price: 180,
        quantity: 2,
        isVeg: true,
      },
    ],
    price: {
      itemTotal: 360,
      tax: 20,
      deliveryFee: 25,
      platformFee: 5,
      discount: 10,
      grandTotal: 400,
    },
    delivery: {
      addressId: 'addr_1',
      estimatedTime: 30,
    },
    status: 'DELIVERED',
    paymentStatus: 'SUCCESS',
    paymentMethod: 'CARD',
    instructions: 'Extra spicy',
    createdAt: '2026-01-03T10:00:00Z',
    updatedAt: '2026-01-03T10:45:00Z',
  },
  {
    id: 'ord_1003',
    userId: 'usr_001',
    restaurantId: 'res_14',
    items: [
      {
        id: 'item_3',
        restaurantId: 'res_14',
        name: 'Fish Curry',
        price: 250,
        quantity: 1,
        isVeg: false,
      },
    ],
    price: {
      itemTotal: 250,
      tax: 15,
      deliveryFee: 35,
      platformFee: 5,
      discount: 0,
      grandTotal: 305,
    },
    delivery: {
      addressId: 'addr_1',
      estimatedTime: 40,
    },
    status: 'CANCELLED',
    paymentStatus: 'REFUNDED',
    paymentMethod: 'UPI',
    instructions: 'No onions',
    createdAt: '2026-01-02T09:00:00Z',
    updatedAt: '2026-01-02T09:10:00Z',
  },
  {
    id: 'ord_1004',
    userId: 'usr_001',
    restaurantId: 'res_15',
    items: [
      {
        id: 'item_4',
        restaurantId: 'res_15',
        name: 'Veg Biryani',
        price: 200,
        quantity: 1,
        isVeg: true,
      },
    ],
    price: {
      itemTotal: 200,
      tax: 12,
      deliveryFee: 30,
      platformFee: 5,
      discount: 5,
      grandTotal: 242,
    },
    delivery: {
      addressId: 'addr_1',
      estimatedTime: 25,
    },
    status: 'OUT_FOR_DELIVERY',
    paymentStatus: 'SUCCESS',
    paymentMethod: 'CASH',
    instructions: 'Add extra rice',
    createdAt: '2026-01-05T12:00:00Z',
    updatedAt: '2026-01-05T12:30:00Z',
  },
  {
    id: 'ord_1005',
    userId: 'usr_001',
    restaurantId: 'res_12',
    items: [
      {
        id: 'item_5',
        restaurantId: 'res_12',
        name: 'Chicken Tikka',
        price: 250,
        quantity: 2,
        isVeg: false,
      },
      {
        id: 'item_6',
        restaurantId: 'res_12',
        name: 'Butter Naan',
        price: 40,
        quantity: 4,
        isVeg: true,
      },
    ],
    price: {
      itemTotal: 660,
      tax: 35,
      deliveryFee: 30,
      platformFee: 5,
      discount: 20,
      grandTotal: 710,
    },
    delivery: {
      addressId: 'addr_1',
      estimatedTime: 40,
    },
    status: 'CONFIRMED',
    paymentStatus: 'PENDING',
    paymentMethod: 'COD',
    instructions: 'Extra butter for naan',
    createdAt: '2026-01-06T14:00:00Z',
    updatedAt: '2026-01-06T14:15:00Z',
  },
];

type TabType = 'Active' | 'Completed' | 'Cancelled';

const Orders: React.FC = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState<TabType>('Active');
  const [orders, setOrders] = useState<OrderData[]>(initialOrders);

  const getOrdersForTab = (tab: TabType): OrderData[] => {
    switch (tab) {
      case 'Active':
        return orders.filter(order =>
          ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY'].includes(
            order.status,
          ),
        );
      case 'Completed':
        return orders.filter(order => order.status === 'DELIVERED');
      case 'Cancelled':
        return orders.filter(order => order.status === 'CANCELLED');
      default:
        return [];
    }
  };

  const getStatusColor = (status: OrderStatus) => {
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

  const cancelOrder = (orderId: string) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, status: 'CANCELLED' as OrderStatus, paymentStatus: 'REFUNDED' as const, updatedAt: new Date().toISOString() }
          : order
      )
    );
  };



  const filteredOrders = getOrdersForTab(activeTab);

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.tabsContainer}>
            {(['Active', 'Completed', 'Cancelled'] as TabType[]).map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.userDetailContainer}>
            {filteredOrders.length > 0 ? (
              filteredOrders.map(order => (
                <OrderItem
                  key={order.id}
                  order={order}
                  navigation={navigation}
                  getStatusColor={getStatusColor}
                  restaurantNames={restaurantNames}
                  onCancelOrder={cancelOrder}
                />
              ))
            ) : (
              <Text style={styles.noOrders}>No orders in this category</Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Orders;
