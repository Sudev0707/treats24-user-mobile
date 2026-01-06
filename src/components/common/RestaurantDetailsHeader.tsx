import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { toggleFavoriteRestaurant } from '../../store/slices/favoritesSlice';
import colors from '../../theme/colors';
import { RestaurantHeaderStyle } from '../../styles/screens/RestaurantScreenStyle';

interface RestaurantDetailsHeaderProps {
  restaurantName?: string;
  restaurant?: any;
  onBackPress?: () => void;
  backgroundColor?: string | Animated.AnimatedInterpolation<string>;
}

const RestaurantDetailsHeader: React.FC<RestaurantDetailsHeaderProps> = ({
  restaurantName,
  restaurant,
  onBackPress,
  backgroundColor,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favoriteRestaurants = useAppSelector(
    state => state.favorites.favoriteRestaurants,
  );

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleToggleFavorite = () => {
    if (restaurant) {
      dispatch(toggleFavoriteRestaurant(restaurant));
    }
  };

  const isFavorite = favoriteRestaurants.some(r => r.id === restaurant?.id);

  return (
    <Animated.View
      style={[
        RestaurantHeaderStyle.container,
        // backgroundColor ? { backgroundColor } : {},
      ]}
    >
      <View style={RestaurantHeaderStyle.leftContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' , maxWidth:'80%', }}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={RestaurantHeaderStyle.backButton}
          >
            <Image
              source={require('../../assets/icons/iconsback.png')}
              style={{ width: 24, height: 24, borderRadius: 7 }}
            />
          </TouchableOpacity>
          <View style={{ paddingLeft: 9 , }}>
            <Text style={RestaurantHeaderStyle.leftText}>{restaurantName}</Text>
            {/* restaurant place */}
            <Text style={RestaurantHeaderStyle.placeText}>{restaurant?.place}</Text>
          </View>
        </View>
      </View>
      <View style={RestaurantHeaderStyle.centerContainer}>
        {/* Center content can be added if needed */}
      </View>
      <View style={RestaurantHeaderStyle.rightContainer}>
        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={RestaurantHeaderStyle.saveBtn}
          activeOpacity={0.8}
        >
          <Icon
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={24}
            color={isFavorite ? '#FF6B6B' : colors.textSecondary}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default RestaurantDetailsHeader;
