import { StyleSheet, StatusBar } from 'react-native';
import colors from '../../theme/colors';

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: '#ffffffff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dededeff',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    //  borderWidth:1
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
    //  padding: 6,
    borderRadius: 50,
    borderColor: colors.borderLight,
    backgroundColor: colors.background,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  leftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  leftTextBottom: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HeaderStyles;
