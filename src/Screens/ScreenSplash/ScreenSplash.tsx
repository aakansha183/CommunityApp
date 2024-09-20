import React from 'react';
import {View} from 'react-native';
import CCXLogo from '../../assets/ImagesData/CCXLogo';
import {styles} from './StyleSplash';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <CCXLogo />
    </View>
  );
};

export default SplashScreen;
