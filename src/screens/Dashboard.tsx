import React, { useCallback, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  FlatList,
  ListRenderItem,
  Dimensions,
  ImageSourcePropType,
  RefreshControl,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/screens/DashboardStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import DashboardHeader from '../components/common/DashboardHeader';
import BannerSlider from '../components/common/BannerSlider';
import SectionHeader from '../components/common/SectionHeader';
import colors from '../theme/colors';
import { getCurrentLocationWithAddress } from '../utils/locationService';
import { useEffect, useRef, useState } from 'react';
import { featuredRestaurants } from '../data/foodData';

import {
  CATEGORIES,
  RESTAURANTS,
  topOffers,
  topPicks,
} from '../data/dummyFoodData';
import { bannerData } from '../data/foodData';

interface LocationType {
  latitude: number;
  longitude: number;
  area: string;
  city: string;
  state: string;
  district: string;
  pincode: string;
  country: string;
  country_code: string;
}

interface BannerItem {
  id: string;
  image: ImageSourcePropType;
}

interface CategoryItem {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

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
  image: ImageSourcePropType;
  foodCategories: {
    id: string;
    title: string;
    type: string;
    isAvailable: boolean;
    items: {
      id: string;
      name: string;
      price: number;
      rating: number;
      isVeg: boolean;
      image?: ImageSourcePropType;
    }[];
  }[];
}
//
const Dashboard: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<LocationType | null>(null);
  const sliderRef = useRef<FlatList<BannerItem>>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a refresh action, e.g., refetch data
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  //
  const handleSelectedCategory = (item: CategoryItem) => {
    console.log('selected item ', item);

    if (item.id === '0') {
      // Navigate to SnacksItems for special categories
      navigation.navigate('SnacksItems', { itemType: item.name });
    } else if (item.id === '00') {
      // navigation.navigate(" ");
    }
    setSelectedCategory(item.name);
  };
  //
  const handleRestaurantPress = useCallback(
    (item: RestaurantItem) => {
      navigation.navigate('RestaurantDetails', { restaurantId: item.id });
    },
    [navigation],
  );

  //  getCurrentLocationWithAddress(locationData => {
  //       setLocation(locationData);
  //       setLoading(false);
  //     });

  // const bannerData = [
  //   { id: '1', image: 'https://picsum.photos/800/400?random=1' },
  //   { id: '2', image: 'https://picsum.photos/800/400?random=2' },
  //   { id: '3', image: 'https://picsum.photos/800/400?random=3' },
  // ];

  const renderItem: ListRenderItem<BannerItem> = ({ item }) => {
    return (
      <TouchableOpacity style={styles.BannerHolder}>
        <Image source={item.image} style={styles.bannerImage} />
      </TouchableOpacity>
    );
  };

  //
  // const topRestaurants = useMemo(
  //   () => featuredRestaurants.slice(0, 5),
  //   [featuredRestaurants],
  // );

  //

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % bannerData.length;
      sliderRef.current?.scrollToIndex({ index, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <>
        <StatusBar
          translucent={false}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <DashboardHeader />
      </>

      {/* body */}
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            {...scrollProps}
          >
            <View>
              {/* food/ad banner slider*/}
              <View style={styles.dashboardBanner}>
                <FlatList
                  ref={sliderRef}
                  data={bannerData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                />
              </View>

              {/* <View style={styles.dashboardBanner}>
              <TouchableOpacity style={styles.BannerHolder}>
                <Image source={require('')} style={styles.bannerImage} />
              </TouchableOpacity>
            </View> */}
              {/*  */}
              <SectionHeader
                title="What's on your mind?"
                actionText="View all"
                onActionPress={() => navigation.navigate('foodCategories')}
              />
              <View style={styles.chipsRow}>
                <FlatList
                  data={CATEGORIES}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ padding: 4 }}
                  renderItem={({ item }) => {
                    const isActive = item.name === selectedCategory;

                    return (
                      <>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => handleSelectedCategory(item)}
                          style={[styles.chip, isActive && styles.chipActive]}
                        >
                          <View style={{ width: 60, height: 50 }}>
                            <Image
                              source={item.image}
                              resizeMode="contain"
                              // width={9}
                              // height={4}
                              style={{
                                width: '100%',
                                height: '100%',
                                alignSelf: 'center',
                                backgroundColor: colors.background,
                                borderRadius: 9,
                                // borderWidth: 1,
                                padding: 0,
                              }}
                            />
                          </View>

                          <Text
                            style={[
                              styles.chipText,
                              isActive && styles.chipTextActive,
                            ]}
                          >
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      </>
                    );
                  }}
                  ListFooterComponent={() => (
                    <>
                      {/* <TouchableOpacity
                    onPress={() => {
                      // navigate or open modal
                      console.log('View All clicked');
                    }}
                    style={[styles.chip, styles.viewAllChip]}
                  >
                    <Text style={styles.viewAllText}>View All</Text>
                  </TouchableOpacity> */}
                    </>
                  )}
                />
              </View>
            </View>

            <View style={{ marginBottom: 20 }}>
              {/*  */}
              <SectionHeader
                title="Top Restaurants"
                actionText="View all"
                onActionPress={() => navigation.navigate('TopRestaurants')}
              />
              <FlatList
                data={featuredRestaurants.slice(0, 5)}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 7,
                  paddingVertical: 3,
                }}
                renderItem={({ item }: { item: RestaurantItem }) => (
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
                      {/* <View style={styles.extraDark} /> */}
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
                            <Text style={styles.ratingTextWhite}>
                              {item.rating} ★
                            </Text>
                          </View>
                        </View>

                        <View style={styles.row}>
                          <Text style={styles.placeName}>
                            Bistupur, Jamshedpur
                          </Text>
                          <Text style={styles.distance}>📍 {item.time}</Text>
                        </View>

                        <View style={styles.distanceRow}></View>
                      </LinearGradient>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View style={{ marginBottom: 20 }}>
              <SectionHeader title="Popular near you" />

              {topPicks.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.CardContainer}
                  activeOpacity={4}
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
              ))}
            </View>

            <View>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Top Offers</Text>
              </View>

              {topOffers.map(item => (
                <View key={item.id} style={styles.offerCard}>
                  <Text style={styles.offerText}>{item.offer}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
