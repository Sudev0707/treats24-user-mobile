import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import colors from '../theme/colors';
import { CATEGORIES } from '../data/dummyFoodData';
import Header from '../components/common/Header';
import { categoriesStyle as styles } from '../styles/screens/CategoriesStyles';

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
    <>
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      {/* FIXED HEADER */}
      <SafeAreaView edges={['top']} style={styles.headerWrapper}>
        <Header title="All Categories" showBackButton={true} />
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Categories;
