import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';
import GoogleIcon from '../assets/ImagesData/GoogleLogo';
import {styles} from '../Screens/ScreenLogin/StyleLogin';
import {translations} from '../Translation/Translation';
import {AuthDividerAndButtonProps} from '../utils/interfaces/types';

const AuthDividerAndButton: React.FC<AuthDividerAndButtonProps> = ({
  onPress,
}) => {
  return (
    <View>
      <View style={styles.dividerContainer}>
        <Divider style={styles.divider} />
        <Text style={styles.orText}>{translations.Or}</Text>
        <Divider style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={onPress}>
        <View style={styles.iconContainer}>
          <GoogleIcon />
          <Text style={styles.googleButtonText}>
            {translations.continueWithGoogle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AuthDividerAndButton;
