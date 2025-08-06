import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyles'
import { Logo } from "../../components/Logo/Logo";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style = {styles.logoContainer}>
                <Logo />
            </View>

            <View style = {styles.inputContainer}>
                <AppTextInput />
            </View>

            <StatusBar style='auto' />
        </View>
    )
}
