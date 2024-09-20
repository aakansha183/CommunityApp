import {StyleSheet} from 'react-native';
import {theme} from '../../Theme/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    justifyContent: 'center',
    paddingHorizontal: wp('8%'),
  },

  title: {
    fontSize: 32,
    color: theme.black,
    lineHeight: 48,
    textAlign: 'center',
    marginLeft: wp('4%'),
    fontFamily: 'Poppins SemiBold',
    marginTop: hp('-12%'),
  },
  subTitle: {
    fontSize: 16,
    marginTop: hp('4%'),
    marginBottom: hp('8%'),
    color: theme.lightBlack,
    fontFamily: 'Poppins Medium',
    lineHeight: 24,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2.5%'),
  },
  inputPassword: {
    flex: 1,
    height: hp('6%'),
    borderColor: theme.inputBorder,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: theme.blue,
    fontFamily: 'Poppins Regular',
    marginTop: hp('1%'),
  },
  customButton: {
    backgroundColor: theme.blue,
    width: '100%',
    height: hp('6%'),
    borderRadius: wp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
  customButtonText: {
    color: theme.white,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins Regular',
  },
  orText: {
    marginVertical: hp('3%'),
    fontSize: 14,
    color: theme.labelGrey,
    textAlign: 'center',
    fontFamily: 'Poppins Regular',
    lineHeight: 21,
    padding: wp('1%'),
  },
  createAccount: {
    marginTop: hp('10%'),
  },
  createAccountText: {
    color: theme.blue,
    fontFamily: 'Poppins Medium',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: hp('3%'),
  },
  subInputText: {
    color: 'pink',
    marginBottom: hp('1.5%'),
    lineHeight: 21,
    fontFamily: 'Poppins Regular',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme.dividerGrey,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1.5%'),
  },
  googleButton: {
    borderRadius: wp('7.5%'),
    borderColor: theme.dividerGrey,
    paddingVertical: hp('1.25%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: hp('5.5%'),
  },
  googleButtonText: {
    color: theme.black,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins Regular',
    marginLeft: wp('2%'),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
