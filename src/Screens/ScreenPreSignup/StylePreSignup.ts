import {StyleSheet} from 'react-native';
import {theme} from '../../Theme/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../Dimensions';
export const stylesPreSignup = StyleSheet.create({
  subContainer: {
    marginTop: hp('10%'),
  },
  alreadyAccountText: {
    color: theme.black,
    fontFamily: 'Poppins Medium',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: hp('3%'),
  },
});
