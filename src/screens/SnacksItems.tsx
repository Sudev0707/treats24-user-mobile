import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import { restaurantsData } from '../data/foodData';
import Header from '../components/common/Header';
import SectionHeader from '../components/common/SectionHeader';
import styles from '../styles/screens/SnacksItemsStyles';

type Props = {
  route: RouteProp<RootStackParamList, 'SnacksItems'>;
};

interface SnackItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  isVeg: boolean;
}

const SnacksItems: React.FC<Props> = ({ route }) => {
  const { itemType } = route.params;
  const navigation = useNavigation();

  // Collect all snack items from all restaurants
  const allSnacks: SnackItem[] = restaurantsData
    .flatMap(restaurant =>
      restaurant.foodCategories
        .filter(category => category.type === 'snacks')
        .flatMap(category => category.items),
    )
    .map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      isVeg: item.isVeg,
    }));

  const renderSnackItem = ({ item }: { item: SnackItem }) => (
    <TouchableOpacity style={styles.snackCard} activeOpacity={0.6}>
      <View style={item.isVeg ? styles.vegIndicator : styles.nonVegIndicator}>
        <Text style={styles.indicatorText}>
          {item.isVeg ? 'VEG' : 'NON-VEG'}
        </Text>
      </View>
      <Text style={styles.snackName} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.snackCategory}>
        {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
      </Text>
      <Text style={styles.snackPrice}>₹{item.price}</Text>
      <Text style={styles.snackRating}>⭐ {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header title={`${itemType} Items`} showBackButton={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.section}>
            <SectionHeader title={`All ${itemType}`} />
            {allSnacks.length > 0 ? (
              <FlatList
                data={allSnacks}
                renderItem={renderSnackItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
              />
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  No {itemType.toLowerCase()} items available at the moment.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SnacksItems;
