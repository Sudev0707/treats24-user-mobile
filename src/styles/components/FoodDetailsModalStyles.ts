import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const FoodDetailsModalStyles = StyleSheet.create({
  popUp: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  box: {
    backgroundColor: colors.brandPrimarySoft,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom:15,
    paddingTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    alignSelf: 'center',
    // marginBottom: 10,
  },
  closeText: {
    fontSize: 18,
    color: colors.textPrimary,
  },
  foodImage: {
    width: '100%',
    // height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  foodDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  vegStatus: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  rating: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brandPrimary,
    // marginBottom: 15,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  countText: {
    fontSize: 18,
     fontWeight: 'bold',
    // marginHorizontal: 20,
    color: colors.textPrimary,
  },
});

export default FoodDetailsModalStyles;
