import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const OTPVerificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: '42%',
    backgroundColor: colors.brandPrimary,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 32,
  },
  headerBrandText: {
    fontSize: fonts.size['3xl'],
    fontWeight: fonts.weight.bold,
    color: colors.textOnBrand,
    letterSpacing: 1.2,
  },
  headerDecorRow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    // paddingHorizontal: 20,
    // paddingTop: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    // paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
    // marginTop: -48,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.08,
    // shadowRadius: 16,
    // elevation: 6,
  },
  title: {
    fontSize: fonts.size.xl,
    // fontWeight: fonts.weight.bold,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
    // textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    // textAlign: 'center',
    marginBottom: 32,
    fontFamily: fonts.family.regular,
  },
  phoneNumber: {
     fontSize: fonts.size.sm,
    color: colors.darkBlack,
    fontFamily: fonts.family.semibold,
    paddingStart:8
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    //  borderWidth: 1,
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
    // fontWeight: fonts.weight.medium,
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
    // borderWidth: 1,
    marginTop: 15,
  },
  resendText: {
    // fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: colors.textSecondary,
    // marginBottom: 8,
  },
  resendButton: {
    // paddingVertical: 8,
    paddingHorizontal: 16,
  },
  resendButtonText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: colors.brandPrimary,
    // fontWeight: fonts.weight.medium,
  },
  primaryButton: {
    backgroundColor: colors.brandPrimary,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 16,
  },
  primaryButtonText: {
    color: colors.textOnBrand,
    fontSize: fonts.size.lg,
    // fontWeight: fonts.weight.semibold,
    fontFamily: fonts.family.regular,
  },
  footerText: {
    fontSize: fonts.size.xs,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 12,
    fontFamily: fonts.family.regular,
  },
});

export default OTPVerificationStyles;
