import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const checkoutStyle = StyleSheet.create({
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
    paddingTop: 10, // Adjust for header
    backgroundColor: colors.backgroundSoft,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  addressContainer: {
    // backgroundColor: colors.background,
    borderRadius: 10,
    // padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // borderTopWidth: 1,
  },
  selectedAddress: {
    borderColor: colors.brandPrimary,
    borderWidth: 2,
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.brandPrimary,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: colors.background,
    fontSize: 18,
    fontFamily: fonts.family.bold,
  },
  paymentOption: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedPayment: {
    borderColor: colors.brandPrimary,
    borderWidth: 2,
  },
  paymentContent: {
    flex: 1,
  },
  paymentName: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    marginBottom: 5,
  },
  paymentDescription: {
    fontSize: 14,
    fontFamily: fonts.family.regular,
    color: colors.textSecondary,
  },
  footer: {
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 20,
    // backgroundColor: colors.background,
   backgroundColor: colors.brandPrimarySoft,
    // borderTopWidth: 1,
    // borderTopColor: '#eee',
  },
  placeOrderBtn: {
    backgroundColor: colors.brandPrimary,
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  placeOrderBtnText: {
    color: colors.background,
    fontSize: 16,
    fontFamily: fonts.family.bold,
  },
});
