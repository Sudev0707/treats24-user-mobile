import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const EmailOTPVerificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    paddingTop: 24,
    paddingBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
  },
  title: {
    fontSize: fonts.size.xl,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    marginBottom: 32,
    fontFamily: fonts.family.regular,
  },
  emailAddress: {
    fontSize: fonts.size.sm,
    color: colors.darkBlack,
    fontFamily: fonts.family.semibold,
    paddingStart: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderMuted,
    backgroundColor: colors.background,
    textAlign: 'center',
    fontSize: fonts.size.xl,
    fontFamily: fonts.family.regular,
    color: colors.textPrimary,
    alignSelf: 'center',
  },
  otpInputFocused: {
    borderColor: colors.brandPrimary,
  },
  otpInputError: {
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    marginTop: 8,
    textAlign: 'center',
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 24,
    flexDirection: 'row',
    marginTop: 15,
  },
  resendText: {
    fontFamily: fonts.family.regular,
    color: colors.textSecondary,
  },
  resendButton: {
    paddingHorizontal: 16,
  },
  resendButtonText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: colors.brandPrimary,
  },
  footerText: {
    fontSize: fonts.size.xs,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 12,
    fontFamily: fonts.family.regular,
  },
});

export default EmailOTPVerificationStyles;
