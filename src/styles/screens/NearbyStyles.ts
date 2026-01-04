import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    paddingBottom: 150,
    paddingHorizontal: 20,
      backgroundColor: colors.bgOffWhiteSecondary,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  listContainer: {
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  foodCard: {
    width: 150,
    height: 120,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  foodCategory: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  foodPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.brandPrimary,
    marginBottom: 4,
  },
  foodRating: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  restaurantCard: {
    width: Dimensions.get('window').width * 0.5,
    height: 200,
    marginRight: 16,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 18,
  },
  gradient: {
    padding: 14,
    paddingTop: 70,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    flex: 1,
  },
  ratingBox: {
    backgroundColor: '#1faa59',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  placeName: {
    color: '#ddd',
    fontSize: 12,
    fontWeight: '600',
  },
  distance: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: '600',
  },
  distanceRow: {
    marginTop: 6,
  },
  discountCard: {
    width: 200,
    height: 100,
    backgroundColor: colors.brandPrimary,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  discountTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  discountDescription: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 4,
  },
  discountCode: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
