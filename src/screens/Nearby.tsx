import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../theme/colors';
import { featuredRestaurants, popularDishes, offers } from '../data/foodData';
import styles from '../styles/screens/NearbyStyles';

// Create budget foods array (foods under 99 rupees)
const budgetFoods = featuredRestaurants
  .flatMap(restaurant =>
    restaurant.foodCategories.flatMap(category =>
      category.items.filter(item => item.price <= 99),
    ),
  )
  .map(item => ({
    id: item.id,
    name: item.name,
    category: item.isVeg ? 'Veg' : 'Non-Veg',
    price: `₹${item.price}`,
    rating: item.rating,
  }));
import Header from '../components/common/Header';
import SectionHeader from '../components/common/SectionHeader';

const Nearby: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderFoodItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.foodCard} activeOpacity={0.6}>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodCategory}>{item.category}</Text>
      <Text style={styles.foodPrice}>{item.price}</Text>
      <Text style={styles.foodRating}>⭐ {item.rating}</Text>
    </TouchableOpacity>
  );

  const renderRestaurantItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.restaurantCard}
      onPress={() =>
        navigation.navigate('RestaurantDetails', { restaurantId: item.id })
      }
    >
      <ImageBackground
        source={item.image}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        >
          <View style={styles.row}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>
          <Text style={styles.placeName}>{item.category}</Text>
          <View style={styles.distanceRow}>
            <Text style={styles.distance}>
              {item.time} • {item.delivery}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderDiscountItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.discountCard} activeOpacity={0.6}>
      <Text style={styles.discountTitle}>{item.title}</Text>
      <Text style={styles.discountDescription}>{item.description}</Text>
      <Text style={styles.discountCode}>Code: {item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Nearby" showBackButton={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.section}>
          <SectionHeader title="Popular Foods Nearby" />
          <FlatList
            data={popularDishes}
            renderItem={renderFoodItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Popular Restaurants Nearby" />
          <FlatList
            data={featuredRestaurants}
            renderItem={renderRestaurantItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Budget Foods Under 99" />
          <FlatList
            data={budgetFoods}
            renderItem={renderFoodItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Top Discounts Food Nearby" />
          <FlatList
            data={offers}
            renderItem={renderDiscountItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Nearby;
