export interface TextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  secureTextEntry?: boolean;
  showToggle?: boolean;
  toggleSecureEntry?: () => void;
  showPassword?: boolean;
}
export interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
  buttonStyle?: object;
  textStyle?: object;
}
export interface AuthDividerAndButtonProps {
  onPress: () => void;
}
