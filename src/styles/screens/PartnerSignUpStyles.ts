import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,
    //  backgroundColor: colors.bgOffWhiteSecondary,
  },
  container: {
    flex: 1,
    // backgroundColor: colors.background,
     backgroundColor: colors.bgOffWhiteSecondary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor:colors.brandPrimary
  },
  headerLeft: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontFamily:fonts.family.medium,
    color: colors.darkBlack,
  },
  locationText: {
    fontSize: fonts.size.md,
    color: colors.darkBlack,
    fontFamily:fonts.family.regular
  },
  notificationButton: {
    position: 'relative',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#ff0000',
    fontSize: 12,
    fontFamily:fonts.family.regular
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#F97316',
    fontSize: 18,
    fontWeight: '600',
  },
  innerContainer: {
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
    // borderWidth: 1
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.brandPrimary,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: colors.bgInput,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: colors.darkBlack,
    fontFamily:fonts.family.regular
  },
  button: {
    backgroundColor: colors.brandPrimary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signInLink: {
    color: '#F97316',
    fontSize: 16,
    marginTop: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: colors.darkBlack,
    marginBottom: 5,
    fontFamily:fonts.family.regular
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.brandPrimary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: colors.brandPrimary,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    color: colors.darkBlack,
    fontSize: fonts.size.md,
     fontFamily:fonts.family.regular
  },
  fssaiContainer: {
    marginBottom: 20,
  },
  fssaiButtons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  fssaiButton: {
   backgroundColor: colors.brandPrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  fssaiButtonSelected: {
    backgroundColor: '#F97316',
  },
  fssaiButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: colors.brandPrimary,
    fontSize: fonts.size.md,
    textDecorationLine: 'underline',
    fontFamily:fonts.family.regular
  },
  bankSelectionInput: {
    width: '100%',
    height: 50,
    backgroundColor: colors.bgInput,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: colors.darkBlack,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bankSelectionText: {
    color: colors.darkBlack,
     fontFamily:fonts.family.regular
  },
  bankSelectionTextPlaceholder: {
    color: '#999',
    fontFamily:fonts.family.regular
  },
  errorText: {
    color: '#ff0000',
    fontSize: fonts.size.sm,
    marginTop: 0,
    marginBottom: 10,
    fontFamily:fonts.family.regular
  },
  subtitle: {
    fontSize: 18,
    color: colors.darkBlack,
    marginBottom: 30,
    textAlign: 'center',
     fontFamily:fonts.family.regular,
  },
  detailSection: {
    backgroundColor: colors.background,
    borderRadius: 12,
    // padding: 20,
    marginBottom: 20,
    elevation:2,
    overflow:'hidden',
    borderWidth:1,
    borderColor:colors.borderLight

  },
  innerDetailSection:{
 padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F97316',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  detailLabel: {
    fontSize: fonts.size.md,
    color: colors.darkBlack,
    fontFamily:fonts.family.regular,
    flex: 1,
  },
  detailValue: {
    fontSize: fonts.size.md,
    color: colors.textSecondary,
    fontFamily:fonts.family.regular,
    flex: 2,
    textAlign: 'right',
  },
  reviewText:{
    backgroundColor:colors.brandPrimarySoft,
    padding:6,
    color:colors.textSecondary,
    fontFamily:fonts.family.regular,
    fontSize:fonts.size.sm
  }
});
