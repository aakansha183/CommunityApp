import {StyleSheet} from 'react-native';
import {theme} from '../../Theme/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Dimensions';
export const stylesSetPassword = StyleSheet.create({
  title: {
    fontSize: 20,
    color: theme.smokeBlack,
    lineHeight: 30,
    textAlign: 'center',
    marginLeft: wp('4%'),
    fontFamily: 'Poppins SemiBold',
    marginTop: hp('16%'),
  },
  subContainer: {
    paddingHorizontal: wp('8.5%'),
    marginTop: hp('-3%'),
  },
  subTitle: {
    fontSize: 14,
    marginTop: hp('4%'),
    marginBottom: hp('8%'),
    color: theme.smokeBlack,
    fontFamily: 'Poppins Regular',
    lineHeight: 21,
    textAlign: 'center',
  },
});
