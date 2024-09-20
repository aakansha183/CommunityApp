import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {translations} from '../../Translation/Translation';
import TextField from '../../CommonComponents/ComponentTextField';
import CustomButton from '../../CommonComponents/CustomButton';
import {styles} from '../ScreenLogin/StyleLogin';
import { stylesForgotPassword } from '../ScreenForgotPassword/StyleForgotPassword';
import { stylesSetPassword } from './StyleSetPassword';

const SetPasswordScreen: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Text style={stylesSetPassword.title}>{translations.setPassword}</Text>
      <View style = {stylesSetPassword.subContainer}>
      <Text style={stylesSetPassword.subTitle}>{translations.desSetPassword}</Text>
      </View>
      <KeyboardAvoidingView behavior="padding">
        <View style={stylesForgotPassword.subContainer}>
          <View style={stylesForgotPassword.inputContainer}>
          <TextField
          label={translations.newPassword}
          placeholder={translations.passwordPlaceholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          toggleSecureEntry={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />
          <TextField
          label={translations.confirmPassword}
          placeholder={translations.passwordPlaceholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          toggleSecureEntry={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />
          
          <CustomButton
            onPress={handleLogin}
            buttonText={translations.confirm}
            buttonStyle={styles.customButton}
            textStyle={styles.customButtonText}
          />
             </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SetPasswordScreen;