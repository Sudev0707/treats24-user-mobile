import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const LocationSelectorStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkBlack,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.bgOffWhiteSecondary,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f8f8ff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: colors.borderLight,
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
    fontWeight: 700,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.darkBlack,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkBlack,
    marginBottom: 10,
  },
  currentAddressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  locationIcon: {
    marginRight: 10,
  },
  addressTextContainer: {
    flex: 1,
  },
  currentAddressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkBlack,
  },
  currentAddressText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  buttonRow: {
    marginTop: 15,
  },
  //
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: 12,
    marginHorizontal: 10,
  },
  locationOptionsContainer: {
    backgroundColor: colors.background,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  locationOption: {
    flexDirection: 'row',
    paddingStart: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:7
  },
  locationOptionTextContainer: {
    marginLeft: 9,
    flex: 1,
  },
  locationOptionTitle: {
    color: colors.brandPrimary,
    fontWeight: 800,
    fontSize: 14,
  },
  locationOptionSubTitle:{
  fontWeight: 800,
    fontSize: 10,
  },
  savedAddressesContainer: {},
  flatListContent: {
    paddingBottom: 180,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
  },
  loadingContainer: {
    justifyContent: 'center',
    borderWidth: 0,
    width: '100%',
  },
  loadingIndicator: {
    marginTop: 15,
  },
  spacer: {
    width: 24,
  },
});

export default LocationSelectorStyles;
