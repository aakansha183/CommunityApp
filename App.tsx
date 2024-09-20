import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/ScreenSplash/ScreenSplash';
import {StatusBar} from 'react-native';
import {theme} from './src/Theme/Theme';
import PreSignupScreen from './src/Screens/ScreenPreSignup/ScreenPreSignup';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.blue} barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSplashVisible ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          // <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Presignup" component={PreSignupScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
