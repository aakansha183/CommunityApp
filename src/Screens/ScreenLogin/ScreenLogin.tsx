import React, {useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {styles} from './StyleLogin';
import {translations} from '../../Translation/Translation';
import TextField from '../../CommonComponents/ComponentTextField';
import CustomButton from '../../CommonComponents/CustomButton';
import AuthDividerAndButton from '../../CommonComponents/AuthDivider';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {};
  const handleGoogleSignIn = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.communityCX}</Text>
      <Text style={styles.subTitle}>{translations.signIn}</Text>
      <KeyboardAvoidingView behavior="padding">
        <TextField
          label={translations.subEmailPlaceholder}
          placeholder={translations.emailPlaceholder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextField
          label={translations.subPasswordPlaceholder}
          placeholder={translations.passwordPlaceholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          toggleSecureEntry={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>{translations.forgotPassword}</Text>
        </TouchableOpacity>

        <CustomButton
          onPress={handleLogin}
          buttonText={translations.login}
          buttonStyle={styles.customButton}
          textStyle={styles.customButtonText}
        />

        <AuthDividerAndButton onPress={() => handleGoogleSignIn()} />
        <TouchableOpacity style={styles.createAccount}>
          <Text style={styles.createAccountText}>
            {translations.createAnaccount}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
