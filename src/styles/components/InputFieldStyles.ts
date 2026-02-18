import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: '#DADADA',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginBottom: 15,
    marginTop: 4,
  },

  input: {
    fontSize: fonts.size.md,
    color: '#000',
    height: '100%',
    fontFamily:fonts.family.regular
  },

  label: {
    // borderWidth: 1,
    fontSize: 14,
    position: 'absolute',
    left: 13,
    backgroundColor: '#FFF',
    paddingHorizontal: 6,
    zIndex: 10,
    color: colors.brandPrimary,
    fontWeight: '800',

  },
  staticLabel: {
    fontSize: 14,
    color: colors.brandPrimary,
    // marginBottom: 6,
    paddingLeft: 4,
    fontWeight: '800',
    // borderWidth: 1.5,
  },

  active: {
    borderWidth: 1.2,
    borderColor: colors.brandPrimary,
  },

  icon: {
    position: 'absolute',
    right: 14,
    top: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
  },
});
