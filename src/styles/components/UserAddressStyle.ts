import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import RowColStyles from '../../theme/RowColStyles';

const UserAddressStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgOffWhiteSecondary,
    paddingBottom: 80,
    borderRadius: 15,
  },
  scrollContainer: {
    padding: 15,
    borderRadius: 15,
  },
  userDetailContainer: {
    // flex: 1, // Removed to allow ScrollView to scroll properly
  },
  listContainer: {
    padding: 15,
  },
  addressItem: {
    marginBottom: 15,
    backgroundColor: colors.background,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    // shadowRadius: 2,
    overflow: 'visible',
  },
  addressActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    // borderWidth:0.9
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    // height: 50,
    // borderWidth: 0.8,
  },
  actionButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    // marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
  },
  actionText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
    color: colors.brandPrimary,
  },
  deleteButton: {
    backgroundColor: '#ffebee',
  },
  deleteText: {
    color: '#d32f2f',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingHorizontal:  20,
    paddingBottom:  20,
    paddingTop:9
  },
  addAddressButton: {
    backgroundColor: colors.brandPrimary,
    padding: 15,
    // paddingBottom: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  addAddressText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: Dimensions.get('window').height * 0.8,
    maxHeight: Dimensions.get('window').height * 0.9,
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  overlay: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  menu: {
    position: 'absolute',
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 120,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 5,
  },
  menuItemText: {
    fontSize: fonts.size.sm,
    color: colors.textPrimary,
    fontFamily: fonts.family.regular,
    marginLeft: 10,
  },
  addressItemInner: {
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressItemLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressItemLabelText: {
    fontSize: 16,
    fontFamily: fonts.family.regular,
    marginLeft: 10,
    color: colors.textPrimary,
  },
  addressItemDefaultText: {
    color: colors.brandPrimary,
  },
  addressItemNameText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  addressItemAddressText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  addressItemMenuButton: {
    height: 30,
    padding: 5,
  },
  addressItemMenuIcon: {
    width: 20,
    height: 20,
  },
});

export default UserAddressStyle;
