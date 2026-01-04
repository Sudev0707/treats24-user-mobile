import React from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
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
      style={styles.restaurantCard}
      activeOpacity={0.85}
      onPress={() => handleRestaurantPress(item)}
    >
      <ImageBackground
        source={item.image}
        style={styles.image}
        imageStyle={styles.imageRadius}
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
          style={styles.gradient}
        >
          <View style={styles.row}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>{item.rating} ★</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.placeName}>Bistupur, Jamshedpur</Text>
            <Text style={styles.distance}>📍 {item.time}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderFoodItem = ({ item }: { item: FavoriteFood }) => (
    <TouchableOpacity style={styles.foodCard} activeOpacity={0.9}>
      {/* Food Image */}
      <View style={styles.foodImageBox}>
        <Image
          resizeMode="contain"
          source={item.image || require('../assets/images/foods/dummy food.png')}
          style={item.image ? styles.foodImage : styles.dummyFoodImage}
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <Text style={styles.veg}>{item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>

        {/* Food Name */}
        <Text style={styles.foodTitle}>{item.name}</Text>

        {/* Restaurant Name */}
        <Text style={styles.restaurantName}>{item.restaurantName}</Text>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <Text style={styles.price}>₹{item.price}</Text>
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
      <View style={styles.container}>
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
              <Text style={styles.sectionTitle}>Favorite Restaurants</Text>
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
              <Text style={styles.sectionTitle}>Favorite Foods</Text>
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
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No favorites yet</Text>
              <Text style={styles.emptyStateSubText}>
                Start exploring restaurants and add your favorites!
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};



export default Favorites;
