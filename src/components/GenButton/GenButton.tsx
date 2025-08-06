import React, { useState } from 'react';
import { Text, Pressable, ToastAndroid } from 'react-native';

import { styles } from './GenButtonStyles';
import { AppTextInput } from '../AppTextInput/AppTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function GenButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass);
        ToastAndroid.show('Senha copiada para a sua área de transferência', ToastAndroid.SHORT)
    }

    return (
        <>
            <AppTextInput pass={pass}/>
            <Pressable
                onPress={handleGenerateButton}
                style={styles.button}
            >
                <Text style={styles.text}>Gerar Senha</Text>
            </Pressable>

            <Pressable
                onPress={handleCopyButton}
                style={styles.button}
            >
                <Text style={styles.text}>Copiar Senha</Text>
            </Pressable>
        </>
    );
}