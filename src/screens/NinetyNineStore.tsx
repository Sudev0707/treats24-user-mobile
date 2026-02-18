import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { restaurantsData } from '../data/foodData';
import Header from '../components/common/Header';
import SectionHeader from '../components/common/SectionHeader';
import FoodCard from '../components/food/FoodCard';
import styles from '../styles/screens/SnacksItemsStyles';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';
import { selectCartItems, selectCartTotal } from '../store/selectors/cartSelectors';
import { cartStyle } from '../styles/screens/CartStyles';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  isVeg: boolean;
  image: any;
  restaurantId: string;
  restaurantName: string;
}

const NinetyNineStore: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const totalCount = useAppSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const cartTotal = useAppSelector(selectCartTotal);

  const getQuantity = (foodId: string) => {
    return cartItems.find(item => item.id === foodId)?.quantity || 0;
  };

  // Collect all food items from all restaurants where price < 99
  const ninetyNineItems: FoodItem[] = restaurantsData
    .flatMap(restaurant =>
      restaurant.foodCategories.flatMap(category =>
        category.items.map(item => ({
          ...item,
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
        })),
      ),
    )
    .filter(item => item.price < 99);

  const renderFoodItem = ({ item }: { item: FoodItem }) => {
    const quantity = getQuantity(item.id);

    const handleAddToCart = () => {
      dispatch(
        addToCart({
          restaurantId: item.restaurantId,
          restaurantName: item.restaurantName,
          item: {
            id: item.id,
            name: item.name,
            price: item.price,
            isVeg: item.isVeg,
            image: item.image,
          },
        }),
      );
    };

    const handleRemoveFromCart = () => {
      dispatch(removeFromCart(item.id));
    };

    return (
      <FoodCard
        food={item}
        quantity={quantity}
        onAdd={handleAddToCart}
        onDecrement={handleRemoveFromCart}
        onFavorite={() => {}}
        isFavorite={false}
      />
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header title="99 Store" showBackButton={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.section}>
            <SectionHeader title="All Items Under ₹99" />
            {ninetyNineItems.length > 0 ? (
              <FlatList
                data={ninetyNineItems}
                renderItem={renderFoodItem}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={styles.columnWrapper}
              />
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  No items available under ₹99 at the moment.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
        {totalCount > 0 && (
          <View style={[cartStyle.totalContainer]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                cartStyle.checkoutBtn,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}
              onPress={() => navigation.navigate('Cart')}
            >
              <Text
                style={{
                  fontFamily: fonts.family.regular,
                  color: colors.textWhite,
                  fontSize: fonts.size.md
                }}
              >
                {totalCount} items added | ₹{cartTotal}
              </Text>
              {/* <Text>• ₹{cartTotal}</Text> */}
              <Text style={cartStyle.checkoutBtnText}>View Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default NinetyNineStore;
