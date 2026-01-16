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
import FoodCard from '../components/food/FoodCard';
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
    <FoodCard
      food={item}
      quantity={0}
      onAdd={() => {}}
      onDecrement={() => {}}
      onFavorite={() => {}}
      isFavorite={false}
    />
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
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
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
