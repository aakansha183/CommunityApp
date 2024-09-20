import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {CustomButtonProps} from '../utils/interfaces/types';

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  buttonText,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
