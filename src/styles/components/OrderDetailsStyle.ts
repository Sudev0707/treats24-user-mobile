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
    marginTop: 4,
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
    borderBottomWidth: 4,
    borderBottomColor: colors.borderLight,
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: colors.brandPrimary,
  },
  tabText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.textSecondary,
  },
  activeTabText: {
    color: colors.brandPrimary,
    fontFamily: fonts.family.medium,
  },
  orderItem: {
    backgroundColor: colors.card,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  orderItemTouchable: {
    padding: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 8,
  },
  orderId: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
  },
  statusBadge: {
    paddingHorizontal: 8,
    // paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: '#FFF',
    textTransform: 'capitalize',
  },
  restaurantName: {
    fontSize: 14,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
    // marginBottom: 4,
  },
  itemSummary: {
    fontSize: 13,
    color: colors.textSecondary,
    // marginBottom: 8,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontFamily: fonts.family.semibold,
    color: colors.brandPrimary,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  trackButton: {
    backgroundColor: colors.brandPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flex: 1,
    marginRight: 4,
    borderRadius: 12,
  },
  trackButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: fonts.family.medium,
    marginLeft: 8,
  },
  reorderButton: {
    backgroundColor: colors.textSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  reorderButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: fonts.family.medium,
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingBlock: 7,
    // borderWidth:0.7
  },
  cancelButton: {
    backgroundColor: '#DC143C', // Crimson red
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flex: 1,
    marginLeft: 4,
    borderRadius: 12,
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: fonts.family.medium,
    marginLeft: 8,
  },
  noOrders: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 20,
  },
});

export default OrderDetailsStyle;
