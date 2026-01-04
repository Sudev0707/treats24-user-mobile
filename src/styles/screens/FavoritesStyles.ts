import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const FavoritesStyles = StyleSheet.create({
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
  restaurantCard: {
    width: 280,
    height: 180,
    marginBottom: 16,
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
    paddingTop: 60,
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
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  foodImageBox: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  dummyFoodImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  veg: {
    fontSize: 12,
    fontWeight: '600',
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 2,
  },
  restaurantName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1faa59',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
    marginLeft: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  emptyStateSubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    // textAlign: 'center',
    // marginTop: 40,
    // color: '#777',
    // fontSize: 16,
  },
});

export default FavoritesStyles;
