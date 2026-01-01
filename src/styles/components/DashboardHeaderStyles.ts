import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const DashboardHeaderStyles = StyleSheet.create({
  LinearGradientHeader: {
    // borderWidth: 1,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingTop: 50,

    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
    zIndex:4,
    backgroundColor:colors.background
  },

  mainDashboardHeader: {
    paddingHorizontal: 20,
    // borderBottomWidth: 0.5,
    // backgroundColor: colors.background,
    backgroundColor: 'transparent',
    paddingTop: 9,
    paddingBottom: 25,

    // paddingHorizontal: 16,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    // elevation:4
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 12 },
    // shadowOpacity: 0.12,
    // shadowRadius: 16,
    // elevation: 18,
  },
  dashboardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  bottomShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -6,
    height: 26,
    backgroundColor: 'transparent',

    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 18,
  },

  addressWrapper: {
    // flex: 1,
    //  borderWidth:1
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth:1
  },

  addressText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.darkBlack,
    marginRight: 2,
    // paddingTop:0
  },

  deliverySubtitle: {
    fontSize: 13,
    color: '#5d5d5dff',
    marginTop: 2,
    fontWeight: '800',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: '#1E1E2D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: colors.card,
    borderRadius: 7,
      backgroundColor: '#ffffffff',
      overflow:'hidden',
    paddingHorizontal: 1,
    paddingVertical: 1,
    // marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    backgroundColor: '#ffffffff',
    // borderRadius: 16,
    paddingHorizontal: 16,
    height: 44,
    fontSize: 16,
    color: '#22223B',
  },
});

export default DashboardHeaderStyles;
