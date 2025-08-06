import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import Cadeado from '../../../assets/cadeado.png'

export function Logo() {
  return (
    <>
        <Image
            source={Cadeado}
            style = {{
                resizeMode: 'contain', 
                height: 150}}
        />
        <Text style={styles.title}>
            SAFEWORD
        </Text>
    </>
  );
}