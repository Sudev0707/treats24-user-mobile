import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
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
    fontFamily:fonts.family.regular
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
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '47%',
    // margin: 2,
    marginBottom: 10,
    padding: 1,
    elevation: 2,
    shadowColor: '#0000009a',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  foodImageBox: {
    width: '100%',
    height: 140,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
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
    justifyContent: 'space-between',
    padding: 10,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  veg: {
    fontSize: fonts.size.sm,
    color: '#2ecc71',
    fontFamily: fonts.family.medium,
  },

  rating: {
    fontSize: 12,
    color: '#555',
  },

  Foodtitle: {
    fontSize: fonts.size.sm,
    // fontWeight: '700',
    color: '#222',
    marginVertical: 4,
    fontFamily: fonts.family.medium,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  price: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: '#000',
  },
  actionBox: {
    // width: 50,
    height: 30,
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
    backgroundColor: colors.brandPrimary,
    padding:5,
    width:35
  },

  addText: {
    color: colors.brandPrimary,
    // fontWeight: '800',
    fontSize: 13,
    fontFamily: fonts.family.medium,
  },

  qtyBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.brandPrimary,
    backgroundColor: colors.brandPrimary,
    borderRadius: 6,
    width:74
  },

  qtyBtnTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:5
  },
  qtyBtn: {
    width: 10,
    height: 10,
    tintColor: '#fff',
  },

  qtyText: {
    flex: 1,
    textAlign: 'center',
    alignItems:'center',
    color: '#fff',
    fontSize: fonts.size.md,
    fontFamily:fonts.family.regular,
    // borderWidth:1,
    paddingTop:4,
    paddingHorizontal:6
  },
  countText: {
    color: colors.brandPrimary,
  },
  contentContainer: {
    backgroundColor: colors.bgOffWhiteSecondary,
    paddingTop: 15,
    // paddingHorizontal: 20,
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
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: colors.borderLight,
    padding: 6,
    zIndex: 1,
  },
  favoriteIcon: {
    fontSize: 16,
  },
  addIcon: {
    width: 15,
    height: 15,
    // tintColor: colors.brandPrimary,
  },
});

export const RestaurantHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    //  borderWidth:1,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: colors.background,
  },
  leftText: {
    fontSize:fonts.size.md,
    fontFamily:fonts.family.medium,
    color: '#000',
  },
  placeText: {
    fontSize:fonts.size.sm,
     fontFamily:fonts.family.regular,
    color: '#000',
  },
  headerContainer: {
    // backgroundColor: colors.background,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // paddingHorizontal: 10,
    // paddingTop: 12,
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
