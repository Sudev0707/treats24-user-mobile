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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppRoutes';
import FoodDetailsModalStyles from '../../styles/components/FoodDetailsModalStyles';
import colors from '../../theme/colors';
import Button from '../common/Button';

interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  isVeg: boolean;
  image?: ImageSourcePropType;
}

interface RestaurantItem {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  time: string;
  price: string;
  delivery: string;
  isOpen: boolean;
  image: ImageSourcePropType;
  foodCategories: {
    id: string;
    title: string;
    type: string;
    isAvailable: boolean;
    items: FoodItem[];
  }[];
}

interface FoodAddedBoxProps {
  visible: boolean;
  onClose: () => void;
  foodCounts: { [key: string]: number };
  restaurant: RestaurantItem;
}

const FoodAddedBox: React.FC<FoodAddedBoxProps> = ({
  visible,
  onClose,
  foodCounts,
  restaurant,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const allFoods = restaurant.foodCategories.flatMap(
    category => category.items,
  );
  const totalCount = Object.values(foodCounts).reduce(
    (sum, count) => sum + count,
    0,
  );
  const totalPrice = Object.entries(foodCounts).reduce(
    (sum, [foodId, count]) => {
      const food = allFoods.find(f => f.id === foodId);
      return sum + (food ? food.price * count : 0);
    },
    0,
  );

  const handleViewCart = () => {
    navigation.navigate('Cart');
  };

  if (!visible) return null;

  return (
    <View style={FoodDetailsModalStyles.popUp}>
      <View style={FoodDetailsModalStyles.box}>
        {/* <View>
          <Text style={FoodDetailsModalStyles.price}>
            Total Price: ${totalPrice.toFixed(2)}
          </Text>

         
        </View> */}

        {/* <Button
          title="View Cart"
          variant="outlined"
          onPress={handleViewCart}
          style={{ width: '40%' }}
          isPhoneValid={true}
        /> */}
        <TouchableOpacity onPress={handleViewCart} style={style.handleViewCart}>
          <Text style={style.countText}>{totalCount} items added</Text>
          <Text style={style.textViewCart}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodAddedBox;

const style = StyleSheet.create({
  handleViewCart: {
    backgroundColor: colors.brandPrimary,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    // marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textViewCart: {
    color: colors.textOnBrand,
    fontSize: 16,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginHorizontal: 20,
    color: colors.textWhite,
  },
});
