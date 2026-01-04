import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const { width: screenWidth } = Dimensions.get('window');

const DashboardStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.bgOffWhiteSecondary,
  },
  container: {
    flex: 1,
    // backgroundColor: colors.brandPrimarySoft,
    // borderWidth:1,
    top: -20,
    borderRadius: 20,
  },
  headerContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    padding: 14,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingBottom: 35,
    zIndex: 10,
  },

  dashboardBanner: {
    borderWidth: 0,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 14,
  },
  BannerHolder: {
    width: screenWidth,
    height: 180,
    // borderWidth:1,
    overflow: 'hidden',
    borderRadius: 15,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  // headerWrapper: {
  //   backgroundColor: colors.background, // same as root background
  //   paddingTop: 0,
  //   // bottom shadow here
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 6 },
  //   shadowOpacity: 0.12,
  //   shadowRadius: 8,
  //   elevation: 8, // Android shadow
  // },

  // mainDashboardHeader: {
  //   paddingTop: 6,
  //   paddingBottom: 18,
  //   paddingHorizontal: 16,
  //   backgroundColor: colors.background,

  //   borderBottomLeftRadius: 20,
  //   borderBottomRightRadius: 20,
  // },

  // dashboardHeaderContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   // paddingHorizontal: 16,
  //   paddingVertical: 12,
  //   // backgroundColor: 'red',
  //   // borderBottomWidth: 1,
  //   marginBottom: 9,
  //   borderBottomColor: colors.borderMuted,
  // },

  dashboardHeaderLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dashboardHeaderRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  scrollContent: {
    // flex: 1,
    paddingHorizontal: 16,
    paddingTop: 35,
    paddingBottom: 80,
    // backgroundColor: colors.backgroundSoft,
    // backgroundColor: colors.background,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTextGroup: {
    flex: 1,
  },
  welcomeText: {
    fontSize: fonts.size.md,
    color: colors.textSecondary,
  },
  userName: {
    fontSize: fonts.size['2xl'],
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
    marginTop: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  locationLabel: {
    fontSize: fonts.size.sm,
    color: colors.textMuted,
    marginRight: 4,
  },
  locationValue: {
    fontSize: fonts.size.sm,
    color: colors.textPrimary,
    fontWeight: fonts.weight.medium,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.textOnBrand,
    fontWeight: fonts.weight.bold,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 7,
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: fonts.size.md,
    color: colors.textMuted,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    // borderWidth:1
  },
  sectionTitle: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
  },
  sectionAction: {
    fontSize: fonts.size.sm,
    color: colors.brandPrimary,
    fontWeight: fonts.weight.bold,
  },
  chipsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chip: {
    // paddingStart: 4,
    // paddingEnd: 8,
    // paddingVertical: 4,
    padding: 5,
    borderRadius: 9,
    backgroundColor: colors.background,
    marginRight: 8,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 1,
    borderWidth: 0.9,
    borderColor: colors.background,
    overflow: 'hidden',
  },

  chipActive: {
    borderWidth: 0.9,
    borderColor: colors.brandPrimary,
    shadowColor: '#ffffffff',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,

    elevation: 2,
  },
  chipText: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    fontWeight: fonts.weight.bold,
  },
  chipTextActive: {
    color: colors.textBrand,
    fontWeight: '800',
  },
  restaurantCard: {
    width: 250,
    height: 220,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: colors.card,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 1,
  },
  restaurantImagePlaceholder: {
    height: 120,
    backgroundColor: colors.borderMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantImageText: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  restaurantMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: fonts.size.sm,
    color: colors.brandPrimary,
    marginRight: 8,
    fontWeight: fonts.weight.semibold,
  },
  dotSeparator: {
    width: 3,
    height: 3,
    borderRadius: 999,
    backgroundColor: colors.divider,
    marginHorizontal: 4,
  },
  metaText: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
  },
  priceText: {
    fontSize: fonts.size.sm,
    color: colors.textPrimary,
    fontWeight: fonts.weight.medium,
    marginTop: 2,
  },
  deliveryTag: {
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
    backgroundColor: colors.successSoft,
  },

  addressWrapper: {
    flex: 1,
  },
  deliveryTagText: {
    fontSize: fonts.size.xs,
    color: colors.success,
    fontWeight: fonts.weight.medium,
  },
  horizontalList: {
    marginBottom: 24,
  },
  nearbyList: {
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 4,
  },

  deliverySubtitle: {
    fontSize: 13,
    color: '#6D6D6D',
    marginTop: -2,
  },

  // avatar: {
  //   width: 42,
  //   height: 42,
  //   borderRadius: 21,
  //   backgroundColor: '#FF7A00',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // avatarText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
  viewAllChip: {
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
  },

  viewAllText: {
    fontWeight: '600',
    color: '#333',
  },
  // Inline styles moved from Dashboard.tsx
  LinearGradientHeader: {
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    paddingHorizontal: 16,
    overflow: 'hidden',
    shadowColor: '#000', // iOS
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    zIndex: 9,
  },
  headerShadow: {
    height: 1,
    shadowColor: '#000', // iOS
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
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
  horizontalRow: {
    flexDirection: 'row',
  },
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
  ratingTextWhite: {
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
  CardContainer: {
    width: '100%',
    height: 240,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  smallImage: {
    flex: 1,
    justifyContent: 'flex-end',
    borderColor: '#FFFFFF',
  },
  smallImageRadius: {
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
  ratingBox: {
    backgroundColor: '#1faa59',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  titleText: {
    color: colors.darkBlack,
    fontSize: 18,
    fontWeight: '800',
    flex: 1,
    marginRight: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
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
});

export default DashboardStyles;
