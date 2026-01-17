import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const couponItemStyles = StyleSheet.create({
  couponItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  couponItemLeft: {
    flex: 1,
  },
  couponItemCode: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bold,
    color: colors.brandPrimary,
    marginBottom: 2,
  },
  couponItemDesc: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.regular,
    color: colors.textSecondary,
  },
  couponItemApply: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.medium,
    color: colors.brandPrimary,
  },
});
