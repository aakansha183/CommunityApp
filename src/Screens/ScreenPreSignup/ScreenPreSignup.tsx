import React, {useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {translations} from '../../Translation/Translation';
import TextField from '../../CommonComponents/ComponentTextField';
import CustomButton from '../../CommonComponents/CustomButton';
import AuthDividerAndButton from '../../CommonComponents/AuthDivider';
import {styles} from '../ScreenLogin/StyleLogin';
import {stylesPreSignup} from './StylePreSignup';

const PreSignupScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {};
  const handleGoogleSignIn = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.communityCX}</Text>
      <Text style={styles.subTitle}>{translations.anAccount}</Text>
      <KeyboardAvoidingView behavior="padding">
        <View style={stylesPreSignup.subContainer}>
          <TextField
            label={translations.preSignupSubEmailPlaceholder}
            placeholder={translations.emailPlaceholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomButton
            onPress={handleLogin}
            buttonText={translations.next}
            buttonStyle={styles.customButton}
            textStyle={styles.customButtonText}
          />
          <AuthDividerAndButton onPress={() => handleGoogleSignIn()} />
          <TouchableOpacity style={styles.createAccount}>
            <Text style={stylesPreSignup.alreadyAccountText}>
              {translations.alreadyAccount}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PreSignupScreen;
