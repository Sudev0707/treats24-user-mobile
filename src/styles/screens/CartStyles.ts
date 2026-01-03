import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const cartStyle = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 10,
    // borderWidth: 1,
    backgroundColor: colors.backgroundSoft,
  },
  productContainer: {
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.background,
    elevation: 1,
    paddingBottom: 9,
    overflow: 'hidden',
    padding: 15,
    marginBottom: 20,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 100,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#270303ff',
    fontFamily: fonts.family.regular,
  },

  // ======
  cartItem: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    // borderRadius: 10,
    // padding: 15,
    // marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 3,
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: 12,
    marginHorizontal: 10,
  },
  foodImageBox: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  itemImage: {
    width: '80%',
    height: '80%',
    borderRadius: 8,
    //
  },
  dummyItemImage: {
    width: '60%',
    height: '60%',
  },
  itemDetails: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    // marginBottom: 5,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 8,
    // borderWidth: 1,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: fonts.family.medium,
    color: colors.brandPrimary,

    // marginBottom: 10,
    // borderWidth: 1,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 10,
    padding: 2,
    backgroundColor: colors.background,
    // elevation:2
  },
  quantityBtn: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: colors.brandPrimarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtnText: {
    color: colors.textBrand,
    fontSize: 18,
    fontFamily: fonts.family.bold,
  },
  quantityText: {
    fontSize: 14,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
    marginHorizontal: 15,
    fontWeight: 800,
  },
  removeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    // backgroundColor: '#ff4444',
    borderRadius: 5,
    // borderWidth: 1,
    height: 28,
    width: 28,
  },
  removeBtnText: {
    color: colors.textBrand,
    fontSize: 12,
    fontFamily: fonts.family.bold,
  },
  totalContainer: {
    // marginTop: 20,
    // paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',

    paddingBottom: 15,
    paddingTop:10,
    paddingHorizontal: 20,
    backgroundColor: colors.brandPrimarySoft,
    // marginTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 20,
  },
  totalText: {
    fontSize: 20,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
    // marginBottom: 15,
  },
  checkoutBtn: {
    backgroundColor: colors.brandPrimary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 20,
    width: '100%',
  },
  checkoutBtnText: {
    color: colors.background,
    fontSize: 16,
    fontFamily: fonts.family.bold,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#777',
    fontSize: 16,
  },
  fullcontainer: {
    padding: 20,
    backgroundColor: colors.backgroundSoft,
  },
  paymentSummary: {
    // borderWidth: 1,

    padding: 20,
    // backgroundColor: colors.background,
  },
  productinfo: {
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.background,
    elevation: 1,
    paddingBottom: 9,
    // overflow: 'hidden',
    padding: 15,
    // marginBottom: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  paymentLabel: {
    fontSize: 14,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
    fontWeight: 'bold'
  },
  paymentValue: {
    fontSize: 14,
    fontFamily: fonts.family.semibold,
    color: colors.brandPrimary,
    fontWeight: 'bold'
  },


  // Styles for random items FlatList
  randomItemContainer: {
    marginRight: 15,
    alignItems: 'center',

    // borderWidth: 1,
    // padding:10,
    borderRadius: 10,
    width: 120,
    // backgroundColor: colors.background,
  },
  randomItemImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: colors.background,
     borderColor:colors.borderLight
  },
  randomItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  randomItemType: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  randomItemPrice: {
    fontSize: 14,
    color: colors.brandPrimary,
    fontWeight: 'bold',
  },
  randomItemControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  addButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.brandPrimary,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityButton: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: colors.brandPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityDisplay: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
