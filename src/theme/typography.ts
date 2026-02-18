import { TextStyle } from 'react-native';
import colors from './colors';
import fonts from './fonts';

type TextVariant = {
  [key: string]: TextStyle;
};

const typography: TextVariant = {
  // Headings
  heading1: {
    fontSize: fonts.size['3xl'],
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
  },
  heading2: {
    fontSize: fonts.size['2xl'],
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
  },
  heading3: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.semibold,
    color: colors.textPrimary,
  },

  // Body
  body: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.regular,
    color: colors.textSecondary,
  },
  bodyStrong: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semibold,
    color: colors.textPrimary,
  },
  caption: {
    fontSize: fonts.size.xs,
    color: colors.textMuted,
  },

  // Buttons
  buttonPrimary: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.semibold,
    color: colors.textOnBrand,
  },
  buttonSecondary: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.semibold,
    color: colors.textPrimary,
  },
};

export default typography;


