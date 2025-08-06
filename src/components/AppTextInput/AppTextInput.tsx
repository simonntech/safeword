import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './AppTextInputStyles';

export function AppTextInput() {
  return (
    <TextInput
      style={styles.inputer}
      placeholder='password'
    />
  );
}