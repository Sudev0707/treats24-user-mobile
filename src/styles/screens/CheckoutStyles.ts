import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const checkoutStyle = StyleSheet.create({
  // Header
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

  // Main Container
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: colors.bgOffWhiteSecondary,
  },

  // Sections
  section: {
    marginBottom: 16,
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: fonts.family.regular,
    color: colors.textSecondary,
    marginTop: 4,
  },

  // Order Summary Section
  orderSummarySection: {
    marginBottom: 16,
  },
  orderItemsContainer: {
    maxHeight: 200,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderMuted,
  },
  orderItemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.muted,
  },
  orderItemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  orderItemName: {
    fontSize: 14,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
  },
  orderItemQuantity: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  orderItemPrice: {
    fontSize: 14,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
  },
  viewMoreItems: {
    textAlign: 'center',
    color: colors.brandPrimary,
    fontSize: 14,
    fontFamily: fonts.family.semibold,
    marginTop: 10,
  },

  // Coupon Section
  couponSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.mutedBackground,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.brandPrimary,
    borderStyle: 'dashed',
  },
  couponIcon: {
    marginRight: 10,
  },
  couponText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.family.semibold,
    color: colors.brandPrimary,
  },
  couponApplyBtn: {
    backgroundColor: colors.brandPrimary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  couponApplyText: {
    color: colors.textWhite,
    fontSize: 12,
    fontFamily: fonts.family.bold,
  },
  couponInput: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.borderMuted,
    marginRight: 10,
  },
  couponApplied: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.successSoft,
    borderRadius: 8,
    padding: 10,
  },
  couponAppliedText: {
    flex: 1,
    fontSize: 14,
    color: colors.success,
    fontFamily: fonts.family.semibold,
  },

  // Address Section
  addressContainer: {
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
  },
  selectedAddress: {
    borderColor: colors.brandPrimary,
    borderWidth: 2,
  },

  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bgOffWhiteSecondary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginBottom: 12,
  },

  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    // borderWidth:0.6
  },

  addressItemActive: {
    // borderWidth: 0.2,
    // borderColor: colors.brandPrimary,
  },

  // leftSection: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 10,
  // },

  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: colors.brandPrimarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textSection: {
    flex: 1, // ← prevents chevron from getting pushed out
  },

  mainText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
    color: '#000',
  },

  subText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: '#8e8e8e',
    marginTop: 2,
    flexShrink: 1,
    lineHeight: 16,
  },
  addAddressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderWidth: 1,
    borderColor: colors.brandPrimary,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  addAddressText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: fonts.family.semibold,
    color: colors.brandPrimary,
  },
  addressDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  addressIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.mutedBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addressContent: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 16,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  addressChangeBtn: {
    color: colors.brandPrimary,
    fontSize: 14,
    fontFamily: fonts.family.semibold,
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    // backgroundColor: colors.brandPrimary,
    backgroundColor: colors.success,
    borderRadius: 15,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: colors.background,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
  },

  // Tip Section
  tipSection: {
    marginBottom: 16,
  },
  tipOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  tipButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderMuted,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  tipButtonSelected: {
    borderColor: colors.brandPrimary,
    backgroundColor: colors.brandPrimarySoft,
  },
  tipAmount: {
    fontSize: 16,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
  },
  tipLabel: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 2,
  },
  customTipInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  customTipField: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.borderMuted,
  },

  // Payment Options Section
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.borderMuted,
  },
  selectedPayment: {
    borderWidth: 1,
    // borderColor: colors.brandPrimary,
    // backgroundColor: colors.brandPrimarySoft, 
    borderColor: colors.success,
    backgroundColor: colors.successSoft,
  },
  paymentIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: colors.muted,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentIconContainerSelected: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentContent: {
    flex: 1,
  },
  paymentName: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
  },
  paymentDescription: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.medium,
    color: colors.textSecondary,
    // marginTop: 1,
  },

  // Price Breakdown Section
  priceBreakdown: {
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  priceLabel: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    fontFamily: fonts.family.regular,
  },
  priceValue: {
    fontSize: fonts.size.sm,
    color: colors.textPrimary,
    fontFamily: fonts.family.medium,
  },
  discountPrice: {
    color: colors.success,
  },
  separator: {
    height: 1,
    backgroundColor: colors.borderMuted,
    marginVertical: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  totalLabel: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
  },
  totalValue: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.brandPrimary,
  },

  // Footer
  footer: {
    paddingBottom: 20,
    paddingTop: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.borderMuted,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    flex: 1,
  },
  footerItemCount: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    fontFamily: fonts.family.regular,
  },
  footerTotal: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    marginTop: 2,
  },
  placeOrderBtn: {
    backgroundColor: colors.brandPrimary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeOrderBtnText: {
    color: colors.background,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
  },
  footerArrow: {
    marginLeft: 8,
  },
});
