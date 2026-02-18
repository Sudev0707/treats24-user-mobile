import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const CountryCodeStyle = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: '#DADADA',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginBottom: 15,
    marginTop: 4
  },

  label: {
    // fontSize: 14,
    position: 'absolute',
    left: 13,
    backgroundColor: '#FFF',
    paddingHorizontal: 6,
    zIndex: 10,
    fontWeight: '800',
    color:colors.brandPrimary
  },
})

export default CountryCodeStyle
