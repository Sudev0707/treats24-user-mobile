import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const locationStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 48,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
    paddingVertical: 0,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 8,
  },

  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 14,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },

  actionText: {
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
    color: '#333',
  },

  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },

  //   --------------

  currentAddressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    padding: 14,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingBottom: 35,
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    // borderWidth:1,
    height: 50,
  },

  locationIcon: {
    backgroundColor: colors.brandPrimarySoft,
    padding: 8,
    borderRadius: 10,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  addressTextContainer: {
    flex: 1,
  },

  currentAddressTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#222',
  },

  currentAddressText: {
    fontSize: 13,
    color: '#505050ff',
    marginTop: 2,
    fontWeight: 800,
  },

  changeBtn: {
    marginTop: 12,
    alignSelf: 'flex-end',
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#ff6a00',
    borderRadius: 20,
  },

  changeBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  //
  /* Buttons */
  buttonRow: {
    flexDirection: 'row',
    marginTop: 16,
  },

  confirmBtn: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff6a00',
    alignItems: 'center',
  },

  confirmBtnText: {
    color: '#ff6a00',
    fontWeight: '700',
  },

  proceedBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#ff6a00',
    alignItems: 'center',
  },

  proceedBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default locationStyles;
