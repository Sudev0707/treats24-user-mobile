import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Dimensions,
  Platform,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import {
  RestaurantHeaderStyle,
  RestaurantScreenStyle,
} from '../styles/screens/RestaurantScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import { featuredRestaurants } from '../data/foodData';
import FoodDetailsModal from '../components/modals/FoodDetailsModal';
//
import { addToCart, removeFromCart } from '../store/slices/cartSlice.ts';
import {
  toggleFavoriteRestaurant,
  toggleFavoriteFood,
} from '../store/slices/favoritesSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectFavoriteFoods } from '../store/selectors/favoritesSelectors';
import { selectCartTotal } from '../store/selectors/cartSelectors';
import SectionHeader from '../components/common/SectionHeader.tsx';
import CustomAlert from '../components/common/CustomAlert';
import FoodCard from '../components/food/FoodCard';
import FilterChip from '../components/common/FilterChip';
import RestaurantDetailsHeader from '../components/common/RestaurantDetailsHeader.tsx';
import { cartStyle } from '../styles/screens/CartStyles.ts';
import fonts from '../theme/fonts.ts';

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
    items: {
      id: string;
      name: string;
      price: number;
      rating: number;
      isVeg: boolean;
      image?: ImageSourcePropType;
    }[];
  }[];
}

type Props = {
  route: RouteProp<RootStackParamList, 'RestaurantDetails'>;
};

