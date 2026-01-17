import React from 'react';
import { TouchableOpacity, ImageBackground, View, Text, ImageSourcePropType } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import styles from '../../styles/screens/DashboardStyles';

interface PopularItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
  rating: number;
  time: string;
  distance: string;
  offer: string;
  restaurantId: string;
}

interface PopularItemCardProps {
  item: PopularItem;
}

const PopularItemCard: React.FC<PopularItemCardProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('RestaurantDetails', { restaurantId: item.restaurantId });
  };

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.CardContainer}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <ImageBackground
        source={item.image}
        style={styles.smallImage}
        imageStyle={styles.smallImageRadius}
      >
        {/* BOTTOM GRADIENT */}
        {/* <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 0.65)',
          'rgba(255, 255, 255, 0.9)',
          'rgba(255, 255, 255, 1)',
        ]}
        locations={[0, 0.25, 0.45, 0.75, 1]}
        style={styles.smallGradient}
      >

      </LinearGradient> */}
      </ImageBackground>
      <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
        <View style={styles.row}>
          <Text style={styles.titleText}>{item.title}</Text>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingTextWhite}>{item.rating} ★</Text>
          </View>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>{item.time}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.metaText}>{item.distance}</Text>
        </View>
        <Text style={styles.offerTexttt}>{item.offer}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularItemCard;
