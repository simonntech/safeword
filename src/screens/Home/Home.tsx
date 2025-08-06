import React from "react";
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyles'
import { Logo } from "../../components/Logo/Logo";
import { GenButton } from "../../components/GenButton/GenButton";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View style={styles.inputContainer}>
                <GenButton/>
            </View>

            <StatusBar style='auto' />
        </View>
    )
}
