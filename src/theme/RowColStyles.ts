import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', // allows wrapping rows
    alignItems: 'center',
  },

  col1: { width: '16.66%' },
  col2: { width: '33.33%' },
  col3: { width: '50%' },
  col4: { width: '66.66%' },
  col5: { width: '83.33%' },
  col6: { width: '100%' },

  // Optional reusable utilities
  bordered: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },

  gap10: { marginBottom: 10, marginRight: 10 },
  gap15: { marginBottom: 15, marginRight: 15 },
});
