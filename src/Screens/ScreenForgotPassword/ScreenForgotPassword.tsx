import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {translations} from '../../Translation/Translation';
import TextField from '../../CommonComponents/ComponentTextField';
import CustomButton from '../../CommonComponents/CustomButton';
import {styles} from '../ScreenLogin/StyleLogin';
import {stylesForgotPassword} from './StyleForgotPassword';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.communityCX}</Text>
      <Text style={styles.subTitle}>{translations.forgotPass}</Text>
      <KeyboardAvoidingView behavior="padding">
        <View style={stylesForgotPassword.subContainer}>
          <View style={stylesForgotPassword.inputContainer}>
            <TextField
              label={translations.email}
              placeholder={translations.emailPlaceholder}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <CustomButton
            onPress={handleLogin}
            buttonText={translations.next}
            buttonStyle={styles.customButton}
            textStyle={styles.customButtonText}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPasswordScreen;
