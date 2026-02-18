import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    // padding: 20,
    paddingBottom: 50,
    backgroundColor: colors.bgOffWhiteSecondary,
    // borderTopStartRadius:30,
    // borderTopEndRadius:30,
    // borderWidth: 1,
  },
  header: {
    // alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    // borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,

    // justifyContent: 'center',
    // alignContent:'center'
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.brandPrimarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    // borderWidth: 1,
  },
  userDetails: {
    // borderWidth: 1,
    left: 10,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.brandPrimary,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  userMobile: {
    fontSize: 15,
    fontWeight: '900',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  menuSection: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderMuted,
  },
  menuItemText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  menuItemArrow: {
    fontSize: 24,
    color: colors.textMuted,
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: colors.danger,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textOnBrand,
  },
  contentContainer: {
    flex: 1,
    // borderWidth: 1,
    paddingHorizontal: 20,
  },
  viewContainer: {
    borderWidth: 1,
    // padding:20,
    borderRadius: 10,
    //  backgroundColor: '#fff',
    overflow: 'hidden',
  },

  //

  versionContainer: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 16,
    // backgroundColor: "#f7f7f7",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  versionNumber: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  rowContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  rowViewContainer: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 18,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIconBox: {
    backgroundColor: colors.brandPrimarySoft,
    padding: 8,
    borderRadius: 10,
  },
  rowLabel: {
    marginLeft: 14,
    fontSize: fonts.size.md,
    color: '#000',
    fontFamily: fonts.family.regular,
  },
  rowSeparator: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 16,
  },
});

export default ProfileStyles;
