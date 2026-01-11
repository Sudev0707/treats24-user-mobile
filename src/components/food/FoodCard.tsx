import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import { RestaurantScreenStyle } from '../../styles/screens/RestaurantScreenStyle';

interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  isVeg: boolean;
  image?: ImageSourcePropType;
}

interface FoodCardProps {
  food: FoodItem;
  quantity: number;
  onAdd: () => void;
  onDecrement: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
  onPress?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  food,
  quantity,
  onAdd,
  onDecrement,
  onFavorite,
  isFavorite,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={RestaurantScreenStyle.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {/* Favorite Button */}
      <TouchableOpacity
        onPress={onFavorite}
        style={RestaurantScreenStyle.favoriteButton}
        activeOpacity={0.8}
      >
        <Icon
          name={isFavorite ? 'favorite' : 'favorite-border'}
          size={24}
          color={isFavorite ? '#FF6B6B' : colors.textSecondary}
        />
      </TouchableOpacity>

      {/* Food Image */}
      <View style={RestaurantScreenStyle.foodImageBox}>
        <Image
          resizeMode="contain"
          source={
            food.image || require('../../assets/images/foodCategory/pizza.png')
          }
          style={
            food.image
              ? RestaurantScreenStyle.foodimage
              : RestaurantScreenStyle.dummyFoodImage
          }
        />
      </View>

      {/* Content */}
      <View style={RestaurantScreenStyle.content}>
        {/* Top Row */}
        <View style={RestaurantScreenStyle.topRow}>
          <Text style={RestaurantScreenStyle.veg}>
            {food.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
          </Text>
          <Text style={RestaurantScreenStyle.rating}>⭐ {food.rating}</Text>
        </View>

        {/* Food Name */}
        <Text numberOfLines={1} style={RestaurantScreenStyle.Foodtitle}>
          {food.name}
        </Text>

        {/* Bottom Row */}
        <View style={RestaurantScreenStyle.bottomRow}>
          <Text style={RestaurantScreenStyle.price}>₹{food.price}</Text>

          {/* Add Button */}
          <View style={RestaurantScreenStyle.actionBox}>
            {quantity === 0 ? (
              <TouchableOpacity
                style={RestaurantScreenStyle.addBtn}
                onPress={onAdd}
              >
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={RestaurantScreenStyle.addIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : (
              <View style={RestaurantScreenStyle.qtyBox}>
                <TouchableOpacity
                  style={RestaurantScreenStyle.qtyBtnTouchable}
                  onPress={onDecrement}
                >
                  <Image
                    source={require('../../assets/icons/minimize-sign.png')}
                    style={RestaurantScreenStyle.qtyBtn}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <Text style={RestaurantScreenStyle.qtyText}>{quantity}</Text>

                <TouchableOpacity
                  style={RestaurantScreenStyle.qtyBtnTouchable}
                  onPress={onAdd}
                >
                  <Image
                    source={require('../../assets/icons/add.png')}
                    style={RestaurantScreenStyle.qtyBtn}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
