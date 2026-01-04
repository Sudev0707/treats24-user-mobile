import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';
const { height } = Dimensions.get('window');

export const RestaurantScreenStyle = StyleSheet.create({
  headerTop: {
    paddingTop: height * 0.35,
    zIndex: -9999,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    overflow: 'hidden',
  },
  headerImage: {
    height: height * 0.35,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    // flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // ==
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120, // small top fade
  },

  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 24,
  },

  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    // alignItems: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  Food: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  restauranttitle: {
    fontSize: 28,
    fontWeight: 800,
    color: colors.background,
  },
  ratingBox: {
    backgroundColor: '#1faa59',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  placeName: {
    color: '#ddd',
    fontSize: 15,
    fontWeight: 800,
  },
  distance: {
    color: '#ccc',
    fontSize: 15,
    fontWeight: 800,
  },
  categoryText: {
    color: '#ccc',
  },

  distanceRow: {
    marginTop: 6,
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },

  //====

  chipsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chip: {
    borderWidth: 1,
    padding: 7,
    borderColor: colors.borderLight,
    borderRadius: 9,
    backgroundColor: colors.background,
    // elevation: 4,
    flexDirection: 'row',
    marginRight: 6,
  },
  activeChip: {
    backgroundColor: colors.brandPrimarySoft,
    borderColor: colors.brandPrimary,
  },
  activeChipText: {
    color: colors.brandPrimary,
    fontWeight: 800,
  },
  ChipText: {
    color: colors.textSecondary,
    fontWeight: 800,
  },
  crossIcon: {
    color: colors.brandPrimary,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 800,
    height: 20,
  },

  // ====
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 5,
    padding: 10,
    elevation: 2,
    shadowColor: '#0000009a',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  foodImageBox: {
    width: 90,
    height: 90,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodimage: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: colors.backgroundLight,
  },
  dummyFoodImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    borderRadius: 10,
  },

  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  veg: {
    fontSize: 12,
    color: '#2ecc71',
    fontWeight: '600',
  },

  rating: {
    fontSize: 12,
    color: '#555',
  },

  Foodtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginVertical: 4,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  actionBox: {
    width: 90,
    height: 32,
    borderRadius: 6,
    overflow: 'hidden',
  },

  addBtn: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  addText: {
    color: colors.brandPrimary,
    fontWeight: '800',
    fontSize: 13,
  },

  qtyBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.brandPrimary,
    backgroundColor: colors.brandPrimary,
  },

  qtyBtn: {
    width: 28,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  qty: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  countText: {
    color: colors.brandPrimary,
  },
  contentContainer: {
    backgroundColor: colors.background,
    paddingTop: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 180,
  },
  deleiveryTime: {
    alignSelf: 'center',
    borderWidth: 0.5,
    padding: 15,
    borderColor: colors.borderLight,
    borderRadius: 50,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#ffe9d6',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeText: {
    fontWeight: 800,
    textAlign: 'center',
    paddingStart: 8,
    color: '#ff6a00',
  },
});

export const RestaurantHeaderStyle = StyleSheet.create({
  headerContainer: {
    // backgroundColor: colors.background,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 12,
    // paddingTop: StatusBar.currentHeight || 20,
    // borderBottomWidth: 0.5,
  },
  backBtn: {
    // borderWidth: 1,
    padding: 6,
    borderRadius: 50,
    borderColor: colors.borderLight,
    backgroundColor: colors.background,
  },
  saveBtn: {
    padding: 8,
    borderRadius: 50,
    borderColor: colors.borderLight,
    backgroundColor: colors.background,
  },
  backBtnIcon: {
    width: 24,
    height: 24,
  },
});
