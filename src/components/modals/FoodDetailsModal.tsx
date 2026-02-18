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
  description?: string;
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  preparationTime?: number;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Very Hot';
  dietaryTags?: string[];
  reviews?: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
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

              {/* Description */}
              <Text style={styles.description}>
                {food.description || `Delicious ${food.name} made with fresh ingredients. Perfect for any meal.`}
              </Text>

              {/* Preparation Time and Spice Level */}
              {(food.preparationTime || food.spiceLevel) && (
                <View style={styles.infoRow}>
                  {food.preparationTime && (
                    <View style={styles.infoItem}>
                      <Icon name="schedule" size={16} color={colors.textSecondary} />
                      <Text style={styles.infoText}>{food.preparationTime} mins</Text>
                    </View>
                  )}
                  {food.spiceLevel && (
                    <View style={styles.infoItem}>
                      <Icon name="whatshot" size={16} color={colors.textSecondary} />
                      <Text style={styles.infoText}>{food.spiceLevel}</Text>
                    </View>
                  )}
                </View>
              )}

              {/* Ingredients */}
              {food.ingredients && food.ingredients.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Ingredients</Text>
                  <View style={styles.ingredientsContainer}>
                    {food.ingredients.map((ingredient, index) => (
                      <View key={index} style={styles.ingredientTag}>
                        <Text style={styles.ingredientText}>{ingredient}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* Nutritional Information */}
              {food.nutritionalInfo && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Nutritional Information (per serving)</Text>
                  <View style={styles.nutritionContainer}>
                    <View style={styles.nutritionItem}>
                      <Text style={styles.nutritionValue}>{food.nutritionalInfo.calories}</Text>
                      <Text style={styles.nutritionLabel}>Calories</Text>
                    </View>
                    <View style={styles.nutritionItem}>
                      <Text style={styles.nutritionValue}>{food.nutritionalInfo.protein}g</Text>
                      <Text style={styles.nutritionLabel}>Protein</Text>
                    </View>
                    <View style={styles.nutritionItem}>
                      <Text style={styles.nutritionValue}>{food.nutritionalInfo.carbs}g</Text>
                      <Text style={styles.nutritionLabel}>Carbs</Text>
                    </View>
                    <View style={styles.nutritionItem}>
                      <Text style={styles.nutritionValue}>{food.nutritionalInfo.fat}g</Text>
                      <Text style={styles.nutritionLabel}>Fat</Text>
                    </View>
                  </View>
                </View>
              )}

              {/* Dietary Tags */}
              {food.dietaryTags && food.dietaryTags.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Dietary Information</Text>
                  <View style={styles.tagsContainer}>
                    {food.dietaryTags.map((tag, index) => (
                      <View key={index} style={styles.dietaryTag}>
                        <Text style={styles.dietaryText}>{tag}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* Customer Reviews */}
              {food.reviews && food.reviews.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Customer Reviews</Text>
                  {food.reviews.slice(0, 3).map((review) => (
                    <View key={review.id} style={styles.reviewItem}>
                      <View style={styles.reviewHeader}>
                        <Text style={styles.reviewerName}>{review.userName}</Text>
                        <View style={styles.reviewRating}>
                          <Text style={styles.ratingStars}>
                            {'⭐'.repeat(Math.floor(review.rating))}
                          </Text>
                          <Text style={styles.ratingNumber}>{review.rating}</Text>
                        </View>
                      </View>
                      <Text style={styles.reviewComment}>{review.comment}</Text>
                      <Text style={styles.reviewDate}>{review.date}</Text>
                    </View>
                  ))}
                  {food.reviews.length > 3 && (
                    <TouchableOpacity style={styles.viewAllReviews}>
                      <Text style={styles.viewAllText}>View all {food.reviews.length} reviews</Text>
                      <Icon name="chevron-right" size={16} color={colors.brandPrimary} />
                    </TouchableOpacity>
                  )}
                </View>
              )}

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
  infoRow: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 15,
  },
  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  ingredientTag: {
    backgroundColor: colors.bgOffWhiteSecondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.textSecondary,
  },
  ingredientText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  nutritionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nutritionItem: {
    alignItems: 'center',
    flex: 1,
  },
  nutritionValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brandPrimary,
    marginBottom: 5,
  },
  nutritionLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  dietaryTag: {
    backgroundColor: colors.brandPrimary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  dietaryText: {
    fontSize: 14,
    color: colors.textOnBrand,
    fontWeight: '500',
  },
  reviewItem: {
    backgroundColor: colors.bgOffWhiteSecondary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingStars: {
    fontSize: 14,
  },
  ratingNumber: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  reviewComment: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  reviewDate: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  viewAllReviews: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  viewAllText: {
    fontSize: 16,
    color: colors.brandPrimary,
    fontWeight: '500',
    marginRight: 5,
  },
});

export default FoodDetailsModal;
