import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './AppTextInputStyles';

interface AppTextInputProps {
  pass:string
}

export function AppTextInput(props:AppTextInputProps) {
  return (
    <TextInput
      style={styles.inputer}
      placeholder='password'
      value={props.pass}
    />
  );
}