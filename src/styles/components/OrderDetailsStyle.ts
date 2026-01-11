import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import RowColStyles from '../../theme/RowColStyles';

const OrderDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
    // borderWidth: 1,
    backgroundColor: colors.bgOffWhiteSecondary,
  },
  scrollContainer: {
    // flex: 1,
    paddingHorizontal: 15,
    // paddingTop: 20,
    borderRadius: 20,
    paddingBottom: 50,
    backgroundColor: colors.bgOffWhiteSecondary,
    // borderWidth: 1,
    height: '100%',
  },
   userDetailContainer: {
    // flex: 1,
    // borderWidth: 1,
    // backgroundColor: colors.background,
    // paddingVertical: 20,
    // paddingHorizontal: 20,
    // borderTopStartRadius: 30,
    // borderTopEndRadius: 30,
    borderRadius: 10,
    marginBottom: 20,
    // elevation: 1,
    marginTop:4
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    // marginTop:9,
    backgroundColor: colors.background,
    borderRadius: 8,
    // padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
     borderBottomWidth:4,
      borderBottomColor: colors.borderLight,
  },
  activeTab: {
    borderBottomWidth:4,
    borderBottomColor: colors.brandPrimary,
  },
  tabText: {
    fontSize: fonts.size.md,
     fontFamily:fonts.family.medium,
    color: colors.textSecondary,
  },
  activeTabText: {
    color: colors.brandPrimary,
    fontFamily:fonts.family.medium

  },
  orderItem: {
    backgroundColor: colors.card,
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  restaurantId: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  status: {
    fontSize: 14,
    color: colors.brandPrimary,
    marginBottom: 2,
  },
  total: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  noOrders: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 20,
  },
});

export default OrderDetailsStyle;
