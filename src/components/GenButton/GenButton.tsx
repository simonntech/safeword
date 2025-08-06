import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './GenButtonStyles';
import { AppTextInput } from '../AppTextInput/AppTextInput';
import generatePass from '../../services/passwordService';

export function GenButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    return (
        <>
            <AppTextInput pass={pass}/>
            <Pressable
                onPress={handleGenerateButton}
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