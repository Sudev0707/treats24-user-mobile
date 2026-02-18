import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import RowColStyles from '../../theme/RowColStyles';

const ProfileInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
    // borderWidth: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    // flex: 1,
    paddingHorizontal: 15,
    // paddingTop: 20,
    borderRadius: 20,
    paddingBottom: 50,
     backgroundColor: colors.backgroundSoft,
    // borderWidth: 1,
    // height:'100%'
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
    borderWidth: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
    //  borderWidth: 1,
    //  margin:8
  },
  avatarText: {
    fontSize: 40,
    color: colors.background,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 16, // keeps gap on both sides like screenshot
  },
  userDetailContainer: {
    // flex: 1,
    // borderWidth: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderTopStartRadius: 30,
    // borderTopEndRadius: 30,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 1,
    marginTop:70
  },
  detailHeader: {
    fontWeight: 900,
    fontSize: 18,
    color: colors.brandPrimary,
    marginBottom: 12,
  },
  roww: {
    //  borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coll: {
    borderWidth: 1,
  },
  genderContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginVertical: 10,
    // borderWidth: 1,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 5,
    //  borderWidth: 1,
     padding:5,
     borderRadius:5,
     marginEnd:35
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    borderColor: colors.brandPrimary,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.brandPrimary,
  },
  radioText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  dateText: {
    fontSize: 16,
    color: colors.textPrimary,
    padding: 15,
  },
});

export default ProfileInfoStyles;
