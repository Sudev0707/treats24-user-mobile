import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const AddressSelectionModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  box: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    maxHeight: '70%',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.borderMuted,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    marginBottom: 16,
    textAlign: 'center',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.bgOffWhiteSecondary,
    borderRadius: 12,
    marginBottom: 10,
  },
  addressRowSelected: {
    borderWidth: 1,
    borderColor: colors.brandPrimary,
    backgroundColor: colors.brandPrimarySoft,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.brandPrimarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textSection: {
    flex: 1,
  },
  mainText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    // marginBottom: 4,
  },
  subText: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.regular,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.brandPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: colors.textWhite,
    fontSize: 14,
    fontFamily: fonts.family.bold,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: colors.brandPrimary,
    borderRadius: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: colors.textWhite,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
  },
  addAddressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
});

export default AddressSelectionModalStyles;
