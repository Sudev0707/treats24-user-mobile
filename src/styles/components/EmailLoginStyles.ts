import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const EmailLoginStyles = StyleSheet.create({
  emailLoginTitle: {
    fontSize: fonts.size.md,
    // fontWeight: '600',
    marginLeft: 12,
    fontFamily: fonts.family.regular,
  },
  subtitle: {
    fontSize: fonts.size.sm,
    color: '#666',
    marginTop: 30,
    marginBottom: 15,
    fontFamily: fonts.family.regular,
  },
  primaryButton: {
    backgroundColor: colors.brandPrimary,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.borderMuted,
    backgroundColor: colors.background,
    borderRadius: 12,

    textAlign: 'center',
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.medium,
    color: colors.textPrimary,
  },
  otpInputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default EmailLoginStyles;