const RestaurantDetailsScreen: React.FC<Props> = ({ route }) => {
  const { restaurantId } = route.params;
  const dispatch = useDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const [foodCounts, setFoodCounts] = useState<{ [key: string]: number }>({});
  const getQuantity = (foodId: string) => {
    return cartItems.find(item => item.id === foodId)?.quantity || 0;
  };

  const [activeChips, setActiveChips] = useState<{ [key: string]: boolean }>(
    {},
  );
  const cart = useAppSelector(state => state.cart);
  const totalCount = useAppSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const cartTotal = useAppSelector(selectCartTotal);
  const favoriteRestaurants = useAppSelector(
    state => state.favorites.favoriteRestaurants,
  );
  const favoriteFoods = useAppSelector(selectFavoriteFoods);

  const isFoodFavorite = (foodId: string) => {
    return favoriteFoods.some(favFood => favFood.id === foodId);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState<any>(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [foodDetailsModalVisible, setFoodDetailsModalVisible] = useState(false);
  const [selectedFoodForModal, setSelectedFoodForModal] = useState<any>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // const [activeChips, setActiveChips] = useState({});
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); //
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const [barStyle, setBarStyle] = useState<'light-content' | 'dark-content'>(
    'light-content',
  );
  const [headerBackgroundColor, setHeaderBackgroundColor] =
    useState('transparent');

  //   const headerBackgroundColor = scrollY.interpolate({
  //   inputRange: [0, 220],
  //   outputRange: ['rgba(0,0,0,0)', 'rgba(255,255,255,1)'],
  //   extrapolate: 'clamp',
  // });

  const interpolateColor = (value: number) => {
    const clamped = Math.min(Math.max(value, 0), 250);
    const opacity = clamped / 250;
    return `rgba(255,255,255,${opacity})`;
  };

  // Removed animated header background color to fix immutable object issues

  const { height } = Dimensions.get('window');
  const imageHeight = height * 0.35 + 20;

  // ==================
  const restaurant = featuredRestaurants.find(r => r.id === restaurantId);

  // Sync foodCounts with cart items
  useEffect(() => {
    const newFoodCounts: { [key: string]: number } = {};
    cartItems.forEach(item => {
      newFoodCounts[item.id] = item.quantity;
    });
    setFoodCounts(newFoodCounts);
    setModalVisible(Object.keys(newFoodCounts).length > 0);
  }, [cartItems]);

  // Update StatusBar based on scroll position
  // const handleScroll = (event: any) => {
  //   const scrollYValue = event.nativeEvent.contentOffset.y;
  //   if (scrollYValue > 200) {
  //     setBarStyle('dark-content');
  //     setHeaderBackgroundColor('#ffffff');
  //     StatusBar.setBackgroundColor('#ffffff');
  //   } else {
  //     setBarStyle('light-content');
  //     setHeaderBackgroundColor('transparent');
  //     StatusBar.setBackgroundColor('transparent');
  //   }
  // };

  const handleScroll = (event: any) => {
    const scrollYValue = event.nativeEvent.contentOffset.y;

    // interpolate background color
    const bgColor = interpolateColor(scrollYValue);
    setHeaderBackgroundColor(bgColor);

    if (scrollYValue > 200) {
      setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#ffffff');
    } else {
      setBarStyle('light-content');
      StatusBar.setBackgroundColor('transparent');
    }
  };

  // ===============
  // const handleAddFood = (foodId: string) => {
  //   const food = restaurant!.foodCategories
  //     .flatMap(category => category.items)
  //     .find(f => f.id === foodId);
  //   if (food) {
  //     setSelectedFood(food);
  //     setSelectedCount(1);
  //     setModalVisible(true);
  //   }
  //   setFoodCounts(prev => ({ ...prev, [foodId]: 1 }));
  // };
  const handleAddFood = (food: any) => {
    if (restaurant) {
      // Check if cart has items from a different restaurant
      if (cart.restaurantId && cart.restaurantId !== restaurant.id) {
        setAlertMessage(
          'Your cart already has items from another restaurant. Please clear your cart or complete your order first.',
        );
        setAlertVisible(true);
        return;
      }

      dispatch(
        addToCart({
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
          item: {
            id: food.id,
            name: food.name,
            price: food.price,
            isVeg: food.isVeg,
            image: food.image,
          },
        }),
      );
    }
  };

  // ===
  const incrementFood = (foodId: string) => {
    setFoodCounts(prev => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
  };
  const decrementFood = (foodId: string) => {
    setFoodCounts(prev => {
      const newCount = (prev[foodId] || 0) - 1;
      if (newCount <= 0) {
        const { [foodId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [foodId]: newCount };
    });
  };

  const handleFavoriteFood = (food: any) => {
    if (restaurant) {
      dispatch(
        toggleFavoriteFood({
          id: food.id,
          name: food.name,
          price: food.price,
          rating: food.rating,
          isVeg: food.isVeg,
          image: food.image,
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
        }),
      );
    }
  };

  const handleFoodCardPress = (food: any) => {
    setSelectedFoodForModal(food);
    setFoodDetailsModalVisible(true);
  };

  // Filters data - "Filters" is default, others can be added by owner
  const filters = [
    { id: 'filters', title: 'Filters', isToggleable: false },
    { id: 'under99', title: 'under 99', isToggleable: true },
    // { id: 'food10-15', title: 'Food in 10-15 mins', isToggleable: true },
    { id: 'veg', title: 'Veg', isToggleable: true },
    { id: 'nonveg', title: 'Non veg', isToggleable: true },
    { id: 'spicy', title: 'Spicy', isToggleable: true },
    { id: 'bestseller', title: 'Best Seller', isToggleable: true },
  ];

  const activeCount = Object.keys(activeChips).filter(
    key => activeChips[key] && key !== 'Filters',
  ).length;

  const handleChipPress = (item: {
    id: string;
    title: string;
    isToggleable: boolean;
  }) => {
    setActiveChips(prev => {
      const isActive = prev[item.title];

      console.log(isActive ? 'DEACTIVATED:' : 'ACTIVATED:', item.title);

      // Store activated chips
      setSelectedFilters(prevFilters => {
        if (isActive) {
          return prevFilters.filter(f => f !== item.title);
        } else {
          return [...prevFilters, item.title];
        }
      });

      return {
        ...prev,
        [item.title]: !isActive,
      };
    });
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  //

  if (!restaurant) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Restaurant not found</Text>
      </View>
    );
  }
  // ---
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar translucent={true} barStyle={barStyle} />
      {/* header  */}
      <SafeAreaView
        style={[
          RestaurantHeaderStyle.headerContainer,
          { backgroundColor: headerBackgroundColor },
        ]}
      >
        <View>
          <RestaurantDetailsHeader
            restaurantName={restaurant.name}
            restaurant={restaurant}
            backgroundColor={headerBackgroundColor}
          />
        </View>
      </SafeAreaView>

      <ImageBackground
        imageStyle={RestaurantScreenStyle.headerImage}
        source={restaurant.image}
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: imageHeight,
            borderBottomLeftRadius: 26,
            borderBottomRightRadius: 26,
          },
        ]}
        resizeMode="cover"
      >
        {/* <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0.72)',
            'rgba(0,0,0,0.45)',
            'rgba(0,0,0,0.0)',
          ]}
          style={RestaurantScreenStyle.topGradient}
        /> */}

        <LinearGradient
          colors={[
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,0.6)',
            'rgba(0,0,0,0.85)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
          ]}
          locations={[0, 0.35, 0.6, 0.85, 1]}
          style={RestaurantScreenStyle.gradient}
        >
          <View style={RestaurantScreenStyle.row}>
            <Text style={RestaurantScreenStyle.restauranttitle}>
              {restaurant.name}
            </Text>
            <View style={RestaurantScreenStyle.ratingBox}>
              <Text style={RestaurantScreenStyle.ratingText}>
                {restaurant.rating} ★
              </Text>
            </View>
          </View>

          <View style={RestaurantScreenStyle.row}>
            <Text style={RestaurantScreenStyle.placeName}>
              {restaurant.category}
            </Text>
            <Text style={RestaurantScreenStyle.distance}>
              📍 {restaurant.time}
            </Text>
          </View>

          {/* <View style={RestaurantScreenStyle.distanceRow}>
            <Text style={RestaurantScreenStyle.categoryText} >{restaurant.category}</Text>
          </View> */}
        </LinearGradient>
      </ImageBackground>

      {/* content container */}
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            // paddingHorizontal: 20,
            paddingTop: imageHeight - 110,
            zIndex: 1,
            // paddingBottom:200
          }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {/*  */}
          <View style={RestaurantScreenStyle.contentContainer}>
            <View
              style={{
                paddingHorizontal: 16,
                backgroundColor: colors.background,
              }}
            >
              <View style={RestaurantScreenStyle.deleiveryTime}>
                <Text style={RestaurantScreenStyle.timeText}>
                  Deleivery Time:
                </Text>
                <Text style={RestaurantScreenStyle.timeText}>10 - 20 min</Text>
              </View>

              <FlatList
                horizontal
                data={filters}
                keyExtractor={item => item.id}
                contentContainerStyle={{ marginBottom: 10 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <FilterChip
                    item={item}
                    activeChips={activeChips}
                    activeCount={activeCount}
                    onPress={handleChipPress}
                  />
                )}
              />
              {/* restaurant foods type/menus */}
              <View style={{ marginTop: 15 }}>
                <SectionHeader title="Recommended" />
              </View>
            </View>

              
            <View style={{ backgroundColor: colors.bgOffWhiteSecondary }}>
              {restaurant.foodCategories.map(category => {
                const isExpanded = expandedCategories[category.id] || false;
                return (
                  <View key={category.id}>
                    <TouchableOpacity
                      style={{
                        padding: 16,
                        backgroundColor: colors.background,
                        borderBottomWidth: 1,
                        borderBottomColor: colors.borderLight,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      onPress={() => toggleCategory(category.id)}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: colors.textPrimary,
                        }}
                      >
                        {category.title}
                      </Text>
                      <Icon
                        name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                        size={24}
                        color={colors.textSecondary}
                      />
                    </TouchableOpacity>
                    {isExpanded && (
                      <View
                        style={{
                          padding: 10,
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'space-around',
                        }}
                      >
                        {category.items.map(food => {
                          const quantity = getQuantity(food.id);
                          return (
                            <FoodCard
                              key={food.id}
                              food={food}
                              quantity={quantity}
                              onAdd={() => handleAddFood(food)}
                              onDecrement={() => dispatch(removeFromCart(food.id))}
                              onFavorite={() => handleFavoriteFood(food)}
                              isFavorite={isFoodFavorite(food.id)}
                              onPress={() => handleFoodCardPress(food)}
                            />
                          );
                        })}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>

            {/*  */}
            <View style={{ padding: 16 }}>
              <Text
                style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}
              >
                About {restaurant.name}
              </Text>
              <Text>
                Rating: {restaurant.rating} ({restaurant.reviews} reviews)
              </Text>
              <Text>Delivery: {restaurant.delivery}</Text>
              <Text>Price Range: {restaurant.price}</Text>
              <Text>Status: {restaurant.isOpen ? 'Open' : 'Closed'}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
              }}
            >
              {totalCount} items added{' '}
            </Text>
            {/* <Text>• ₹{cartTotal}</Text> */}
            <Text style={cartStyle.checkoutBtnText}>View Cart</Text>
          </TouchableOpacity>
        </View>
      )}

      <CustomAlert
        visible={alertVisible}
        title="Cart Restriction"
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />

      <FoodDetailsModal
        visible={foodDetailsModalVisible}
        onClose={() => setFoodDetailsModalVisible(false)}
        food={selectedFoodForModal}
        quantity={getQuantity(selectedFoodForModal?.id || '')}
        onAdd={() => handleAddFood(selectedFoodForModal)}
        onDecrement={() => dispatch(removeFromCart(selectedFoodForModal.id))}
        onFavorite={() => handleFavoriteFood(selectedFoodForModal)}
        isFavorite={isFoodFavorite(selectedFoodForModal?.id || '')}
      />
    </>
  );
};

export default RestaurantDetailsScreen;
