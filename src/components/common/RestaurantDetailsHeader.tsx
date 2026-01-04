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
import HeaderStyles from '../../styles/components/HeaderStyles';

interface RestaurantDetailsHeaderProps {
  restaurantName?: string;
  rightMenu?: React.ReactNode;
  onBackPress?: () => void;
  backgroundColor?: string | Animated.AnimatedInterpolation<string>;
}

const RestaurantDetailsHeader: React.FC<RestaurantDetailsHeaderProps> = ({
  restaurantName,
  rightMenu,
  onBackPress,
  backgroundColor,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <Animated.View
      style={[
        HeaderStyles.container,
        backgroundColor ? { backgroundColor } : {},
      ]}
    >
      <View style={HeaderStyles.leftContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={HeaderStyles.backButton}
          >
            <Image
              source={require('../../assets/icons/iconsback.png')}
              style={{ width: 24, height: 24, borderRadius: 7 }}
            />
          </TouchableOpacity>
          <View style={{ paddingLeft: 9 }}>
            <Text style={HeaderStyles.leftText}>{restaurantName}</Text>
            <Text style={HeaderStyles.leftText}>{restaurantName}</Text>
          </View>
        </View>
      </View>
      <View style={HeaderStyles.centerContainer}>
        {/* Center content can be added if needed */}
      </View>
      <View style={HeaderStyles.rightContainer}>{rightMenu}</View>
    </Animated.View>
  );
};

export default RestaurantDetailsHeader;
