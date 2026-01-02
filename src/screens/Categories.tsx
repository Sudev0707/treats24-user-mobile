import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import colors from '../theme/colors';
import { CATEGORIES } from '../data/dummyFoodData';
import Header from '../components/common/Header';

interface CategoryItem {
  id: string;
  name: string;
  image: any;
}

const Categories: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCategoryPress = (item: CategoryItem) => {
    if (item.id === '0') {
      // Navigate to SnacksItems for special categories
      navigation.navigate('SnacksItems', { itemType: item.name });
    } else if (item.id === '00') {
      // Handle 99 Store category
      console.log('99 Store selected');
    } else {
      // Handle other categories - could navigate to filtered restaurants or similar
      console.log('Category selected:', item.name);
    }
  };

  const renderItem = ({ item }: { item: CategoryItem }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      activeOpacity={0.9}
      onPress={() => handleCategoryPress(item)}
    >
      <View style={styles.categoryImageContainer}>
        <Image
          source={item.image}
          style={styles.categoryImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Categories" showBackButton={true} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
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
  categoryCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // height: 120,
  },
  categoryImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 5,
   
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    // borderWidth:1
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.darkBlack,
    textAlign: 'center',
  },
});

export default Categories;
