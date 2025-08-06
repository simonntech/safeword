import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './GenButtonStyles';
import { AppTextInput } from '../AppTextInput/AppTextInput';

export function GenButton() {
    return (
        <>
            <AppTextInput />
            <Pressable
                onPress={() => { console.log("Pressionado") }}
                style={styles.button}
            >
                <Text style={styles.text}>Gerar Password</Text>
            </Pressable>
            <Pressable
                onPress={() => { console.log("Pressionado") }}
                style={styles.button}
            >
                <Text style={styles.text}>Copiar Password</Text>
            </Pressable>
        </>
    );
}