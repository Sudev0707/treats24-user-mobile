import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../../styles/components/OrderDetailsStyle';
import { OrderData, OrderStatus } from '../../data/ordrr.types';
import { RootStackParamList } from '../../routes/types';

interface OrderItemProps {
  order: OrderData;
  navigation: NativeStackNavigationProp<RootStackParamList>;
  getStatusColor: (status: OrderStatus) => string;
  restaurantNames: { [key: string]: string };
  onCancelOrder?: (orderId: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({
  order,
  navigation,
  getStatusColor,
  restaurantNames,
  onCancelOrder,
}) => {
  const restaurantName = restaurantNames[order.restaurantId] || order.restaurantId;
  const itemSummary = order.items.map(item => `${item.name} x${item.quantity}`).join(', ');
  const isActive = ['PLACED', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY'].includes(order.status);

  return (
    <View key={order.id} style={styles.orderItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderDetails', { order })}
        style={styles.orderItemTouchable}
        activeOpacity={0.8}
      >
        <View style={styles.orderHeader}>
          <Text style={styles.orderId}>Order #{order.id}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
            <Text style={styles.statusText}>{order.status.replace('_', ' ')}</Text>
          </View>
        </View>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.itemSummary}>{itemSummary}</Text>
        <View style={styles.orderFooter}>
          <Text style={styles.total}>₹{order.price.grandTotal}</Text>
          <Text style={styles.date}>
            {new Date(order.createdAt).toLocaleDateString()}
          </Text>
        </View>
      </TouchableOpacity>
      {isActive && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.7}
            style={styles.trackButton}
            onPress={() => Alert.alert('Track Order', 'Tracking functionality coming soon!')}
          >
            <Icon name="location-on" size={20} color="#FFF" />
            <Text style={styles.trackButtonText}>Track Order</Text>
          </TouchableOpacity>
          {onCancelOrder && (
            <TouchableOpacity activeOpacity={0.7}
              style={styles.cancelButton}
              onPress={() => {
                // Alert.alert(
                //   'Cancel Order',
                //   'Are you sure you want to cancel this order?',
                //   [
                //     { text: 'No', style: 'cancel' },
                //     { text: 'Yes', onPress: () => onCancelOrder(order.id) },
                //   ]
                // );
              }}
            >
              <Icon name="cancel" size={20} color="#FFF" />
              <Text style={styles.cancelButtonText}>Cancel Order</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {!isActive && (order.status === 'DELIVERED' || order.status === 'CANCELLED') && (
        <TouchableOpacity
          style={styles.reorderButton}
          onPress={() => Alert.alert('Re-order', 'Re-order functionality coming soon!')}
        >
          <Icon name="refresh" size={20} color="#FFF" />
          <Text style={styles.reorderButtonText}>Re-order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OrderItem;
