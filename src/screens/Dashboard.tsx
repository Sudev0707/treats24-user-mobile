import React, { useCallback } from 'react';
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
                onActionPress={() => ''}
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
                          <View style={{ width: 90,
                                height: 50,}}>
                            <Image
                              source={item.image}
                              resizeMode="contain"
                              width={4}
                              height={4}
                              style={{
                               width:'100%',
                               height:'100%',
                                alignSelf: 'center',
                                backgroundColor: colors.background,
                                borderRadius: 9,
                                // borderWidth: 1,
                                padding:0
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
                onActionPress={() => ''}
              />
              <FlatList
                data={featuredRestaurants}
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
                      style={Styles.image}
                      imageStyle={Styles.imageRadius}
                    >
                      {/* <View style={Styles.extraDark} /> */}
                      <LinearGradient
                        colors={[
                          'rgba(0,0,0,0.0)',
                          'rgba(0,0,0,0.6)',
                          'rgba(0,0,0,0.85)',
                          'rgba(0,0,0,1)',
                          'rgba(0,0,0,1)',
                        ]}
                        locations={[0, 0.35, 0.6, 0.85, 1]}
                        style={Styles.gradient}
                      >
                        <View style={Styles.row}>
                          <Text style={Styles.title}>{item.name}</Text>
                          <View style={Styles.ratingBox}>
                            <Text style={Styles.ratingText}>
                              {item.rating} ★
                            </Text>
                          </View>
                        </View>

                        <View style={Styles.row}>
                          <Text style={Styles.placeName}>
                            Bistupur, Jamshedpur
                          </Text>
                          <Text style={Styles.distance}>📍 {item.time}</Text>
                        </View>

                        <View style={Styles.distanceRow}></View>
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
                  style={Styles.CardContainer}
                  activeOpacity={4}
                >
                  <ImageBackground
                    source={item.image}
                    style={Styles.smallImage}
                    imageStyle={Styles.smallImageRadius}
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
                    style={Styles.smallGradient}
                  >                   
                    
                  </LinearGradient> */}
                  </ImageBackground>
                  <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                    <View style={Styles.row}>
                      <Text style={Styles.titleText}>{item.title}</Text>
                      <View style={Styles.ratingBox}>
                        <Text style={Styles.ratingText}>{item.rating} ★</Text>
                      </View>
                    </View>
                    <View style={Styles.metaRow}>
                      <Text style={Styles.metaText}>{item.time}</Text>
                      <Text style={Styles.dot}>•</Text>
                      <Text style={Styles.metaText}>{item.distance}</Text>
                    </View>
                    <Text style={Styles.offerTexttt}>{item.offer}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Top Offers</Text>
              </View>

              {topOffers.map(item => (
                <View key={item.id} style={Styles.offerCard}>
                  <Text style={Styles.offerText}>{item.offer}</Text>
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

const Styles = StyleSheet.create({
  LinearGradientHeader: {
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    paddingHorizontal: 16,

    // paddingBottom: 32,
    // borderWidth: 1,
    // borderBottomLeftRadius: 32,
    // borderBottomRightRadius: 32,
    overflow: 'hidden',
    shadowColor: '#000', // iOS
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // backgroundColor: 'transparent',
    zIndex: 9,
  },
  headerShadow: {
    height: 1,
    // elevation: 10, // Android shadow
    shadowColor: '#000', // iOS
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // backgroundColor: 'transparent',
    zIndex: 9,

    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },

  header: {
    backgroundColor: 'transparent', // gradient only
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,

    paddingHorizontal: 16,
    paddingBottom: 32,

    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,

    overflow: 'hidden', // keeps rounded corners clean
  },
  sectionHeaderRow: {
    // borderWidth: 1,
  },
  // -------------------------

  horizontalRow: {
    flexDirection: 'row',
  },

  offerCard: {
    backgroundColor: '#ffe9d6',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },

  offerText: {
    fontWeight: '800',
    color: colors.brandSecondary,
  },
  // ===================================
  card: {
    width: 240,
    height: 240, // ⬅ decreased height
    marginRight: 16,
    borderRadius: 18,
    overflow: 'hidden',
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
    paddingTop: 70, // ⬅ reduced from 90
  },

  extraDark: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.16)', // slightly reduced
  },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  placeName: {
    color: '#ddd',
    fontSize: 10,
    fontWeight: 800,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },

  // ratingBox: {
  //   backgroundColor: '#1faa59',
  //   paddingHorizontal: 10,
  //   paddingVertical: 4,
  //   borderRadius: 14,
  // },

  ratingText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 10,
  },

  distanceRow: {
    marginTop: 6,
  },

  distance: {
    color: '#ccc',
    fontSize: 10,
    fontWeight: 800,
  },

  // ==================
  CardContainer: {
    width: '100%',
    height: 240,
    borderRadius: 14,
    overflow: 'hidden',
    // padding: 4,
    marginBottom: 15,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },

  smallImage: {
    flex: 1,
    justifyContent: 'flex-end',
    //  borderRadius: 14,
    // borderWidth: 1,
    borderColor: '#FFFFFF',
  },

  smallImageRadius: {
    // borderRadius: 14,
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
    borderWidth: 0.1,
    borderColor: '#FFFFFF',
  },

  smallExtraDark: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },

  smallGradient: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  smallCardText: {
    color: colors.darkBlack,
    fontSize: 14,
    fontWeight: '700',
  },
  // ===========
  //   row: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   marginBottom: 4,
  // },

  titleText: {
    color: colors.darkBlack,
    fontSize: 18,
    fontWeight: '800',
    flex: 1,
    marginRight: 6,
  },

  ratingBox: {
    backgroundColor: '#1faa59',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },

  // ratingText: {
  //   color: '#fff',
  //   fontSize: 11,
  //   fontWeight: '700',
  // },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  metaText: {
    color: '#1faa59',
    fontSize: 12,
    fontWeight: '800',
  },

  dot: {
    color: '#999',
    marginHorizontal: 6,
    fontSize: 12,
  },

  offerTexttt: {
    color: colors.brandPrimary,
    fontSize: 12,
    fontWeight: '800',
  },
});
