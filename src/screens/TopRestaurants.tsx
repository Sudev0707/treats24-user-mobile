import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../theme/colors';
import { featuredRestaurants } from '../data/foodData';
import Header from '../components/common/Header';
import styles from '../styles/screens/TopRestaurantsStyles';

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
  image: any;
  foodCategories: any[];
}

const TopRestaurants: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  const handleRestaurantPress = (item: RestaurantItem) => {
    navigation.navigate('RestaurantDetails', { restaurantId: item.id });
  };

  const filteredRestaurants = featuredRestaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: RestaurantItem }) => (
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

          <View style={styles.distanceRow}></View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Top Restaurants" showBackButton={true} />
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TopRestaurants;
