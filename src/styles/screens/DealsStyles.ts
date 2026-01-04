import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgOffWhiteSecondary,
  },
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundSoft,
  },

  /* FIXED HEADER */
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

  /* SCROLL CONTENT */
  scrollContent: {
    paddingBottom: 30,
  },

  /* SECTION HEADER */
  sectionHeaderRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  emptyText: {
    // textAlign: 'center',
    // marginTop: 40,
    // color: '#777',
    // fontSize: 16,
  },
});
