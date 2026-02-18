import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import styles from '../../styles/components/BannerSliderStyles';

const { width } = Dimensions.get('window');

const bannerData = [
  {
    id: '1',
    title: 'Special Offer: 50% Off on Pizzas!',
    image: require('../../assets/images/Gemini_Generated_Image_uxr4iiuxr4iiuxr4.png'),
  },
  {
    id: '2',
    title: 'Free Delivery on Orders Above $25',
    image: require('../../assets/images/Gemini_Generated_Image_uxr4iiuxr4iiuxr4.png'),
  },
  {
    id: '3',
    title: 'New Arrivals: Try Our Gourmet Burgers',
    image: require('../../assets/images/Gemini_Generated_Image_uxr4iiuxr4iiuxr4.png'),
  },
];

const BannerSlider: React.FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % bannerData.length;
      scrollViewRef.current?.scrollTo({
        x: currentIndex.current * (width - 32),
        animated: true,
      });
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {bannerData.map((banner) => (
          <TouchableOpacity key={banner.id} style={styles.bannerItem}>
            <Image source={banner.image} style={styles.bannerImage} />
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>{banner.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BannerSlider;
