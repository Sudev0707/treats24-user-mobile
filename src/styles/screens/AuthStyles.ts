import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brandPrimary,
    // backgroundColor: colors.brandPrimary,
    // borderWidth: 5,
    borderColor: colors.borderMuted,
    // borderRadius: 32,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // margin: 16,
    shadowColor: '#000000',
  },
  scrollContent: {
    flexGrow: 1,
    // borderWidth:1
  },
  header: {
    // height: '42%',
    // backgroundColor: colors.brandPrimary,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 32,
    // borderWidth:1
  },
  headerBgImg: {
    opacity: 0.32,
  },
  // Background moving design
  headerDecorRow: {
    position: 'absolute',
    top: -80,
    left: -120,
    width: 350,
    height: 350,
    backgroundColor: '#ffffff15',
    borderRadius: 200,
    transform: [{ rotate: '15deg' }],
  },

  headerImage: {
    position: 'absolute',
    top: 15,
    right: -10,
    width: 210,
    height: 210,
    opacity: 0.93,
  },

  headerContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  headerBrandText: {
    fontSize: fonts.size['3xl'],
    // fontWeight: fonts.weight.bold,
    color: colors.textOnBrand,
    letterSpacing: 1.2,
    fontFamily: fonts.family.bold
  },  
  appTagline: {
    marginTop: 4, 
    fontSize: fonts.size.md,
    // fontWeight: fonts.weight.medium,
    color: colors.textOnBrand,
    fontFamily: fonts.family.semibold,
  },
  appSubTagline: {
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.regular,
    color: colors.textOnBrand + 'AA',
  },

  //  appTagline: {
  //   fontSize: fonts.size.lg,
  //   fontWeight: fonts.weight.bold,
  //   color: colors.textPrimary,
  //   textAlign: 'center',
  //   marginBottom: 4,
  // },
  // appSubTagline: {
  //   fontSize: fonts.size.lg,
  //   fontWeight: fonts.weight.bold,
  //   color: colors.textPrimary,
  //   textAlign: 'center',
  //   marginBottom: 20,
  // },
  contentWrapper: {
    paddingHorizontal: 24,
    paddingTop: 24, // important for scroll spacing
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.background,
    // borderWidth: 1,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
    marginTop: -48,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },

  authSubtitle: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:fonts.family.medium
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderMuted,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 16,
  },
  countryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 9,
    borderRadius: 9,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.borderMuted,
    marginRight: 10,
  },
  flagPlaceholder: {
    width: 20,
    height: 14,
    borderRadius: 2,
    backgroundColor: colors.brandPrimarySoft,
    marginRight: 6,
  },
  countryCodeText: {
    fontSize: fonts.size.md,
    color: colors.textPrimary,
    fontWeight: fonts.weight.medium,
  },
  phoneDivider: {
    width: 1,
    height: 18,
    backgroundColor: colors.borderMuted,
    marginHorizontal: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: fonts.size.md,
    color: colors.textPrimary,
  },
  primaryButton: {
    backgroundColor: colors.brandPrimary,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  primaryButtonText: {
    color: colors.textOnBrand,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.semibold,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  orDivider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderMuted,
  },
  orText: {
    marginHorizontal: 8,
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    fontFamily:fonts.family.medium
  },
  socialRow: {
    flexDirection: 'row',
    marginBottom: 16,
    // borderWidth:1,
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  socialText: {
    fontSize: fonts.size.md,
    color: colors.textPrimary,
  },
  footerText: {
    fontSize: fonts.size.xs,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 50,
  },
  footerLinksRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  footerLink: {
    fontSize: fonts.size.xs,
    color: colors.textPrimary,
    textDecorationLine: 'underline',
    marginHorizontal: 4,
  },
  //
  Rememberme: {
    marginBottom: 22,
  },
  ForgotPass: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 12,
    marginBottom: 12,
  },
  forgotPassText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.brandPrimary,
    textDecorationLine: 'underline',
    fontFamily:fonts.family.medium
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
    marginTop: 15,
  },
  socialBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5ff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  emailLoginTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.brandPrimary,
    marginStart: 15,
  },
});

export default AuthStyles;
