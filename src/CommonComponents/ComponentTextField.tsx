import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {theme} from '../Theme/Theme';
import {TextFieldProps} from '../utils/interfaces/types';
import {styles} from './StyleCommonComponents';

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  showPassword = false,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.lightGrey}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !showPassword}
        />
      </View>
    </View>
  );
};

export default TextField;
