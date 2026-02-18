import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../theme/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginBottom: 16,
    // borderWidth:1
  },
  scrollView: {
    flex: 1,
  },
  bannerItem: {
    width: width - 64, 
    backgroundColor: colors.brandSecondary,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
     borderWidth:1
  },
  bannerImagePlaceholder: {
    width: 100,
    height: '100%',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerImageText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  bannerTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;
