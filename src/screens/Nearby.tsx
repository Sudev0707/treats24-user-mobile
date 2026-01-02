import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../theme/colors';
import { featuredRestaurants, popularDishes, offers } from '../data/foodData';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    paddingBottom: 150,
    paddingHorizontal:20
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  listContainer: {
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  foodCard: {
    width: 150,
    height: 120,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  foodCategory: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  foodPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.brandPrimary,
    marginBottom: 4,
  },
  foodRating: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  restaurantCard: {
    width: Dimensions.get('window').width * 0.5,
    height: 200,
    marginRight: 16,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 18,
  },
  gradient: {
    padding: 14,
    paddingTop: 70,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    flex: 1,
  },
  ratingBox: {
    backgroundColor: '#1faa59',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  placeName: {
    color: '#ddd',
    fontSize: 12,
    fontWeight: '600',
  },
  distance: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: '600',
  },
  distanceRow: {
    marginTop: 6,
  },
  discountCard: {
    width: 200,
    height: 100,
    backgroundColor: colors.brandPrimary,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  discountTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  discountDescription: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 4,
  },
  discountCode: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Nearby;
