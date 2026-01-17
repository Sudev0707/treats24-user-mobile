import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.bgOffWhiteSecondary,
    // paddingBottom:50
  },
  section: {
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: colors.background,
    marginBottom: 8,

    // Android
    elevation: 1,

    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    borderWidth: 0.8,
    borderColor: colors.borderLight,

    // important for iOS rounded corners
    overflow: 'hidden',
      paddingVertical: 9,
  },

  sectionTitle: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
    // marginBottom: 15,
    borderRadius: 15,
  },
  faqItem: {
    marginBottom: 15,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  contactText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  whatsappButton: {
    backgroundColor: '#1ebb57', // WhatsApp green color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  whatsappButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:fonts.family.medium
  },
  searchBar: {
    height: 40,
    borderColor: colors.textSecondary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: colors.background,
    color: colors.textPrimary,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 9,
    borderWidth: 0.1,
  },
  expandIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  expandIconSmall: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  policyLink: {
    fontSize: 16,
    color: colors.brandPrimary,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});

export default styles;
