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
  snackCard: {
    width: 150,
    height: 140,
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
  snackName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  snackCategory: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  snackPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.brandPrimary,
    marginBottom: 4,
  },
  snackRating: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  vegIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.vegGreen,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  nonVegIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.nonVegRed,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  indicatorText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default styles;
