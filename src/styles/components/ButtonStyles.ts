import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const ButtonStyles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:50,
    fontFamily:fonts.family.medium
  },
  filled: {
    backgroundColor: colors.brandPrimary,
  },
  filledDisabled: {
    backgroundColor: colors.mutedBackground,
    // backgroundColor: colors.brandPrimary,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.brandPrimary,
  },
  filledText: {
    color: colors.textOnBrand,
    fontSize: fonts.size.lg,
    // fontWeight: fonts.weight.semibold,
    fontFamily:fonts.family.medium
  },
  textDisabled: {
    color: colors.textMuted,
     fontSize: fonts.size.lg,
    // fontWeight: fonts.weight.semibold,
    fontFamily:fonts.family.medium
  },
  outlinedText: {
    color: colors.brandPrimary,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.semibold,
  },
});

export default ButtonStyles;
