import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppRoutes';
import FoodDetailsModalStyles from '../../styles/components/FoodDetailsModalStyles';
import colors from '../../theme/colors';
import Button from '../common/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  isVeg: boolean;
  image?: ImageSourcePropType;
}

interface FoodDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  food: FoodItem | null;
  quantity: number;
  onAdd: () => void;
  onDecrement: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

const FoodDetailsModal: React.FC<FoodDetailsModalProps> = ({
  visible,
  onClose,
  food,
  quantity,
  onAdd,
  onDecrement,
  onFavorite,
  isFavorite,
}) => {
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: Dimensions.get('window').height,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  if (!food) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayTouchable} onPress={onClose} />
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View style={styles.handle} />
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Close Button */}
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Icon name="close" size={24} color={colors.textPrimary} />
            </TouchableOpacity>

            {/* Food Image */}
            <Image
              source={food.image || require('../../assets/images/foodCategory/pizza.png')}
              style={styles.foodImage}
              resizeMode="cover"
            />

            {/* Food Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.foodName}>{food.name}</Text>
              <View style={styles.foodDetails}>
                <Text style={styles.vegStatus}>
                  {food.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
                </Text>
                <Text style={styles.rating}>⭐ {food.rating}</Text>
              </View>
              <Text style={styles.price}>₹{food.price}</Text>

              {/* Description Placeholder */}
              <Text style={styles.description}>
                Delicious {food.name} made with fresh ingredients. Perfect for any meal.
              </Text>

              {/* Quantity Controls */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={onDecrement} style={styles.qtyBtn}>
                  <Text style={styles.qtyBtnText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{quantity}</Text>
                <TouchableOpacity onPress={onAdd} style={styles.qtyBtn}>
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
              </View>

              {/* Favorite Button */}
              <TouchableOpacity onPress={onFavorite} style={styles.favoriteBtn}>
                <Icon
                  name={isFavorite ? 'favorite' : 'favorite-border'}
                  size={24}
                  color={isFavorite ? '#FF6B6B' : colors.textSecondary}
                />
                <Text style={styles.favoriteText}>
                  {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  overlayTouchable: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: Dimensions.get('window').height * 0.8,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: colors.textSecondary,
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    padding: 5,
  },
  foodImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  foodDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  vegStatus: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  rating: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.brandPrimary,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
    lineHeight: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnText: {
    fontSize: 20,
    color: colors.textOnBrand,
    fontWeight: 'bold',
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: colors.textPrimary,
  },
  favoriteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 10,
  },
  favoriteText: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.textPrimary,
  },
});

export default FoodDetailsModal;
