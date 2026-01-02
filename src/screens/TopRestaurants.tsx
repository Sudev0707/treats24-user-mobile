import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../theme/colors';
import { featuredRestaurants } from '../data/foodData';
import Header from '../components/common/Header';

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

  const handleRestaurantPress = (item: RestaurantItem) => {
    navigation.navigate('RestaurantDetails', { restaurantId: item.id });
  };

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
      <FlatList
        data={featuredRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    padding: 16,
  },
  restaurantCard: {
    width: '100%',
    height: 200,
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
});

export default TopRestaurants;
