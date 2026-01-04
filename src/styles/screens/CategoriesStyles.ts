import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const categoriesStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgOffWhiteSecondary,
  },
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  scrollContainer: {
    paddingTop: 70,
    paddingBottom: 140,
    paddingHorizontal: 20,
    // backgroundColor: colors.bgOffWhiteSecondary,
  },
  listContainer: {
    padding: 16,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // height: 120,
  },
  categoryImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 5,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    // borderWidth:1
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.darkBlack,
    textAlign: 'center',
  },
});
