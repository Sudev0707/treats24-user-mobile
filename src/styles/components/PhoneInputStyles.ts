import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const PhoneInputStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 52,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    gap: 6, // for spacing between flag & code
  },

  countryCodeSection: {
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    fontFamily:fonts.family.regular
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
  errorBorder: {
    borderColor: 'red',
  },
  clearIcon: {
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PhoneInputStyles;
