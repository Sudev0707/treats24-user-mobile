import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  notificationText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  notificationSubText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  switch: {
    // Switch styles if needed
  },
});

export default styles;
