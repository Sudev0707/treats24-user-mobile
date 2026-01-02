import React from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, ImageBackground, FlatList, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/screens/FavoritesStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import { RootStackParamList } from '../routes/types';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectFavoriteRestaurants, selectFavoriteFoods } from '../store/selectors/favoritesSelectors';
import { FavoriteRestaurant, FavoriteFood } from '../store/slices/favoritesSlice';

const HEADER_HEIGHT = 60;

const Favorites: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scrollProps = useScrollToHideTabBar();
  const favoriteRestaurants = useAppSelector(selectFavoriteRestaurants);
  const favoriteFoods = useAppSelector(selectFavoriteFoods);

  const handleRestaurantPress = (restaurant: FavoriteRestaurant) => {
    navigation.navigate('RestaurantDetails', { restaurantId: restaurant.id });
  };

  const renderRestaurantItem = ({ item }: { item: FavoriteRestaurant }) => (
    <TouchableOpacity
      style={localStyles.restaurantCard}
      activeOpacity={0.85}
      onPress={() => handleRestaurantPress(item)}
    >
      <ImageBackground
        source={item.image}
        style={localStyles.image}
        imageStyle={localStyles.imageRadius}
      >
        <LinearGradient
          colors={[
            'rgba(0,0,0,0.0)',
            'rgba(0,0,0,0.6)',
            'rgba(0,0,0,0.85)',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1)',
          ]}
          locations={[0, 0.35, 0.6, 0.85, 1]}
          style={localStyles.gradient}
        >
          <View style={localStyles.row}>
            <Text style={localStyles.title}>{item.name}</Text>
            <View style={localStyles.ratingBox}>
              <Text style={localStyles.ratingText}>{item.rating} ★</Text>
            </View>
          </View>

          <View style={localStyles.row}>
            <Text style={localStyles.placeName}>Bistupur, Jamshedpur</Text>
            <Text style={localStyles.distance}>📍 {item.time}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderFoodItem = ({ item }: { item: FavoriteFood }) => (
    <TouchableOpacity style={localStyles.foodCard} activeOpacity={0.9}>
      {/* Food Image */}
      <View style={localStyles.foodImageBox}>
        <Image
          resizeMode="contain"
          source={item.image || require('../assets/images/foods/dummy food.png')}
          style={item.image ? localStyles.foodImage : localStyles.dummyFoodImage}
        />
      </View>

      {/* Content */}
      <View style={localStyles.content}>
        {/* Top Row */}
        <View style={localStyles.topRow}>
          <Text style={localStyles.veg}>{item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}</Text>
          <Text style={localStyles.rating}>⭐ {item.rating}</Text>
        </View>

        {/* Food Name */}
        <Text style={localStyles.foodTitle}>{item.name}</Text>

        {/* Restaurant Name */}
        <Text style={localStyles.restaurantName}>{item.restaurantName}</Text>

        {/* Bottom Row */}
        <View style={localStyles.bottomRow}>
          <Text style={localStyles.price}>₹{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      {/* FIXED HEADER */}
      <SafeAreaView edges={['top']} style={styles.headerWrapper}>
        <Header title="Favorites" showBackButton={true} />
      </SafeAreaView>

      {/* SCREEN CONTENT */}
      <View style={{ flex: 1, backgroundColor: colors.backgroundSoft }}>
        <ScrollView
          {...scrollProps}
          contentContainerStyle={{
            paddingTop: HEADER_HEIGHT + 12,
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Favorite Restaurants Section */}
          {favoriteRestaurants.length > 0 && (
            <View style={{ marginBottom: 24 }}>
              <Text style={localStyles.sectionTitle}>Favorite Restaurants</Text>
              <FlatList
                data={favoriteRestaurants}
                keyExtractor={(item) => item.id}
                renderItem={renderRestaurantItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              />
            </View>
          )}

          {/* Favorite Foods Section */}
          {favoriteFoods.length > 0 && (
            <View style={{ marginBottom: 24 }}>
              <Text style={localStyles.sectionTitle}>Favorite Foods</Text>
              <FlatList
                data={favoriteFoods}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
              />
            </View>
          )}

          {/* Empty State */}
          {favoriteRestaurants.length === 0 && favoriteFoods.length === 0 && (
            <View style={localStyles.emptyState}>
              <Text style={localStyles.emptyStateText}>No favorites yet</Text>
              <Text style={localStyles.emptyStateSubText}>
                Start exploring restaurants and add your favorites!
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

// Styles
const localStyles = StyleSheet.create({
  restaurantCard: {
    width: 280,
    height: 180,
    marginBottom: 16,
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
    paddingTop: 60,
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
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  foodImageBox: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  dummyFoodImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  veg: {
    fontSize: 12,
    fontWeight: '600',
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 2,
  },
  restaurantName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1faa59',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
    marginLeft: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  emptyStateSubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default Favorites;
