import {StyleSheet} from 'react-native';
import {theme} from '../Theme/Theme';

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: theme.labelGrey,
    marginBottom: 8,
    fontFamily: 'Poppins Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: theme.inputBorder,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    color: 'black',
  },
});
